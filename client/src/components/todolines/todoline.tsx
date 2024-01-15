import React, { useState } from "react";
import "../scss/theme/_todolines.scss";
interface Props {
	className: any;
	tickBoxClassName: any;
	inputFieldClassName: any;
	inputBoxClassName: any;
}

export const ToDoLine = ({
	className, // sep-week-3-tuesday
	tickBoxClassName, // className + tickbox
	inputFieldClassName, // className + inputfield
	inputBoxClassName, // className + inputbox
}: Props): JSX.Element => {
	const [inputValue, setInputValue] = useState<string>("");
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};
	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};
	console.log(`todo-wrapper ${className}`);
	console.log(`cbx ${className}`);
	console.log(`tick-box ${className + tickBoxClassName}`);
	console.log(`input-box ${className + inputBoxClassName}`);
	console.log(`input-field ${className + inputFieldClassName}`);

	return (
		<div className={`todo-wrapper ${className}`}>
			<input
				type='checkbox'
				id={`cbx ${className}`}
				className={`tick-box`}
				checked={isChecked}
				onChange={handleCheckboxChange}
				style={{ display: "none" }}
			/>

			<label className='cbx' htmlFor={`cbx ${className}`}>
				<span className='tick-box'>
					<svg viewBox='0 0 12 9'>
						<polyline points='1 5 4 8 11 1'></polyline>
					</svg>
				</span>
				<span className={`input-box`}>
					<input
						value={inputValue}
						onChange={handleInputChange}
						className={`input-field ${isChecked ? "checked" : ""}`}
						disabled={isChecked}
					/>
				</span>
			</label>
		</div>
	);
};
