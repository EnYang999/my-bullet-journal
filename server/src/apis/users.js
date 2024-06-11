import {
	ResetPassword,
	RegisterValidations,
	AuthenticateValidations,
} from "../validators";
import { join } from "path";
import { User } from "../models";
import { Router } from "express";
import { randomBytes } from "crypto";
import {
	DOMAIN,
	LOGIN_URL,
	SIGNUP_URL,
	RESET_PASSWORD,
	USER_API,
	PORT,
	API_ENDPOINT,
	FRONTEND_PORT,
	RESET_PASSWORD_NOW,
	AUTHENTICATE_TOKEN_NAME,
} from "../constants";
import sendMail from "../functions/email-sender";
import { userAuth } from "../middlewares/auth-guard";
import Validator from "../middlewares/validator-middleware";

const router = Router();

/**
 * @description To create a new User Account
 * @api /api/users/register
 * @access Public
 * @type POST
 */
router.post(SIGNUP_URL, RegisterValidations, Validator, async (req, res) => {
	try {
		let { email } = req.body;

		// Check if the user exists with that email
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({
				success: false,
				message:
					"Email is already registered. Did you forget the password. Try resetting it.",
			});
		}
		user = new User({
			...req.body,
			verificationCode: randomBytes(20).toString("hex"),
		});
		await user.save();
		// Send the email to the user with a varification link
		let html = `<div><h1>Hello, ${user.username}</h1><p>Please click the following link to verify your account</p><a href="${DOMAIN}${PORT}/users/verify-now/${user.verificationCode}">Verify Now</a></div>`;
		await sendMail(
			user.email,
			"Verify Account",
			"Please verify Your Account.",
			html
		);
		return res.status(201).json({
			success: true,
			message:
				"Hurray! your account is created please verify your email address.",
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: "An error occurred.",
			error: err.message,
		});
	}
});

/**
 * @description To verify a new user's account via email
 * @api /users/verify-now/:verificationCode
 * @access PUBLIC <Only Via email>
 * @type GET
 */
router.get("/verify-now/:verificationCode", async (req, res) => {
	try {
		let { verificationCode } = req.params;
		let user = await User.findOne({ verificationCode });
		if (!user) {
			return res.status(401).json({
				success: false,
				message: "Unauthorized access. Invalid verification code.",
			});
		}
		user.verified = true;
		user.verificationCode = undefined;
		await user.save();
		return res.sendFile(
			join(__dirname, "../templates/verification-success.html")
		);
	} catch (err) {
		console.log("ERR", err.message);
		return res.sendFile(join(__dirname, "../templates/errors.html"));
	}
});

/**
 * @description To authenticate an user and get auth token --- login
 * @api /api/users/authenticate
 * @access PUBLIC
 * @type POST
 */
router.post(LOGIN_URL, AuthenticateValidations, Validator, async (req, res) => {
	try {
		let { email, password } = req.body;
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "email not found.",
			});
		}
		if (!(await user.comparePassword(password))) {
			return res.status(401).json({
				success: false,
				message: "Incorrect password.",
			});
		}
		let token = await user.generateJWT();
		res.cookie(AUTHENTICATE_TOKEN_NAME, token, {
			maxAge: 3 * 24 * 60 * 60 * 1000,
		}); // max-age: 3 days. not sure if I should put it here
		return res.status(200).json({
			success: true,
			user: user.getUserInfo(),
			token: `Bearer ${token}`,
			message: "Hurray! You are now logged in.",
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: "An error occurred.",
			error: err.message,
		});
	}
});

/**
 * @description To get the authenticated user's profile
 * @api /users/api/authenticate
 * @access Private
 * @type GET
 */
router.get("/authenticate", userAuth, async (req, res) => {
	return res.status(200).json({
		user: req.user,
	});
});

/**
 * @description To initiate the password reset process
 * @api /users/api/reset-password
 * @access Public
 * @type POST
 */
router.put(RESET_PASSWORD, ResetPassword, Validator, async (req, res) => {
	try {
		let { email } = req.body;
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User with the email is not found.",
			});
		}
		user.generatePasswordReset();
		await user.save();
		// Sent the password reset Link in the email.
		let html = `
        <div>
            <h1>Hello, ${user.username}</h1>
            <p>Please click the following link to reset your password.</p>
            <p>If this password reset request is not created by your then you can inore this email.</p>
            <a href="${API_ENDPOINT}${FRONTEND_PORT}${RESET_PASSWORD_NOW}/${user.resetPasswordToken}">Verify Now</a>
        </div>
      `;
		await sendMail(
			user.email,
			"Reset Password",
			"Please reset your password.",
			html
		);
		return res.status(200).json({
			success: true,
			message: "Password reset link is sent your email.",
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: "An error occurred.",
			error: err.message,
		});
	}
});

/**
 * @description To resnder reset password page
 * @api /users/reset-password/:resetPasswordToken
 * @access Restricted via email
 * @type GET
 */
router.post(`${RESET_PASSWORD_NOW}/:resetPasswordToken`, async (req, res) => {
	try {
		consola.log(`${RESET_PASSWORD_NOW}/:resetPasswordToken`);
		let { resetPasswordToken } = req.params;
		let { password } = req.body;
		let user = await User.findOne({
			resetPasswordToken,
			resetPasswordExpiresIn: { $gt: Date.now() },
		});
		if (!user) {
			return res.status(401).json({
				success: false,
				message: "Password reset token is invalid or has expired.",
			});
		}
		user.password = password;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpiresIn = undefined;
		await user.save();
		// Send notification email about the password reset successfull process
		let html = `
        <div>
            <h1>Hello, ${user.username}</h1>
            <p>Your password is resetted successfully.</p>
            <p>If this rest is not done by you then you can contact our team.</p>
        </div>
      `;
		await sendMail(
			user.email,
			"Reset Password Successful",
			"Your password is changed.",
			html
		);
		return res.status(200).json({
			success: true,
			message:
				"Your password reset request is complete and your password is resetted successfully. Login into your account with your new password.",
		});
	} catch (err) {
		// return res.sendFile(join(__dirname, "../templates/errors.html"));
		return res.status(500).json({
			success: false,
			message: "something error.",
			error: err.message,
		});
	}
});

/**
 * @description To reset the password
 * @api /users/api/reset-password-now
 * @access Restricted via email
 * @type POST

router.post(`${RESET_PASSWORD_NOW}`, async (req, res) => {
	try {
		let { resetPasswordToken, password } = req.body;
		let user = await User.findOne({
			resetPasswordToken,
			resetPasswordExpiresIn: { $gt: Date.now() },
		});
		if (!user) {
			return res.status(401).json({
				success: false,
				message: "Password reset token is invalid or has expired.",
			});
		}
		user.password = password;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpiresIn = undefined;
		await user.save();
		// Send notification email about the password reset successfull process
		let html = `
        <div>
            <h1>Hello, ${user.username}</h1>
            <p>Your password is resetted successfully.</p>
            <p>If this rest is not done by you then you can contact our team.</p>
        </div>
      `;
		await sendMail(
			user.email,
			"Reset Password Successful",
			"Your password is changed.",
			html
		);
		return res.status(200).json({
			success: true,
			message:
				"Your password reset request is complete and your password is resetted successfully. Login into your account with your new password.",
		});
	} catch (err) {
		return res.status(500).json({
			sucess: false,
			message: "Something went wrong.",
		});
	}
});
 */
/**
 * @description To reset the password
 * @api /users/api/reset-password-now
 * @access Restricted via email
 * @type POST
 */
router.get("/logout", (req, res) => {
	try {
		res.cookie(AUTHENTICATE_TOKEN_NAME, " ", {
			maxAge: 1,
			path: "/",
			overwrite: true,
			httpOnly: false,
		});
		console.log(AUTHENTICATE_TOKEN_NAME);
		return res.status(200).json({
			success: true,
			message: "Logged out successfully",
			// cookie: cook,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Something went wrong.",
			error: err.message,
		});
	}
});
export default router;
