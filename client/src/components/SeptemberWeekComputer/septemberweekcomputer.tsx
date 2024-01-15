import RabbitStamp from "../decorationelements/rabbitstamp/rabbitstamp";
import "./septemberweekcomputer.css";
import RabbitMother from "../decorationelements/rabbitmother/RabbitMother";
import SeptemberLabel from "../decorationelements/septemberlabel/SeptemberLabel";
import WeekContainerComputer from "./weeb-box-container-computer/WeekContainerComputer";
import SidePage from "../sidebarpage/SidePage";

const SeptemberWeekComputer = () => {
	return (
		<>
			<div className='september-week-computer'>
				<div className='content'>
					<SidePage className='sidebar' />
					<RabbitStamp stampWidth={10} className='rabbit' />
					<WeekContainerComputer className='WeekContainer' />
					<RabbitMother className='rabbitmother' />
					<SeptemberLabel className='septemberlabel' />
				</div>
			</div>
		</>
	);
};

export default SeptemberWeekComputer;
