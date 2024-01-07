import React from "react";
import "./PasswordValidation.css";
interface ValidationItemProps {
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
			className={`validation-message-wrapper ${className} ${
				validated ? "validated" : "not-validated"
			}`}
		>
			{validated ? (
				<span className='list-icon green'>
					<i className='bi bi-check2-circle'></i>
				</span>
			) : (
				<span className='list-icon'>
					<i className='bi bi-circle'></i>
				</span>
			)}
			<span className='error-message'>{text}</span>
		</div>
	);
};
export default PasswordValidation;
