const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},

	username: {
		type: String,
		unique: false,
	},
	avatar: {
		type: String,
		default: "default_avatar_url_here", // Provide the URL for the default avatar
	},
	cardNumber: {
		type: String,
		required: false,
		validate: {
			validator: (value) => creditCardValidator.validate(value),
			message: "Invalid credit card number",
		},
	},
	cardHolder: {
		type: String,
		required: false,
	},
	expirationDate: {
		type: String,
		required: false,
		validate: {
			validator: (value) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(value),
			message: "Invalid expiration date",
		},
	},
	cvv: {
		type: String,
		required: false,
		validate: {
			validator: (value) => /^[0-9]{3,4}$/.test(value),
			message: "CVV must be a 3 or 4-digit number",
		},
	},
	bio: {
		type: String,
		default: "",
	},
	totalTodos: {
		type: Number,
		default: 0,
	},
	finishedTodos: {
		type: Number,
		default: 0,
	},
});

// fire a function before doc saved to db
userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	this.cardNumber = await bcrypt.hash(this.cardNumber, salt);
	this.cardHolder = await bcrypt.hash(this.cardHolder, salt);
	this.expirationDate = await bcrypt.hash(this.expirationDate, salt);
	this.cvv = await bcrypt.hash(this.cvv, salt);
	next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
