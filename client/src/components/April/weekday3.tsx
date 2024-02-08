import { ToDoLine } from "../todolines/todoline";
interface Props {
	boxIds: string[];
	day: string;
}
const WeekBox = ({ boxIds, day }: Props) => {
	return (
		<div className={`week-overlap d-flex flex-column align-items-center`}>
			<div className='d-flex justify-content-between w-75'>
				<div style={{ fontFamily: "Josefin Slab", fontSize: "2rem" }}>
					{day}
				</div>
				<div
					className='round'
					style={{
						borderRadius: "50%",
						backgroundColor: "#6E8061",
						width: "2rem",
						height: "2rem",
					}}
				></div>
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
