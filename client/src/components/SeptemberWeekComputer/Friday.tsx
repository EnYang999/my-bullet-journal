import { ToDoLine } from "../todolines/todoline";
// import "./Friday.css";
import "../scss/theme/_todobox.scss";
import fridayShape from "../../assets/img/friday-shape.svg";
const Friday = () => {
	return (
		<div className='week-box friday to-do-box'>
			<div className='week-overlap overlap-5'>
				<figure className='week-fig fig-friday'>
					<img
						className='week-shape friday-shape'
						alt='Friday shape'
						src={fridayShape}
					/>
				</figure>

				<div className='to-do-lines-container to-do-lines-5'>
					<ToDoLine className='my-todo-list' boxId='sep-week-3-friday-1' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-friday-2' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-friday-3' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-friday-4' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-friday-5' />
				</div>
			</div>
		</div>
	);
};

export default Friday;
