import { ToDoLine } from "../todolines/todoline";
interface Props {
	day: string;
	boxIds: string[];
}
const WeekBox = ({ day, boxIds }: Props) => {
	return (
		<div className={`week-overlap  d-flex flex-column align-items-center`}>
			<div className='week-header d-flex w-100 mb-5 justify-content-center align-items-center ps-2'>
				<span className='d-flex'>{day}</span>
			</div>
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
