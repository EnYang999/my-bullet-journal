import React, { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";

const messages = [
	" Analyzing the data... Please wait...",
	" Based on our analysis, here are your options:",
	" Emergency Room Wait Time at University Hospital: Depending on your severity and age, you will wait from 5 to 8 hours.",
	" You may visit a Walk-in Clinic instead.",
	" Walk-in Clinic #1: Phone: 226-123-4567 | Address: 12 ABC Street, City.",
];

const SuggestionPage: React.FC = () => {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
	const [currentMessage, setCurrentMessage] = useState("");
	const [isComplete, setIsComplete] = useState(false);

	useEffect(() => {
		if (!isComplete && currentMessageIndex < messages.length) {
			const message = messages[currentMessageIndex];
			const intervalId = setInterval(() => {
				setCurrentMessage((prev) => prev + message[currentTextIndex]);
				setCurrentTextIndex((prev) => prev + 1);
			}, 100); // Adjust the speed of character appearance here

			return () => clearInterval(intervalId);
		}
	}, [currentTextIndex, currentMessageIndex, isComplete]);

	useEffect(() => {
		if (currentTextIndex === messages[currentMessageIndex]?.length) {
			setDisplayedMessages((prev) => [...prev, currentMessage]);
			setCurrentMessage("");
			setCurrentTextIndex(0);
			setCurrentMessageIndex((prev) => prev + 1);
		}
	}, [currentTextIndex, currentMessage, currentMessageIndex]);

	useEffect(() => {
		if (currentMessageIndex === messages.length && !isComplete) {
			setIsComplete(true);
		}
	}, [currentMessageIndex, isComplete]);

	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			height='100vh'
			style={{ backgroundColor: "#e0f7fa" }}
		>
			<Paper
				elevation={3}
				style={{ padding: "20px", maxWidth: "600px", width: "100%" }}
			>
				{displayedMessages.map((message, index) => (
					<Typography key={index} variant='h6' paragraph>
						{message}
					</Typography>
				))}
				{!isComplete && (
					<Typography variant='h6' paragraph>
						{currentMessage}
					</Typography>
				)}
			</Paper>
		</Box>
	);
};

export default SuggestionPage;
