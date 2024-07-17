import React from "react";
import { Link, Element } from "react-scroll";
// import SuggestionPage from "./SuggestionPage";
import WelcomePage from "./WelcomePage";
// import SymptomForm from "./SymptomForm";
import { Box } from "@mui/material";
import { UserProvider } from "./UserContext";
import ConversationPage from "./ConversationPage";
import PatientProfile from "./patientProfile";
import LanguageSelector from "./LanguageSelector";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
const FullMedical: React.FC = () => {
	return (
		<I18nextProvider i18n={i18n}>
			<UserProvider>
				<Box>
					{/* Navigation Links for scrolling */}
					<Box position='fixed' top='20px' left='20px' zIndex='1000'></Box>
					<LanguageSelector />
					<Element name='welcome' style={{ height: "100vh", width: "100vw" }}>
						<WelcomePage />
					</Element>
					<Element
						name='patient'
						style={{ minHeight: "100vh", width: "100vw" }}
					>
						<PatientProfile
							avatarUrl='https://via.placeholder.com/150'
							age={35}
							weight={75}
							height={180}
							historyOfSurgeries='Appendectomy in 2010'
							allergies='Penicillin'
						/>
					</Element>
					{/* <Element name='suggestion' style={{ height: "100vh", width: "100vw" }}>
					<SuggestionPage />
				</Element> */}
					<Element
						name='suggestion'
						style={{ height: "100vh", width: "100vw", backgroundColor: "#FFF" }}
					>
						<ConversationPage />
					</Element>
				</Box>
			</UserProvider>
		</I18nextProvider>
	);
};

export default FullMedical;
