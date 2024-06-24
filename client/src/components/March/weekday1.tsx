import { ToDoLine } from "../todolines/todoline";
interface Props {
	day: string;
	boxIds: string[];
}
const WeekBox = ({ day, boxIds }: Props) => {
	return (
		<div className={`week-overlap  d-flex flex-column align-items-center`}>
			<div
				className='square text-center lh-1 d-flex align-items-center justify-content-center'
				style={{}}
			>
				{day}
			</div>

			<div
				className={`to-do-lines-container flex-grow-1 d-flex flex-column justify-content-center`}
			>
				{boxIds.map((boxId, index) => (
					<ToDoLine key={index} className='my-todo-list' boxId={boxId} />
				))}
			</div>
		</div>
	);
};

export default WeekBox;
