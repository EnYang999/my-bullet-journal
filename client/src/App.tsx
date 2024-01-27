// import "./App.css";
import { Route, Routes } from "react-router-dom";
import SeptemberWeek4 from "./components/SeptemberWeekComputer/septemberweek4";
import SeptemberWeek1 from "./components/SeptemberWeekComputer/septemberweek1";
import LandingPage from "./components/landingsection/LandingPage";
import SeptemberWeek3 from "./components/SeptemberWeekComputer/septemberweek3";
import SeptemberWeek2 from "./components/SeptemberWeekComputer/septemberweek2";
import AprilWeek1 from "./components/AprilWeek/aprilweek1";
import AprilWeek2 from "./components/AprilWeek/aprilweek2";
import AprilWeek3 from "./components/AprilWeek/aprilweek3";
import AprilWeek4 from "./components/AprilWeek/aprilweek4";
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
				<Route
					index
					element={
						<BookTab journalpage={AprilWeek2} customName='april-week-2' />
					}
				/>
				<Route
					path='01/index'
					element={
						<Index sourceImage={JanIndex} month='January' color='#6DABC5' />
					}
				/>
				<Route path='01/week1' element={<AprilWeek1 />} />
				<Route path='01/week2' element={<AprilWeek2 />} />
				<Route path='01/week3' element={<AprilWeek3 />} />
				<Route path='01/week4' element={<AprilWeek4 />} />
				<Route
					path='02/index'
					element={
						<Index sourceImage={FebIndex} month='February' color='#D8E3EB' />
					}
				/>{" "}
				<Route path='02/week1' element={<AprilWeek1 />} />
				<Route path='02/week2' element={<AprilWeek2 />} />
				<Route path='02/week3' element={<AprilWeek3 />} />
				<Route path='02/week4' element={<AprilWeek4 />} />
				<Route
					path='03/index'
					element={
						<Index sourceImage={marchIndex} month='March' color='#6566AE' />
					}
				/>{" "}
				<Route path='03/week1' element={<AprilWeek1 />} />
				<Route path='03/week2' element={<AprilWeek2 />} />
				<Route
					path='03/week3'
					element={
						<BookTab journalpage={AprilWeek3} customName='april-week-3' />
					}
				/>
				<Route path='03/week4' element={<AprilWeek4 />} />
				<Route
					path='04/index'
					element={
						<Index sourceImage={AprilIndex} month='April' color='#9FB8A2' />
					}
				/>{" "}
				<Route
					path='04/week1'
					element={
						<BookTab journalpage={AprilWeek1} customName='april-week-1' />
					}
				/>
				<Route
					path='04/week2'
					element={
						<BookTab journalpage={AprilWeek2} customName='april-week-2' />
					}
				/>
				<Route
					path='04/week3'
					element={
						<BookTab journalpage={AprilWeek3} customName='april-week-3' />
					}
				/>
				<Route
					path='04/week4'
					element={
						<BookTab journalpage={AprilWeek4} customName='april-week-4' />
					}
				/>
				<Route
					path='05/index'
					element={<Index sourceImage={mayIndex} month='May' color='#A5CC8D' />}
				/>{" "}
				<Route path='05/week1' element={<AprilWeek1 />} />
				<Route path='05/week2' element={<AprilWeek2 />} />
				<Route path='05/week3' element={<AprilWeek3 />} />
				<Route path='05/week4' element={<AprilWeek4 />} />
				<Route
					path='06/index'
					element={
						<Index sourceImage={JuneIndex} month='June' color='#969BB7' />
					}
				/>{" "}
				<Route path='06/week1' element={<AprilWeek1 />} />
				<Route path='06/week2' element={<AprilWeek2 />} />
				<Route path='06/week3' element={<AprilWeek3 />} />
				<Route path='06/week4' element={<AprilWeek4 />} />
				<Route
					path='07/index'
					element={
						<Index sourceImage={JulyIndex} month='July' color='#9197BB' />
					}
				/>
				<Route path='07/week1' element={<AprilWeek1 />} />
				<Route path='07/week2' element={<AprilWeek2 />} />
				<Route path='07/week3' element={<AprilWeek3 />} />
				<Route path='07/week4' element={<AprilWeek4 />} />
				<Route
					path='08/index'
					element={
						<Index sourceImage={AugIndex} month='August' color='#0077BB' />
					}
				/>
				<Route path='08/week1' element={<AprilWeek1 />} />
				<Route path='08/week2' element={<AprilWeek2 />} />
				<Route path='08/week3' element={<AprilWeek3 />} />
				<Route path='08/week4' element={<AprilWeek4 />} />
				<Route
					path='09/index'
					element={
						<Index sourceImage={SepIndex} month='September' color='#9CCDF0' />
					}
				/>
				<Route
					path='09/week1'
					element={
						<BookTab
							journalpage={SeptemberWeek1}
							customName='september-week-1'
						/>
					}
				/>
				<Route
					path='09/week2'
					element={
						<BookTab
							journalpage={SeptemberWeek2}
							customName='september-week-2'
						/>
					}
				/>
				<Route
					path='09/week3'
					element={
						<BookTab
							journalpage={SeptemberWeek3}
							customName='september-week-3'
						/>
					}
				/>
				<Route
					path='09/week4'
					element={
						<BookTab
							journalpage={SeptemberWeek4}
							customName='september-week-4'
						/>
					}
				/>
				<Route
					path='10/index'
					element={
						<Index sourceImage={OctIndex} month='October' color='#37658A' />
					}
				/>
				<Route path='10/week1' element={<SeptemberWeek1 />} />
				<Route path='10/week2' element={<AprilWeek2 />} />
				<Route path='10/week3' element={<AprilWeek3 />} />
				<Route path='10/week4' element={<AprilWeek4 />} />
				<Route
					path='11/index'
					element={
						<Index sourceImage={NovIndex} month='November' color='#DFDED7' />
					}
				/>
				<Route path='11/week1' element={<AprilWeek1 />} />
				<Route path='11/week2' element={<AprilWeek2 />} />
				<Route path='11/week3' element={<AprilWeek3 />} />
				<Route path='11/week4' element={<AprilWeek4 />} />
				<Route
					path='12/index'
					element={
						<Index sourceImage={DecIndex} month='December' color='#E9AE6A' />
					}
				/>
				<Route path='12/week1' element={<AprilWeek1 />} />
				<Route path='12/week2' element={<AprilWeek2 />} />
				<Route path='12/week3' element={<AprilWeek3 />} />
				<Route path='12/week4' element={<AprilWeek4 />} />
			</Route>
		</Routes>
	);
}

export default App;
