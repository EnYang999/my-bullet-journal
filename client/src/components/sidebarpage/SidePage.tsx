import { useState } from "react";
import "./SidePage.css";
interface Props {
	className: string;
}
const SidePage = ({ className }: Props): JSX.Element => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const handleMouseEnter = (index: number) => {
		setActiveIndex(index);
	};

	const handleMouseLeave = () => {
		setActiveIndex(null);
	};

	const handleFocus = (index: number) => {
		setActiveIndex(index);
	};

	const handleBlur = () => {
		setActiveIndex(null);
	};

	const months = [
		{ abbreviation: "Jan", full: "January" },
		{ abbreviation: "Feb", full: "February" },
		{ abbreviation: "Mar", full: "March" },
		{ abbreviation: "Apr", full: "April" },
		{ abbreviation: "May", full: "May" },
		{ abbreviation: "Jun", full: "June" },
		{ abbreviation: "Jul", full: "July" },
		{ abbreviation: "Aug", full: "August" },
		{ abbreviation: "Sep", full: "September" },
		{ abbreviation: "Oct", full: "October" },
		{ abbreviation: "Nov", full: "November" },
		{ abbreviation: "Dec", full: "December" },
	];

	return (
		<div className={`pagination-container ${className}`}>
			<div className='pagination-overlap'>
				<ul>
					{months.map((month, index) => (
						<li
							key={index}
							className={`${
								index === activeIndex ? "active" : ""
							} ${month.abbreviation.toLowerCase()}`}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={handleMouseLeave}
							onFocus={() => handleFocus(index)}
							onBlur={handleBlur}
						>
							<a href='#'>
								<span className='month-cap'>
									{month.abbreviation.charAt(0)}
								</span>
								<span className='month-name'>
									{month.abbreviation.slice(1)}
								</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SidePage;
