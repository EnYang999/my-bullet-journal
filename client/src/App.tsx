// import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingsection/LandingPage";

import Login from "./components/login/login";
import AboutMeHeader from "./components/AboutMe/AboutMeHeader";
import Temp from "./components/login/template";
import Tutorial from "./components/login/Tutorial";
import BookTab from "./components/BookTab/BookTab";
import FullPage from "./components/Full-Page/FullPage";
function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/login1' element={<Temp />} />
			<Route path='/login2' element={<Tutorial />} />
			<Route path='/about-us' element={<FullPage />} />
			<Route path='/themes'>
				<Route index element={<BookTab />} />
				<Route path=':month/:week' element={<BookTab />} />
			</Route>
		</Routes>
	);
}

export default App;
