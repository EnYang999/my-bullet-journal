import { useState } from "react";
import "./App.css";
import { SeptemberWeek } from "../src/components/SeptemberWeek/SeptemberWeek";
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<SeptemberWeek className={"temp_1"} />
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
