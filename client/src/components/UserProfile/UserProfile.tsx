import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	API_ENDPOINT,
	APP_PROFILE_API,
	APP_PROFILE_GET_BY_USERID,
} from "../../../../common/constants";
type UserProfileProps = {
	userId: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
	const [user, setUser] = useState({
		avatar: "",
		username: "",
		bio: "",
		totalTodos: 0,
		finishedTodos: 0,
	});

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await axios.get(
					`${API_ENDPOINT}${APP_PROFILE_API}${APP_PROFILE_GET_BY_USERID}/:${userId}`
				);
				setUser(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchUser();
	}, [userId]);

	return (
		<div className='user-profile-container'>
			<img src={user.avatar} alt='User Avatar' />
			<div className='user-info'>
				<p>{user.username}</p>
				<p>Total Todos: {user.totalTodos}</p>
				<p>Finished Todos: {user.finishedTodos}</p>
			</div>
			<p className='user-bio'>{user.bio}</p>
		</div>
	);
};

export default UserProfile;
