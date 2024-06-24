import React, { HTMLAttributes } from "react";

interface ValidationItemProps extends HTMLAttributes<HTMLDivElement> {
	validated: boolean;
	text: string;
	className: string;
}

const PasswordValidation: React.FC<ValidationItemProps> = ({
	validated,
	text,
	className,
}) => {
	return (
		<div
			className={`validation-message-wrapper ${className} invalid-feedback ${
				validated ? "validated" : "not-validated"
			}`}
		>
			{/* no more than icons */}
			{validated ? (
				<span className='list-icon green'>
					<i className='bi bi-check2-circle'></i>
				</span>
			) : (
				<span className='list-icon'>
					<i className='bi bi-circle'></i>
				</span>
			)}
			{text}
		</div>
	);
};

export default PasswordValidation;
