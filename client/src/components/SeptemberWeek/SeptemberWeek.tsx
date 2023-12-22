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
						<StarShape className='september-label' />
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
				{/* <!-- div className='background'> */}
				<div className='week-box-container'>
					{/* <div className='week-line week-top'> */}
					<div className='week-box monday'>
						<div className='week-overlap overlap-1'>
							<img
								className='week-vector monday-vector'
								alt='Monday vector'
								src={mondayVector}
							/>
							<img
								className='week-shape monday-shape'
								alt='Monday shape'
								src={mondayShape}
							/>
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
					{/* <!-- div className='week-box monday'> */}
					<div className='week-box tuesday'>
						<div className='week-overlap overlap-2'>
							<img
								className='week-vector tuesday-vector'
								alt='Tuesday vector'
								src={tuesdayVector}
							/>
							<img
								className='week-shape tuesday-shape'
								alt='Tuesday shape'
								src={tuesdayShape}
							/>
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
					{/* <!-- div className='week-box tuesday'> */}
					<div className='week-box wednesday'>
						<div className='week-overlap overlap-3'>
							<img
								className='week-vector wednesday-vector'
								alt='Wednesday vector'
								src={wednesdayVector}
							/>
							<img
								className='week-shape wednesday-shape'
								alt='Wednesday shape'
								src={wednesdayShape}
							/>
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
					{/* <!-- div className='week-box wednesday'> */}
					{/* </div> */}
					{/* <!-- div className='week-line week-top'> */}
					{/* <div className='week-line week-bottom'> */}
					<div className='week-box thursday'>
						<div className='week-overlap overlap-4'>
							<img
								className='week-vector thursday-vector'
								alt='Thursday vector'
								src={thursdayVector}
							/>
							<img
								className='week-shape thursday-shape'
								alt='Thursday shape'
								src={thursdayShape}
							/>
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
					{/* <!-- div className='week-box thursday'> */}
					<div className='week-box friday'>
						<div className='week-overlap overlap-5'>
							<img
								className='week-vector friday-vector'
								alt='Friday vector'
								src={fridayVector}
							/>
							<img
								className='week-shape friday-shape'
								alt='Friday shape'
								src={fridayShape}
							/>
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
					{/* <!-- div className='week-box friday'> */}
					<div className='week-box weekend'>
						<div className='week-overlap overlap-6'>
							<img
								className='week-shape weekend-shape'
								alt='Weekend shape'
								src={weekendShape}
							/>
							<img
								className='week-vector weekend-vector'
								alt='Weekend vector'
								src={weekendVector}
							/>
							<div className='to-do-lines-container to-do-lines-6'>
								<ToDoLine
									className='my-todo-list sep-week-3-weekend-1 my-todo-list-1'
									inputBoxClassName='my-todo-list-2'
									inputFieldClassName='design-component-instance-node'
									tickBoxClassName='todo-instance'
								/>
								<ToDoLine
									className='my-todo-list sep-week-3-weekend-2 my-todo-list-2'
									inputBoxClassName='my-todo-list-2'
									inputFieldClassName='design-component-instance-node'
									tickBoxClassName='todo-instance'
								/>
								<ToDoLine
									className='my-todo-list sep-week-3-weekend-3 my-todo-list-3'
									inputBoxClassName='my-todo-list-2'
									inputFieldClassName='design-component-instance-node'
									tickBoxClassName='todo-instance'
								/>
								<ToDoLine
									className='my-todo-list sep-week-3-weekend-4 my-todo-list-4'
									inputBoxClassName='my-todo-list-2'
									inputFieldClassName='design-component-instance-node'
									tickBoxClassName='todo-instance'
								/>
								<ToDoLine
									className='my-todo-list sep-week-3-weekend-5 my-todo-list-5'
									inputBoxClassName='my-todo-list-2'
									inputFieldClassName='design-component-instance-node'
									tickBoxClassName='todo-instance'
								/>
							</div>
						</div>
					</div>
					{/* <!-- div className='week-box weekend'> */}
					{/* </div> */}
					{/* <!-- div className='week-line week-bottom'> */}
				</div>
				{/* <!-- div className='week-box-container'> */}
			</div>
			{/* <!-- div className={`september-week ${className}`}> */}
		</div>
	);
};
