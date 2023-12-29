import WeekContainerMobile from "../week-box-container-mobile/WeekContainerMobile";
import RabbitStamp from "../rabbitstamp/rabbitstamp";
import "./SeptemberWeekMobile.css";
import RabbitMother from "../RabbitMother/RabbitMother";
import SeptemberLabel from "../septemberlabel/SeptemberLabel";
import WeekContainerComputer from "../weeb-box-container-computer/WeekContainerComputer";
const SeptemberWeekMobile = () => {
	return (
		<div className='september-week-mobile'>
			{/* <SidePage className='sidebar' /> */}
			<RabbitStamp stampWidth={10} className='rabbit' />
			<WeekContainerComputer className='WeekContainer' />
			<RabbitMother className='rabbitmother' />
			<SeptemberLabel className='septemberlabel' />
		</div>
	);
};

export default SeptemberWeekMobile;
