// WeekBox.js
import { ToDoLine } from "../todolines/todoline";
interface Props {
	day: string;
	shapeImage: string;
	boxIds: string[];
}
const WeekBox = ({ day, shapeImage, boxIds }: Props) => {
	return (
		<div className={`week-box sep-${day.toLowerCase()}-box`}>
			<div className={`week-overlap overlap-${boxIds.length}`}>
				<figure className={`week-fig fig-${day.toLowerCase()}`}>
					<img
						className={`week-shape ${day.toLowerCase()}-shape`}
						alt={`${day} shape`}
						src={shapeImage}
					/>
				</figure>
				<div className={`to-do-lines-container to-do-lines-${boxIds.length}`}>
					{boxIds.map((boxId, index) => (
						<ToDoLine key={index} className='my-todo-list' boxId={boxId} />
					))}
				</div>
			</div>
		</div>
	);
};

export default WeekBox;
