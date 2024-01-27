import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";
import { useParams } from "react-router-dom";
import SeptemberWeek4 from "../September/week4";
import SeptemberWeek1 from "../September/week1";
import SeptemberWeek3 from "../September/week3";
import SeptemberWeek2 from "../September/week2";
import AprilWeek1 from "../AprilWeek/aprilweek1";
import AprilWeek2 from "../AprilWeek/aprilweek2";
import AprilWeek3 from "../AprilWeek/aprilweek3";
import AprilWeek4 from "../AprilWeek/aprilweek4";
const BookTab = () => {
	const { month, week } = useParams();

	return (
		<div className='week-container-layout'>
			<div className={`container py-8 px-6 d-flex week-box-container `}>
				<SidePage className='sidebar' />
				<RightSideBar className='rightside' />
				<SeptemberWeek4 />
			</div>
		</div>
	);
};
export default BookTab;
