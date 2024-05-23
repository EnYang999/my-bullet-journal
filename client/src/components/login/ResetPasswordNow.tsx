import React, { useState } from "react";
import axios from "axios";
import * as constants from "../../../../common/constants";
import { useParams, useNavigate } from "react-router-dom";
const ResetPasswordNow: React.FC = () => {
	const [done, setDone] = useState(false);
	const [passwordMessage, setPasswordMessage] = useState("");
	const [confirmedPasswordMessage, setConfirmedPasswordMessage] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { resetPasswordToken } = useParams<{ resetPasswordToken: string }>();
	const [lowerValidated, setLowerValidated] = useState(false);
	const [upperValidated, setUpperValidated] = useState(false);
	const [numberValidated, setNumberValidated] = useState(false);
	const [specialValidated, setSpecialValidated] = useState(false);
	const [lengthValidated, setLengthValidated] = useState(false);
	const navigate = useNavigate();
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
	const resetPassword = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			setPasswordMessage("");
			setConfirmedPasswordMessage("");
			if (
				password &&
				password === confirmPassword &&
				lowerValidated &&
				upperValidated &&
				numberValidated &&
				specialValidated &&
				lengthValidated
			) {
				console.log(
					`${constants.API_ENDPOINT}${constants.APP_BACKEND_PORT}${constants.APP_USER_API}${constants.APP_RESET_PASSWORD_NOW}/${resetPasswordToken}`
				);

				const response = await axios.post(
					`${constants.API_ENDPOINT}${constants.APP_BACKEND_PORT}${constants.APP_USER_API}${constants.APP_RESET_PASSWORD_NOW}/${resetPasswordToken}`,
					{
						password,
					}
				);

				console.log("API_RESPONSE", response);
				if (response.data.success) {
					setDone(true);
					setTimeout(() => {
						navigate("/login");
					}, 5000);
				}
			} else if (password && password === confirmPassword) {
				setPasswordMessage(
					"Password requires a lower character, a upper character, a number, a special character, and at least 8 characters "
				);
			} else if (
				lowerValidated &&
				upperValidated &&
				numberValidated &&
				specialValidated &&
				lengthValidated
			) {
				setConfirmedPasswordMessage("Password needs to be the same");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='container my-5 py-5'>
			<div className='row'>
				<div className='col-md-6 col-sm-12 mx-auto'>
					<div className='card'>
						<div className='card-body'>
							<h3 className='card-title'>Reset your password now</h3>
							{!done ? (
								<form onSubmit={resetPassword}>
									<div className='form-group'>
										<label htmlFor='password'>New Password</label>
										<input
											type='password'
											value={password}
											onChange={(e) => {
												setPassword(e.target.value);
												handlePasswordChange(e.target.value);
											}}
											id='password'
											className='form-control'
											placeholder='New Password'
										/>
									</div>
									{passwordMessage && <p color='black'>{passwordMessage}</p>}
									<div className='form-group mt-3'>
										<label htmlFor='confirm_password'>
											Confirm new Password
										</label>
										<input
											type='password'
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
											id='confirm_password'
											className='form-control'
											placeholder='Confirm Password'
										/>
									</div>
									{confirmedPasswordMessage && (
										<p color='black'>{confirmedPasswordMessage}</p>
									)}
									<div className='form-group mt-3'>
										<button className='btn btn-primary' type='submit'>
											Reset Password
										</button>
									</div>
								</form>
							) : (
								<p>
									Your password reset is successful. Please log into your
									account.
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPasswordNow;
