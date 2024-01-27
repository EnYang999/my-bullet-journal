import React from "react";
import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";
import { useParams } from "react-router-dom";
const BookTab = () => {
	const { month, week } = useParams();

	if (month && week) {
		const monthMap: { [key: string]: string } = {
			"01": "January",
			"02": "February",
			"03": "March",
			"04": "April",
			"05": "May",
			"06": "June",
			"07": "July",
			"08": "August",
			"09": "September",
			"10": "October",
			"11": "November",
			"12": "December",
		};

		const componentPath = `../${monthMap[month]}/${week}`;
		const DynamicComponent = React.lazy(() => import(`${componentPath}`));

		return (
			<div className='week-container-layout'>
				<div
					className={`container py-8 px-6 d-flex week-box-container ${
						monthMap[month].toLowerCase() + "-" + week
					}`}
				>
					<SidePage className='sidebar' />
					<RightSideBar className='rightside' />
					<React.Suspense fallback={<div>Loading...</div>}>
						<DynamicComponent />
					</React.Suspense>
				</div>
			</div>
		);
	} else {
		console.error("Month is undefined"); // add additional page
	}
};

export default BookTab;
