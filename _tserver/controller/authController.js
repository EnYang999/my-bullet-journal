import User from "../models/User";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id, username, email) => {
	return jwt.sign({ id, username, email }, process.env.PASSCODE_STRING, {
		expiresIn: maxAge,
	});
};

export const signup_post = async (req, res) => {
	const { email, username, password } = req.body;
	try {
		const existed = await User.findOne({ email: email });
		if (existed) {
			res.status(400).json({ error: "Existed User" }); // frontend side
			return;
		}
		const user = await User.create({
			email,
			password,
			username,
		});
		const token = createToken(user._id, user.username, user.email);
		res.cookie("userid", token, { maxAge: maxAge * 1000 });
		return res.status(201).json({ user: user._id });
	} catch (errors) {
		console.log(errors);
		if (!res.headersSent) {
			res.status(400).json({ errors: "no headers" });
		}
	}
};

export const login_post = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email: email });
		if (!user) {
			res.status(400).json({ error: "Not Existed User" });
			return;
		}
		const auth = await bcrypt.compare(password, user.password);
		if (!auth) {
			res.status(400).json({ error: "incorrect password" });
			return;
		}
		const token = createToken(user._id, user.username, user.email);
		res.cookie("userid", token, { maxAge: maxAge * 1000 });
		return res.status(200).json({ user: user._id });
	} catch (errors) {
		console.log(errors);
		res.status(400).json({ errors });
	}
};

export const logout_get = (req, res) => {
	res.cookie("userid", "", { maxAge: 1 });
	res.redirect("/login");
};

export const currentUser = asyncHandler(async (req, res) => {
	res.json(req.user);
});
