import React, { useState } from "react";
import "normalize.css";
import "./Todo.css";
interface Props {
	className: any;
	tickBoxClassName: any;
	inputFieldClassName: any;
	defaultClassName: any;
}

export const Todo = ({
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
		<div className={`todo ${className}`}>
			{isChecked && <i className='bi bi-check check-tick'></i>}
			<input
				type='checkbox'
				className={`tick-box ${tickBoxClassName}`}
				checked={isChecked}
				onChange={handleCheckboxChange}
			/>

			<input
				value={inputValue}
				onChange={handleInputChange}
				className={`input-field ${inputFieldClassName} ${
					isChecked ? "checked" : ""
				}`}
				disabled={isChecked}
			/>
		</div>
	);
};
