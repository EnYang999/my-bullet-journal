import { Router } from "express";
import {
	DOMAIN,
	PORT,
	PROFILE_GET_BY_USERID,
	PROFILE_PUT,
	PROFILE_GET_BY_OWN,
} from "../constants";
import { Profile, User } from "../models";
import uploader from "../middlewares/uploader";
import { userAuth } from "../middlewares/auth-guard";
import mongoose, { Schema } from "mongoose";

const router = Router();

/**
 * @description To create profile of the authenticated User
 * @type POST <multipart-form> request
 * @api /profiles/api/create-profile
 * @access Private
 */
/** */
router.post(
	"/create-profile",
	userAuth,
	uploader.single("avatar"),
	async (req, res) => {
		try {
			let { user } = req;
			console.log(user);

			// Ensure that the user exists
			if (user) {
				// Check if the profile already exists for the user
				let existingProfile = await Profile.findOne({ account: user._id });
				return res.status(201).json({
					success: true,
					user: user,
					account: account,
					message: "Profile created successfully.",
					profile: existingProfile,
				});
			} else {
				// Create a new profile
				let profile = new Profile({
					account: user._id,
					avatar: req.file ? req.file.path : "",
					interests: req.body.interests || "",
					goals: req.body.goals || "",
					habits: req.body.habits || "",
					notes: req.body.notes || "",
					bio: req.body.bio || "",
				});
				await profile.save();

				return res.status(201).json({
					success: true,
					user: user,
					account: account,
					message: "Profile created successfully.",
					profile: profile,
				});
			}
		} catch (err) {
			return res.status(400).json({
				success: false,
				message: "Unable to create your profile.",
				err: err.message,
			});
		}
	}
);

/**
 * @description To update profile of the authenticated User
 * @type POST <multipart-form> request
 * @api /profiles/api/create-profile
 * @access Private
 */
router.put(
	PROFILE_PUT,
	userAuth,
	uploader.single("avatar"),
	async (req, res) => {
		try {
			let { body, user } = req;
			if (!user) {
				return res.status(404).json({
					success: false,
					message: "Can't find the user.",
				});
			}

			let updateFields = {
				account: user._id,
			};

			// Assign each field from the request body if it's specified.
			// if (body.facebook) updateFields["social.facebook"] = body.facebook;
			// if (body.twitter) updateFields["social.twitter"] = body.twitter;
			// if (body.linkedin) updateFields["social.linkedin"] = body.linkedin;
			// if (body.instagram) updateFields["social.instagram"] = body.instagram;
			// if (body.github) updateFields["social.github"] = body.github;

			if (body.interests) updateFields.interests = body.interests;
			if (body.goals) updateFields.goals = body.goals;
			if (body.habits) updateFields.habits = body.habits;
			if (body.notes) updateFields.notes = body.notes;
			if (body.bio) updateFields.bio = body.bio;
			if (body.avatar) updateFields.avatar = body.avatar;

			let profile = await Profile.findOneAndUpdate(
				{ account: user._id },
				updateFields,
				{ new: true, upsert: true } // upsert option to create if not found
			);

			return res.status(200).json({
				success: true,
				message: "Your profile has been successfully updated or created.",
				profile,
			});
		} catch (err) {
			return res.status(400).json({
				success: false,
				message: "Unable to update or create the profile.",
				err: err.message,
			});
		}
	}
);
/**
 * @description To Get the authenticated user's profile
 * @api /api/profiles/my-profile
 * @access Private
 * @type GET
 */
router.get(PROFILE_GET_BY_OWN, userAuth, async (req, res) => {
	try {
		console.log("-----------------------");
		console.log(req.user._id);
		let profile = await Profile.findOne({
			account: req.user._id,
		}).populate("account", "userid email username createdAt");
		if (!profile) {
			return res.status(404).json({
				success: false,
				message: "Your profile is not available.",
			});
		}
		return res.status(200).json({
			success: true,
			profile,
		});
	} catch (err) {
		return res.status(400).json({
			success: false,
			message: "Unable to get the profile.",
			error: err.message,
		});
	}
});

/**
 * @description To update autheticated user's profile
 * @type PUT <multipart-form> request
 * @api /profiles/api/update-profile
 * @access Private
 */
/**
router.patch(
	"/update-profile",
	userAuth,
	uploader.single("avatar"),
	async (req, res) => {
		try {
			let { body, file, user } = req;
			if (!user) {
				return res.status(404).json({
					success: false,
					message: "Can't find the user.",
				});
			}

			let updateFields = { social: body };

			if (file) {
				let path = `${DOMAIN}${PORT}${file.path.split("uploads")[1]}`;
				updateFields.avatar = path;
			}

			let profile = await Profile.findOneAndUpdate(
				{ account: user._id },
				updateFields,
				{ new: true }
			);

			if (!profile) {
				return res.status(404).json({
					success: false,
					message: "Your profile is not available.",
				});
			}
			return res.status(200).json({
				success: true,
				message: "Your profile is now updated",
				profile,
			});
		} catch (err) {
			return res.status(400).json({
				success: false,
				message: "Unable to update the profile.",
			});
		}
	}
);
 */
/**
 * @description To get user's profile with the username
 * @api /profiles/api/
 * @access Public
 * @type GET
 */
router.get(`${PROFILE_GET_BY_USERID}/:_id`, async (req, res) => {
	try {
		let { _id } = req.params;
		let user = await User.findOne({ _id });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found.",
			});
		}
		let profile = await Profile.findOne({ account: user._id });
		return res.status(200).json({
			profile: {
				...profile.toObject(),
				account: user.getUserInfo(),
			},
			success: true,
		});
	} catch (err) {
		return res.status(400).json({
			success: false,
			message: "Something went wrong.",
		});
	}
});

export default router;
