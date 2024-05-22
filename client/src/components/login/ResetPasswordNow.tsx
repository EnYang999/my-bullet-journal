import React, { useState } from "react";
import axios from "axios";
import * as constants from "../../../../common/constants";
import { useParams } from "react-router-dom";
const ResetPasswordNow: React.FC = () => {
	const [done, setDone] = useState(false);
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { resetPasswordToken } = useParams<{ resetPasswordToken: string }>();

	const resetPassword = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			if (password && password === confirmPassword) {
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
						window.opener = self;
						window.close();
					}, 5000);
				}
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
											onChange={(e) => setPassword(e.target.value)}
											id='password'
											className='form-control'
											placeholder='New Password'
										/>
									</div>
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
