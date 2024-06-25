import React from "react";
import {
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	format,
	isSameMonth,
	startOfWeek,
} from "date-fns";
import { Box, Typography, Grid } from "@mui/material";

interface Props {
	month: number;
	year: number;
	dayFontFamily?: string;
	dayFontSize?: string;
	dayColor?: string;
	headingFontFamily?: string;
	headingFontSize?: string;
	headingColor?: string;
	dayStyle?: React.CSSProperties;
	headingStyle?: React.CSSProperties;
	cusName?: string;
	weekDayFormat?: "full" | "short";
}

const Calendar: React.FC<Props> = ({
	month,
	year,
	dayFontFamily = "Roboto, sans-serif",
	dayFontSize = "14px",
	dayColor = "black",
	headingFontFamily = "Roboto, sans-serif",
	headingFontSize = "16px",
	headingColor = "black",
	cusName = "",
	dayStyle = {},
	headingStyle = {},
	weekDayFormat = "full",
}) => {
	const currentMonth = new Date(year, month - 1);
	const firstDayOfMonth = startOfMonth(currentMonth);
	const lastDayOfMonth = endOfMonth(currentMonth);
	const startOfWeekOfMonth = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });

	const calendarDays = eachDayOfInterval({
		start: startOfWeekOfMonth,
		end: lastDayOfMonth,
	});
	const daysInLastRow = 7 - (calendarDays.length % 7);

	const paddedCalendarDays =
		daysInLastRow === 7
			? calendarDays
			: [...calendarDays, ...Array(daysInLastRow).fill(null)];

	const weekDays =
		weekDayFormat === "short"
			? ["M", "T", "W", "T", "F", "S", "S"]
			: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	return (
		<Box className={cusName}>
			<Grid container spacing={0} marginBottom='4px'>
				{weekDays.map((day, index) => (
					<Grid item xs key={index}>
						<Typography
							align='center'
							style={{
								fontFamily: headingFontFamily,
								fontSize: headingFontSize,
								color: headingColor,
								padding: "4px 2px",
								...headingStyle,
							}}
						>
							{day}
						</Typography>
					</Grid>
				))}
			</Grid>
			{Array.from({ length: Math.ceil(paddedCalendarDays.length / 7) }).map(
				(_, rowIndex) => (
					<Grid container spacing={0} key={rowIndex} marginBottom='2px'>
						{paddedCalendarDays
							.slice(rowIndex * 7, rowIndex * 7 + 7)
							.map((day, index) => (
								<Grid item xs key={index}>
									<Box
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											...dayStyle,
										}}
									>
										<Typography
											style={{
												fontFamily: dayFontFamily,
												fontSize: dayFontSize,
												color: isSameMonth(day, currentMonth)
													? dayColor
													: "#ccc",
											}}
										>
											{day && format(day, "d")}
										</Typography>
									</Box>
								</Grid>
							))}
					</Grid>
				)
			)}
		</Box>
	);
};

export default Calendar;
