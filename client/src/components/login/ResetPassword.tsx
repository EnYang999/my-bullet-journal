import React, { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:8000/api/users/reset-password",
				{ email }
			);
			if (response.data.success) {
				setMessage("Password reset link has been sent to your email address.");
			} else {
				setMessage("Error: " + response.data.message);
			}
		} catch (error) {
			setMessage("Error: " + error.message);
		}
	};

	return (
		<div>
			<h2>Reset Password</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email:</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Send Reset Link</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
};

export default ResetPassword;
