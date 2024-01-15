import { ToDoLine } from "../todolines/todoline";
import "../scss/theme/_todobox.scss";
import mondayShape from "../../assets/img/monday-shape.svg";
const Monday = () => {
	return (
		<div className='week-box monday'>
			<div className='week-overlap overlap-1'>
				<figure className='week-fig fig-monday'>
					<img
						className='week-shape monday-shape'
						alt='Monday shape'
						src={mondayShape}
					/>
				</figure>

				<div className='to-do-lines-container to-do-lines-1'>
					<ToDoLine className='my-todo-list' boxId='sep-week-3-monday-1' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-monday-2' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-monday-3' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-monday-4' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-monday-5' />
				</div>
			</div>
		</div>
	);
};

export default Monday;
