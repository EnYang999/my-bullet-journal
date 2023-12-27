import { ToDoLine } from "../todolines/todoline";
import "./Tuesday.css";
import tuesdayShape from "../../assets/img/thursday-shape.svg";

const Tuesday = () => {
	return (
		<div className='week-box tuesday sep-tuesday-box'>
			<div className='week-overlap overlap-2'>
				<figure className='fig-tuesday'>
					<img
						className='week-shape tuesday-shape'
						alt='Tuesday shape'
						src={tuesdayShape}
					/>
				</figure>
				<div className='to-do-lines-container to-do-lines-2'>
					<ToDoLine
						className='my-todo-list sep-week-3-tuesday-1 my-todo-list-1'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-tuesday-2 my-todo-list-2'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-tuesday-3 my-todo-list-3'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-tuesday-4 my-todo-list-4'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-tuesday-5 my-todo-list-5'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
				</div>
			</div>
		</div>
	);
};

export default Tuesday;
