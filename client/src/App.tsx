// import "./App.css";
import SeptemberWeek4 from "./components/SeptemberWeekComputer/septemberweek4";
import SeptemberWeek1 from "./components/SeptemberWeekComputer/septemberweek1";
import LandingAbout from "./components/landingsection/LandingAbout";
import LandingSectiona from "./components/landingsection/LandingSectiona";
import LandingSectionb from "./components/landingsection/LandingSectionb";
import LandingHeader from "./components/landingsection/LandingHeader";
import LandingNavbar from "./components/landingsection/LandingNavbar";
import LandingMenu from "./components/landingsection/LandingMenu";
import LandingDish from "./components/landingsection/LandingDish";
import LandingTestimonial from "./components/landingsection/LandingPeoplesay";
import LandingGallary from "./components/landingsection/LandingGallary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeptemberWeek3 from "./components/SeptemberWeekComputer/septemberweek3";
import SeptemberWeek2 from "./components/SeptemberWeekComputer/septemberweek2";
function App() {
	return (
		<>
			<LandingNavbar />
			<LandingHeader />
			<LandingSectiona />
			<LandingSectionb />
			<LandingAbout />
			<LandingMenu />
			<LandingDish />
			<LandingTestimonial />
			<LandingGallary />
			{/* <SeptemberWeek1 /> */}
			{/* <SeptemberWeek3 /> */}
		</>
	);
}

export default App;
