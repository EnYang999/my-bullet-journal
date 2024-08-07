import RabbitStamp from "../decorationelements/rabbitstamp/rabbitstamp";
import RabbitMother from "../decorationelements/rabbitmother/RabbitMother";
import "./week4.scss";
import mondayShape from "../../assets/img/monday-shape.svg";
import tuesdayShape from "../../assets/img/thursday-shape.svg";
import wednesdayShape from "../../assets/img/wednesday-shape.svg";
import thursdayShape from "../../assets/img/thursday-shape.svg";
import fridayShape from "../../assets/img/friday-shape.svg";
import weekendShape from "../../assets/img/weekend-shape.svg";
import WeekBox from "./weekday4";
const SeptemberWeek4 = () => {
	return (
		<>
			<div className='row h-100 justify-content-center align-items-center'>
				<div className='col-3 d-flex align-items-center'>
					<WeekBox
						day='monday'
						shapeImage={mondayShape}
						boxIds={[
							`sep-week-4-monday-1`,
							`sep-week-4-monday-2`,
							`sep-week-4-monday-3`,
							`sep-week-4-monday-4`,
							`sep-week-4-monday-5`,
						]}
					/>
				</div>
				<div className='col-3 d-flex align-items-center'>
					<WeekBox
						day='tuesday'
						shapeImage={tuesdayShape}
						boxIds={[
							"sep-week-4-tuesday-1",
							"sep-week-4-tuesday-2",
							"sep-week-4-tuesday-3",
							"sep-week-4-tuesday-4",
							"sep-week-4-tuesday-5",
						]}
					/>
				</div>
				<div className='col-3 d-flex align-items-center'>
					<WeekBox
						day='wednesday'
						shapeImage={wednesdayShape}
						boxIds={[
							"sep-week-4-wednesday-1",
							"sep-week-4-wednesday-2",
							"sep-week-4-wednesday-3",
							"sep-week-4-wednesday-4",
							"sep-week-4-wednesday-5",
						]}
					/>
				</div>
				<div className='col-3 d-flex align-items-center justify-content-center'>
					<RabbitStamp stampWidth={10} className='rabbit' />
				</div>

				<div className='w-100 d-none d-md-block mt-5'></div>
				<div className='col-3 d-flex align-items-center'>
					<RabbitMother className='rabbitmother' />
				</div>
				<div className='col-3 d-flex align-items-center'>
					<WeekBox
						day='thursday'
						shapeImage={thursdayShape}
						boxIds={[
							"sep-week-4-thursday-1",
							"sep-week-4-thursday-2",
							"sep-week-4-thursday-3",
							"sep-week-4-thursday-4",
							"sep-week-4-thursday-5",
						]}
					/>
				</div>
				<div className='col-3 d-flex align-items-center'>
					<WeekBox
						day='friday'
						shapeImage={fridayShape}
						boxIds={[
							"sep-week-4-friday-1",
							"sep-week-4-friday-2",
							"sep-week-4-friday-3",
							"sep-week-4-friday-4",
							"sep-week-4-friday-5",
						]}
					/>
				</div>
				<div className='col-3 d-flex align-items-center'>
					<WeekBox
						day='weekend'
						shapeImage={weekendShape}
						boxIds={[
							"sep-week-4-weekend-1",
							"sep-week-4-weekend-2",
							"sep-week-4-weekend-3",
							"sep-week-4-weekend-4",
							"sep-week-4-weekend-5",
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default SeptemberWeek4;
