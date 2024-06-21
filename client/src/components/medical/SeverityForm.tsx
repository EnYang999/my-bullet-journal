// src/components/SeverityForm.tsx
import React from "react";
import { useForm } from "react-hook-form";

const SeverityForm: React.FC = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				Duration:
				<select {...register("duration")}>
					<option value='lessThan24Hours'>Less than 24 hours</option>
					<option value='1to2Days'>1 to 2 days</option>
					<option value='3to7Days'>3 to 7 days</option>
					<option value='moreThanAWeek'>More than a week</option>
				</select>
			</label>
			<label>
				Pain Level:
				<select {...register("painLevel")}>
					<option value='mild'>Mild</option>
					<option value='moderate'>Moderate</option>
					<option value='severe'>Severe</option>
					<option value='extreme'>Extreme</option>
				</select>
			</label>
			<input type='submit' />
		</form>
	);
};

export default SeverityForm;
