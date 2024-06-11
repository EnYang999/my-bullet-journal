import { Mongoose } from "mongoose";
import { Schema, model } from "mongoose";
import { compare, hash } from "bcryptjs";
import { SECRET } from "../constants";
import { randomBytes } from "crypto";
import { sign } from "jsonwebtoken";
import { pick } from "lodash";
const generateRandom9DigitNumber = () => {
	return Math.floor(100000000 + Math.random() * 900000000);
};
const UserSchema = new Schema(
	{
		_id: {
			type: String,
			required: true,
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
		verificationCode: {
			type: String,
			required: false,
		},
		resetPasswordToken: {
			type: String,
			required: false,
		},
		resetPasswordExpiresIn: {
			type: Date,
			required: false,
		},
	},
	{ timestamps: true, _id: false }
);

UserSchema.pre("save", async function (next) {
	let user = this;
	if (!user.isModified("password")) return next();
	user.password = await hash(user.password, 10);
	if (this.isNew) {
		let isUnique = false;

		while (!isUnique) {
			this.userId = generateRandom9DigitNumber();
			const user = await User.findOne({ userId: this.userId });
			if (!user) {
				isUnique = true;
			}
		}
	}
	next();
});

UserSchema.methods.comparePassword = async function (password) {
	return await compare(password, this.password);
};

UserSchema.methods.generateJWT = async function () {
	let payload = {
		username: this.username,
		email: this.email,
		id: this._id,
	};
	return await sign(payload, SECRET, { expiresIn: "3 day" });
};

UserSchema.methods.generatePasswordReset = function () {
	this.resetPasswordExpiresIn = Date.now() + 60 * 60 * 10000;
	this.resetPasswordToken = randomBytes(20).toString("hex");
};

UserSchema.methods.getUserInfo = function () {
	return pick(this, ["_id", "username", "email", "verified"]);
};

const User = model("users", UserSchema);
export default User;
