import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";
import ErrorPage from "../ErrorPage/ErrorPage";

// Simplified version without separate loadError state
const BookTab = () => {
	const { month, week } = useParams<{ month: string; week: string }>();
	const [Component, setComponent] = useState<React.ElementType | null>(null);

	useEffect(() => {
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
		if (!month || !week || !(month in monthMap) || !/^week[1-5]$/.test(week)) {
			setComponent(() => () => (
				<ErrorPage
					title='Invalid Parameters'
					message='The specified month or week is invalid or missing from the URL.'
				/>
			));
			return;
		}

		const componentPath = `${monthMap[month]}/${week}`;
		import(`../${componentPath}`)
			.then((mod) => setComponent(() => mod.default))
			.catch(() =>
				setComponent(() => () => (
					<ErrorPage
						title='Content Not Found'
						message={`The page for ${monthMap[month]} ${week} hasn't been built yet.`}
					/>
				))
			);
	}, [month, week]);

	// Handle the loading state
	if (!Component) {
		return <div>Loading...</div>; // Adjust this as needed
	}

	return (
		<div className='week-container-layout'>
			<div
				className={`container py-8 px-6 d-flex week-box-container align-items-center justify-content-center w-100 ${
					month?.toLowerCase() + "-" + week
				} ${week} ${month?.toLowerCase()}`}
			>
				<SidePage className='sidebar' />
				<RightSideBar className='rightside' />
				<React.Suspense fallback={<div>Loading...</div>}>
					<Component />
				</React.Suspense>
			</div>
		</div>
	);
};

export default BookTab;
