import { ToDoLine } from "../todolines/todoline";
interface Props {
	day: string;
	shapeImage: string;
	dateTime: string;
	boxIds: string[];
}
const WeekBox = ({ day, shapeImage, dateTime, boxIds }: Props) => {
	return (
		<div className={`week-box sep-${day.toLowerCase()}-box`}>
			<div className={`week-overlap `}>
				<div className={`week-date-num fig-${day.toLowerCase()}`}>
					{dateTime}
				</div>
				<figure className={`week-fig fig-${day.toLowerCase()}`}>
					<img
						className={`week-shape ${day.toLowerCase()}-shape`}
						alt={`${day} shape`}
						src={shapeImage}
					/>
				</figure>
				<div
					className={`mt-6 to-do-lines-container to-do-lines-${boxIds.length}`}
				>
					{boxIds.map((boxId, index) => (
						<ToDoLine key={index} className='my-todo-list' boxId={boxId} />
					))}
				</div>
			</div>
		</div>
	);
};

export default WeekBox;
