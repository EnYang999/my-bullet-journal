import {
	useFocus,
	useFloating,
	useInteractions,
	arrow,
	flip,
	offset,
	shift,
	useHover,
	FloatingArrow,
} from "@floating-ui/react";
import { useState, useRef } from "react";
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
	const arrowRef = useRef(null);
	const { refs, floatingStyles, context } = useFloating({
		placement: "top",
		strategy: "absolute",
		open: isOpen,
		onOpenChange(isOpen, event, reason) {
			setIsOpen(isOpen);
			// event && console.log(event); // e.g. MouseEvent
			// reason && console.log(reason); // e.g. 'hover'
		},
		middleware: [
			flip(),
			offset(6),
			shift({ padding: 5 }),
			arrow({
				element: arrowRef,
				padding: 5,
			}),
		],
	});
	const hover = useHover(context);
	const focus = useFocus(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([
		hover,
		focus,
	]);
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
				ref={refs.setReference}
				{...getReferenceProps({
					// onClick: () => console.log("clicked"),
					// onFocus: () => console.log("focused"),
				})}
			/>
			<label htmlFor={id}>{label}</label>
			{extraAction && extraIconClass && (
				<span className='icon-span' onClick={extraAction}>
					<i className={extraIconClass}></i>
				</span>
			)}
			{isSignup && isOpen && (
				<div
					className='tracker-box'
					ref={refs.setFloating}
					style={floatingStyles}
					{...getFloatingProps()}
				>
					{validations?.map((validation) => (
						<div
							className={`validation-message-wrapper ${
								validation.className
							} input-feedback ${
								validation.isValid ? "validated" : "not-validated"
							}`}
						>
							{validation.isValid ? (
								<span className='list-icon green'>
									<i className='bi bi-check2-circle'></i>
								</span>
							) : (
								<span className='list-icon'>
									<i className='bi bi-circle'></i>
								</span>
							)}
							{validation.message}
						</div>
					))}
					<FloatingArrow
						ref={arrowRef}
						context={context}
						fill='rgb(251, 247, 221)'
					/>
				</div>
			)}
		</div>
	);
};

export default FormField;
