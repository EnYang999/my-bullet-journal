import { ToDoLine } from "../todolines/todoline";
import "./Friday.css";
import fridayShape from "../../assets/img/friday-shape.svg";
const Friday = () => {
	return (
		<div className='week-box friday sep-friday-box'>
			<div className='week-overlap overlap-5'>
				<figure className='fig-friday'>
					<img
						className='week-shape friday-shape'
						alt='Friday shape'
						src={fridayShape}
					/>
				</figure>

				<div className='to-do-lines-container to-do-lines-5'>
					<ToDoLine
						className='my-todo-list sep-week-3-friday-1 my-todo-list-1'
						inputBoxClassName='-inputbox'
						inputFieldClassName='-inputfield'
						tickBoxClassName='-tickbox'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-friday-2 my-todo-list-2'
						inputBoxClassName='inputbox'
						inputFieldClassName='-inputfield'
						tickBoxClassName='-tickbox'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-friday-3 my-todo-list-3'
						inputBoxClassName='inputbox'
						inputFieldClassName='-inputfield'
						tickBoxClassName='-tickbox'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-friday-4 my-todo-list-4'
						inputBoxClassName='inputbox'
						inputFieldClassName='-inputfield'
						tickBoxClassName='-tickbox'
					/>
					<ToDoLine
						className='my-todo-list sep-week-3-friday-5 my-todo-list-5'
						inputBoxClassName='inputbox'
						inputFieldClassName='-inputfield'
						tickBoxClassName='-tickbox'
					/>
				</div>
			</div>
		</div>
	);
};

export default Friday;
