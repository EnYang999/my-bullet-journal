import React from "react";
import { ToDoLine } from "../todolines/todoline";
import MondayShape from "../../assets/oct2023/MONDAY.svg";
import stampa from "../../assets/oct2023/stampa.png";
import "./MondayOct.css";
const MondayOct = () => {
	return (
		<div className='week-box monday oct-monday-box'>
			<div className='week-overlap overlap-1'>
				<div className='stamp-block'>
					<figure className='fig-stamp stampa'>
						<img src={stampa} alt='' />
					</figure>
				</div>
				<div className='todo-block'>
					<svg className='to-do-title'>
						<filter id='filter'>
							<feTurbulence
								baseFrequency='0.05'
								numOctaves='2'
								type='fractalNoise'
								result='result1'
							/>
							<feDisplacementMap
								in2='result1'
								scale='5'
								result='result2'
								xChannelSelector='R'
								in='SourceGraphic'
							/>
							<feComposite
								in2='result2'
								in='SourceGraphic'
								operator='atop'
								result='fbSourceGraphic'
							/>
						</filter>
						<foreignObject className='rect-label'>
							<figure className='fig-mondayshape mondaysp'>
								<img src={MondayShape} alt='monday' className='mondayshape' />
							</figure>
						</foreignObject>
					</svg>
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
		</div>
	);
};

export default MondayOct;
