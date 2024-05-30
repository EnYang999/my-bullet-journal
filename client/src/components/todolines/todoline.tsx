import React, { useState } from "react";
import axios from "axios";
import { toast } from "../errortoast/ErrorToastManager";
import {
	API_ENDPOINT,
	APP_BACKEND_PORT,
	APP_USER_API,
	APP_LOGIN_URL,
	APP_SIGNUP_URL,
	APP_RESET_PASSWORD,
} from "../../../../common/constants";
interface Props {
	className: string;
	boxId: string;
}

export const ToDoLine = ({
	className,
	boxId, // sep-week-3-tuesday-num
}: Props): JSX.Element => {
	const [inputValue, setInputValue] = useState<string>("");
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};
	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};
	const handleCheckbox = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const response = await axios.post(
			`${API_ENDPOINT}${APP_BACKEND_PORT}${APP_USER_API}${APP_LOGIN_URL}`,
			{
				completed: isChecked,
			},
			{ withCredentials: true }
		);
		console.log(response);

		try {
		} catch (error: any) {
			console.log("error from client", error);

			if (error.response) {
				toast.show({
					title: "Error",
					content: error.response.data.error,
					duration: 3000,
				});
			}
		}
	};
	return (
		<div className={`todo-wrapper ${className}`}>
			<input
				type='checkbox'
				className={`tick-box`}
				id={`cbx-${boxId}`}
				checked={isChecked}
				onChange={() => {
					handleCheckboxChange;
					handleCheckbox;
				}}
				style={{ display: "none" }}
			/>

			<label className='cbx' htmlFor={`cbx-${boxId}`}>
				<span className='tick-box ratio ratio-1x1'>
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
