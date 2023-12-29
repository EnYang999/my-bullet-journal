import WeekContainer from "../week-box-container/WeekContainer";
import RabbitStamp from "../rabbitstamp/rabbitstamp";
import "./SeptemberWeekMobile.css";
import RabbitMother from "../RabbitMother/RabbitMother";
import SeptemberLabel from "../septemberlabel/SeptemberLabel";
const SeptemberWeekMobile = () => {
	return (
		<div className='september-week-mobile'>
			{/* <SidePage className='sidebar' /> */}
			<RabbitStamp stampWidth={10} className='rabbit' />
			<WeekContainer className='WeekContainer' />
			<RabbitMother className='rabbitmother' />
			<SeptemberLabel className='septemberlabel' />
		</div>
	);
};

export default SeptemberWeekMobile;
