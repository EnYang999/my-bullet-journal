import WeekBox from "./weekday5";
import FourSquares from "../decorationelements/lineanddots/squares";
import Calendar from "../calender/Calendar";
const NovemberWeek4 = () => {
	return (
		<>
			<div className='row outer-row'>
				<div className='col-lg-3 text-center d-flex align-items-center'>
					<div className='d-flex flex-column'>
						<p
							style={{
								fontFamily: "Josefin Slab",
								fontSize: "5rem",
								marginBottom: 0,
							}}
						>
							November.
						</p>
						<FourSquares />
						<Calendar
							month={11}
							year={2024}
							rowColor='black'
							headerColor='black'
							containerStyle={{ width: "50%", backgroundColor: "#ADC4CE" }}
							headerStyle={{ backgroundColor: "#ADC4CE" }}
							rowStyle={{ padding: "2px" }}
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
