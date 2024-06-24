import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./components/scss/theme.scss";
import "./components/scss/fontfamily.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "flickity/dist/flickity.min.css";
import { BrowserRouter } from "react-router-dom";
/**
 * Custom variables followed by theme variables followed by Bootstrap variables
 * to ensure cascade of styles.
 */

// Bootstrap functions
// import '~bootstrap/scss/functions';

// Theme functions
// import 'theme/functions';

// Custom variables
// import 'user-variables';

// Theme variables
// import "./components/scss/theme/_variables.scss";
// import "./components/scss/theme/_mixins.scss";
// import "./components/scss/theme/_type.scss";

// // import "./components/scss/theme/"
// // Bootstrap core
// // import '~bootstrap/scss/bootstrap';
// import "../node_modules/bootstrap/scss/bootstrap.scss";
// import "../node_modules/bootstrap/scss/_functions.scss";

// // Theme core
// // import 'theme/theme';

// // Custom core
// // import 'user';
// // import "./theme/bundle"; // general
// // import "./themeProfile/profile.scss"; // general for whole user profile
// // import "./themebau/fullpage";
// // import "./components/scss/themebau/_themebau.scss";

// import "./components/scss/theme/_animation.scss";
// import "./components/scss/theme/_svg.scss";
// import "./components/scss/theme/utilities/_background.scss";
// import "./components/scss/theme/utilities/_figure.scss";
// import "./components/scss/theme/_mixins.scss";
// import "./components/scss/theme/_type.scss";
// import "./components/scss/theme/_descorations.scss";
// import "./components/scss/theme/_nav.scss";
// import "./components/scss/theme/vendor/_flickity.scss";
// import "./components/scss/theme/_reboot.scss";
// import "./components/scss/theme/_navbar.scss";
// import "./components/scss/theme/_todolines.scss";
// import "./components/scss/theme/_toast.scss";
// import "./components/scss/theme/_login.scss";
// import "./components/scss/theme/_errorpage.scss";
// // import "./theme/userprofile";
// // import "./theme/popover_hint";

// import "./components/landingsection/LandingPage.scss"; //dfd
// import "./components/scss/themebau/_myfullpage.scss";

// import "./components/scss/theme/_journalbookpage.scss";

// import "./components/January/index.scss";
// import "./components/February/index.scss";
// import "./components/March/index.scss";
// import "./components/May/index.scss";
// import "./components/June/index.scss";
// import "./components/July/index.scss";
// import "./components/August/index.scss";
// import "./components/September/index.scss";
// import "./components/October/index.scss";
// import "./components/November/index.scss";
// import "./components/December/index.scss";
// import "./components/April/index.scss";
// import "./components/April/week1.scss";
// import "./components/April/week2.scss";
// import "./components/April/week3.scss";
// import "./components/April/week4.scss";

// import "./components/scss/theme/_rightsidebar.scss";
// import "./components/scss/theme/_sidebar.scss";

// import "./components/scss/themeProfileBody/_variable.scss";
// import "./components/scss/themeProfileBody/_utilities.scss";
// import "./components/scss/themeProfileBody/_dropdown.scss";
// import "./components/scss/themeProfileBody/_card.scss";
// import "./components/scss/themeProfileBody/_avatar.scss";
// import "./components/scss/themeProfileBody/_card.scss"; // about me
// import "./theme/aboutme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
