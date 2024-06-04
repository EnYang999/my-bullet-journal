// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingsection/LandingPage";

import Login from "./components/login/login";
import Statstics from "./components/Statstics/Statstics";
import ResetPasswordNow from "./components/login/ResetPasswordNow";
import BookTab from "./components/BookTab/BookTab";
import FullPage from "./components/Full-Page/FullPage";
import UserProfileWrapper from "./components/UserProfile/UserProfileWrapper";
import ResetPassword from "./components/login/ResetPassword";
function App() {
	return (
		<Routes>
			{/* <Route path='/' element={<LandingPage />} /> */}
			<Route path='/login' element={<Login />} />
			<Route path='/about-us' element={<FullPage />} />
			<Route path='/' element={<Statstics />} />
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
		</Routes>
	);
}

export default App;
