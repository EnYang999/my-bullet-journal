import React, { useState } from "react";
import axios from "axios";
// import "./login.css";
import { toast } from "../errortoast/ErrorToastManager";
import FormField from "./formAccount";
import OverlayPanel from "./overlayPanel";
import * as constants from "../../../../common/constants";
import { useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();
	const handleSignUpClick = () => {
		setSignUp(true);
	};
	const handleSignInClick = () => {
		setSignUp(false);
	};
	const handleLogin = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${constants.API_ENDPOINT}${constants.APP_BACKEND_PORT}${constants.APP_USER_API}${constants.APP_LOGIN_URL}`,
				{
					email,
					password,
				},
				{ withCredentials: true }
			);
			console.log(response);

			if (response.data.success) {
				console.log("User log in successfully:", response.data.user);
				toast.show({
					title: "Successfully",
					content: "Login successfully, will direct you to the main page",
					duration: 15000,
				});
				setTimeout(() => {
					navigate("/");
				}, 5000);
			}
		} catch (error: any) {
			console.log("error from client", error);

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
				const response = await axios.post(
					`${constants.API_ENDPOINT}${constants.APP_BACKEND_PORT}${constants.APP_USER_API}${constants.APP_SIGNUP_URL}`,
					{
						email,
						username: userName,
						password,
					},
					{ withCredentials: true }
				);
				if (response.status === 201) {
					console.log("User signed up successfully:", response.data.user);
					toast.show({
						title: "Successfully",
						content: "Please Verify Your Email",
						duration: 15000,
					});
					setTimeout(() => {
						navigate("/login");
					}, 3000);
				} else {
					console.error("Error:", response.data.error);
					toast.show({
						title: "Error",
						content: response.data.error,
						duration: 10000,
					});
				}
			} else {
				toast.show({
					title: "Error",
					content: "please enter valid input",
					duration: 10000,
				});
			}
		} catch (error: any) {
			if (error.response) {
				console.log(error.response.data.error);

				toast.show({
					title: "Error",
					content: "You might registered, try login first",
					duration: 10000,
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
						<div className='social-container'>
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
						<span>or use your email for registration</span>
						<FormField
							id='floating-Email-signup'
							type='email'
							label='Email address'
							placeholder='name@example.com'
							valueChange={setEmail}
							handleChange={handleEmailChange}
							isSignup={true}
							validations={[
								{
									isValid: isValidEmail,
									message: "Please enter valid email address",
									className: "valid-email",
								},
							]}
						/>
						<FormField
							id='floating-Name'
							type='text'
							label='Username'
							placeholder='Username'
							valueChange={setUserName}
							handleChange={handleUserNameChange}
							isSignup={true}
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
							id='floating-Password-signup'
							type={type}
							label='Password'
							placeholder='Password'
							valueChange={setPassword}
							extraAction={() => setType(type === "text" ? "password" : "text")}
							handleChange={handlePasswordChange}
							extraIconClass={`bi bi-eye${type === "text" ? "-slash" : ""}`}
							isSignup={true}
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
						<div className='social-container'>
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
						<span>or use your account</span>

						<FormField
							id='floating-Email-login'
							type='email'
							label='Email address'
							placeholder='name@example.com'
							valueChange={setEmail}
							isSignup={false}
						/>

						<FormField
							id='floating-Password-login'
							type={type}
							label='Password'
							placeholder='Password'
							valueChange={setPassword}
							isSignup={false}
						/>
						<a href={`${constants.APP_RESET_PASSWORD}`}>
							Forgot your password?
						</a>
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
