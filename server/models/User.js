import { Schema, model } from "mongoose";
import { isEmail } from "validator";
import bcrypt from "bcrypt";

const userSchema = new Schema({
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

const User = model("user", userSchema);

export default User;
