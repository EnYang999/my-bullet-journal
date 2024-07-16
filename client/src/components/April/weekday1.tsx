// WeekBox.js
import { ToDoLine } from "../todolines/todoline";
interface Props {
	boxIds: string[];
	day: string;
}
const WeekBox = ({ boxIds, day }: Props) => {
	return (
		<div className={`week-overlap d-flex flex-column h-100`}>
			<div className='week-header d-flex w-100 justify-content-start'>
				<span className='d-flex'>{day}</span>
			</div>
			<div
				className={`to-do-lines-container flex-grow-1 d-flex mx-3 flex-column h-100 overflow-auto`}
			>
				{boxIds.map((boxId, index) => (
					<ToDoLine key={index} className='my-todo-list' boxId={boxId} />
				))}
			</div>
		</div>
	);
};

export default WeekBox;
