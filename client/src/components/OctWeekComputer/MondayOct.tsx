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
						<ToDoLine className='my-todo-list' boxId='oct-week-3-monday-1' />
						<ToDoLine className='my-todo-list' boxId='oct-week-3-monday-2' />
						<ToDoLine className='my-todo-list' boxId='oct-week-3-monday-3' />
						<ToDoLine className='my-todo-list' boxId='oct-week-3-monday-4' />
						<ToDoLine className='my-todo-list' boxId='oct-week-3-monday-5' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MondayOct;
