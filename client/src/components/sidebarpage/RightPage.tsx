import { useState } from "react";
import "../scss/theme/_rightsidebar.scss";
import { Link } from "react-router-dom";
interface Props {
	className: string;
}
const RightSideBar = ({ className }: Props): JSX.Element => {
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

	const labels = [
		{ abbreviation: "Ind", full: "Index" },
		{ abbreviation: "Mon", full: "Monthly" },
		{ abbreviation: "Hab", full: "Habits" },
		{ abbreviation: "W-1", full: "Week-1" },
		{ abbreviation: "W-2", full: "Week-2" },
		{ abbreviation: "W-3", full: "Week-3" },
		{ abbreviation: "W-4", full: "Week-4" },
		{ abbreviation: "W-5", full: "Week-5" },
	];

	return (
		<div className={`right-pagination-container ${className}`}>
			<div className='pagination-overlap'>
				<ul className='d-flex flex-column h-100 gap-1'>
					{labels.map((label, index) => (
						<li
							key={index}
							className={`position-relative h-100 d-flex align-items-center ${label.abbreviation.toLowerCase()} ${
								index === activeIndex ? "active" : ""
							}`}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={handleMouseLeave}
							onFocus={() => handleFocus(index)}
							onBlur={handleBlur}
						>
							<Link
								className='align-items-center w-100 h-100 d-flex justify-content-center'
								to={`themes/${label}`}
							>
								<span className='label-cap'>
									{label.full.split(" ").map((word, index) => (
										<span key={index}>{word}</span>
									))}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RightSideBar;
