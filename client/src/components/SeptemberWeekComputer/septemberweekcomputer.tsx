import SidePage from "../sidebarpage/SidePage";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Weekend from "./Weekend";
import RabbitStamp from "../decorationelements/rabbitstamp/rabbitstamp";
import RabbitMother from "../decorationelements/rabbitmother/RabbitMother";
import "./septemberweekcomputer.scss";
const SeptemberWeekComputer = () => {
	return (
		<div className='september-week-computer'>
			<div className='container py-8 px-6 d-flex flex-column week-box-container'>
				<SidePage className='sidebar' />
				<div className='row'>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<Monday />
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<Tuesday />
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<Wednesday />
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center justify-content-center'>
						<RabbitStamp stampWidth={10} className='rabbit' />
					</div>

					<div className='w-100 d-none d-md-block mt-7'></div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<RabbitMother className='rabbitmother' />
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<Thursday />
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<Friday />
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<Weekend />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SeptemberWeekComputer;
