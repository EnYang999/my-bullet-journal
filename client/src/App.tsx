// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingsection/LandingPage";

import Login from "./components/login/login";
// import AboutMeHeader from "./components/AboutMe/AboutMeHeader";
import BookTab from "./components/BookTab/BookTab";
import FullPage from "./components/Full-Page/FullPage";
import UserProfileWrapper from "./components/UserProfile/UserProfileWrapper";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/about-us' element={<FullPage />} />
				<Route path='/themes'>
					<Route index element={<BookTab />} />
					<Route path=':month/:week' element={<BookTab />} />
				</Route>
				<Route path='/user/:userId' element={<UserProfileWrapper />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
