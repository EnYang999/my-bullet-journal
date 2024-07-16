import React from "react";
import { Link, Element } from "react-scroll";
// import SuggestionPage from "./SuggestionPage";
import WelcomePage from "./WelcomePage";
// import SymptomForm from "./SymptomForm";
import { Box } from "@mui/material";
import { UserProvider } from "./UserContext";
import ConversationPage from "./ConversationPage";
import PatientProfile from "./patientProfile";
const FullMedical: React.FC = () => {
	return (
		<UserProvider>
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
							(e.currentTarget as HTMLElement).style.backgroundColor =
								"#FFB380";
							(e.currentTarget as HTMLElement).style.boxShadow =
								"0px 8px 16px rgba(0, 0, 0, 0.2)";
						}}
						onMouseLeave={(e) => {
							(e.currentTarget as HTMLElement).style.backgroundColor =
								"#FFE0B5";
							(e.currentTarget as HTMLElement).style.boxShadow =
								"0px 4px 8px rgba(0, 0, 0, 0.1)";
						}}
					>
						Welcome
					</Link>

					<Link
						to='patient'
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
							(e.currentTarget as HTMLElement).style.backgroundColor =
								"#FFB380";
							(e.currentTarget as HTMLElement).style.boxShadow =
								"0px 8px 16px rgba(0, 0, 0, 0.2)";
						}}
						onMouseLeave={(e) => {
							(e.currentTarget as HTMLElement).style.backgroundColor =
								"#FFE0B5";
							(e.currentTarget as HTMLElement).style.boxShadow =
								"0px 4px 8px rgba(0, 0, 0, 0.1)";
						}}
					>
						Patient Profile
					</Link>

					<Link
						to='AIChat'
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
							(e.currentTarget as HTMLElement).style.backgroundColor =
								"#FFB380";
							(e.currentTarget as HTMLElement).style.boxShadow =
								"0px 8px 16px rgba(0, 0, 0, 0.2)";
						}}
						onMouseLeave={(e) => {
							(e.currentTarget as HTMLElement).style.backgroundColor =
								"#FFE0B5";
							(e.currentTarget as HTMLElement).style.boxShadow =
								"0px 4px 8px rgba(0, 0, 0, 0.1)";
						}}
					>
						AI Chat
					</Link>
				</Box>

				<Element name='welcome' style={{ height: "100vh", width: "100vw" }}>
					<WelcomePage />
				</Element>
				<Element name='patient' style={{ minHeight: "100vh", width: "100vw" }}>
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
	);
};

export default FullMedical;
