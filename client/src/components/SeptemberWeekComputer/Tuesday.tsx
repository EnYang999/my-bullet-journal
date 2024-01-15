import { ToDoLine } from "../todolines/todoline";
import "../scss/theme/_todobox.scss";
import tuesdayShape from "../../assets/img/thursday-shape.svg";

const Tuesday = () => {
	return (
		<div className='week-box tuesday sep-tuesday-box'>
			<div className='week-overlap overlap-2'>
				<figure className='week-fig fig-tuesday'>
					<img
						className='week-shape tuesday-shape'
						alt='Tuesday shape'
						src={tuesdayShape}
					/>
				</figure>
				<div className='to-do-lines-container to-do-lines-2'>
					<ToDoLine className='my-todo-list' boxId='sep-week-3-tuesday-1' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-tuesday-2' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-tuesday-3' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-tuesday-4' />
					<ToDoLine className='my-todo-list' boxId='sep-week-3-tuesday-5' />
				</div>
			</div>
		</div>
	);
};

export default Tuesday;
