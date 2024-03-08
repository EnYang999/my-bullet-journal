import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { toast } from "../errortoast/ErrorToastManager";
import FormField from "./formAccount";
import OverlayPanel from "./overlayPanel";
const Login: React.FC = () => {
	const [isSignUp, setSignUp] = useState<boolean>(false);
	const [type, setType] = useState("password");
	const [lowerValidated, setLowerValidated] = useState(false);
	const [upperValidated, setUpperValidated] = useState(false);
	const [numberValidated, setNumberValidated] = useState(false);
	const [specialValidated, setSpecialValidated] = useState(false);
	const [lengthValidated, setLengthValidated] = useState(false);
	const [password, setPassword] = useState("");
	const [isValidNameLength, setValidNameLength] = useState(false);
	const [isValidNameCharacters, setIsValidNameCharacters] = useState(false);
	const [userName, setUserName] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [email, setEmail] = useState("");

	const handleSignUpClick = () => {
		setSignUp(true);
	};
	const handleSignInClick = () => {
		setSignUp(false);
	};
	const handleLogin = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:8000/login", {
				email,
				password,
			});
		} catch (error: any) {
			if (error.response) {
				toast.show({
					title: "Error",
					content: error.response.data.error,
					duration: 3000,
				});
			}
		}
	};
	const handleSignup = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			if (
				lowerValidated &&
				upperValidated &&
				numberValidated &&
				specialValidated &&
				lengthValidated &&
				isValidNameLength &&
				isValidNameCharacters &&
				isValidEmail
			) {
				const response = await axios.post("http://localhost:8000/signup", {
					email,
					username: userName,
					password,
				});
				if (response.status === 201) {
					console.log("User signed up successfully:", response.data.user);
				} else {
					console.error("Error:", response.data.error);
				}
			} else {
				toast.show({
					title: "Error",
					content: "please enter valid input",
					duration: 3000,
				});
			}
		} catch (error: any) {
			if (error.response) {
				toast.show({
					title: "Error From catch",
					content: error.response.data.error,
					duration: 3000,
				});
			}
		}
	};

	const handleUserNameChange = (value: string) => {
		const validNameLength = new RegExp("^.{3,16}$");
		const validCharacters = new RegExp("^[a-zA-Z0-9_-]+$");
		if (validCharacters.test(value)) {
			setIsValidNameCharacters(true);
		} else {
			setIsValidNameCharacters(false);
		}
		if (validNameLength.test(value)) {
			setValidNameLength(true);
		} else {
			setValidNameLength(false);
		}
	};
	const handleEmailChange = (value: string) => {
		const validEmail = new RegExp(
			"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
		);
		if (validEmail.test(value)) {
			setIsValidEmail(true);
		} else {
			setIsValidEmail(false);
		}
	};
	const handlePasswordChange = (value: string) => {
		const lower = new RegExp("(?=.*[a-z])");
		const upper = new RegExp("(?=.*[A-Z])");
		const number = new RegExp("(?=.*[0-9])");
		const special = new RegExp("(?=.*[!@#$%^&*])");
		const length = new RegExp("(?=.{8,})");
		if (lower.test(value)) {
			setLowerValidated(true);
		} else {
			setLowerValidated(false);
		}
		if (upper.test(value)) {
			setUpperValidated(true);
		} else {
			setUpperValidated(false);
		}
		if (number.test(value)) {
			setNumberValidated(true);
		} else {
			setNumberValidated(false);
		}
		if (special.test(value)) {
			setSpecialValidated(true);
		} else {
			setSpecialValidated(false);
		}
		if (length.test(value)) {
			setLengthValidated(true);
		} else {
			setLengthValidated(false);
		}
	};

	return (
		<>
			<div
				className={`log-container ${isSignUp ? "right-panel-active" : ""}`}
				id='container'
			>
				<div className='form-container sign-up-container'>
					<h1>Create Account</h1>
					<form
						// action='#'
						className='needs-validation'
						noValidate
						onSubmit={handleSignup}
					>
						{/*<div className='social-container'>
							<a href='#' className='social'>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a href='#' className='social'>
								<i className='fab fa-google-plus-g'></i>
							</a>
							<a href='#' className='social'>
								<i className='fab fa-linkedin-in'></i>
							</a>
						</div>
						<span>or use your email for registration</span> */}
						<FormField
							id='floatingEmail-signup'
							type='email'
							label='Email address'
							placeholder='name@example.com'
							valueChange={setEmail}
							validations={[
								{
									isValid: isValidEmail,
									message: "Please enter valid email address",
									className: "valid-email",
								},
							]}
						/>
						<FormField
							id='floatingName'
							type='text'
							label='Username'
							placeholder='Username'
							valueChange={setUserName}
							validations={[
								{
									isValid: isValidNameLength,
									message: "Username must be 3 to 16 characters long",
									className: "threechr",
								},
								{
									isValid: isValidNameCharacters,
									message: "Only alphanumeric characters, (_), or (-).",
									className: "validchr",
								},
							]}
						/>
						<FormField
							id='floatingPassword-signup'
							type={type} // Assuming 'type' state exists in your parent component for toggling visibility
							label='Password'
							placeholder='Password'
							valueChange={setPassword}
							extraAction={() => setType(type === "text" ? "password" : "text")}
							extraIconClass={`bi bi-eye${type === "text" ? "-slash" : ""}`}
							validations={[
								{
									isValid: lowerValidated,
									message: "At least one lowercase letter",
									className: "lowercase",
								},
								{
									isValid: upperValidated,
									message: "At least one uppercase letter",
									className: "uppercase",
								},
								{
									isValid: numberValidated,
									message: "At least one number",
									className: "number",
								},
								{
									isValid: specialValidated,
									message: "At least one special character",
									className: "specialchr",
								},
								{
									isValid: lengthValidated,
									message: "At least 8 characters",
									className: "eightchr",
								},
							]}
						/>

						<button type='submit'>Sign Up</button>
					</form>
				</div>
				<div className='form-container sign-in-container'>
					<form noValidate onSubmit={handleLogin}>
						<h1>Sign in</h1>
						{/* <div className='social-container'>
							<a href='#' className='social'>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a href='#' className='social'>
								<i className='fab fa-google-plus-g'></i>
							</a>
							<a href='#' className='social'>
								<i className='fab fa-linkedin-in'></i>
							</a>
						</div>
						<span>or use your account</span> */}

						<FormField
							id='floatingEmail-login'
							type='email'
							label='Email address'
							placeholder='name@example.com'
							valueChange={setEmail}
							isSignup={false}
						/>

						<FormField
							id='floatingPassword-login'
							type={type}
							label='Password'
							placeholder='Password'
							valueChange={setPassword}
							isSignup={false}
						/>
						{/* <a href='#'>Forgot your password?</a> */}
						<button>Sign In</button>
					</form>
				</div>
				<div className='overlay-container'>
					<div className='overlay'>
						<OverlayPanel
							h1Text={"Welcome Back!"}
							pText={
								"To keep connected with us please login with your personal info"
							}
							id={"signIn"}
							buttonClick={handleSignInClick}
							buttonText={"Sign In"}
							className={"left"}
						/>

						<OverlayPanel
							h1Text={"Hello, Friend!"}
							pText={"Enter your personal details and start journey with us"}
							id={"signUp"}
							buttonClick={handleSignUpClick}
							buttonText={"Sign Up"}
							className={"right"}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
