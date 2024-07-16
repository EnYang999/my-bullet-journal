import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface Props {
	className: string;
}

const SidePage: React.FC<Props> = ({ className }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [activeMonth, setActiveMonth] = useState<number | null>(null);
	const { month, week } = useParams<{ month: string; week: string }>();

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

	useEffect(() => {
		if (month) {
			const monthIndex = months.findIndex((m) => m.number === month);
			if (monthIndex !== -1) {
				setActiveMonth(monthIndex);
			}
		}
	}, [month]);

	return (
		<div className={`pagination-container ${className}`}>
			<div className='pagination-overlap'>
				<ul className='d-flex flex-column align-items-end h-100 gap-1'>
					{months.map((month, index) => (
						<li
							key={index}
							className={`position-relative h-100 d-flex align-items-center ${month.abbreviation.toLowerCase()} ${
								index === activeIndex || index === activeMonth ? "active" : ""
							}`}
							onMouseEnter={() => {
								setActiveIndex(index);
							}}
							onMouseLeave={() => {
								if (index !== activeMonth) setActiveIndex(null);
							}}
							onFocus={() => {
								setActiveIndex(index);
							}}
							onBlur={() => {
								if (index !== activeMonth) setActiveIndex(null);
							}}
						>
							<Link
								className='align-items-center w-100 h-100 d-flex justify-content-left'
								to={`/themes/${month.number}/${week}`}
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
