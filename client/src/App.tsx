// import "./App.css";
import { Route, Routes } from "react-router-dom";
import SeptemberWeek4 from "./components/SeptemberWeekComputer/septemberweek4";
import SeptemberWeek1 from "./components/SeptemberWeekComputer/septemberweek1";
import LandingPage from "./components/landingsection/LandingPage";
import SeptemberWeek3 from "./components/SeptemberWeekComputer/septemberweek3";
import SeptemberWeek2 from "./components/SeptemberWeekComputer/septemberweek2";
import AprilWeek1 from "./components/AprilWeek/aprilweek1";
import AprilWeek2 from "./components/AprilWeek/aprilweek2";
import AprilWeek3 from "./components/AprilWeek/aprilweek3";
import AprilWeek4 from "./components/AprilWeek/aprilweek4";
import Login from "./components/login/login";
import AprilIndex from "./components/AprilWeek";
import JanIndex from "./components/JanuaryWeek";
import FebIndex from "./components/FebWeek";
import Index from "./components/index";
import marchIndex from "./assets/mar2022/2022MarDigitalBujo.png";
import mayIndex from "./assets/may2021/2021MayDigitalBujo.png";
import JuneIndex from "./assets/june2021/2021JuneDigitalBujo.png";
import JulyIndex from "./assets/july2020/2020JulyBujoTemplate.png";
import AugIndex from "./assets/aug2022/2022AugustDigitalBujo.png";
import SepIndex from "./assets/img/2023SeptemberDigitalBujo.png";
import OctIndex from "./assets/oct2020/2020OctBujoTemplate.png";
function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/themes'>
				{/* Default route for /themes */}
				<Route index element={<AprilWeek1 />} />

				{/* Route for /themes/:year */}
				<Route path='01/index' element={<JanIndex />} />
				<Route path='02/index' element={<FebIndex />} />
				<Route
					path='03/index'
					element={
						<Index sourceImage={marchIndex} month='March' color='#6566AE' />
					}
				/>

				<Route
					path='05/index'
					element={<Index sourceImage={mayIndex} month='May' color='#A5CC8D' />}
				/>
				<Route
					path='06/index'
					element={
						<Index sourceImage={JuneIndex} month='June' color='#969BB7' />
					}
				/>
				<Route
					path='07/index'
					element={
						<Index sourceImage={JulyIndex} month='July' color='#9197BB' />
					}
				/>
				<Route
					path='08/index'
					element={
						<Index sourceImage={AugIndex} month='August' color='#0077BB' />
					}
				/>

				<Route
					path='10/index'
					element={
						<Index sourceImage={OctIndex} month='October' color='#37658A' />
					}
				/>
				<Route path='11/index' element={<FebIndex />} />
				<Route path='12/index' element={<FebIndex />} />

				{/* Routes for /themes/:year/4/week-1 to week-4 */}
				<Route path='04/index' element={<AprilIndex />} />
				<Route path='04/week1' element={<AprilWeek1 />} />
				<Route path='04/week2' element={<AprilWeek2 />} />
				<Route path='04/week3' element={<AprilWeek3 />} />
				<Route path='04/week4' element={<AprilWeek4 />} />

				{/* Routes for /themes/:year/9/week-1 to week-4 */}
				<Route
					path='09/index'
					element={
						<Index sourceImage={SepIndex} month='September' color='#9CCDF0' />
					}
				/>
				<Route path='09/week1' element={<SeptemberWeek1 />} />
				<Route path='09/week2' element={<SeptemberWeek2 />} />
				<Route path='09/week3' element={<SeptemberWeek3 />} />
				<Route path='09/week4' element={<SeptemberWeek4 />} />
			</Route>
		</Routes>
	);
}

export default App;
