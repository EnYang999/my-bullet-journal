import React, { useState } from "react";
import "./login.css";
import Icon from "react-icons-kit";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";
import PasswordValidation from "../passwordvalidation/PasswordValidation";
const Login: React.FC = () => {
	const [isSignUp, setSignUp] = useState<boolean>(false);
	const handleSignUpClick = () => {
		setSignUp(true);
	};
	const handleSignInClick = () => {
		setSignUp(false);
	};
	const [type, setType] = useState("password");
	const [lowerValidated, setLowerValidated] = useState(false);
	const [upperValidated, setUpperValidated] = useState(false);
	const [numberValidated, setNumberValidated] = useState(false);
	const [specialValidated, setSpecialValidated] = useState(false);
	const [lengthValidated, setLengthValidated] = useState(false);
	const handleChange = (value: string) => {
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
					<form action='#' className='needs-validation' noValidate>
						{/* <h1>Create Account</h1>
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
						<span>or use your email for registration</span> */}
						<div className='form-floating mb-2 mt-2 name-input'>
							<input
								type='text'
								className='form-control'
								id='floatingName'
								placeholder='Username'
								aria-label='Username'
							/>
							<label htmlFor='floatingName'>name</label>
						</div>
						<div className='form-floating mb-2 email-input'>
							<input
								type='email'
								className='form-control'
								id='floatingEmail-signup'
								placeholder='name@example.com'
							/>
							<label htmlFor='floatingEmail-signup'>Email address</label>
						</div>

						<div className='form-floating  mb-2 password-input'>
							<input
								type={type}
								className='form-control'
								id='floatingPassword-signup'
								placeholder='Password'
								onChange={(e) => handleChange(e.target.value)}
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
						</div>
						{/* validation tracker */}
						<div className='tracker-box'>
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

						<button type='submit'>Sign Up</button>
					</form>
				</div>
				<div className='form-container sign-in-container'>
					<form action='#'>
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
							/>
							<label htmlFor='floatingEmail-login'>Email address</label>
						</div>

						<div className='form-floating  mb-2 password-input'>
							<input
								type={type}
								className='form-control'
								id='floatingPassword-login'
								placeholder='Password'
								onChange={(e) => handleChange(e.target.value)}
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

			<footer>
				<p>
					Created with <i className='fa fa-heart'></i> by
					<a target='_blank' href='https://florin-pop.com'>
						Florin Pop
					</a>
					- Read how I created this and how you can join the challenge
					<a
						target='_blank'
						href='https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/'
					>
						here
					</a>
					.
				</p>
			</footer>
		</>
	);
};

export default Login;
