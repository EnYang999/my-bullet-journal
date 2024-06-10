import { Router } from "express";
import { DOMAIN, PORT, PROFILE_GET_BY_USERID } from "../constants";
import { Profile, User } from "../models";
import uploader from "../middlewares/uploader";
import { userAuth } from "../middlewares/auth-guard";

const router = Router();

/**
 * @description To create profile of the authenticated User
 * @type POST <multipart-form> request
 * @api /profiles/api/create-profile
 * @access Private
 */
/**
router.post(
	"/create-profile",
	userAuth,
	uploader.single("avatar"),
	async (req, res) => {
		try {
			let { body, file, user } = req;
			let path = DOMAIN + PORT + file.path.split("uploads")[1];
			let profile = new Profile({
				social: body,
				account: user._id,
				avatar: path,
			});
			await profile.save();
			return res.status(201).json({
				success: true,
				message: "Profile created successfully.",
			});
		} catch (err) {
			return res.status(400).json({
				success: false,
				message: "Unable to create your profile.",
				err: err.message,
			});
		}
	}
);
 */
/**
 * @description To create profile of the authenticated User
 * @type POST <multipart-form> request
 * @api /profiles/api/create-profile
 * @access Private
 */
router.put(
	"/put-profile",
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

			let updateFields = {
				account: user._id, // Ensure account is included in the updateFields
			};

			// Assign each field from the request body if it's specified.
			if (body.facebook) updateFields["social.facebook"] = body.facebook;
			if (body.twitter) updateFields["social.twitter"] = body.twitter;
			if (body.linkedin) updateFields["social.linkedin"] = body.linkedin;
			if (body.instagram) updateFields["social.instagram"] = body.instagram;
			if (body.github) updateFields["social.github"] = body.github;

			if (body.interests) updateFields.interests = body.interests;
			if (body.goals) updateFields.goals = body.goals;
			if (body.habits) updateFields.habits = body.habits;
			if (body.notes) updateFields.notes = body.notes;
			if (body.bio) updateFields.bio = body.bio;

			if (file) {
				let path = `${DOMAIN}${PORT}${file.path.split("uploads")[1]}`;
				updateFields.avatar = path;
			}

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
 * @api /profiles/api/my-profile
 * @access Private
 * @type GET
 */
router.get("/my-profile", userAuth, async (req, res) => {
	try {
		let profile = await Profile.findOne({ account: req.user._id }).populate(
			"account",
			"email username"
		);
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
 * @api /profiles/api/update-profile
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
