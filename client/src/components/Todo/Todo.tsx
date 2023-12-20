/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
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

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<div className={`todo ${className}`}>
			<label className='todo-label'>
				<input type='checkbox' className={`tick-box ${tickBoxClassName}`} />
				<input
					value={inputValue}
					onChange={handleInputChange}
					className={`input-field ${inputFieldClassName}`}
				/>
			</label>
		</div>
	);
};
