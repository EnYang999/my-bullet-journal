import WeekContainer from "../week-box-container/WeekContainer";
import RabbitStamp from "../rabbitstamp/rabbitstamp";
import "./SeptemberWeekMobile.css";
import RabbitMother from "../RabbitMother/RabbitMother";

const SeptemberWeekMobile = () => {
	return (
		<div className='september-week-mobile'>
			{/* <SidePage className='sidebar' /> */}
			<RabbitStamp stampWidth={10} className='rabbit' />
			<WeekContainer className='WeekContainer' />
			<RabbitMother className='rabbitmother' />
		</div>
	);
};

export default SeptemberWeekMobile;
