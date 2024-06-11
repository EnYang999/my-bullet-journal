// Never use
import axios from "axios";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import {
	API_ENDPOINT,
	APP_BACKEND_PORT,
	APP_TODO_POST,
	APP_TODO_API,
	APP_AUTHENTICATE_TOKEN_NAME,
} from "../../../../common/constants";
import { toast } from "../errortoast/ErrorToastManager";
const Logout = async () => {
	const cookies = new Cookies();
	const bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);
	useEffect(() => {
		async () => {
			try {
				const response = await axios.get(
					`${API_ENDPOINT}${APP_BACKEND_PORT}${APP_TODO_API}${APP_TODO_POST}`,
					{
						headers: { Authorization: `Bearer ${bearToken}` },
					}
				);
				if (response.status == 200) {
					window.location.href = "/login";
				} else {
					console.error("Logout failed");
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
	});

	return <div>return to home page...</div>;
};
export default Logout;
