import WeekContainerMobile from "../week-box-container-mobile/WeekContainerMobile";
import RabbitStamp from "../decorationelements/rabbitstamp/rabbitstamp";
import "./SeptemberWeekMobile.css";
import RabbitMother from "../decorationelements/rabbitmother/RabbitMother";
import SeptemberLabel from "../decorationelements/septemberlabel/SeptemberLabel";
const SeptemberWeekMobile = () => {
	return (
		<div className='september-week-mobile'>
			{/* <SidePage className='sidebar' /> */}
			<RabbitStamp stampWidth={10} className='rabbit' />
			<WeekContainerMobile className='WeekContainer' />
			<RabbitMother className='rabbitmother' />
			<SeptemberLabel className='septemberlabel' />
		</div>
	);
};

export default SeptemberWeekMobile;
