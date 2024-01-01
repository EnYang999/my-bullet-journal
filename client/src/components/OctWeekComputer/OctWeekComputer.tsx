import React from "react";
import "./OctWeekComputer.css";
import MondayOct from "../mondayOct/MondayOct";
import OctoberTitle from "../octoberTitle/OctoberTitle";
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
