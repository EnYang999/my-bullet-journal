import React, { useState } from "react";
import "./login.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface FormData {
	name: string;
	email: string;
	password: string;
}
const userSchema = yup
	.object({
		name: yup
			.string()
			.required("No name provided.")
			.min(4, "Name is too short - should be 4 chars minimum."),
		email: yup
			.string()
			.required("No email provided.")
			.email("No email provided."),
		password: yup
			.string()
			.required("No password provided.")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
				"Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
			),
	})
	.required();

const Login: React.FC = () => {
	const [isSignUp, setSignUp] = useState<boolean>(false);
	const handleSignUpClick = () => {
		setSignUp(true);
	};
	const handleSignInClick = () => {
		setSignUp(false);
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(userSchema),
	});
	console.log(errors);

	return (
		<>
			<div
				className={`log-container ${isSignUp ? "right-panel-active" : ""}`}
				id='container'
			>
				<div className='form-container sign-up-container'>
					<form
						action='#'
						className='needs-validation'
						onSubmit={handleSubmit((data) => {
							console.log(data);
						})}
						noValidate
					>
						<h1>Create Account</h1>
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
						<div className='form-floating mb-2 mt-2'>
							<input
								{...register("name")}
								type='text'
								className='form-control'
								id='floatingName'
								placeholder='Username'
								aria-label='Username'
							/>
							<label htmlFor='floatingName'>name</label>
							{errors.name && (
								<div className='invalid-feedback'>{errors.name.message}</div>
							)}
						</div>
						<div className='form-floating mb-2'>
							<input
								{...register("email")}
								type='email'
								className='form-control'
								id='floatingEmail'
								placeholder='name@example.com'
							/>
							<label htmlFor='floatingEmail'>Email address</label>
							{errors.email && (
								<div className='invalid-feedback'>{errors.email.message}</div>
							)}
						</div>

						<div className='form-floating  mb-2'>
							<input
								{...register("password")}
								type='password'
								className='form-control'
								id='floatingPassword'
								placeholder='Password'
							/>
							<label htmlFor='floatingPassword'>Password</label>
							{errors.password && (
								<div className='invalid-feedback'>
									{errors.password.message}
								</div>
							)}
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
