import React, { useState } from "react";
import "./login.css";
import Icon from "react-icons-kit";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
								id='floatingEmail'
								placeholder='name@example.com'
							/>
							<label htmlFor='floatingEmail'>Email address</label>
						</div>

						<div className='form-floating  mb-2 password-input'>
							<input
								type={type}
								className='form-control'
								id='floatingPassword'
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

							<label htmlFor='floatingPassword'>Password</label>
						</div>
						{/* validation tracker */}
						<div className='tracker-box'>
							<div className={lowerValidated ? "validated" : "not-validated"}>
								{lowerValidated ? (
									<span className='list-icon green'>
										<i className='bi bi-check2-circle'></i>
									</span>
								) : (
									<span className='list-icon'>
										<i className='bi bi-circle'></i>
									</span>
								)}
								At least one lowercase letter
							</div>
							<div className={upperValidated ? "validated" : "not-validated"}>
								{upperValidated ? (
									<span className='list-icon green'>
										<i className='bi bi-check2-circle'></i>
									</span>
								) : (
									<span className='list-icon'>
										<i className='bi bi-circle'></i>
									</span>
								)}
								At least one uppercase letter
							</div>
							<div className={numberValidated ? "validated" : "not-validated"}>
								{numberValidated ? (
									<span className='list-icon green'>
										<i className='bi bi-check2-circle'></i>
									</span>
								) : (
									<span className='list-icon'>
										<i className='bi bi-circle'></i>
									</span>
								)}
								At least one number
							</div>
							<div className={specialValidated ? "validated" : "not-validated"}>
								{specialValidated ? (
									<span className='list-icon green'>
										<i className='bi bi-check2-circle'></i>
									</span>
								) : (
									<span className='list-icon'>
										<i className='bi bi-circle'></i>
									</span>
								)}
								At least one special character
							</div>
							<div className={lengthValidated ? "validated" : "not-validated"}>
								{lengthValidated ? (
									<span className='list-icon green'>
										<i className='bi bi-check2-circle'></i>
									</span>
								) : (
									<span className='list-icon'>
										<i className='bi bi-circle'></i>
									</span>
								)}
								At least 8 characters
							</div>
						</div>
						<button type='submit'>Sign Up</button>
					</form>
				</div>
				<div className='form-container sign-in-container'>
					<form action='#'>
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
						<input type='email' placeholder='Email' />
						<input type='password' placeholder='Password' />
						<a href='#'>Forgot your password?</a>
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
