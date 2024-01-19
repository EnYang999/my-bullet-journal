import { useState } from "react";
import "../scss/theme/_sidebar.scss";
import { Link } from "react-router-dom";
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
				<ul className='d-flex flex-column align-items-end h-100 gap-1'>
					{months.map((month, index) => (
						<li
							key={index}
							className={`position-relative h-100 d-flex align-items-center ${month.abbreviation.toLowerCase()} ${
								index === activeIndex ? "active" : ""
							}`}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={handleMouseLeave}
							onFocus={() => handleFocus(index)}
							onBlur={handleBlur}
						>
							<Link
								className='align-items-center w-100 h-100 d-flex justify-content-left'
								to={`themes/${month}`}
							>
								<span className='month-cap'>
									{month.abbreviation.charAt(0)}
								</span>
								<span className='month-name'>
									{month.abbreviation.slice(1)}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SidePage;
