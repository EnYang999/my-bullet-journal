import React from "react";
import "./checkbox.css";

interface CheckboxProps {
	// Add any additional props as needed
}

const Checkbox: React.FC<CheckboxProps> = () => {
	return (
		<div className='checkbox-wrapper'>
			<input
				className='inp-cbx'
				id='cbx'
				type='checkbox'
				style={{ display: "none" }}
			/>
			<label className='cbx' htmlFor='cbx'>
				<span>
					<svg width='12px' height='9px' viewBox='0 0 12 9'>
						<polyline points='1 5 4 8 11 1'></polyline>
					</svg>
				</span>
				<span>default</span>
			</label>
		</div>
	);
};

export default Checkbox;
