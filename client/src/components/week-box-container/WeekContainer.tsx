import Monday from "../monday/Monday";
import Tuesday from "../tuesday/Tuesday";
import Wednesday from "../wednesday/Wednesday";
import Thursday from "../thursday/Thursday";
import Friday from "../friday/Friday";
import Weekend from "../weekend/Weekend";
import "./WeekContainer.css";
interface Props {
	className: string;
}
const WeekContainer = ({ className }: Props): JSX.Element => {
	return (
		<div className={`week-box-container sep-week-box ${className}`}>
			<Monday />
			<Tuesday />
			<Wednesday />
			<Thursday />
			<Friday />
			<Weekend />
		</div>
	);
};

export default WeekContainer;
