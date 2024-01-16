import SeptemberLabel from "../decorationelements/septemberlabel/SeptemberLabel";
import SidePage from "../sidebarpage/SidePage";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Weekend from "./Weekend";
import RabbitStamp from "../decorationelements/rabbitstamp/rabbitstamp";
import "./septemberweekcomputer.css";
import RabbitMother from "../decorationelements/rabbitmother/RabbitMother";
const SeptemberWeekComputer = () => {
	return (
		<>
			<div className='september-week-computer'>
				<div className='content'>
					<SidePage className='sidebar' />

					<div className={`week-box-container sep-week-box-computer`}>
						<div className='week-line week-top'>
							<Monday />
							<Tuesday />
							<Wednesday />
							<RabbitStamp stampWidth={10} className='rabbit' />
						</div>
						<div className='week-line week-bottom'>
							<RabbitMother className='rabbitmother' />
							<Thursday />
							<Friday />
							<Weekend />
						</div>
					</div>

					<SeptemberLabel className='septemberlabel' />
				</div>
			</div>
		</>
	);
};

export default SeptemberWeekComputer;
