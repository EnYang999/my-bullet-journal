import React, { useState } from "react";
import {
	Box,
	Paper,
	Typography,
	TextField,
	Button,
	Checkbox,
	FormControlLabel,
} from "@mui/material";
import { useUser } from "./UserContext";
import QRCode from "react-qr-code";

const recommendations: { [key: string]: string[] } = {
	"see a doctor (in person)": [
		"Emergency Room #1 : You will wait for 4-9 hours, the distance from your home is 12km, contacting phone: 123-456-7890",
		"Emergency Room #2: You will wait for 5-8 hours, the distance from your home is 19km, contacting phone: 223-456-7891",
		"Emergency Room #3: You will wait for 8-9 hours, the distance from your home is 21km, contacting phone: 223-756-7891",
		"Urgent Care: opens in 2 hours, 2km, phone: 233-456-7890",
		"Walk-in Clinic: 1st appointment in 1 days, 3km, phone: 234-456-7890",
	],
	"Telemedicine suggest": ["drink hot water and have enough sleep"],
	"Home remedies": ["exercises, swim"],
};
const packList: string[] = [
	"Health card",
	"Medication list",
	"Regular medication",
	"Water",
	"Snacks",
	"Power bank",
	"Charger",
	"Blanket",
	"Laptop",
];

const ConversationPage: React.FC = () => {
	const { name } = useUser();
	const [conversation, setConversation] = useState<string[]>([
		`Bot: What can I help you with, ${name}?`,
	]);
	const [userInput, setUserInput] = useState<string>("");
	const [showSelectedOption, setShowSelectedOption] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [checklistItems, setChecklistItems] = useState<string[]>([]);
	const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
	const [showChecklistItems, setShowChecklistItems] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		address: "",
		insurance: "",
	});
	const [submitted, setSubmitted] = useState(false);

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

	const handleClickDecision = (option: string) => {
		setConversation((prev) => [...prev, `You: ${option}.`]);
		setSelectedOption(option);
		setShowSelectedOption(true);
	};
	const handleCheckListClick = (option: string) => {
		setConversation((prev) => [
			...prev,
			`You: ${recommendations[selectedOption!]}.`,
			`Bot: Your Special Promo coupon for Uber: UBER2024. Also Don't forget to pack:`,
		]);
		setShowSelectedOption(false);
		setShowChecklistItems(true);
		setShowForm(true);
	};
	const handleCheckboxChange = (item: string) => {
		setCheckedItems((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(item)) {
				newSet.delete(item);
			} else {
				newSet.add(item);
			}
			return newSet;
		});
	};
	const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
	};
	const handleDoneClick = () => {
		setShowChecklistItems(false);
		setConversation((prev) => [
			...prev,
			`Bot: Great! So don't forget to pack: ${checkedItems}`,
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
					<Box display='flex' alignItems='flex-start' mt={2}>
						{Object.keys(recommendations).map((option, index) => (
							<Button
								key={option}
								variant='contained'
								color='primary'
								onClick={() => handleClickDecision(option)}
								style={{ margin: "5px" }}
							>
								{option}
							</Button>
						))}
					</Box>
				)}
				{showSelectedOption && (
					<Box display='flex' alignItems='flex-start' mt={2}>
						{Object.keys(recommendations[selectedOption!]).map((Er, index) => (
							<Button
								key={Er}
								variant='contained'
								color='primary'
								onClick={() => handleCheckListClick(Er)}
								style={{ margin: "5px" }}
							>
								{recommendations[selectedOption!][index]}
							</Button>
						))}
					</Box>
				)}
				{showChecklistItems && (
					<Paper
						elevation={3}
						style={{
							display: "flex",
							justifyContent: "center",
							width: "100%",
							// maxWidth: "800px",
							padding: "20px",
							marginTop: "20px",
						}}
					>
						{packList.map((item, index) => (
							<Typography
								key={index}
								style={{
									display: "flex",
									cursor: "pointer",
									textDecoration: checkedItems.has(item)
										? "line-through"
										: "none",
								}}
							>
								<FormControlLabel
									control={
										<Checkbox
											checked={checkedItems.has(item)}
											onChange={() => handleCheckboxChange(item)}
											name={item}
										/>
									}
									label={item}
								/>
							</Typography>
						))}
						<Button
							variant='contained'
							color='primary'
							onClick={handleDoneClick}
							style={{ marginTop: "10px" }}
						>
							done
						</Button>
					</Paper>
				)}
			</Box>
			{!showForm && (
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
			)}

			{showForm && !submitted && (
				<Box
					component='form'
					onSubmit={handleFormSubmit}
					style={{ marginTop: "20px", width: "100%", maxWidth: "800px" }}
				>
					<TextField
						label='Name'
						variant='outlined'
						name='name'
						fullWidth
						margin='normal'
						value={formData.name}
						onChange={handleFormChange}
					/>
					<TextField
						label='Address'
						variant='outlined'
						name='address'
						fullWidth
						margin='normal'
						value={formData.address}
						onChange={handleFormChange}
					/>
					<TextField
						label='Insurance'
						variant='outlined'
						name='insurance'
						fullWidth
						margin='normal'
						value={formData.insurance}
						onChange={handleFormChange}
					/>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						fullWidth
						style={{ marginTop: "20px" }}
					>
						Submit
					</Button>
				</Box>
			)}
			{submitted && (
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					style={{ marginTop: "20px" }}
				>
					<QRCode value='FAKEBARCODE1234567890' />
				</Box>
			)}
		</Box>
	);
};

export default ConversationPage;
