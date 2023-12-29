import Monday from "../monday/Monday";
import Tuesday from "../tuesday/Tuesday";
import Wednesday from "../wednesday/Wednesday";
import Thursday from "../thursday/Thursday";
import Friday from "../friday/Friday";
import Weekend from "../weekend/Weekend";
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
