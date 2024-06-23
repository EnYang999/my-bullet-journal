import React, { useState } from "react";
import symptomsData from "./symptoms.json";
import { motion } from "framer-motion";
import "./SymptomForm.css";

// Type definitions based on JSON structure
interface SymptomData {
	[category: string]: {
		[symptom: string]: string[];
	};
}

const symptomData: SymptomData = symptomsData;

const SymptomForm: React.FC = () => {
	const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
		new Set()
	);
	const [selectedSymptoms, setSelectedSymptoms] = useState<Set<string>>(
		new Set()
	);

	const handleCategoryClick = (category: string) => {
		setSelectedCategories((prevState) => {
			const newSet = new Set(prevState);
			if (newSet.has(category)) {
				newSet.delete(category);
			} else {
				newSet.add(category);
			}
			return newSet;
		});
	};

	const handleSymptomClick = (category: string, symptom: string) => {
		setSelectedSymptoms((prevState) => {
			const newSet = new Set(prevState);
			const key = `${category}-${symptom}`;
			if (newSet.has(key)) {
				newSet.delete(key);
			} else {
				newSet.add(key);
			}
			return newSet;
		});
	};

	return (
		<div className='container d-flex'>
			{Object.keys(symptomData).map((category) => (
				<motion.div
					key={`${category}`}
					onClick={() => handleCategoryClick(category)}
					className='d-flex'
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.8 }}
				>
					{category}
				</motion.div>
			))}

			{Array.from(selectedCategories).map((category) => (
				<div key={category}>
					{Object.keys(symptomData[category]).map((symptom) => (
						<motion.div
							key={`${category}-${symptom}`}
							onClick={() => handleSymptomClick(category, symptom)}
							className='d-flex'
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8 }}
						>
							{symptom}
						</motion.div>
					))}
				</div>
			))}
			{Array.from(selectedSymptoms).map((key) => {
				const [category, symptom] = key.split("-");
				return symptomData[category][symptom].map((detail, index) => (
					<motion.div
						key={`${key}-${index}`}
						className='d-flexs'
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.8 }}
					>
						{detail}
					</motion.div>
				));
			})}
		</div>
	);
};

export default SymptomForm;
