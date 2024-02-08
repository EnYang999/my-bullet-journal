import { ToDoLine } from "../todolines/todoline";
interface Props {
	day: string;
	shapeImage: string;
	boxIds: string[];
}
const WeekBox = ({ shapeImage, boxIds }: Props) => {
	return (
		<div
			className={`week-overlap  d-flex flex-column align-items-center position-relative`}
		>
			<figure className={`week-fig`}>
				<img className={`week-shape`} src={shapeImage} />
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
