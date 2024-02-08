import { ToDoLine } from "../todolines/todoline";
interface Props {
	boxIds: string[];
	shapeImage: string;
	day: string;
}
const WeekBox = ({ boxIds, day, shapeImage }: Props) => {
	return (
		<div className={`week-overlap  d-flex flex-column`}>
			<div className='week-header d-flex w-100 justify-content-center align-items-center'>
				<figure className={`week-fig`}>
					<img
						className={`week-shape position-relative`}
						alt={`${day} shape`}
						src={shapeImage}
						style={{
							filter:
								"brightness(0) saturate(100%) invert(40%) sepia(20%) saturate(1229%) hue-rotate(201deg) brightness(97%) contrast(85%)",
						}}
					/>
				</figure>
			</div>
			<div
				className={`to-do-lines-container flex-grow-1 d-flex mx-3 flex-column my-2`}
			>
				{boxIds.map((boxId, index) => (
					<ToDoLine key={index} className='my-todo-list' boxId={boxId} />
				))}
			</div>
		</div>
	);
};

export default WeekBox;
