import React, { useState } from "react";
import axios from "axios";
import * as constants from "../../../../common/constants";
import { useNavigate } from "react-router-dom";
import { toast } from "../errortoast/ErrorToastManager";

const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate();
	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			console.log(
				`${constants.API_ENDPOINT}${constants.APP_USER_API}${constants.APP_RESET_PASSWORD}`
			);

			const response = await axios.put(
				`${constants.API_ENDPOINT}${constants.APP_USER_API}${constants.APP_RESET_PASSWORD}`,
				{ email }
			);
			if (response.data.success) {
				setMessage("Password reset link has been sent to your email address.");
				toast.show({
					title: "Success",
					content: "find the reset link in your email",
					duration: 15000,
				});
			} else {
				console.log(response.data.message);

				setMessage("Error: " + response.data.message);
				toast.show({
					title: "Error",
					content: "something wrong happened",
					duration: 15000,
				});
			}
			navigate("/");
		} catch (error) {
			console.log(error);

			toast.show({
				title: "Error",
				content: "You haven't registered",
				duration: 15000,
			});
		}
	};

	return (
		<div className='container my-5 py-5'>
			<div className='row'>
				<div className='col-md-6 col-sm-12 mx-auto'>
					<div className='card'>
						<div className='card-body'></div>
						<h2 className='card-title'>Reset Password</h2>
						<form onSubmit={handleSubmit}>
							<div>
								<label htmlFor='email'>Email:</label>
								<input
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='sample@email.com'
									required
								/>
							</div>
							<div className='form-group mt-3'>
								<button className='btn btn-primary' type='submit'>
									Send Reset Link
								</button>
							</div>
						</form>

						{message && <p>{message}</p>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
