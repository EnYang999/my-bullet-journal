import { ToDoLine } from "../todolines/todoline";
interface Props {
	day: string;
	shapeImage: string;
	boxIds: string[];
}
const WeekBox = ({ day, shapeImage, boxIds }: Props) => {
	return (
		<div
			className={`week-overlap overlap-${boxIds.length} d-flex flex-column align-items-center`}
		>
			<figure className={`week-fig`}>
				<img
					className={`week-shape`}
					alt={`${day} shape`}
					src={shapeImage}
					style={{
						filter:
							"brightness(0) saturate(100%) invert(48%) sepia(44%) saturate(434%) hue-rotate(40deg) brightness(96%) contrast(89%)",
					}}
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
