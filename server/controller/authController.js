const User = require("../models/User");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const fetch = require("node-fetch");

// handle errors
const handleErrors = (err) => {
	console.log(err.message, err.code);
	let errors = { email: "", password: "", username: "" };

	// incorrect email
	if (err.message === "incorrect email") {
		errors.email = "That email is not registered";
	}

	// incorrect password
	if (err.message === "incorrect password") {
		errors.password = "That password is incorrect";
	}
	// incorrect password
	if (err.message === "incorrect username") {
		errors.username = "Please use a minimum of 3 characters";
	}

	// duplicate email error
	if (err.code === 11000) {
		errors.email = "that email is already registered";
	}

	if (err.message.includes("user validation failed")) {
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
	}

	return errors;
};

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id, username) => {
	return jwt.sign({ id, username, email }, "secret", {
		expiresIn: maxAge,
	});
};

// controller actions

module.exports.signup_post = async (req, res) => {
	const { email, password, username } = req.body;
	console.log("server:", email, password, username);
	try {
		const isExisted = await User.findOne({ email: email });
		if (!isExisted) {
			const user = await User.create({
				email,
				password,
				username,
			});
			const token = createToken(user._id, user.username, user.email);
			res.cookie("userid", token, { maxAge: maxAge * 1000 });
			res.status(201).json({ user: user._id });
		} else {
			// 	throw new Error("Already Existed");
			res.status(400).json({ error: "Already Existed" });
		}
	} catch (err) {
		const errors = handleErrors(err);
		res.status(400).json({ errors });

		if (!res.headersSent) {
			const errors = handleErrors(err);
			res.status(400).json({ errors });
		}
	}
};

module.exports.login_post = async (req, res) => {
	const { email, password } = req.body;

	try {
		const isExisted = await User.findOne({ email: email });
		if (isExisted) {
			const user = await User.login(email, password);
			const token = createToken(user._id, user.username, user.email);
			console.log(user);
			res.cookie("userid", token, { maxAge: maxAge * 1000 });
			res.status(200).json({ user: user._id });
		} else {
			res.status(400).json({ error: "Not Existed User" });
		}
	} catch (err) {
		const errors = handleErrors(err);
		res.status(400).json({ errors });
	}
};

module.exports.logout_get = (req, res) => {
	res.cookie("userid", "", { maxAge: 1 });
	res.redirect("/login");
};

module.exports.currentUser = asyncHandler(async (req, res) => {
	res.json(req.user);
});
