import React, { useState } from "react";
import "./checkbox-b.css";
interface Props {
	className: any;
	tickBoxClassName: any;
	inputFieldClassName: any;
	defaultClassName: any;
}

export const CheckboxB = ({
	className,
	tickBoxClassName,
	inputFieldClassName,
}: Props): JSX.Element => {
	const [inputValue, setInputValue] = useState<string>("");
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};
	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className={`todo-wrapper ${className}`}>
			<input
				type='checkbox'
				id={`cbx ${className}`}
				className={`tick-box ${tickBoxClassName}`}
				checked={isChecked}
				onChange={handleCheckboxChange}
				style={{ display: "none" }}
			/>

			<label className='cbx' htmlFor={`cbx ${className}`}>
				<span className='tick-box'>
					<svg width='12px' height='9px' viewBox='0 0 12 9'>
						<polyline points='1 5 4 8 11 1'></polyline>
					</svg>
				</span>
				<span className='input-field'>
					<input
						value={inputValue}
						onChange={handleInputChange}
						className={`input-field ${inputFieldClassName} ${
							isChecked ? "checked" : ""
						}`}
						disabled={isChecked}
					/>
				</span>
			</label>
		</div>
	);
};
