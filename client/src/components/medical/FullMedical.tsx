import React from "react";
import { Element, Link } from "react-scroll";
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
					style={{ cursor: "pointer", margin: "10px" }}
				>
					Welcome
				</Link>
				<Link
					to='symptom-form'
					smooth
					duration={1000}
					style={{ cursor: "pointer", margin: "10px" }}
				>
					Symptom Form
				</Link>
				<Link
					to='suggestion'
					smooth
					duration={1000}
					style={{ cursor: "pointer", margin: "10px" }}
				>
					Suggestion
				</Link>
			</Box>

			{/* Sections */}
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
