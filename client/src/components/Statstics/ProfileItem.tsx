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
	placeholder: string;
}

const ProfileItem: React.FC<Props> = ({ iconClass, label, placeholder }) => {
	const [inputValue, setInputValue] = useState<string>("");
	const cookies = new Cookies();
	const bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);

	// Helper function to capitalize label
	const capitalize = (str: string): string => {
		return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
	};

	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleValuePost = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.key === "Enter") {
			try {
				const res = await axios.put(
					`${API_ENDPOINT}${APP_PROFILE_API}${APP_PROFILE_PUT}`,
					{
						[label]: inputValue,
					},
					{
						headers: {
							Authorization: `Bearer ${bearToken}`,
						},
					}
				);
				console.log(res);
			} catch (error: any) {
				console.log("Error from client:", error);
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
					`${API_ENDPOINT}${APP_PROFILE_API}${APP_PROFILE_GET_BY_OWN}`,
					{
						headers: { Authorization: `Bearer ${bearToken}` },
					}
				);
				if (response?.data) {
					setInputValue(response.data.profile[label]);
				}
			} catch (error: any) {
				console.error("Error fetching data:", error);
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
	}, []); // Added bearToken and label to the dependencies

	return (
		<div className='col-sm-6'>
			<div className='d-flex align-items-center rounded border px-3 py-2'>
				<p className='mb-0'>
					<i className={`bi ${iconClass} fa-fw me-2`} />
					{capitalize(label)}:
					<input
						value={inputValue}
						onKeyUp={handleValuePost}
						onChange={handleValueChange}
						placeholder={placeholder}
						style={{ border: "none", width: "100%", height: "100%" }}
					/>
				</p>
			</div>
		</div>
	);
};

export default ProfileItem;
