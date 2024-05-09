import React, { useState, useEffect } from "react";
import axios from "axios";

type UserProfileProps = {
	userId: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
	const [user, setUser] = useState({
		avatar: "",
		bio: "",
		totalTodos: 0,
		finishedTodos: 0,
	});

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await axios.get(
					`http://localhost:8000/user/${userId}`
				);
				setUser(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchUser();
	}, [userId]);

	return (
		<div>
			<img src={user.avatar} alt='User Avatar' />
			<p>{user.bio}</p>
			<p>Total Todos: {user.totalTodos}</p>
			<p>Finished Todos: {user.finishedTodos}</p>
		</div>
	);
};

export default UserProfile;
