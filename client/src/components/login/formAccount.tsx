import PasswordValidation from "../passwordvalidation/PasswordValidation";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverDescription,
	PopoverHeading,
	PopoverClose,
} from "./Popover";
import { useFocus, useFloating, useInteractions } from "@floating-ui/react";
import { useState } from "react";
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

const FormField: React.FC<FormFieldProps> = ({
	id,
	type,
	label,
	placeholder,
	validations,
	valueChange,
	handleChange,
	extraAction,
	extraIconClass,
	isSignup,
}) => {
	const overallValid = validations?.every((validation) => validation.isValid);
	const [isOpen, setIsOpen] = useState(true);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
	});

	const focus = useFocus(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([focus]);
	return (
		<div
			className={`form-floating mb-2 ${id}-input ${
				overallValid ? "validated-box" : "not-validated-box"
			}`}
		>
			<input
				type={type}
				className='form-control'
				id={id}
				placeholder={placeholder}
				onChange={(e) => {
					valueChange(e.target.value);
					if (handleChange) {
						handleChange(e.target.value);
					}
				}}
				required
			/>
			{extraAction && extraIconClass && (
				<span className='icon-span' onClick={extraAction}>
					<i className={extraIconClass}></i>
				</span>
			)}
			<label htmlFor={id} ref={refs.setReference} {...getReferenceProps()}>
				{label}
			</label>
			{isSignup && isOpen && (
				<Popover>
					<PopoverTrigger>My trigger</PopoverTrigger>
					<PopoverContent className='Popover'>
						<PopoverHeading>My popover heading</PopoverHeading>
						<PopoverDescription>My popover description</PopoverDescription>
						<PopoverClose>Close</PopoverClose>
					</PopoverContent>
				</Popover>
				// <div className='tracker-box'>
				// 	{validations?.map((validation, index) => (
				// 		// <PasswordValidation
				// 		// 	key={index}
				// 		// 	className={validation.className}
				// 		// 	validated={validation.isValid}
				// 		// 	text={validation.message}
				// 		// 	ref={(el) => refs.setFloating(el)} // Changed to capture the reference correctly
				// 		// 	style={floatingStyles}
				// 		// 	{...getFloatingProps()}
				// 		// />

				// 	))}
				// </div>
			)}
		</div>
	);
};

export default FormField;
