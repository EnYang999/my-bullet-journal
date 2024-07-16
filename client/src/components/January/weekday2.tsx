import { ToDoLine } from "../todolines/todoline";
interface Props {
	boxIds: string[];
	shapeImage: string;
	day: string;
}
const WeekBox = ({ boxIds, day, shapeImage }: Props) => {
	return (
		<div className={`week-overlap d-flex flex-column h-100`}>
			<div className='week-header d-flex w-100 justify-content-center align-items-center'>
				<figure className={`week-fig fig-${day.toLowerCase()} w-50`}>
					<img
						className={`week-shape ${day.toLowerCase()}-shape `}
						alt={`${day} shape`}
						src={shapeImage}
						style={{
							filter: "brightness(0) invert(1)",
						}}
					/>
				</figure>
			</div>
			<div
				className={`to-do-lines-container flex-grow-1 d-flex mx-3 flex-column my-2 h-80 overflow-auto`}
			>
				{boxIds.map((boxId, index) => (
					<ToDoLine key={index} className='my-todo-list' boxId={boxId} />
				))}
			</div>
		</div>
	);
};

export default WeekBox;
