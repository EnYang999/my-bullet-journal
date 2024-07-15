import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useUser } from "./UserContext";

const recommendations: { [key: string]: string[] } = {
	"see a doctor (in person)": [
		"ER#1 : on average 13 hours wait, 12km, phone: 123-456-7890",
		"ER#2: on average 8 hours wait, 19km, phone: 223-456-7891",
		"Urgent Care: opens in 2 hours, 2km, phone: 233-456-7890",
		"Walk-in Clinic: 1st appointment in 1 days, 3km, phone: 234-456-7890",
	],
	"Telemedicine suggest": ["drink hot water and have enough sleep"],
	"Home remedies": ["exercises, swim"],
};

const ConversationPage: React.FC = () => {
	const { name } = useUser();
	const [conversation, setConversation] = useState<string[]>([
		`Bot: What can I help you with, ${name}?`,
	]);
	const [userInput, setUserInput] = useState<string>("");

	const handleUserInputSubmit = () => {
		if (userInput.trim() !== "") {
			setConversation((prev) => [
				...prev,
				`You: I have ${userInput}.`,
				"Bot: Here are a few options: see a doctor (in person), Telemedicine, Home remedies",
			]);
			setUserInput("");
		}
	};

	const handleOptionClick = (option: string) => {
		setConversation((prev) => [
			...prev,
			`You: ${option}.`,
			...recommendations[option].map((rec) => `Bot: ${rec}`),
		]);
	};

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			height='100vh'
			width='100vw'
			style={{ backgroundColor: "#f0f0f0" }}
		>
			<Box
				display='flex'
				flexDirection='column'
				width='100%'
				alignItems='center'
				mt={4}
				style={{ maxHeight: "70vh", overflowY: "auto" }}
			>
				{conversation.map((message, index) => (
					<Box
						key={index}
						display='flex'
						justifyContent={
							message.startsWith("You:") ? "flex-end" : "flex-start"
						}
						width='100%'
						mb={1}
					>
						<Typography
							variant='body1'
							style={{
								backgroundColor: message.startsWith("You:")
									? "#d1e7dd"
									: "#f8d7da",
								padding: "10px",
								borderRadius: "5px",
								maxWidth: "70%",
							}}
						>
							{message}
						</Typography>
					</Box>
				))}
				{conversation[conversation.length - 1] ===
					"Bot: Here are a few options: see a doctor (in person), Telemedicine, Home remedies" && (
					<Box
						display='flex'
						flexDirection='column'
						alignItems='flex-start'
						mt={2}
					>
						{Object.keys(recommendations).map((option) => (
							<Button
								key={option}
								variant='contained'
								color='primary'
								onClick={() => handleOptionClick(option)}
								style={{ margin: "5px" }}
							>
								{option}
							</Button>
						))}
					</Box>
				)}
			</Box>
			<Box mt={2} width='80%'>
				<TextField
					label='Enter your symptom'
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					fullWidth
					margin='normal'
					variant='outlined'
				/>
				<Button
					variant='contained'
					color='primary'
					onClick={handleUserInputSubmit}
					style={{ marginTop: "10px" }}
				>
					Submit
				</Button>
			</Box>
		</Box>
	);
};

export default ConversationPage;
