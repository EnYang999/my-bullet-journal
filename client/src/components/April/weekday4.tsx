import { ToDoLine } from "../todolines/todoline";
interface Props {
	day: string;
	shapeImage: string;
	boxIds: string[];
}
const WeekBox = ({ day, shapeImage, boxIds }: Props) => {
	return (
		<div className={`week-overlap d-flex flex-column align-items-center`}>
			<div className='square text-center lh-1' style={{}}>
				{day}
			</div>
			<figure className={`week-fig fig-${day.toLowerCase()} py-4`}>
				<img
					className={`week-shape ${day.toLowerCase()}-shape`}
					src={shapeImage}
				/>
			</figure>
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
