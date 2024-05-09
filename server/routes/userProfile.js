const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get user profile
router.get("/user/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.json(user);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Update user profile
router.post("/user/:id", async (req, res) => {
	try {
		const updatedUser = await User.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					// avatar: req.body.avatar,
					bio: req.body.bio,
					totalTodos: req.body.totalTodos,
					finishedTodos: req.body.finishedTodos,
				},
			}
		);
		res.json(updatedUser);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
