import { useState } from "react";
import WeekBox from "./weekday1";
import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";
import LineDots from "../decorationelements/lineanddots/lineanddots";
import FourSquares from "../decorationelements/lineanddots/squares";
const AprilWeek1 = () => {
	const [selectedMonth, setSelectedMonth] = useState<string>("09");
	return (
		<div className='april-week-1'>
			<div className='container py-8 px-6 d-flex week-box-container'>
				<SidePage className='sidebar' setSelectedMonth={setSelectedMonth} />
				<RightSideBar className='rightside' month={selectedMonth} />
				<div className='row outer-row'>
					<div className='col-lg-9 h-100'>
						<div className='row inner-row h-100'>
							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='Monday'
									boxIds={[
										`apr-week-1-monday-1`,
										`apr-week-1-monday-2`,
										`apr-week-1-monday-3`,
										`apr-week-1-monday-4`,
										`apr-week-1-monday-5`,
									]}
								/>
							</div>
							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='Tuesday'
									boxIds={[
										`apr-week-1-tuesday-1`,
										`apr-week-1-tuesday-2`,
										`apr-week-1-tuesday-3`,
										`apr-week-1-tuesday-4`,
										`apr-week-1-tuesday-5`,
									]}
								/>
							</div>
							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='Wednesday'
									boxIds={[
										`apr-week-1-wednesday-1`,
										`apr-week-1-wednesday-2`,
										`apr-week-1-wednesday-3`,
										`apr-week-1-wednesday-4`,
										`apr-week-1-wednesday-5`,
									]}
								/>
							</div>

							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='Thursday'
									boxIds={[
										`apr-week-1-thursday-1`,
										`apr-week-1-thursday-2`,
										`apr-week-1-thursday-3`,
										`apr-week-1-thursday-4`,
										`apr-week-1-thursday-5`,
									]}
								/>
							</div>
							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='Friday'
									boxIds={[
										`apr-week-1-friday-1`,
										`apr-week-1-friday-2`,
										`apr-week-1-friday-3`,
										`apr-week-1-friday-4`,
										`apr-week-1-friday-5`,
									]}
								/>
							</div>
							<div className='col-lg-4 col-md-6 d-flex day-box'>
								<WeekBox
									day='Weekend'
									boxIds={[
										`apr-week-1-weekend-1`,
										`apr-week-1-weekend-2`,
										`apr-week-1-weekend-3`,
										`apr-week-1-weekend-4`,
										`apr-week-1-weekend-5`,
									]}
								/>
							</div>
						</div>
						<LineDots />
					</div>
					<div className='col-lg-3 text-center d-flex align-items-center'>
						<div className='d-flex flex-column'>
							<p
								style={{
									fontFamily: "Josefin Slab",
									fontSize: "5rem",
									marginBottom: 0,
									// fontStyle: "italic",
								}}
							>
								April.
							</p>
							<FourSquares />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AprilWeek1;
