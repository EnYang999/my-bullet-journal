// import "./App.css";
import { Route, Routes } from "react-router-dom";
import SeptemberWeek4 from "./components/SeptemberWeekComputer/septemberweek4";
import SeptemberWeek1 from "./components/SeptemberWeekComputer/septemberweek1";
import LandingPage from "./components/landingsection/LandingPage";
import SeptemberWeek3 from "./components/SeptemberWeekComputer/septemberweek3";
import SeptemberWeek2 from "./components/SeptemberWeekComputer/septemberweek2";
import AprilWeek1 from "./components/AprilWeek/aprilweek1";
import Login from "./components/login/login";
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/themes'>
					<Route index element={<AprilWeek1 />} />
					<Route path=':year'>
						<Route index element={<SeptemberWeek1 />} />
						<Route path=':month'>
							<Route index element={<SeptemberWeek1 />} />
							<Route path='week-1' element={<SeptemberWeek1 />} />
							<Route path='week-2' element={<SeptemberWeek2 />} />
							<Route path='week-3' element={<SeptemberWeek3 />} />
							<Route path='week-4' element={<SeptemberWeek4 />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
