import { ToDoLine } from "../todolines/todoline";
interface Props {
	shapeImage: string;
	boxIds: string[];
}
const WeekBox = ({ shapeImage, boxIds }: Props) => {
	return (
		<div
			className={`week-overlap overlap-${boxIds.length} d-flex flex-column align-items-center`}
		>
			<figure className={`week-fig my-1 w-75`}>
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
