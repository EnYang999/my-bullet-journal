import React from "react";
import "./SeptemberLabel.css";
import { StarShape } from "../../icons/starShape/starShape";
import star4 from "../../assets/img/star-shape.svg";

interface Props {
	className: string;
}
const SeptemberLabel = ({ className }: Props): JSX.Element => {
	return (
		<div className={`september-label-overlap-group ${className}`}>
			<figure className='fig-september-satr'>
				<img className='star-vector-4' alt='Star shape' src={star4} />
			</figure>

			<StarShape className='september-label' />
		</div>
	);
};

export default SeptemberLabel;
