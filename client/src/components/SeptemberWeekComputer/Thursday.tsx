import { ToDoLine } from "../todolines/todoline";
import "../scss/theme/_todobox.scss";
import thursdayShape from "../../assets/img/thursday-shape.svg";
const Thursday = () => {
	return (
		<div className='week-box thursday  sep-thursday-box'>
			<div className='week-overlap overlap-4'>
				<figure className='week-fig fig-thursday'>
					<img
						className='week-shape thursday-shape'
						alt='Thursday shape'
						src={thursdayShape}
					/>
				</figure>

				<div className='to-do-lines-container to-do-lines-4'>
					<ToDoLine className='my-todo-list' boxId='sep-week-3-thursday-1' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-thursday-2' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-thursday-3' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-thursday-4' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-thursday-5' />
				</div>
			</div>
		</div>
	);
};

export default Thursday;
