import "./App.css";
import { SeptemberWeek } from "../src/components/SeptemberWeek/SeptemberWeek";
import RabbitStamp from "./components/rabbitstamp/rabbitstamp";
import Monday from "./components/monday/Monday";
import Tuesday from "./components/tuesday/Tuesday";
import Wednesday from "./components/wednesday/Wednesday";
import Thursday from "./components/thursday/Thursday";
import Friday from "./components/friday/Friday";
import Weekend from "./components/weekend/Weekend";
import WeekContainer from "./components/week-box-container/WeekContainer";
import SeptemberWeekMobile from "./components/SeptemberWeekMobile/SeptemberWeekMobile";
import SidePage from "./components/sidebarpage/SidePage";
function App() {
	return (
		<>
			{/* <RabbitStamp stampWidth={10} /> */}
			{/* <SeptemberWeek className={"temp_1"} /> */}
			<SeptemberWeekMobile />
			{/* <SidePage /> */}
		</>
	);
}

export default App;
