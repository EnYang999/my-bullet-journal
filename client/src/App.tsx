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
function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/themes'>
				{/* Default route for /themes */}
				<Route index element={<AprilWeek1 />} />

				{/* Route for /themes/:year */}

				{/* Routes for /themes/:year/4/week-1 to week-4 */}
				<Route path='04/week1' element={<AprilWeek1 />} />
				<Route path='04/week2' element={<AprilWeek2 />} />
				<Route path='04/week3' element={<AprilWeek3 />} />
				<Route path='04/week4' element={<AprilWeek4 />} />

				{/* Routes for /themes/:year/9/week-1 to week-4 */}
				<Route path='09/week1' element={<SeptemberWeek1 />} />
				<Route path='09/week2' element={<SeptemberWeek2 />} />
				<Route path='09/week3' element={<SeptemberWeek3 />} />
				<Route path='09/week4' element={<SeptemberWeek4 />} />
			</Route>
		</Routes>
	);
}

export default App;
