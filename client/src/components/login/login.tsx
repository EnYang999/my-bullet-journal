import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import PasswordValidation from "../passwordvalidation/PasswordValidation";
import { toast } from "../errortoast/ErrorToastManager";
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
			console.log("signup click");

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
					title: "Error",
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
						<div
							className={`form-floating mb-2 mt-2 name-input ${
								isValidNameLength && isValidNameCharacters
									? "validated-box"
									: "not-validated-box"
							}`}
						>
							<input
								type='text'
								className='form-control'
								id='floatingName'
								placeholder='Username'
								aria-label='Username'
								onChange={(e) => {
									handleUserNameChange(e.target.value),
										setUserName(e.target.value);
								}}
							/>
							<label htmlFor='floatingName'>name</label>
							<div className='tracker-box email-check-box'>
								<PasswordValidation
									className='validation-message  threechr'
									validated={isValidNameLength}
									text='username must be 3 to 16 characters long'
								/>
								<PasswordValidation
									className='validation-message  validchr'
									validated={isValidNameCharacters}
									text='only alphanumeric characters, (_), or
								 (-).'
								/>
							</div>
						</div>
						<div
							className={`form-floating mb-2 email-input ${
								isValidEmail ? "validated-box" : "not-validated-box"
							}`}
						>
							<input
								type='email'
								className='form-control'
								id='floatingEmail-signup'
								placeholder='name@example.com'
								onChange={(e) => {
									handleEmailChange(e.target.value), setEmail(e.target.value);
								}}
							/>
							<label htmlFor='floatingEmail-signup'>Email address</label>
							<div className='tracker-box email-check-box'>
								<PasswordValidation
									className='validation-message  valid-email'
									validated={isValidEmail}
									text='please enter valid email addresss'
								/>
							</div>
						</div>

						<div
							className={`form-floating mb-2 password-input ${
								lowerValidated &&
								upperValidated &&
								numberValidated &&
								specialValidated &&
								lengthValidated
									? "validated-box"
									: "not-validated-box"
							}`}
						>
							<input
								type={type}
								className='form-control'
								id='floatingPassword-signup'
								placeholder='Password'
								onChange={(e) => {
									handlePasswordChange(e.target.value),
										setPassword(e.target.value);
								}}
							/>
							<span
								className='icon-span'
								onClick={() => setType(type === "text" ? "password" : "text")}
							>
								<i
									className={`bi bi-eye${type === "text" ? "-slash" : ""}`}
								></i>
							</span>

							<label htmlFor='floatingPassword-signup'>Password</label>
							<div className='tracker-box password-check-box'>
								<PasswordValidation
									className='validation-message lowercase'
									validated={lowerValidated}
									text='At least one lowercase letter'
								/>
								<PasswordValidation
									className='validation-message  uppercase'
									validated={upperValidated}
									text='At least one uppercase letter'
								/>
								<PasswordValidation
									className='validation-message  number'
									validated={numberValidated}
									text='At least one number'
								/>
								<PasswordValidation
									className='validation-message  specialchr'
									validated={specialValidated}
									text='At least one special character'
								/>
								<PasswordValidation
									className='validation-message  eightchr'
									validated={lengthValidated}
									text='At least 8 characters'
								/>
							</div>
						</div>

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
						<div className='form-floating mb-2 email-input'>
							<input
								type='email'
								className='form-control'
								id='floatingEmail-login'
								placeholder='name@example.com'
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label htmlFor='floatingEmail-login'>Email address</label>
						</div>

						<div className='form-floating  mb-2 password-input'>
							<input
								type={type}
								className='form-control'
								id='floatingPassword-login'
								placeholder='Password'
								onChange={(e) => setPassword(e.target.value)}
							/>
							<span
								className='icon-span'
								onClick={() => setType(type === "text" ? "password" : "text")}
							>
								<i
									className={`bi bi-eye${type === "text" ? "-slash" : ""}`}
								></i>
							</span>

							<label htmlFor='floatingPassword-login'>Password</label>
						</div>
						{/* <a href='#'>Forgot your password?</a> */}
						<button>Sign In</button>
					</form>
				</div>
				<div className='overlay-container'>
					<div className='overlay'>
						<div className='overlay-panel overlay-left'>
							<h1>Welcome Back!</h1>
							<p>
								To keep connected with us please login with your personal info
							</p>
							<button className='ghost' id='signIn' onClick={handleSignInClick}>
								Sign In
							</button>
						</div>
						<div className='overlay-panel overlay-right'>
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button className='ghost' id='signUp' onClick={handleSignUpClick}>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
