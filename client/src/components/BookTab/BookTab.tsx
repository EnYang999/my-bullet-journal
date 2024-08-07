import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";
import ErrorPage from "../ErrorPage/ErrorPage";
import { componentMap } from "../../utils/componentMap";

const BookTab: React.FC = () => {
	const { month, week } = useParams<{ month: string; week: string }>();

	const [Component, setComponent] = useState<React.LazyExoticComponent<
		React.ComponentType<any>
	> | null>(null);
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

	// useEffect(() => {
	// 	if (!month || !week || !(month in monthMap) || !/^week[1-5]$/.test(week)) {
	// 		setComponent(() => () => (
	// 			<ErrorPage
	// 				title='Invalid Parameters'
	// 				message='The specified month or week is invalid or missing from the URL.'
	// 			/>
	// 		));
	// 		return;
	// 	}

	// 	const componentPath = `${monthMap[month]}/${week}`;
	// 	// import(`../${componentPath}`)
	// 	// 	.then((mod) => setComponent(() => mod.default))
	// 	// 	.catch((error) => {
	// 	// 		console.error(
	// 	// 			`Error loading module at path: ../${componentPath}`,
	// 	// 			error
	// 	// 		);
	// 	// 		setComponent(() => () => (
	// 	// 			<ErrorPage
	// 	// 				title='Content Not Found'
	// 	// 				message={`The page for ${monthMap[month]} ${week} hasn't been built yet.`}
	// 	// 			/>
	// 	// 		));
	// 	// 	});

	// 	// const DynamicComponent = componentMap[componentPath];
	// 	const loadComponent = async () => {
	// 		try {
	// 			// const mod = await import(`../${componentPath}`);
	// 			const DynamicComponent = await componentMap[componentPath];
	// 			setComponent(() => DynamicComponent);
	// 		} catch (error) {
	// 			console.error(
	// 				`Error loading module at path: ../${componentPath}`,
	// 				error
	// 			);
	// 			setComponent(() => () => (
	// 				<ErrorPage
	// 					title='Content Not Found'
	// 					message={`The page for ${monthMap[month]} ${week} hasn't been built yet.`}
	// 				/>
	// 			));
	// 		}
	// 	};
	// 	loadComponent();
	// }, [month, week]);

	useEffect(() => {
		if (
			!month ||
			!week ||
			!(month in monthMap) ||
			!/^week[1-5]$|^index$/.test(week)
		) {
			setComponent(() =>
				React.lazy(() =>
					Promise.resolve({
						default: () => (
							<ErrorPage
								title='Invalid Parameters'
								message='The specified month or week is invalid or missing from the URL.'
							/>
						),
					})
				)
			);
			return;
		}
		const componentKey = `${monthMap[month].toLowerCase()}/${week}`;
		if (componentMap[componentKey]) {
			const loadComponent = componentMap[componentKey];
			setComponent(React.lazy(loadComponent));
		} else {
			setComponent(() =>
				React.lazy(() =>
					Promise.resolve({
						default: () => (
							<ErrorPage
								title='Content Not Found'
								message={`The page for ${monthMap[month]} ${week} hasn't been built yet.`}
							/>
						),
					})
				)
			);
		}
	}, [month, week]);
	// Handle the loading state
	if (!Component) {
		return <Suspense fallback={<div>Loading...</div>} />; // Adjust this as needed
	}

	return (
		<div className='week-container-layout'>
			<div
				className={`container py-8 px-6 d-flex week-box-container align-items-center justify-content-center w-100 ${
					monthMap[month as string]?.toLowerCase() + "-" + week
				} ${week} ${monthMap[month as string]?.toLowerCase()}`}
			>
				<SidePage className='sidebar' />
				<RightSideBar className='rightside' />
				<Suspense fallback={<div>Loading...</div>}>
					<Component />
				</Suspense>
			</div>
		</div>
	);
};

export default BookTab;
