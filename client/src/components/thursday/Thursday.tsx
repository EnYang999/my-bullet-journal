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
					<ToDoLine
						className='my-todo-list sep-week-3-thursday-1 my-todo-list-1'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-thursday-2 my-todo-list-2'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-thursday-3 my-todo-list-3'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-thursday-4 my-todo-list-4'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-thursday-5 my-todo-list-5'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
				</div>
			</div>
		</div>
	);
};

export default Thursday;
