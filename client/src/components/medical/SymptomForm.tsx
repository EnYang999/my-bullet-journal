import React, { useState, useEffect } from "react";
import symptomsData from "./symptoms.json";
import colorsData from "./colors.json";
import { motion } from "framer-motion";
import { Grid, Box, Paper, Typography } from "@mui/material";
import "./SymptomForm.scss";
import { useUser } from "./UserContext";

// Type definitions based on symptom data
interface SymptomData {
	[category: string]: {
		[symptom: string]: string[];
	};
}

const symptomData: SymptomData = symptomsData;

const SymptomForm: React.FC = () => {
	const { name } = useUser();
	const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
		new Set()
	);
	const [selectedSymptoms, setSelectedSymptoms] = useState<Set<string>>(
		new Set()
	);
	const [clickedDetails, setClickedDetails] = useState<Set<string>>(new Set());
	const [colorMap, setColorMap] = useState<{ [key: string]: string }>({});

	useEffect(() => {
		const initialColorMap: { [key: string]: string } = {};
		let colorIndex = 0;

		Object.keys(symptomData).forEach((category) => {
			initialColorMap[category] = `#${
				colorsData.colors[colorIndex % colorsData.colors.length]
			}`;
			colorIndex++;

			Object.keys(symptomData[category]).forEach((symptom) => {
				const key = `${category}-${symptom}`;
				initialColorMap[key] = `#${
					colorsData.colors[colorIndex % colorsData.colors.length]
				}`;
				colorIndex++;
			});
		});

		setColorMap(initialColorMap);
	}, []);

	const handleCategoryClick = (category: string) => {
		setSelectedCategories((prevState) => {
			const newSet = new Set(prevState);
			if (newSet.has(category)) newSet.delete(category);
			else newSet.add(category);

			return newSet;
		});
	};

	const handleSymptomClick = (category: string, symptom: string) => {
		setSelectedSymptoms((prevState) => {
			const newSet = new Set(prevState);
			const key = `${category}-${symptom}`;
			if (newSet.has(key)) newSet.delete(key);
			else newSet.add(key);

			return newSet;
		});
	};

	const handleDetailClick = (key: string) => {
		setClickedDetails((prevState) => {
			const newSet = new Set(prevState);
			if (newSet.has(key)) newSet.delete(key);
			else newSet.add(key);

			return newSet;
		});
	};

	const getColor = (key: string) => colorMap[key];

	return (
		<Grid
			container
			justifyContent='center'
			alignItems='center'
			style={{ height: "100vh" }}
		>
			<Grid item xs={12}>
				<Box
					display='flex'
					justifyContent='center'
					flexDirection='column'
					alignItems='center'
				>
					<Paper
						elevation={3}
						style={{ padding: "20px", maxWidth: "800px", width: "100%" }}
					>
						<Typography variant='h6' gutterBottom>
							{name
								? `${name}, please select what you are not comfortable with ...`
								: "Please select what you are not comfortable with ..."}
						</Typography>
						<div className='icons-container'>
							{Object.keys(symptomData).map((category) => (
								<motion.div
									key={`${category}`}
									onClick={() => handleCategoryClick(category)}
									className={`icon ${
										selectedCategories.has(category) ? "selected" : ""
									}`}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.8 }}
									style={{ backgroundColor: getColor(category) }}
								>
									{category}
								</motion.div>
							))}
							{Array.from(selectedCategories).map((category) => (
								<div key={category} className='category-details'>
									{Object.keys(symptomData[category]).map((symptom) => {
										const key = `${category}-${symptom}`;
										return (
											<motion.div
												key={key}
												onClick={() => handleSymptomClick(category, symptom)}
												className={`icon ${
													selectedSymptoms.has(key) ? "selected" : ""
												}`}
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.8 }}
												style={{ backgroundColor: getColor(key) }}
											>
												{symptom}
											</motion.div>
										);
									})}
								</div>
							))}
							{Array.from(selectedSymptoms).map((key) => {
								const [category, symptom] = key.split("-");
								return symptomData[category][symptom].map((detail, index) => (
									<motion.div
										key={`${key}-${index}`}
										onClick={() => handleDetailClick(`${key}-${index}`)}
										className={`icon symptom-detail ${
											clickedDetails.has(`${key}-${index}`) ? "clicked" : ""
										}`}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.8 }}
										style={{ backgroundColor: getColor(key) }}
									>
										{detail}
									</motion.div>
								));
							})}
						</div>
					</Paper>
				</Box>
			</Grid>
		</Grid>
	);
};

export default SymptomForm;
