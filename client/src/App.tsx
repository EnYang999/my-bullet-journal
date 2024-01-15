import "./App.css";
import RabbitStamp from "./components/decorationelements/rabbitstamp/rabbitstamp";
import Monday from "./components/monday/Monday";
import Tuesday from "./components/tuesday/Tuesday";
import Wednesday from "./components/wednesday/Wednesday";
import Thursday from "./components/thursday/Thursday";
import Friday from "./components/friday/Friday";
import Weekend from "./components/weekend/Weekend";
import SeptemberWeekMobile from "./components/SeptemberWeekMobile/SeptemberWeekMobile";
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
