import React, { useState, useEffect } from "react";
import symptomsData from "./symptoms.json";
import { motion } from "framer-motion";
import chroma from "chroma-js";
import "./SymptomForm.scss";

// Type definitions based on JSON structure
interface SymptomData {
	[category: string]: {
		[symptom: string]: string[];
	};
}

const symptomData: SymptomData = symptomsData;

// Generate a color scale using chroma-js
const colorScale = chroma.scale(["#fafa6e", "#2A4858"]).mode("lch").colors(50);

const SymptomForm: React.FC = () => {
	const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
		new Set()
	);
	const [selectedSymptoms, setSelectedSymptoms] = useState<Set<string>>(
		new Set()
	);
	const [clickedDetails, setClickedDetails] = useState<Set<string>>(new Set());
	const [colorMap, setColorMap] = useState<{ [key: string]: string }>({});

	useEffect(() => {
		// Initialize color map
		const initialColorMap: { [key: string]: string } = {};
		let colorIndex = 0;

		// Assign colors to categories and symptoms
		Object.keys(symptomData).forEach((category) => {
			initialColorMap[category] = colorScale[colorIndex % colorScale.length];
			colorIndex++;

			Object.keys(symptomData[category]).forEach((symptom) => {
				const key = `${category}-${symptom}`;
				initialColorMap[key] = colorScale[colorIndex % colorScale.length];
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
		const key = `${category}-${symptom}`;
		setSelectedSymptoms((prevState) => {
			const newSet = new Set(prevState);
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
		<div className='container icons-container '>
			<div className='d-inline-flex flex-wrap'>
				{Object.keys(symptomData).map((category) => (
					<motion.div
						key={`${category}`}
						onClick={() => handleCategoryClick(category)}
						className={`icon ${
							selectedCategories.has(category) ? "selected" : ""
						}`}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.8 }}
						style={{ backgroundColor: getColor(category) }}
					>
						{category}
					</motion.div>
				))}
				{Array.from(selectedCategories).map((category) => (
					<div key={category}>
						{Object.keys(symptomData[category]).map((symptom) => {
							const key = `${category}-${symptom}`;
							return (
								<motion.div
									key={key}
									onClick={() => handleSymptomClick(category, symptom)}
									className={`icon ${
										selectedSymptoms.has(key) ? "selected" : ""
									}`}
									whileHover={{ scale: 1.2 }}
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
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8 }}
							style={{
								backgroundColor: getColor(key),
							}}
						>
							{detail}
						</motion.div>
					));
				})}
			</div>
		</div>
	);
};

export default SymptomForm;
