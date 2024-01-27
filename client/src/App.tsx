// import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingsection/LandingPage";

import Login from "./components/login/login";
import AprilIndex from "./assets/april2022/2022AprDigitalBujo.png";
import Index from "./components/index";
import JanIndex from "./assets/jan2024/2024JanuaryDigitalPlanner.png";
import FebIndex from "./assets/feb2024/2024FeburaryDigitalPlanner.png";
import marchIndex from "./assets/mar2022/2022MarDigitalBujo.png";
import mayIndex from "./assets/may2021/2021MayDigitalBujo.png";
import JuneIndex from "./assets/june2021/2021JuneDigitalBujo.png";
import JulyIndex from "./assets/july2020/2020JulyBujoTemplate.png";
import AugIndex from "./assets/aug2022/2022AugustDigitalBujo.png";
import SepIndex from "./assets/img/2023SeptemberDigitalBujo.png";
import OctIndex from "./assets/oct2020/2020OctBujoTemplate.png";
import NovIndex from "./assets/nov2022/2022NovDigitalBujo.png";
import DecIndex from "./assets/dec2020/2020DecBujoTemplate.png";
import BookTab from "./components/BookTab/BookTab";
function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/themes'>
				<Route index element={<BookTab />} />
				<Route path=':month/:week' element={<BookTab />} />
			</Route>
		</Routes>
	);
}

export default App;
