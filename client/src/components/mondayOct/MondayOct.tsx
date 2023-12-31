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
					<svg>
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
				</div>
			</div>
		</div>
	);
};

export default MondayOct;
