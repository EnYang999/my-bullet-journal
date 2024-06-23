import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";

// Polished messages
const messages = [
	" Analyzing the data... Please wait.",
	" Based on our analysis, here are your options:",
	" Emergency Room Wait Time at University Hospital: Given your severity, age, and other factors, expect a wait time of 5 to 8 hours.",
	" You may visit a Walk-in Clinic instead.",
	" Walk-in Clinic #1: Phone: 226-123-4567 | Address: 12 ABC Street, City.",
];

const SuggestionPage: React.FC = () => {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
	const [messageParts, setMessageParts] = useState<string[]>([]);
	const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
	const [showNextMessage, setShowNextMessage] = useState(false);

	useEffect(() => {
		if (currentMessageIndex < messages.length) {
			const message = messages[currentMessageIndex];
			let currentIndex = 0;
			const intervalId = setInterval(() => {
				if (currentIndex < message.length) {
					setMessageParts((prev) => [...prev, message[currentIndex]]);
					currentIndex++;
				} else {
					clearInterval(intervalId);
					setShowNextMessage(true);
				}
			}, 100); // Adjust the speed of word appearance here
		}
	}, [currentMessageIndex]);

	useEffect(() => {
		if (showNextMessage && currentMessageIndex < messages.length) {
			const timerId = setTimeout(() => {
				setDisplayedMessages((prev) => [...prev, messageParts.join("")]);
				setCurrentMessageIndex((prev) => prev + 1);
				setShowNextMessage(false);
				setMessageParts([]);
			}, 5000); // 5 seconds delay before showing the next message
			return () => clearTimeout(timerId);
		}
	}, [showNextMessage, currentMessageIndex, messageParts]);

	return (
		<Box
			p={3}
			display='flex'
			alignItems='center'
			justifyContent='center'
			minHeight='100vh'
			style={{ backgroundColor: "#f5f5f5" }}
		>
			<Paper
				elevation={3}
				style={{ padding: "20px", maxWidth: "600px", width: "100%" }}
			>
				{displayedMessages.map((msg, index) => (
					<Typography key={index} variant='h5' gutterBottom>
						{msg}
					</Typography>
				))}
				<Typography variant='h5' gutterBottom>
					{messageParts.join("")}
				</Typography>
			</Paper>
		</Box>
	);
};

export default SuggestionPage;
