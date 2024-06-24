import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from "../errortoast/ErrorToastManager";
import {
	API_ENDPOINT,
	APP_TODO_POST,
	APP_TODO_API,
	APP_AUTHENTICATE_TOKEN_NAME,
} from "../../../../common/constants";
interface Props {
	className: string;
	boxId: string;
}

export const ToDoLine = ({
	// className,
	boxId, // sep-week-3-tuesday-num
}: Props): JSX.Element => {
	const [inputValue, setInputValue] = useState<string>("");
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const cookies = new Cookies();
	const bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};
	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};
	const separatedComponents = boxId.split("-");
	const todoMonth = separatedComponents[0];
	const todoWeek = separatedComponents[2];
	const todoDay = separatedComponents[3];
	const todoNum = separatedComponents[4];

	const handleTodoPost = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		e.preventDefault();

		if (e.key === "Enter") {
			try {
				await axios.post(
					`${API_ENDPOINT}${APP_TODO_API}${APP_TODO_POST}/${todoMonth}/${todoWeek}/${todoDay}/${todoNum}`,
					{
						completed: isChecked,
						description: inputValue,
					},
					{
						headers: {
							Authorization: `Bearer ${bearToken}`,
						},
					}
				);
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
		}
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${API_ENDPOINT}${APP_TODO_API}${APP_TODO_POST}/${todoMonth}/${todoWeek}/${todoDay}/${todoNum}`,
					{
						headers: { Authorization: `Bearer ${bearToken}` },
					}
				);
				if (response?.data) {
					setInputValue(response.data.description);
					setIsChecked(response.data.completed);
				}
			} catch (error: any) {
				console.error("Error fetching data", error);
				// if (error.response) {
				// 	toast.show({
				// 		title: "Error",
				// 		content: error.response.data.error,
				// 		duration: 3000,
				// 	});
				// }
			}
		};

		fetchData();
	}, []);
	return (
		<div className={`todo-wrapper `}>
			<input
				type='checkbox'
				className='tick-box'
				id={`cbx-${boxId}`}
				checked={isChecked}
				onChange={handleCheckboxChange}
			/>

			<label className='cbx' htmlFor={`cbx-${boxId}`}>
				<span className='tick-box ratio ratio-1x1'>
					<svg viewBox='0 0 12 9'>
						<polyline points='1 5 4 8 11 1'></polyline>
					</svg>
				</span>
				<span className='input-box'>
					<input
						value={inputValue}
						onKeyUp={handleTodoPost}
						onChange={handleInputChange}
						className={`input-field ${isChecked ? "checked" : ""}`}
						disabled={isChecked}
					/>
				</span>
			</label>
		</div>
	);
};
