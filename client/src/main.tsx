import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./components/scss/theme.scss";
import "./components/scss/fontfamily.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./components/scss/themebau/_themebau.scss";
import "flickity/dist/flickity.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
