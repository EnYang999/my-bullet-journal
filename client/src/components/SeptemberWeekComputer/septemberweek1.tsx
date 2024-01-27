import { useEffect } from "react";
import { jarallax } from "jarallax";
import "./septemberweek1.scss";
import WeekBox from "./weekday1";
import fridayShape from "../../assets/img/friday-sepweek1.svg";
import tuesdayShape from "../../assets/img/tuesday-sepweek1.svg";
import mondayShape from "../../assets/img/monday-sepweek1.svg";
import wednesdayShape from "../../assets/img/wednesday-sepweek1.svg";
import thursdayShape from "../../assets/img/thursday-sepweek1.svg";
import weekendShape from "../../assets/img/weekend-sepweek1.svg";
import background from "../../assets/img/sepweek1bg.png";
const SeptemberWeek1 = () => {
	useEffect(() => {
		jarallax(document.querySelectorAll(".jarallaxSepWeek1"), {
			speed: 0.6,
			imgSrc: background,
		});
		return () => {
			jarallax(document.querySelectorAll(".jarallaxSepWeek1"), "destroy");
		};
	}, []);
	return (
		<>
			<div className='row'>
				<div className='col-lg-2 col-md-4 d-flex day-box'>
					<WeekBox
						day='monday'
						shapeImage={mondayShape}
						dateTime={"04"}
						boxIds={[
							`sep-week-1-monday-1`,
							`sep-week-1-monday-2`,
							`sep-week-1-monday-3`,
							`sep-week-1-monday-4`,
							`sep-week-1-monday-5`,
						]}
					/>
				</div>
				<div className='col-lg-2 col-md-4 d-flex day-box'>
					<WeekBox
						day='tuesday'
						shapeImage={tuesdayShape}
						dateTime={"05"}
						boxIds={[
							`sep-week-1-tuesday-1`,
							`sep-week-1-tuesday-2`,
							`sep-week-1-tuesday-3`,
							`sep-week-1-tuesday-4`,
							`sep-week-1-tuesday-5`,
						]}
					/>
				</div>
				<div className='col-lg-2 col-md-4 d-flex day-box'>
					<WeekBox
						day='wednesday'
						shapeImage={wednesdayShape}
						dateTime={"06"}
						boxIds={[
							`sep-week-1-wednesday-1`,
							`sep-week-1-wednesday-2`,
							`sep-week-1-wednesday-3`,
							`sep-week-1-wednesday-4`,
							`sep-week-1-wednesday-5`,
						]}
					/>
				</div>

				<div className='col-lg-2 col-md-4 d-flex day-box'>
					<WeekBox
						day='thursday'
						shapeImage={thursdayShape}
						dateTime={"07"}
						boxIds={[
							`sep-week-1-thursday-1`,
							`sep-week-1-thursday-2`,
							`sep-week-1-thursday-3`,
							`sep-week-1-thursday-4`,
							`sep-week-1-thursday-5`,
						]}
					/>
				</div>
				<div className='col-lg-2 col-md-4 d-flex day-box'>
					<WeekBox
						day='friday'
						shapeImage={fridayShape}
						dateTime={"08"}
						boxIds={[
							`sep-week-1-friday-1`,
							`sep-week-1-friday-2`,
							`sep-week-1-friday-3`,
							`sep-week-1-friday-4`,
							`sep-week-1-friday-5`,
						]}
					/>
				</div>
				<div className='col-lg-2 col-md-4 d-flex day-box'>
					<WeekBox
						day='weekend'
						shapeImage={weekendShape}
						dateTime={"09/10"}
						boxIds={[
							`sep-week-1-weekend-1`,
							`sep-week-1-weekend-2`,
							`sep-week-1-weekend-3`,
							`sep-week-1-weekend-4`,
							`sep-week-1-weekend-5`,
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default SeptemberWeek1;
