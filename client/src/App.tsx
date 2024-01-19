// import "./App.css";
import { Route, Routes } from "react-router-dom";
import SeptemberWeek4 from "./components/SeptemberWeekComputer/septemberweek4";
import SeptemberWeek1 from "./components/SeptemberWeekComputer/septemberweek1";
import LandingPage from "./components/landingsection/LandingPage";
import SeptemberWeek3 from "./components/SeptemberWeekComputer/septemberweek3";
import SeptemberWeek2 from "./components/SeptemberWeekComputer/septemberweek2";
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/themes/'>
					<Route index element={<SeptemberWeek1 />} />
					<Route path='week1' element={<SeptemberWeek1 />} />
					<Route path='week2' element={<SeptemberWeek2 />} />
					<Route path='week3' element={<SeptemberWeek3 />} />
					<Route path='week4' element={<SeptemberWeek4 />} />
				</Route>
			</Routes>

			{/* <SeptemberWeek1 /> */}
			{/* <SeptemberWeek3 /> */}
		</>
	);
}

export default App;
