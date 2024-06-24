import { ToDoLine } from "../todolines/todoline";
interface Props {
	day: string;
	boxIds: string[];
}
const WeekBox = ({ day, boxIds }: Props) => {
	return (
		<div className={`week-overlap  d-flex flex-column h-100`}>
			{/* <figure className={`week-fig my-1 w-75`}>
				<img className={`week-shape`} src={shapeImage} />
			</figure> */}
			<div style={{ fontFamily: "cursive", fontSize: "3rem" }}>{day}</div>

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
