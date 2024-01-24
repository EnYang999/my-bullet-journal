import { useState } from "react";
import "../scss/theme/_sidebar.scss";
import { Link } from "react-router-dom";
interface Props {
	className: string;
	setSelectedMonth: React.Dispatch<React.SetStateAction<string>>;
}
const SidePage: React.FC<Props> = ({ className, setSelectedMonth }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const months = [
		{ abbreviation: "Jan", number: "01" },
		{ abbreviation: "Feb", number: "02" },
		{ abbreviation: "Mar", number: "03" },
		{ abbreviation: "Apr", number: "04" },
		{ abbreviation: "May", number: "05" },
		{ abbreviation: "Jun", number: "06" },
		{ abbreviation: "Jul", number: "07" },
		{ abbreviation: "Aug", number: "08" },
		{ abbreviation: "Sep", number: "09" },
		{ abbreviation: "Oct", number: "10" },
		{ abbreviation: "Nov", number: "11" },
		{ abbreviation: "Dec", number: "12" },
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
							onMouseEnter={() => {
								setActiveIndex(index);
								// setSelectedMonth(month.number);
							}}
							onMouseLeave={() => {
								setActiveIndex(null);
							}}
							onFocus={() => {
								setActiveIndex(index);
								// setSelectedMonth(month.number);
							}}
							onBlur={() => {
								setActiveIndex(null);
							}}
							onClick={() => setSelectedMonth((index + 1).toString())}
						>
							<Link
								className='align-items-center w-100 h-100 d-flex justify-content-left'
								to={`/themes/${month.number}/week2`}
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
