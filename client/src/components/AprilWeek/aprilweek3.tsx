import { useState } from "react";
import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";
import WeekBox from "./weekday3";
import LineDots from "../decorationelements/lineanddots/lineanddots";
import FourSquares from "../decorationelements/lineanddots/squares";
import Square from "../decorationelements/lineanddots/square";
const AprilWeek3 = () => {
	const [selectedMonth, setSelectedMonth] = useState<string>("04");
	const [selectedTab, setSelectedTab] = useState<string>("index");
	return (
		<div className='april-week-3'>
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
					style={{ right: "0.5%", top: "5%" }}
				>
					<p
						className='d-flex align-items-center justify-content-center m-0 px-2'
						style={{ fontFamily: "Aleo" }}
					>
						My Year
					</p>
					<Square />
				</div>
				<div
					className='d-flex position-absolute'
					style={{ left: "0.5%", bottom: "5%" }}
				>
					<LineDots lineLeft={true} />
				</div>
				<div className='row outer-row'>
					<div
						className='col-lg-10 h-100 d-flex align-items-center'
						style={{ border: "2px solid green" }}
					>
						<div className='row inner-row mx-3'>
							<div className='col-lg-3 col-md-6 d-flex day-box'>
								<WeekBox
									day='Mon.'
									boxIds={[
										`apr-week-3-monday-1`,
										`apr-week-3-monday-2`,
										`apr-week-3-monday-3`,
										`apr-week-3-monday-4`,
										`apr-week-3-monday-5`,
									]}
								/>
							</div>
							<div className='col-lg-3 col-md-6 d-flex day-box'>
								<WeekBox
									day='Tue.'
									boxIds={[
										`apr-week-3-tuesday-1`,
										`apr-week-3-tuesday-2`,
										`apr-week-3-tuesday-3`,
										`apr-week-3-tuesday-4`,
										`apr-week-3-tuesday-5`,
									]}
								/>
							</div>
							<div className='col-lg-3 col-md-6 d-flex day-box'>
								<WeekBox
									day='Wed.'
									boxIds={[
										`apr-week-3-wednesday-1`,
										`apr-week-3-wednesday-2`,
										`apr-week-3-wednesday-3`,
										`apr-week-3-wednesday-4`,
										`apr-week-3-wednesday-5`,
									]}
								/>
							</div>

							<div className='col-lg-3 col-md-6 d-flex day-box'>
								<WeekBox
									day='Thur.'
									boxIds={[
										`apr-week-3-thursday-1`,
										`apr-week-3-thursday-2`,
										`apr-week-3-thursday-3`,
										`apr-week-3-thursday-4`,
										`apr-week-3-thursday-5`,
									]}
								/>
							</div>
							<div className='col-lg-3 col-md-6 d-flex day-box'>
								<WeekBox
									day='Fri.'
									boxIds={[
										`apr-week-3-friday-1`,
										`apr-week-3-friday-2`,
										`apr-week-3-friday-3`,
										`apr-week-3-friday-4`,
										`apr-week-3-friday-5`,
									]}
								/>
							</div>
							<div className='col-lg-3 col-md-6 d-flex day-box'>
								<WeekBox
									day='Sat.'
									boxIds={[
										`apr-week-3-saturday-1`,
										`apr-week-3-saturday-2`,
										`apr-week-3-saturday-3`,
										`apr-week-3-saturday-4`,
										`apr-week-3-saturday-5`,
									]}
								/>
							</div>
							<div className='col-lg-3 col-md-6 d-flex day-box'>
								<WeekBox
									day='Sun.'
									boxIds={[
										`apr-week-3-sunday-1`,
										`apr-week-3-sunday-2`,
										`apr-week-3-sunday-3`,
										`apr-week-3-sunday-4`,
										`apr-week-3-sunday-5`,
									]}
								/>
							</div>
							<div className='col-lg-3 col-md-6 d-flex day-box'>
								<div className='bg-img'></div>
							</div>
						</div>
					</div>
					<div className='col-lg-2 text-center d-flex align-items-start justify-content-center p-5'>
						<FourSquares isVertical={true} />
						<p
							className='mt-1 mx-0'
							style={{ writingMode: "vertical-rl", fontFamily: "Josefin Slab" }}
						>
							Basking in the Warm Glow of the Afternoon Sun
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AprilWeek3;
