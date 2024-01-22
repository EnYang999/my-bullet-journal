// WeekBox.js
import { ToDoLine } from "../todolines/todoline";
interface Props {
	boxIds: string[];
}
const WeekBox = ({ boxIds }: Props) => {
	return (
		<div
			className={`week-overlap overlap-${boxIds.length} d-flex flex-column align-items-center`}
		>
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
