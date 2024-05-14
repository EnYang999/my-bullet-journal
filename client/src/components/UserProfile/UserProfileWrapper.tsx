import React from "react";
import { useParams } from "react-router-dom";
import UserProfile from "./UserProfile"; // Adjust the import path as necessary
import ErrorPage from "../ErrorPage/ErrorPage";

const UserProfileWrapper: React.FC = () => {
	// Using useParams to access the userId route parameter
	const { userId } = useParams<{ userId: string }>();

	return userId ? (
		<UserProfile userId={userId} />
	) : (
		<ErrorPage
			title={"Error"}
			message={"The user is missing"}
			recommendation={"Input the valid userID"}
		/>
	);
};

export default UserProfileWrapper;
