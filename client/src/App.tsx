import "./App.css";
import { SeptemberWeek } from "../src/components/SeptemberWeek/SeptemberWeek";
import RabbitStamp from "./components/rabbitstamp/rabbitstamp";
import Monday from "./components/monday/Monday";
function App() {
	return (
		<>
			{/* <RabbitStamp stampWidth={10} /> */}
			{/* <SeptemberWeek className={"temp_1"} /> */}
			<Monday />
		</>
	);
}

export default App;
