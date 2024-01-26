import { useState } from "react";
import WeekBox from "./weekday1";
import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";
import LineDots from "../decorationelements/lineanddots/lineanddots";
import FourSquares from "../decorationelements/lineanddots/squares";
import Square from "../decorationelements/lineanddots/square";
const AprilWeek1 = () => {
	const [selectedMonth, setSelectedMonth] = useState<string>("04");
	const [selectedTab, setSelectedTab] = useState<string>("index");
	return (
		<div className='april-week-1 week-container-layout'>
			<div className='container py-8 px-6 d-flex week-box-container'>
				<SidePage
					className='sidebar'
					setSelectedMonth={setSelectedMonth}
					tab={selectedTab}
				/>
				<RightSideBar
					className='rightside'
					month={selectedMonth}
					setSelectedTab={setSelectedTab}
				/>
				<div
					className='d-flex position-absolute align-items-center justify-content-center'
					style={{ left: "0.5%", top: "5%" }}
				>
					<Square />
					<p
						className='d-flex align-items-center justify-content-center m-0 px-2'
						style={{ fontFamily: "Aleo" }}
					>
						My Year
					</p>
				</div>
				<div
					className='d-flex position-absolute'
					style={{ left: "0.5%", bottom: "5%" }}
				>
					<LineDots lineLeft={true} />
				</div>
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
