import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from "../errortoast/ErrorToastManager";
import {
	API_ENDPOINT,
	APP_BACKEND_PORT,
	APP_PROFILE_API,
	APP_AUTHENTICATE_TOKEN_NAME,
	APP_PROFILE_PUT,
	APP_PROFILE_GET_BY_OWN,
} from "../../../../common/constants";
interface Props {
	iconClass: string;
	label: string;
}
const ProfileItem = ({ iconClass, label }: Props) => {
	const [inputValue, setInputValue] = useState<string>("");
	const cookies = new Cookies();
	const bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);
	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};
	const handleValuePost = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.key === "Enter") {
			try {
				await axios.post(
					`${API_ENDPOINT}${APP_BACKEND_PORT}${APP_PROFILE_API}${APP_PROFILE_PUT}`,
					{
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
					`${API_ENDPOINT}${APP_BACKEND_PORT}${APP_PROFILE_API}${APP_PROFILE_GET_BY_OWN}`,
					{
						headers: { Authorization: `Bearer ${bearToken}` },
					}
				);
				if (response?.data) {
					setInputValue(response.data[label]);
				}
			} catch (error: any) {
				console.error("Error fetching data", error);
				if (error.response) {
					toast.show({
						title: "Error",
						content: error.response.data.error,
						duration: 3000,
					});
				}
			}
		};

		fetchData();
	}, []);
	return (
		<div className='col-sm-6'>
			<div className='d-flex align-items-center rounded border px-3 py-2'>
				<p className='mb-0'>
					<i className={`bi ${iconClass} fa-fw me-2`} />
					{label}:
					<input
						value={inputValue}
						onKeyUp={handleValuePost}
						onChange={handleValueChange}
					/>
				</p>
			</div>
		</div>
	);
};

export default ProfileItem;
