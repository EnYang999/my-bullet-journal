import React from "react";
import ProfilePersonalInformation from "../Statstics/ProfilePersonalInformation";
// Assuming you fetch this data from your backend.
const fakeUserData = {
	email: "user@example.com",
};

const UserInfo: React.FC = () => {
	return (
		<section>
			<h2>My Information</h2>
			<p>Email: {fakeUserData.email}</p>
		</section>
	);
};

export default UserInfo;
