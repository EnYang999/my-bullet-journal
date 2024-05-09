import React from "react";
import "./ErrorPage.css"; // Ensure you have this CSS file for styling

interface ErrorPageProps {
	title: string; // Title of the error, e.g., "Access Denied"
	message: string; // Main message for the error
	recommendation?: string; // Optional recommendation or action items for the user
}

const ErrorPage: React.FC<ErrorPageProps> = ({
	title,
	message,
	recommendation,
}) => {
	return (
		<div className='error-container'>
			<h1>{title}</h1>
			<p>{message}</p>
			{recommendation && <p>{recommendation}</p>}
			<p>
				Try to <a href='/'>go back to the homepage</a>.
			</p>
		</div>
	);
};

export default ErrorPage;
