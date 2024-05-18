import { check } from "express-validator";

const username = check("username", "Username is required.").not().isEmpty();
const email = check("email", "Please provide a valid email address").isEmail();
const password = check(
	"password",
	"Password is required of minimum length of 6."
).isLength({
	min: 6,
});

export const RegisterValidations = [password, username, email];
export const AuthenticateValidations = [username, password];
export const ResetPassword = [email];
