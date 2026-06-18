import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import _ from "lodash";
import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import { SECRET } from "../constants/index.js";

const { Schema, model } = mongoose;
const { compare, hash } = bcrypt;
const { pick } = _;

const generateRandom9DigitNumber = () => {
	return Math.floor(100000000 + Math.random() * 900000000).toString();
};

const UserSchema = new Schema(
	{
		userid: {
			type: String,
			unique: true,
			default: generateRandom9DigitNumber,
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		verified: {
			type: Boolean,
			default: false,
		},
		verificationCode: String,
		resetPasswordToken: String,
		resetPasswordExpiresIn: Date,
	},
	{ timestamps: true }
);

// pre-save hook
UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	this.password = await hash(this.password, 10);

	// ensure unique userid
	if (this.isNew) {
		let isUnique = false;

		while (!isUnique) {
			this.userid = generateRandom9DigitNumber();
			const existing = await mongoose.model("users").findOne({
				userid: this.userid,
			});
			if (!existing) isUnique = true;
		}
	}

	next();
});

UserSchema.methods.comparePassword = function (password) {
	return compare(password, this.password);
};

UserSchema.methods.generateJWT = function () {
	const payload = {
		username: this.username,
		email: this.email,
		id: this._id,
	};

	return sign(payload, SECRET, { expiresIn: "3d" });
};

UserSchema.methods.generatePasswordReset = function () {
	this.resetPasswordExpiresIn = Date.now() + 60 * 60 * 1000;
	this.resetPasswordToken = randomBytes(20).toString("hex");
};

UserSchema.methods.getUserInfo = function () {
	return pick(this.toObject(), ["_id", "username", "email", "verified"]);
};

const User = model("users", UserSchema);

export default User;