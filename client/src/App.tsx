// import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingsection/LandingPage";

import Login from "./components/login/login";

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
