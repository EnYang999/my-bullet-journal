import WeekContainer from "../week-box-container/WeekContainer";
import RabbitStamp from "../rabbitstamp/rabbitstamp";
import "./SeptemberWeekMobile.css";
import SidePage from "../sidebarpage/SidePage";
const SeptemberWeekMobile = () => {
	return (
		<div className='september-week-mobile'>
			{/* <SidePage className='sidebar' /> */}
			<RabbitStamp stampWidth={10} className='rabbit' />
			<WeekContainer className='WeekContainer' />
		</div>
	);
};

export default SeptemberWeekMobile;
