import React from "react";
import {
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	format,
	isSameMonth,
	startOfWeek,
} from "date-fns";

const Calendar: React.FC = () => {
	const currentMonth = new Date(2022, 8);
	const firstDayOfMonth = startOfMonth(currentMonth);
	const lastDayOfMonth = endOfMonth(currentMonth);

	const startOfWeekOfMonth = startOfWeek(firstDayOfMonth);

	const calendarDays = eachDayOfInterval({
		start: startOfWeekOfMonth,
		end: lastDayOfMonth,
	});

	const totalDaysInMonth = calendarDays.length;
	const daysInLastRow = 7 - (totalDaysInMonth % 7);

	const paddedCalendarDays = calendarDays.concat(
		Array.from({ length: daysInLastRow })
	);

	return (
		<div className='container mt-5'>
			{[0, 1, 2, 3, 4, 5].map((row) => (
				<div key={row} className='row'>
					{paddedCalendarDays
						.slice(row * 7, (row + 1) * 7)
						.map((day, index) => (
							<div
								key={index}
								className={`col border p-2 text-center calendar-day ${
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
