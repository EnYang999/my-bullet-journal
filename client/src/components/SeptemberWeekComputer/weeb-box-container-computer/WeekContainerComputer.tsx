import Monday from "../Monday";
import Tuesday from "../Tuesday";
import Wednesday from "../Wednesday";
import Thursday from "../Thursday";
import Friday from "../Friday";
import Weekend from "../Weekend";
import "./WeekContainerComputer.css";

interface Props {
	className: string;
}
const WeekContainerComputer = ({ className }: Props): JSX.Element => {
	return (
		<div className={`week-box-container sep-week-box-computer ${className}`}>
			<div className='week-line week-top'>
				<Monday />
				<Tuesday />
				<Wednesday />
			</div>
			<div className='week-line week-bottom'>
				<Thursday />
				<Friday />
				<Weekend />
			</div>
		</div>
	);
};

export default WeekContainerComputer;
