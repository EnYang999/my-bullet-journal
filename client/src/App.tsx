// import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingsection/LandingPage";
import ProfilePersonalInformation from "./components/Statstics/ProfilePersonalInformation";
import Login from "./components/login/login";
import ResetPasswordNow from "./components/login/ResetPasswordNow";
import BookTab from "./components/BookTab/BookTab";
import FullPage from "./components/Full-Page/FullPage";
import UserProfileWrapper from "./components/UserProfile/UserProfileWrapper";
import ResetPassword from "./components/login/ResetPassword";
// import Avatar from "./components/Statstics/Avatar";
// import Logout from "./components/login/Logout";
import PermissionDeniedPage from "./components/ErrorPage/PermissionPage";
// import ControlledCheckboxInput from "./components/todolines/todoComp";
import SymptomForm from "./components/medical/SymptomForm";
import WelcomePage from "./components/medical/WelcomePage";
import FullMedical from "./components/medical/FullMedical";
import SuggestionPage from "./components/medical/SuggestionPage";
function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			{/* <Route path='/logout' element={<Logout />} /> */}
			<Route path='/login' element={<Login />} />
			<Route path='/about-us' element={<FullPage />} />
			<Route path='/profile' element={<ProfilePersonalInformation />} />
			<Route path='/permissiondeniedpage' element={<PermissionDeniedPage />} />
			<Route path='/themes'>
				<Route index element={<BookTab />} />
				<Route path=':month/:week' element={<BookTab />} />
			</Route>
			<Route path='/user/:userId' element={<UserProfileWrapper />} />
			<Route path='/reset-password' element={<ResetPassword />} />
			<Route
				path='/reset-password-now/:resetPasswordToken'
				element={<ResetPasswordNow />}
			/>
			<Route path='/month-planner' element={<SymptomForm />} />
			<Route path='/habits' element={<FullMedical />} />
		</Routes>
	);
}

export default App;
