import { useEffect } from "react";
import fridayShape from "../../assets/img/friday_sepweek3.svg";
import tuesdayShape from "../../assets/img/tuesday_sepweek3.svg";
import mondayShape from "../../assets/img/monday_sepweek3.svg";
import wednesdayShape from "../../assets/img/wednesday_sepweek3.svg";
import thursdayShape from "../../assets/img/thursday_sepweek3.svg";
import weekendShape from "../../assets/img/weekend_sepweek3.svg";
import WeekBox from "./weekday3"; // very similar to weekday2
import { jarallax } from "jarallax";
import background from "../../assets/img/sepweek3bgwithwhite.png";
import "./week3.scss";
const SeptemberWeek3 = () => {
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
			<div className='row h-100'>
				<div className='col-4 d-flex'>
					<WeekBox
						day='monday'
						shapeImage={mondayShape}
						dateTime={"11"}
						boxIds={[
							`sep-week-3-monday-1`,
							`sep-week-3-monday-2`,
							`sep-week-3-monday-3`,
							`sep-week-3-monday-4`,
							`sep-week-3-monday-5`,
						]}
					/>
				</div>
				<div className='col-4 d-flex'>
					<WeekBox
						day='tuesday'
						shapeImage={tuesdayShape}
						dateTime={"12"}
						boxIds={[
							`sep-week-3-tuesday-1`,
							`sep-week-3-tuesday-2`,
							`sep-week-3-tuesday-3`,
							`sep-week-3-tuesday-4`,
							`sep-week-3-tuesday-5`,
						]}
					/>
				</div>
				<div className='col-4 d-flex'>
					<WeekBox
						day='wednesday'
						shapeImage={wednesdayShape}
						dateTime={"13"}
						boxIds={[
							`sep-week-3-wednesday-1`,
							`sep-week-3-wednesday-2`,
							`sep-week-3-wednesday-3`,
							`sep-week-3-wednesday-4`,
							`sep-week-3-wednesday-5`,
						]}
					/>
				</div>
				<div className='d-none d-block col-4 d-flex'></div>
				<div className='col-4 d-flex'>
					<WeekBox
						day='thursday'
						shapeImage={thursdayShape}
						dateTime={"14"}
						boxIds={[
							`sep-week-3-thursday-1`,
							`sep-week-3-thursday-2`,
							`sep-week-3-thursday-3`,
							`sep-week-3-thursday-4`,
							`sep-week-3-thursday-5`,
						]}
					/>
				</div>
				<div className='col-4 d-flex'>
					<WeekBox
						day='friday'
						shapeImage={fridayShape}
						dateTime={"15"}
						boxIds={[
							`sep-week-3-friday-1`,
							`sep-week-3-friday-2`,
							`sep-week-3-friday-3`,
							`sep-week-3-friday-4`,
							`sep-week-3-friday-5`,
						]}
					/>
				</div>
				<div className='d-none d-block col-4 d-flex day-box'></div>
				<div className='d-none d-block col-4 d-flex day-box'></div>
				<div className='col-4 d-flex day-box'>
					<WeekBox
						day='weekend'
						shapeImage={weekendShape}
						dateTime={"16-17"}
						boxIds={[
							`sep-week-3-weekend-1`,
							`sep-week-3-weekend-2`,
							`sep-week-3-weekend-3`,
							`sep-week-3-weekend-4`,
							`sep-week-3-weekend-5`,
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default SeptemberWeek3;
