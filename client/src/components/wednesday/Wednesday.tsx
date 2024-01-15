import { ToDoLine } from "../todolines/todoline";
// import "./Wednesday.css";
import "../scss/theme/_todobox.scss";
import wednesdayShape from "../../assets/img/wednesday-shape.svg";
const Wednesday = () => {
	return (
		<div className='week-box wednesday sep-wednesday-box'>
			<div className='week-overlap overlap-3'>
				<figure className='week-fig fig-wednesday'>
					<img
						className='week-shape wednesday-shape'
						alt='Wednesday shape'
						src={wednesdayShape}
					/>
				</figure>

				<div className='to-do-lines-container  to-do-lines-3'>
					<ToDoLine
						className='my-todo-list sep-week-3-wednesday-1 my-todo-list-1'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-wednesday-2 my-todo-list-2'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-wednesday-3 my-todo-list-3'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-wednesday-4 my-todo-list-4'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-wednesday-5 my-todo-list-5'
						inputBoxClassName='my-todo-list-2'
						inputFieldClassName='design-component-instance-node'
						tickBoxClassName='todo-instance'
					/>
				</div>
			</div>
		</div>
	);
};

export default Wednesday;
