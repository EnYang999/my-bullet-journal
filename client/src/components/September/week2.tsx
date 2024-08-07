import Calendar from "../calender/CalendarPro";
import fridayShape from "../../assets/img/friday-sepweek2.svg";
import tuesdayShape from "../../assets/img/tuesday-sepweek2.svg";
import mondayShape from "../../assets/img/monday-sepweek2.svg";
import wednesdayShape from "../../assets/img/wednesday-sepweek2.svg";
import thursdayShape from "../../assets/img/thursday-sepweek2.svg";
import weekendShape from "../../assets/img/weekend-sepweek2.svg";
import WeekBox from "./weekday2";
import "./week2.scss";
import SeptemberLabel from "../decorationelements/septemberlabel/SeptemberLabel";
import walkingrabbit from "../../assets/img/walkingrabbit.png";
const SeptemberWeek2 = () => {
	return (
		<>
			<div className='row outer-row h-100'>
				<div className='col-9 h-100'>
					<div className='row inner-row h-50'>
						<div className='col-4 d-flex h-100'>
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
						<div className='col-4 d-flex h-100'>
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
						<div className='col-4 d-flex h-100'>
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
					</div>
					<div className='row inner-row h-50'>
						<div className='col-4 d-flex h-100'>
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
						<div className='col-4 d-flex h-100'>
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
						<div className='col-4 d-flex h-100'>
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
				<div className='col-3 text-center'>
					<figure className={"align-self-center"}>
						<img src={walkingrabbit} alt='' />
					</figure>
					<SeptemberLabel className={"septemberlabel align-self-center"} />
					<Calendar
						month={9}
						year={2023}
						dayColor='#97D1eb'
						headingColor='#00a3d7'
					/>
				</div>
			</div>
		</>
	);
};

export default SeptemberWeek2;
