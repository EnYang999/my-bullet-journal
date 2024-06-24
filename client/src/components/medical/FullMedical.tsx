import React from "react";
import { Link, Element } from "react-scroll";
import SuggestionPage from "./SuggestionPage";
import WelcomePage from "./WelcomePage";
import SymptomForm from "./SymptomForm";
import { Box } from "@mui/material";

const FullMedical: React.FC = () => {
	return (
		<Box>
			{/* Navigation Links for scrolling */}
			<Box position='fixed' top='20px' left='20px' zIndex='1000'>
				<Link
					to='welcome'
					smooth
					duration={1000}
					style={{
						cursor: "pointer",
						margin: "10px",
						backgroundColor: "#FFE0B5",
						padding: "10px",
						borderRadius: "6px",
						color: "#EADBC8",
						boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
						transition: "all 0.3s ease-in-out",
					}}
					onMouseEnter={(e) => {
						(e.currentTarget as HTMLElement).style.backgroundColor = "#FFB380";
						(e.currentTarget as HTMLElement).style.boxShadow =
							"0px 8px 16px rgba(0, 0, 0, 0.2)";
					}}
					onMouseLeave={(e) => {
						(e.currentTarget as HTMLElement).style.backgroundColor = "#FFE0B5";
						(e.currentTarget as HTMLElement).style.boxShadow =
							"0px 4px 8px rgba(0, 0, 0, 0.1)";
					}}
				>
					Welcome
				</Link>

				<Link
					to='symptom-form'
					smooth
					duration={1000}
					style={{
						cursor: "pointer",
						margin: "10px",
						backgroundColor: "#FFE0B5",
						padding: "10px",
						borderRadius: "6px",
						color: "#EADBC8",
						boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
						transition: "all 0.3s ease-in-out",
					}}
					onMouseEnter={(e) => {
						(e.currentTarget as HTMLElement).style.backgroundColor = "#FFB380";
						(e.currentTarget as HTMLElement).style.boxShadow =
							"0px 8px 16px rgba(0, 0, 0, 0.2)";
					}}
					onMouseLeave={(e) => {
						(e.currentTarget as HTMLElement).style.backgroundColor = "#FFE0B5";
						(e.currentTarget as HTMLElement).style.boxShadow =
							"0px 4px 8px rgba(0, 0, 0, 0.1)";
					}}
				>
					Symptom Form
				</Link>

				<Link
					to='suggestion'
					smooth
					duration={1000}
					style={{
						cursor: "pointer",
						margin: "10px",
						backgroundColor: "#FFE0B5",
						padding: "10px",
						borderRadius: "6px",
						color: "#EADBC8",
						boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
						transition: "all 0.3s ease-in-out",
					}}
					onMouseEnter={(e) => {
						(e.currentTarget as HTMLElement).style.backgroundColor = "#FFB380";
						(e.currentTarget as HTMLElement).style.boxShadow =
							"0px 8px 16px rgba(0, 0, 0, 0.2)";
					}}
					onMouseLeave={(e) => {
						(e.currentTarget as HTMLElement).style.backgroundColor = "#FFE0B5";
						(e.currentTarget as HTMLElement).style.boxShadow =
							"0px 4px 8px rgba(0, 0, 0, 0.1)";
					}}
				>
					Suggestion
				</Link>
			</Box>

			<Element name='welcome' style={{ height: "100vh", width: "100vw" }}>
				<WelcomePage />
			</Element>

			<Element name='symptom-form' style={{ height: "100vh", width: "100vw" }}>
				<SymptomForm />
			</Element>

			<Element name='suggestion' style={{ height: "100vh", width: "100vw" }}>
				<SuggestionPage />
			</Element>
		</Box>
	);
};

export default FullMedical;
