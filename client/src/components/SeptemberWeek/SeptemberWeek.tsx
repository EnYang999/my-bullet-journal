/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import fridayShape from "../../assets/img/friday-shape.svg";
import mondayShape from "../../assets/img/monday-shape.svg";
import tuesdayShape from "../../assets/img/tuesday-shape.svg";
import wednesdayShape from "../../assets/img/wednesday-shape.svg";
import thursdayShape from "../../assets/img/thursday-shape.svg";
import weekendShape from "../../assets/img/weekend-shape.svg";
import fridayVector from "../../assets/img/friday-vector.svg";
import mondayVector from "../../assets/img/monday-vector.svg";
import tuesdayVector from "../../assets/img/tuesday-vector.svg";
import wednesdayVector from "../../assets/img/wednesday-vector.svg";
import thursdayVector from "../../assets/img/thursday-vector.svg";
import weekendVector from "../../assets/img/weekend-vector.svg";

import borderOfStamp from "../../assets/img/border-of-stamp.svg";
import headShadow from "../../assets/img/head-shadow.svg";
import line from "../../assets/img/line-1.svg";
import RabbitMother from "../../assets/img/rabbit-mother.png";
import rabbitRun from "../../assets/img/rabbit-run.png";
import shadow from "../../assets/img/shodow.png";
import star1 from "../../assets/img/star-vector-1.svg";
import star2 from "../../assets/img/star-vector-2.svg";
import star3 from "../../assets/img/star-vector-3.svg";
import star5 from "../../assets/img/star-vector-5.svg";
import star4 from "../../assets/img/star-shape.svg";

import { StarShape } from "../../icons/starShape/starShape";
import { Todo } from "../Todo/Todo";
import "./SeptemberWeek.css";
import { ToDoLine } from "../checkbox/todoline";
interface Props {
	className: string;
}

export const SeptemberWeek = ({ className }: Props): JSX.Element => {
	return (
		<div className={`september-week ${className}`}>
			<div className='overlap'>
				<div className='background'>
					<div className='rabbit-mother-overlap-group'>
						<img className='star-vector-3' alt='Star vector' src={star3} />
						<img
							className='rabbit-mother'
							alt='Rabbit mother'
							src={RabbitMother}
						/>
					</div>
					<img className='star-vector-2' alt='Star vector' src={star2} />
					<img className='star-vector-1' alt='Star vector' src={star1} />
					<div className='september-overlap-group'>
						<img className='star-vector-4' alt='Star shape' src={star4} />
						<StarShape className='september' />
					</div>
					<div className='rabbit-stamp-overlap-group'>
						<img className='star-vector-5' alt='Star vector' src={star5} />
						<img
							className='border-of-stamp'
							alt='Border of stamp'
							src={borderOfStamp}
						/>
						<img className='shadow' alt='Shadow' src={shadow} />
						<img className='rabbit-run' alt='Rabbit run' src={rabbitRun} />
						<img className='head-shadow' alt='Head shadow' src={headShadow} />
						<div className='text-wrapper-inspiration'>Sep</div>
						<img className='rabbit-stamp-line' alt='Line' src={line} />
					</div>
				</div>
				<div className='monday'>
					<div className='overlap-1'>
						<img className='img-2' alt='Monday vector' src={mondayVector} />
						<img
							className='monday-shape'
							alt='Monday shape'
							src={mondayShape}
						/>
						<div className='to-do-lines-5'>
							<Todo
								className='my-todo-list'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-3'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-4'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-5'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-6'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
						</div>
					</div>
				</div>
				<div className='tuesday'>
					<div className='overlap-2'>
						<img className='img-2' alt='Tuesday vector' src={tuesdayVector} />
						<img
							className='tuesday-shape'
							alt='Tuesday shape'
							src={tuesdayShape}
						/>
						<div className='to-do-lines'>
							{/* <Todo
								className='my-todo-list'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-3'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-4'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-5'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-6'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/> */}
						</div>
					</div>
				</div>
				<div className='wednesday'>
					<div className='overlap-3'>
						<img
							className='wednesday-vector'
							alt='Wednesday vector'
							src={wednesdayVector}
						/>
						<img
							className='wednesday-shape'
							alt='Wednesday shape'
							src={wednesdayShape}
						/>
						<div className='to-do-lines-6'>
							<Todo
								className='my-todo-list'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-3'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-4'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-5'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-6'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
						</div>
					</div>
				</div>
				<div className='thursday'>
					<div className='overlap-4'>
						<img
							className='thursday-vector'
							alt='Thursday vector'
							src={thursdayVector}
						/>
						<img
							className='thursday-shape'
							alt='Thursday shape'
							src={thursdayShape}
						/>
						<div className='to-do-lines-4'>
							<Todo
								className='my-todo-list'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-3'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-4'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-5'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-6'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
						</div>
					</div>
				</div>
				<div className='friday'>
					<div className='overlap-5'>
						<img
							className='friday-vector'
							alt='Friday vector'
							src={fridayVector}
						/>
						<img
							className='friday-shape'
							alt='Friday shape'
							src={fridayShape}
						/>
						<div className='to-do-lines-2'>
							<ToDoLine
								className='sep-week-3-tuesday-1'
								inputBoxClassName='-inputbox'
								inputFieldClassName='-inputfield'
								tickBoxClassName='-tickbox'
							/>
							<ToDoLine
								className='sep-week-3-tuesday-2'
								inputBoxClassName='inputbox'
								inputFieldClassName='-inputfield'
								tickBoxClassName='-tickbox'
							/>
							{/* <CheckboxB
								className='my-todo-list-3'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<CheckboxB
								className='my-todo-list-4'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/> */}
							{/* <Todo
								className='my-todo-list'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-3'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-4'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-5'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-6'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/> */}
						</div>
					</div>
				</div>
				<div className='weekend'>
					<div className='overlap-6'>
						<img
							className='weekend-shape'
							alt='Weekend shape'
							src={weekendShape}
						/>
						<img
							className='weekend-vector'
							alt='Weekend vector'
							src={weekendVector}
						/>
						<div className='to-do-lines-3'>
							<Todo
								className='my-todo-list'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-3'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-4'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-5'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
							<Todo
								className='my-todo-list-6'
								defaultClassName='my-todo-list-2'
								inputFieldClassName='design-component-instance-node'
								tickBoxClassName='todo-instance'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
