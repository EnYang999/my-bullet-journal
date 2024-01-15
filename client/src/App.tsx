// import "./App.css";
import RabbitStamp from "./components/decorationelements/rabbitstamp/rabbitstamp";
import Monday from "./components/SeptemberWeekComputer/Monday";
import Tuesday from "./components/SeptemberWeekComputer/Tuesday";
import Wednesday from "./components/SeptemberWeekComputer/Wednesday";
import Thursday from "./components/SeptemberWeekComputer/Thursday";
import Friday from "./components/SeptemberWeekComputer/Friday";
import Weekend from "./components/SeptemberWeekComputer/Weekend";
import SeptemberWeekMobile from "./components/abandontest/SeptemberWeekMobile/SeptemberWeekMobile";
import SeptemberWeekComputer from "./components/SeptemberWeekComputer/septemberweekcomputer";
import SidePage from "./components/sidebarpage/SidePage";
import LandingAbout from "./components/landingsection/LandingAbout";
import LandingSectiona from "./components/landingsection/LandingSectiona";
import LandingSectionb from "./components/landingsection/LandingSectionb";
import LandingHeader from "./components/landingsection/LandingHeader";
import LandingNavbar from "./components/landingsection/LandingNavbar";
import LandingMenu from "./components/landingsection/LandingMenu";
import LandingDish from "./components/landingsection/LandingDish";
import LandingTestimonial from "./components/landingsection/LandingPeoplesay";
import LandingGallary from "./components/landingsection/LandingGallary";
function App() {
	return (
		<>
			{/* <LandingNavbar />
			<LandingHeader />
			<LandingSectiona />
			<LandingSectionb />
			<LandingAbout />
			<LandingMenu />
			<LandingDish />
			<LandingTestimonial />
			<LandingGallary /> */}
			<SeptemberWeekComputer />
		</>
	);
}

export default App;
