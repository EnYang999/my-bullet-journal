import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RedirectPage.css"; // Import your CSS file

const SignupSuccessful: React.FC = () => {
	const navigate = useNavigate();
	const [countdown, setCountdown] = useState(5);

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		setTimeout(() => {
			history.push("/");
		}, 5000);

		return () => clearInterval(timer);
	}, [history]);

	return (
		<div className='signup-successful-container'>
			<div className='message-container'>
				<p className='message'>Thanks for joining this community,</p>
				<p className='countdown'>
					redirecting you to the home page in {countdown} seconds
				</p>
			</div>
		</div>
	);
};

export default SignupSuccessful;
