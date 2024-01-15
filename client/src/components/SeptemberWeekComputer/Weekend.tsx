import { ToDoLine } from "../todolines/todoline";
// import "./Weekend.css";
import "../scss/theme/_todobox.scss";
import weekendShape from "../../assets/img/weekend-shape.svg";
const Weekend = () => {
	return (
		<div className='week-box weekend  sep-weekend-box'>
			<div className='week-overlap overlap-6'>
				<figure className='week-fig fig-weekend'>
					<img
						className='week-shape weekend-shape'
						alt='Weekend shape'
						src={weekendShape}
					/>
				</figure>
				<div className='to-do-lines-container to-do-lines-6'>
					<ToDoLine className='my-todo-list' boxId='sep-week-3-weekend-1' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-weekend-2' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-weekend-3' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-weekend-4' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-weekend-5' />
				</div>
			</div>
		</div>
	);
};

export default Weekend;
