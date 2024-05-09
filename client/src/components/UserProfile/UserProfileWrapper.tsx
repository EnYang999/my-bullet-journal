import React from "react";
import { useParams } from "react-router-dom";
import UserProfile from "./UserProfile"; // Adjust the import path as necessary

const UserProfileWrapper: React.FC = () => {
	// Using useParams to access the userId route parameter
	const { userId } = useParams<{ userId: string }>();

	return userId ? (
		<UserProfile userId={userId} />
	) : (
		<div>User ID is missing</div>
	);
};

export default UserProfileWrapper;
