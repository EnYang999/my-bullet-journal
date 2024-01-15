import Monday from "../Monday";
import Tuesday from "../Tuesday";
import Wednesday from "../Wednesday";
import Thursday from "../Thursday";
import Friday from "../Friday";
import Weekend from "../Weekend";
import "./WeekContainerMobile.css";
interface Props {
	className: string;
}
const WeekContainerMobile = ({ className }: Props): JSX.Element => {
	return (
		<div className={`week-box-container sep-week-box-mobile ${className}`}>
			<Monday />
			<Tuesday />
			<Wednesday />
			<Thursday />
			<Friday />
			<Weekend />
		</div>
	);
};

export default WeekContainerMobile;
