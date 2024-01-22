import { useState } from "react";
import WeekBox from "./weekday1";
import greenpage from "../../assets/april2022/week1page.jpg";
import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";
const AprilWeek1 = () => {
	const [selectedMonth, setSelectedMonth] = useState<string>("09");
	return (
		<div className='september-week-2'>
			<div className='container py-8 px-6 d-flex week-box-container'>
				<SidePage className='sidebar' setSelectedMonth={setSelectedMonth} />
				<RightSideBar className='rightside' month={selectedMonth} />
				<div className='row outer-row'>
					<div className='col-lg-9 h-100'>
						<div className='row inner-row h-100'>
							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
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
									boxIds={[
										`sep-week-2-wednesday-1`,
										`sep-week-2-wednesday-2`,
										`sep-week-2-wednesday-3`,
										`sep-week-2-wednesday-4`,
										`sep-week-2-wednesday-5`,
									]}
								/>
							</div>

							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
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
					<div className='col-lg-3 text-center'>
						<figure className={"align-self-center"}>
							<img src={greenpage} alt='' />
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AprilWeek1;
