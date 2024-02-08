import { ToDoLine } from "../todolines/todoline";
interface Props {
	day: string;
	shapeImage: string;
	boxIds: string[];
	dateTime: string;
}
const WeekBox = ({ day, shapeImage, boxIds, dateTime }: Props) => {
	return (
		<div className={`week-overlap  d-flex flex-column align-items-center`}>
			<figure className={`week-fig fig-${day.toLowerCase()}`}>
				<img
					className={`week-shape ${day.toLowerCase()}-shape`}
					alt={`${day} shape`}
					src={shapeImage}
				/>
			</figure>
			<div className={`week-date-num fig-${day.toLowerCase()}`}>{dateTime}</div>
			<div
				className={`to-do-lines-container mx-3 flex-grow-1 d-flex flex-column justify-content-center`}
			>
				{boxIds.map((boxId, index) => (
					<ToDoLine key={index} className='my-todo-list' boxId={boxId} />
				))}
			</div>
		</div>
	);
};

export default WeekBox;
