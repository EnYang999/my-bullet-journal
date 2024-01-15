import React, { useState } from "react";
import "../scss/theme/_todolines.scss";
interface Props {
	className: string;
	boxId: string;
}

export const ToDoLine = ({
	className,
	boxId, // sep-week-3-tuesday
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
				id={`cbx-${boxId}`}
				checked={isChecked}
				onChange={handleCheckboxChange}
				style={{ display: "none" }}
			/>

			<label className='cbx' htmlFor={`cbx-${boxId}`}>
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
