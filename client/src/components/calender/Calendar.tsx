import React from "react";
import {
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	format,
	isSameMonth,
	startOfWeek,
} from "date-fns";
import "bootstrap/scss/bootstrap.scss";
interface Props {
	month: number;
	year: number;
}
const Calendar = ({ month, year }: Props) => {
	const currentMonth = new Date(year, month - 1); // 1 represents February
	const firstDayOfMonth = startOfMonth(currentMonth);
	const lastDayOfMonth = endOfMonth(currentMonth);

	// Ensure that the calendar starts from Sunday
	const startOfWeekOfMonth = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });

	const calendarDays = eachDayOfInterval({
		start: startOfWeekOfMonth,
		end: lastDayOfMonth,
	});

	const totalDaysInMonth = calendarDays.length;
	const daysInLastRow = 7 - (totalDaysInMonth % 7);
	console.log(daysInLastRow);

	// Create an array with additional empty cells to fill the last row
	const paddedCalendarDays =
		daysInLastRow == 7
			? calendarDays
			: calendarDays.concat(Array.from({ length: daysInLastRow }));

	return (
		<div className='container mt-5'>
			<header></header>
			{[0, 1, 2, 3, 4, 5].map((row) => (
				<div key={row} className='row'>
					{paddedCalendarDays
						.slice(row * 7, (row + 1) * 7)
						.map((day, index) => (
							<div
								key={index}
								className={`col p-2 text-center calendar-day ${
									!isSameMonth(day, currentMonth) ? "text-muted" : ""
								}`}
							>
								{isSameMonth(day, currentMonth) && format(day, "d")}
							</div>
						))}
				</div>
			))}
		</div>
	);
};

export default Calendar;
