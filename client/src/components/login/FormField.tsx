// Import statements (assume all necessary imports are included)
import React, { useState } from "react";
import { Popover } from "./Popover"; // Assume Popover.tsx exports this correctly
import PasswordValidation from "../passwordvalidation/PasswordValidation";
interface FormFieldProps {
	id: string;
	type: string;
	label: string;
	placeholder: string;
	validations?: {
		isValid: boolean;
		message: string;
		className: string;
	}[];
	valueChange: (value: string) => void;
	handleChange?: (value: string) => void;
	extraAction?: () => void; // Optional for additional actions like toggling password visibility
	extraIconClass?: string; // Optional for icons like eye for password visibility
	isSignup?: boolean;
}

const FormField = ({
	id,
	type = "text",
	label,
	placeholder,
	validations = [],
	valueChange,
	handleChange,
	extraAction,
	extraIconClass,
	isSignup,
}: FormFieldProps) => {
	const [inputValue, setInputValue] = useState("");
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	const [validated, setValidated] = useState(false);

	// Decide which validation messages to show
	// const validationMessages = validations.filter((v) => !v.rule(inputValue));

	return (
		<div className='form-group'>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				value={inputValue}
				onChange={(e) => {
					valueChange(e.target.value);
					if (handleChange) {
						handleChange(e.target.value);
					}
				}}
				onFocus={() => setIsPopoverOpen(true)}
				onBlur={() => setIsPopoverOpen(false)}
				className={`form-control ${validated ? "is-valid" : "is-invalid"}`}
			/>
			<Popover open={isPopoverOpen && !validated} placement='right-start'>
				{validations.map((validation, index) => (
					<PasswordValidation
						key={index}
						validated={validated}
						text={validation.message}
						className='my-custom-validation-class'
					/>
				))}
			</Popover>
			{label && <label htmlFor={id}>{label}</label>}
			{extraIconClass && (
				<button onClick={extraAction} className='btn-icon'>
					<i className={extraIconClass}></i>
				</button>
			)}
		</div>
	);
};
export default FormField;
