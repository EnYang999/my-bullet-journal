import LandingAbout from "./LandingAbout";
import LandingSectiona from "./LandingSectiona";
import LandingSectionb from "./LandingSectionb";
import LandingHeader from "./LandingHeader";
import LandingNavbar from "./LandingNavbar";
import LandingMenu from "./LandingMenu";
import LandingDish from "./LandingDish";
import LandingTestimonial from "./LandingPeoplesay";
import LandingGallary from "./LandingGallary";
import LandingFooter from "./LandingFooter";
const LandingPage = () => {
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
			<LandingFooter />
		</>
	);
};

export default LandingPage;
