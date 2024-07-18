import React, { useState, useEffect } from "react";
import {
	Box,
	Paper,
	Typography,
	TextField,
	Button,
	Checkbox,
	FormControlLabel,
	Dialog,
	DialogTitle,
	IconButton,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useUser } from "./UserContext";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import QRCode from "react-qr-code";

const recommendations: { [key: string]: string[] } = {
	see_a_doctor: [
		"emergency_room_1",
		"emergency_room_2",
		"emergency_room_3",
		"urgent_care",
		"walk_in_clinic",
	],
	telemedicine: ["checking_available_doctors"],
	home_remedies: ["home_remedy_1", "home_remedy_2", "home_remedy_3"],
};
const packList: string[] = [
	"health_card",
	"mdication_list",
	"regular_medication",
	"water",
	"snacks",
	"power_bank",
	"charger",
	"blanket",
	"laptop",
];

const ConversationPage: React.FC = () => {
	const { name } = useUser();
	const { t, i18n } = useTranslation();
	const [conversation, setConversation] = useState<string[]>([
		`Bot: ${t("greeting")}`,
	]);
	useEffect(() => {
		if (name) {
			setConversation([`Bot: ${t("greeting")} ${name}`]);
		}
	}, [name, i18n.language]);
	useEffect(() => {
		setConversation([`Bot: ${t("greeting")}`]);
	}, [i18n.language]);
	const [open, setOpen] = useState(false);
	const [userInput, setUserInput] = useState<string>("");
	const [showSelectedOption, setShowSelectedOption] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
	const [showChecklistItems, setShowChecklistItems] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		address: "",
		insurance: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery("(max-width: 980px)");
	const handleClose = () => {
		setOpen(false);
	};
	const handleUserInputSubmit = () => {
		if (userInput.trim() !== "") {
			setConversation((prev) => [
				...prev,
				`${t("you")}: ${t("you_talk_1")} ${userInput}.`,
				`Bot: ${t("bot_suggestion_1")}`,
			]);
			setUserInput("");
		}
	};

	const handleClickDecision = (option: string) => {
		setConversation((prev) => [...prev, `${t("you")}: ${t(option)}.`]);
		setSelectedOption(option);
		setShowSelectedOption(true);
	};
	const handleCheckListClick = (index: number) => {
		setConversation((prev) => [
			...prev,
			`${t("you")}: ${t(recommendations[selectedOption!][index])}.`,
			`Bot: ${t("bot_suggestion_2")}`,
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
		setOpen(true);
	};
	const handleDoneClick = () => {
		setShowChecklistItems(false);
	};
	useEffect(() => {
		if (!showChecklistItems && selectedOption) {
			const translatedItems = Array.from(checkedItems)
				.map((item) => t(item))
				.join(", ");
			setConversation((prev) => [
				...prev,
				`Bot: ${t("pack_your_choices")} ${translatedItems}`,
			]);
		}
	}, [showChecklistItems, checkedItems]);

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			height='100vh'
			// width='100vw'
			style={{ backgroundColor: "#f0f0f0" }}
		>
			<Box
				display='flex'
				flexDirection='column'
				width='100%'
				alignItems='center'
				mt={2}
				style={{ maxHeight: "70vh", overflow: "auto" }}
			>
				{conversation.map((message, index) => (
					<Box
						key={index}
						display='flex'
						justifyContent={
							message.startsWith("Bot:") ? "flex-start" : "flex-end"
						}
						width='100%'
						mb={1}
					>
						<Typography
							variant='body1'
							style={{
								backgroundColor: message.startsWith("Bot:")
									? "#f8d7da"
									: "#d1e7dd",
								padding: "10px",
								borderRadius: "5px",
								maxWidth: "70%",
							}}
						>
							{t(message)}
						</Typography>
					</Box>
				))}
				{conversation[conversation.length - 1] ===
					`Bot: ${t("bot_suggestion_1")}` && (
					<Box display='flex' alignItems='flex-start' mt={2}>
						{Object.keys(recommendations).map((option) => (
							<Button
								key={option}
								variant='contained'
								color='primary'
								onClick={() => handleClickDecision(option)}
								style={{ margin: "5px" }}
							>
								{t(option)}
							</Button>
						))}
					</Box>
				)}
				{showSelectedOption && (
					<Box display={isMobile ? "grid" : "flex"} mt={2} width={"100%"}>
						{Object.keys(recommendations[selectedOption!]).map((Er, index) => (
							<Button
								key={Er}
								variant='contained'
								color='primary'
								onClick={() => handleCheckListClick(index)}
								style={{ margin: "5px" }}
								disabled={
									(selectedOption === "see_a_doctor" &&
										(index === 3 || index === 4)) ||
									selectedOption === "telemedicine" ||
									selectedOption === "home_remedies"
								}
							>
								{t(recommendations[selectedOption!][index])}
							</Button>
						))}
					</Box>
				)}

				{showChecklistItems && (
					<Paper
						style={{
							display: isTablet ? "grid" : "flex",
							gridTemplateColumns: isTablet
								? "repeat(auto-fill, minmax(150px, 1fr))"
								: "none",
							justifyContent: "center",
							width: "100%",
							maxWidth: "100%",
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
									label={t(item)}
								/>
							</Typography>
						))}
						<Button
							variant='contained'
							color='primary'
							onClick={handleDoneClick}
							style={{ marginTop: "10px" }}
						>
							{t("submit")}
						</Button>
					</Paper>
				)}
				{showForm && !submitted && (
					<Box
						component='form'
						onSubmit={handleFormSubmit}
						style={{ marginTop: "20px", width: "100%", maxWidth: "800px" }}
					>
						<Typography variant='h6' component='h2'>
							{t("submit_information")}
						</Typography>
						<TextField
							label={t("name")}
							variant='outlined'
							name='name'
							fullWidth
							margin='normal'
							value={name || formData.name}
							onChange={handleFormChange}
						/>
						<TextField
							label={t("address")}
							variant='outlined'
							name='address'
							fullWidth
							margin='normal'
							value={formData.address}
							onChange={handleFormChange}
						/>
						<TextField
							label={t("insurance")}
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
							{t("submit")}
						</Button>
					</Box>
				)}
				{submitted && (
					<Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
						<DialogTitle>
							{t("save_QRcode")}
							<IconButton
								aria-label='close'
								onClick={handleClose}
								sx={{ position: "absolute", right: 8, top: 8 }}
							>
								<CloseIcon />
							</IconButton>
						</DialogTitle>
						<Box
							display='flex'
							justifyContent='center'
							alignItems='center'
							style={{ marginTop: "20px" }}
						>
							<QRCode value='FAKEBARCODE1234567890' />
						</Box>
					</Dialog>
				)}
			</Box>
			{!showForm && (
				<Box mt={2} width='80%'>
					<TextField
						label={t("enter_symptom")}
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
						{t("submit")}
					</Button>
				</Box>
			)}
		</Box>
	);
};

export default ConversationPage;
