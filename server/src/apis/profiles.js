import { Router } from "express";
import {
	DOMAIN,
	PORT,
	PROFILE_GET_BY_USERID,
	PROFILE_PUT,
	PROFILE_GET_BY_OWN,
} from "../constants/index.js";

import { Profile, User } from "../models/index.js";
import uploader from "../middlewares/uploader.js";
import { userAuth } from "../middlewares/auth-guard.js";
import mongoose from "mongoose";

const router = Router();

/**
 * CREATE PROFILE
 */
router.post(
	"/create-profile",
	userAuth,
	async (req, res) => {
		try {
			const { user } = req;

			if (!user) {
				return res.status(401).json({
					success: false,
					message: "Unauthorized",
				});
			}

			let existingProfile = await Profile.findOne({ account: user._id });

			if (existingProfile) {
				return res.json({
					success: true,
					profile: existingProfile,
					message: "Profile already exists",
				});
			}

			let profile = new Profile({
				account: user._id,
				avatar: req.file?.path || "",
				interests: req.body.interests || "",
				goals: req.body.goals || "",
				habits: req.body.habits || "",
				notes: req.body.notes || "",
				bio: req.body.bio || "",
			});

			await profile.save();

			return res.status(201).json({
				success: true,
				profile,
			});
		} catch (err) {
			return res.status(400).json({
				success: false,
				error: err.message,
			});
		}
	}
);

/**
 * UPDATE PROFILE
 */
router.put(
	PROFILE_PUT,
	userAuth,
	uploader.single("avatar"),
	async (req, res) => {
		try {
			const { body, user } = req;

			if (!user) {
				return res.status(404).json({
					success: false,
					message: "User not found",
				});
			}

			let updateFields = {
				account: user._id,
			};

			if (body.interests) updateFields.interests = body.interests;
			if (body.goals) updateFields.goals = body.goals;
			if (body.habits) updateFields.habits = body.habits;
			if (body.notes) updateFields.notes = body.notes;
			if (body.bio) updateFields.bio = body.bio;

			if (req.file) {
				updateFields.avatar = req.file.path;
			}

			let profile = await Profile.findOneAndUpdate(
				{ account: user._id },
				updateFields,
				{ new: true, upsert: true }
			);

			return res.json({
				success: true,
				profile,
			});
		} catch (err) {
			return res.status(400).json({
				success: false,
				error: err.message,
			});
		}
	}
);

/**
 * GET MY PROFILE
 */
router.get(PROFILE_GET_BY_OWN, userAuth, async (req, res) => {
	try {
		const profile = await Profile.findOne({
			account: req.user._id,
		}).populate("account", "userid email username createdAt");

		if (!profile) {
			return res.status(404).json({
				success: false,
				message: "Profile not found",
			});
		}

		return res.json({
			success: true,
			profile,
		});
	} catch (err) {
		return res.status(400).json({
			success: false,
			error: err.message,
		});
	}
});

/**
 * GET PROFILE BY USER ID
 */
router.get(`${PROFILE_GET_BY_USERID}/:_id`, async (req, res) => {
	try {
		const { _id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(_id)) {
			return res.status(400).json({
				success: false,
				message: "Invalid user id",
			});
		}

		const user = await User.findById(_id);

		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}

		const profile = await Profile.findOne({ account: user._id });

		if (!profile) {
			return res.status(404).json({
				success: false,
				message: "Profile not found",
			});
		}

		return res.json({
			success: true,
			profile: {
				...profile.toObject(),
				account: user.getUserInfo(),
			},
		});
	} catch (err) {
		return res.status(400).json({
			success: false,
			message: "Something went wrong",
			error: err.message,
		});
	}
});

export default router;