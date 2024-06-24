import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";
import StatisticsA from "./StatisticsA";
import StatisticsB from "./StatisticsB";
import StatisticsC from "./StatisticsC";
import StatisticsD from "./StatisticsD";
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
				<div className='col-lg-4'>
					<div className='row g-4'>
						<div className='col-sm-6 col-lg-12'>
							<StatisticsA />
						</div>
						<div className='col-sm-6 col-lg-12'>
							<StatisticsB />
						</div>
						<div className='col-sm-6 col-lg-12'>
							<StatisticsC />
						</div>
						<div className='col-sm-6 col-lg-12'>
							<StatisticsD />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePersonalInformation;
