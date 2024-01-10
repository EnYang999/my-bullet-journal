const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Please enter an email"],
		unique: true,
		lowercase: true,
		validate: [isEmail, "Please enter a valid email"],
	},
	password: {
		type: String,
		required: [true, "Please enter a password"],
		minlength: [6, "Minimum password length is 6 characters"],
	},

	username: {
		type: String,
		required: [true, "Please enter a username"],
		minlength: [3, "Minimum username length is 3 characters"],
		unique: false,
		lowercase: true,
	},
});

// fire a function before doc saved to db
userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
