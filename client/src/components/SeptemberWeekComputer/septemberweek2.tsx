import Calendar from "../calender/Calendar";
import fridayShape from "../../assets/img/friday-sepweek2.svg";
import tuesdayShape from "../../assets/img/tuesday-sepweek2.svg";
import mondayShape from "../../assets/img/monday-sepweek2.svg";
import wednesdayShape from "../../assets/img/wednesday-sepweek2.svg";
import thursdayShape from "../../assets/img/thursday-sepweek2.svg";
import weekendShape from "../../assets/img/weekend-sepweek2.svg";
import WeekBox from "./weekday4";
import SidePage from "../sidebarpage/SidePage";
import "./septemberweek2.scss";
import SeptemberLabel from "../decorationelements/septemberlabel/SeptemberLabel";
import BunnyRabbit from "../../assets/img/BunnyRabbitWeek2Sep.png";
const SeptemberWeek2 = () => {
	return (
		<div className='september-week-2'>
			<div className='container py-8 px-6 d-flex week-box-container'>
				<SidePage className='sidebar' />
				<div className='row'>
					<div className='col-lg-9'>
						<div className='row'>
							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='monday'
									shapeImage={mondayShape}
									boxIds={[
										`sep-week-2-monday-1`,
										`sep-week-2-monday-2`,
										`sep-week-2-monday-3`,
										`sep-week-2-monday-4`,
										`sep-week-2-monday-5`,
									]}
								/>
							</div>
							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='tuesday'
									shapeImage={tuesdayShape}
									boxIds={[
										`sep-week-2-tuesday-1`,
										`sep-week-2-tuesday-2`,
										`sep-week-2-tuesday-3`,
										`sep-week-2-tuesday-4`,
										`sep-week-2-tuesday-5`,
									]}
								/>
							</div>
							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='wednesday'
									shapeImage={wednesdayShape}
									boxIds={[
										`sep-week-2-wednesday-1`,
										`sep-week-2-wednesday-2`,
										`sep-week-2-wednesday-3`,
										`sep-week-2-wednesday-4`,
										`sep-week-2-wednesday-5`,
									]}
								/>
							</div>
							<div className='w-100 d-none d-md-block mt-7'></div>

							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='thursday'
									shapeImage={thursdayShape}
									boxIds={[
										`sep-week-2-thursday-1`,
										`sep-week-2-thursday-2`,
										`sep-week-2-thursday-3`,
										`sep-week-2-thursday-4`,
										`sep-week-2-thursday-5`,
									]}
								/>
							</div>
							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='friday'
									shapeImage={fridayShape}
									boxIds={[
										`sep-week-2-friday-1`,
										`sep-week-2-friday-2`,
										`sep-week-2-friday-3`,
										`sep-week-2-friday-4`,
										`sep-week-2-friday-5`,
									]}
								/>
							</div>
							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='weekend'
									shapeImage={weekendShape}
									boxIds={[
										`sep-week-2-weekend-1`,
										`sep-week-2-weekend-2`,
										`sep-week-2-weekend-3`,
										`sep-week-2-weekend-4`,
										`sep-week-2-weekend-5`,
									]}
								/>
							</div>
						</div>
					</div>
					<div className='col-lg-3'>
						<SeptemberLabel className='septemberlabel' />
						<figure>
							<img src={BunnyRabbit} alt='' />
						</figure>
						<Calendar month={9} year={2023} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SeptemberWeek2;
