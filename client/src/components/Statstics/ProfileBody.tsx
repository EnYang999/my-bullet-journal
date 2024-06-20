import { useState, useEffect } from "react";
import ProfileItem from "./ProfileItem";
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
const ProfileBody = () => {
	const [bio, setBio] = useState<string>("");
	const cookies = new Cookies();
	const bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);
	const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBio(e.target.value);
	};
	const handleBioPost = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.key === "Enter") {
			try {
				const res = await axios.put(
					`${API_ENDPOINT}${APP_PROFILE_API}${APP_PROFILE_PUT}`,
					{
						bio: bio,
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
					setBio(response.data.profile["bio"]);
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
	}, []);
	return (
		<div className='card'>
			{/* <!-- Card header START --> */}
			<div className='card-header border-0 pb-0'>
				<h5 className='card-title'> Profile Info</h5>
			</div>
			{/* <!-- Card header END --> */}
			{/* <!-- Card body START --> */}
			<div className='card-body'>
				<div className='rounded border px-3 py-2 mb-3'>
					<div className='d-flex align-items-center justify-content-between'>
						<h6>Overview</h6>
					</div>

					<label htmlFor='bio' />
					<input
						type='text'
						id='bio'
						name='bio'
						value={bio}
						onKeyUp={handleBioPost}
						onChange={handleBioChange}
						placeholder='Input Your Introduction'
						style={{ border: "none", width: "100%", height: "100%" }}
					/>
				</div>
				<div className='row g-4'>
					<ProfileItem
						iconClass='bi-heart'
						label='interests'
						placeholder='Input your Interests'
					/>
					<ProfileItem
						iconClass='bi-award'
						label='goals'
						placeholder='Input your Goals'
					/>
					<ProfileItem
						iconClass='bi-bookmark-star'
						label='habits'
						placeholder='Input your Habits'
					/>
					<ProfileItem
						iconClass='bi-card-text'
						label='notes'
						placeholder='Write down some Notes?'
					/>
				</div>
			</div>
			{/* <!-- Card body END --> */}
		</div>
	);
};

export default ProfileBody;
