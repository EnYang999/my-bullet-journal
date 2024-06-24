import "./OctWeekComputer.css";
import MondayOct from "./MondayOct";
import OctoberTitle from "./OctoberTitle";
export const OctWeekComputer = () => {
	return (
		<div className='october-week-computer'>
			<div className='october-week-computer-layout'>
				<OctoberTitle />
				<div className='week-box-container'>
					<MondayOct />
					<MondayOct />
					<MondayOct />
					<MondayOct />
					<MondayOct />
					<MondayOct />
				</div>
			</div>
		</div>
	);
};
