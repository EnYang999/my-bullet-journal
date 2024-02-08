// WeekBox.js
import { ToDoLine } from "../todolines/todoline";
interface Props {
	boxIds: string[];
	day: string;
}
const WeekBox = ({ boxIds, day }: Props) => {
	return (
		<div className={`week-overlap d-flex flex-column`}>
			<div className='week-header d-flex w-100 mb-5 justify-content-start ps-2'>
				<span className='d-flex'>{day}</span>
			</div>
			<div
				className={`to-do-lines-container flex-grow-1 d-flex mx-3 flex-column`}
			>
				{boxIds.map((boxId, index) => (
					<ToDoLine key={index} className='my-todo-list' boxId={boxId} />
				))}
			</div>
		</div>
	);
};

export default WeekBox;
