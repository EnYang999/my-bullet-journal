import { useState, useEffect } from "react";
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

export const ToDoLine = ({ boxId }: Props) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [isDataFetched, setIsDataFetched] = useState<boolean>(false);
	const cookies = new Cookies();
	const bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);

	// Parse boxId for necessary components
	const separatedComponents = boxId.split("-");
	const todoMonth = separatedComponents[0];
	const todoWeek = separatedComponents[2];
	const todoDay = separatedComponents[3];
	const todoNum = separatedComponents[4];

	useEffect(() => {
		console.log(boxId);
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${API_ENDPOINT}${APP_TODO_API}${APP_TODO_POST}/${todoMonth}/${todoWeek}/${todoDay}/${todoNum}`,
					{
						headers: { Authorization: `Bearer ${bearToken}` },
					}
				);
				if (response?.data) {
					setInputValue(response.data.description || "");
					setIsChecked(response.data.completed || false);
					setIsDataFetched(true); // Data is fetched successfully
				} else {
					console.error("No data found in response");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
				toast.show({
					title: "Error",
					content: "Error fetching data",
					duration: 3000,
				});
			}
		};

		fetchData();
	}, [bearToken, todoMonth, todoWeek, todoDay, todoNum]);

	useEffect(() => {
		if (isDataFetched) {
			const postData = async () => {
				try {
					await axios.post(
						`${API_ENDPOINT}${APP_TODO_API}${APP_TODO_POST}/${todoMonth}/${todoWeek}/${todoDay}/${todoNum}`,
						{
							description: inputValue,
							completed: isChecked,
						},
						{
							headers: { Authorization: `Bearer ${bearToken}` },
						}
					);
					// console.log("Post response:", response.data);
				} catch (error) {
					console.error("Error posting data:", error);
					toast.show({
						title: "Error",
						content: "Error saving data",
						duration: 3000,
					});
				}
			};

			postData();
		}
	}, [
		inputValue,
		isChecked,
		isDataFetched,
		bearToken,
		todoMonth,
		todoWeek,
		todoDay,
		todoNum,
	]);

	return (
		<div className='todo-wrapper'>
			<input
				type='checkbox'
				className='tick-box'
				id={`cbx-${boxId}`}
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
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
						onChange={(e) => setInputValue(e.target.value)}
						className={`input-field ${isChecked ? "checked" : ""}`}
						disabled={isChecked}
					/>
				</span>
			</label>
		</div>
	);
};
