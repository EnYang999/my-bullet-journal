import React, { useState } from "react";
import { Checkbox, TextField, FormControlLabel, Box } from "@mui/material";

const ControlledCheckboxInput = () => {
	const [isChecked, setIsChecked] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.target.checked);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<Box display='flex' alignItems='center'>
			<FormControlLabel
				control={
					<Checkbox
						checked={isChecked}
						onChange={handleCheckboxChange}
						color='primary'
					/>
				}
				label='Disable Input'
			/>
			<Box flexGrow={1} ml={2}>
				<TextField
					label='Controlled Input'
					variant='outlined'
					value={inputValue}
					onChange={handleInputChange}
					disabled={isChecked}
					fullWidth
				/>
			</Box>
		</Box>
	);
};

export default ControlledCheckboxInput;
