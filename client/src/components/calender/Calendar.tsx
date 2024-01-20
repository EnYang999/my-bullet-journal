import {
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	format,
	isSameMonth,
	startOfWeek,
} from "date-fns";
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

	// Create an array with additional empty cells to fill the last row
	const paddedCalendarDays =
		daysInLastRow == 7
			? calendarDays
			: calendarDays.concat(Array.from({ length: daysInLastRow }));
	const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	return (
		<div className='container mt-5'>
			<header className='row'>
				{weekDays.map((day, index) => (
					<div key={index} className='col text-center p-1 font-weight-bold'>
						{day.charAt(0)}
					</div>
				))}
			</header>
			{[0, 1, 2, 3, 4, 5].map((row) => (
				<div key={row} className='row'>
					{paddedCalendarDays
						.slice(row * 7, (row + 1) * 7)
						.map((day, index) => (
							<div
								key={index}
								className={`col text-center p-1 calendar-day ${
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
