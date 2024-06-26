import { ToDoLine } from "../todolines/todoline";
interface Props {
	day: string;
	shapeImage: string;
	boxIds: string[];
}
const WeekBox = ({ day, shapeImage, boxIds }: Props) => {
	return (
		<div
			className={`week-overlap  d-flex flex-column align-items-center h-100`}
		>
			<figure className={`week-fig`}>
				<img className={`week-shape`} alt={`${day} shape`} src={shapeImage} />
			</figure>
			<div
				className={`to-do-lines-container mx-3 flex-grow-1 d-flex flex-column h-80 overflow-auto`}
			>
				{boxIds.map((boxId, index) => (
					<ToDoLine key={index} className='my-todo-list' boxId={boxId} />
				))}
			</div>
		</div>
	);
};

export default WeekBox;
