import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";
const ProfilePersonalInformation = () => {
	return (
		<div className='container'>
			<div className='row g-4'>
				{/* <!-- Main content START --> */}
				<div className='col-lg-8 vstack gap-4'>
					{/* <!-- Card START --> */}
					<ProfileHeader />
					<ProfileBody />
				</div>
			</div>
		</div>
	);
};

export default ProfilePersonalInformation;
