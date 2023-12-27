import { ToDoLine } from "../todolines/todoline";
import "./Monday.css";
import mondayShape from "../../assets/img/monday-shape.svg";
const Monday = () => {
	return (
		<div className='week-box monday sep-monday-box'>
			<div className='week-overlap overlap-1'>
				<figure className='fig-monday'>
					<img
						className='week-shape monday-shape'
						alt='Monday shape'
						src={mondayShape}
					/>
				</figure>

				<div className='to-do-lines-container to-do-lines-1'>
					<ToDoLine
						className='my-todo-list sep-week-3-monday-1 my-todo-list-1'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-monday-2 my-todo-list-2'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-monday-3 my-todo-list-3'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-monday-4 my-todo-list-4'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-monday-5 my-todo-list-5'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
				</div>
			</div>
		</div>
	);
};

export default Monday;
