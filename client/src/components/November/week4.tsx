import WeekBox from "./weekday5";
// import FourSquares from "../decorationelements/lineanddots/squares";
import Circles from "../decorationelements/lineanddots/circles";
import Calendar from "../calender/CalendarPro";
const NovemberWeek4 = () => {
	return (
		<>
			<div className='row outer-row'>
				<div className='col-lg-3 text-center position-relative'>
					<div className='img-dec-1 position-absolute'></div>
					<div className='img-dec-2 position-absolute'></div>
					<div className='doughnut dn-1 position-absolute'></div>
					<div className='doughnut dn-2 position-absolute'></div>
					<div className='d-flex text-dec flex-column position-absolute'>
						<p
							style={{
								fontFamily: "Dancing Script",
								fontSize: "2.5rem",
								marginBottom: 0,
								zIndex: 2,
							}}
						>
							November.
						</p>
						<Circles cusName='circle-nov-dec' />
						<Calendar
							month={11}
							year={2024}
							dayColor='#4A55A2'
							headingColor='#4A55A2'
							cusName='nove-week4-cal'
							headingFontFamily='Indie Flower'
							dayFontFamily='Caveat'
							// containerStyle={{
							// 	width: "80%",
							// 	minWidth: "150px",
							// 	zIndex: 1,
							// }}
							dayStyle={{ padding: "1px", margin: "0" }}
						/>
					</div>
				</div>
				<div className='col-lg-9'>
					<div className='row inner-row'>
						<div className='col-lg-4 col-md-6 d-flex day-box'></div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Monday'
								boxIds={[
									`nov-week-4-monday-1`,
									`nov-week-4-monday-2`,
									`nov-week-4-monday-3`,
									`nov-week-4-monday-4`,
									`nov-week-4-monday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Tuesday'
								boxIds={[
									`nov-week-4-tuesday-1`,
									`nov-week-4-tuesday-2`,
									`nov-week-4-tuesday-3`,
									`nov-week-4-tuesday-4`,
									`nov-week-4-tuesday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Wednesday'
								boxIds={[
									`nov-week-4-wednesday-1`,
									`nov-week-4-wednesday-2`,
									`nov-week-4-wednesday-3`,
									`nov-week-4-wednesday-4`,
									`nov-week-4-wednesday-5`,
								]}
							/>
						</div>

						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Thursday'
								boxIds={[
									`nov-week-4-thursday-1`,
									`nov-week-4-thursday-2`,
									`nov-week-4-thursday-3`,
									`nov-week-4-thursday-4`,
									`nov-week-4-thursday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Friday'
								boxIds={[
									`nov-week-4-friday-1`,
									`nov-week-4-friday-2`,
									`nov-week-4-friday-3`,
									`nov-week-4-friday-4`,
									`nov-week-4-friday-5`,
								]}
							/>
						</div>

						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Saturday'
								boxIds={[
									`nov-week-4-saturday-1`,
									`nov-week-4-saturday-2`,
									`nov-week-4-saturday-3`,
									`nov-week-4-saturday-4`,
									`nov-week-4-saturday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Sunday'
								boxIds={[
									`nov-week-4-sunday-1`,
									`nov-week-4-sunday-2`,
									`nov-week-4-sunday-3`,
									`nov-week-4-sunday-4`,
									`nov-week-4-sunday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NovemberWeek4;
