import WeekContainer from "../week-box-container/WeekContainer";
import RabbitStamp from "../rabbitstamp/rabbitstamp";
import "./SeptemberWeekMobile.css";
const SeptemberWeekMobile = () => {
	return (
		<div className='september-week-mobile'>
			<RabbitStamp stampWidth={10} className='rabbit' />
			<WeekContainer className='WeekContainer' />
		</div>
	);
};

export default SeptemberWeekMobile;
