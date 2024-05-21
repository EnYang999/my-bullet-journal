import { check } from "express-validator";

const username = check("username", "Username is required.").not().isEmpty();
const email = check("email", "Please provide a valid email address").isEmail();
const password = check("password")
	.isLength({ min: 8 })
	.withMessage("Password must be at least 8 characters long.")
	.matches(/[a-z]/)
	.withMessage("Password must contain at least one lowercase letter.")
	.matches(/[A-Z]/)
	.withMessage("Password must contain at least one uppercase letter.")
	.matches(/[0-9]/)
	.withMessage("Password must contain at least one number.")
	.matches(/[!@#$%^&*]/)
	.withMessage("Password must contain at least one special character.");
export const RegisterValidations = [password, username, email];
export const AuthenticateValidations = [email, password];
export const ResetPassword = [email];
