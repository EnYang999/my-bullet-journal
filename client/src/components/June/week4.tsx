import WeekBox from "./weekday4";
import Calendar from "../calender/Calendar";
const JuneWeek4 = () => {
	return (
		<>
			<div className='row'>
				<div className='col-lg-3'>
					<WeekBox
						day='Monday'
						boxIds={[
							`jun-week-2-monday-1`,
							`jun-week-2-monday-2`,
							`jun-week-2-monday-3`,
							`jun-week-2-monday-4`,
							`jun-week-2-monday-5`,
						]}
					/>
				</div>
				<div className='col-lg-3'>
					<WeekBox
						day='Tuesday'
						boxIds={[
							`jun-week-2-tuesday-1`,
							`jun-week-2-tuesday-2`,
							`jun-week-2-tuesday-3`,
							`jun-week-2-tuesday-4`,
							`jun-week-2-tuesday-5`,
						]}
					/>
				</div>
				<div className='col-lg-3'>
					<WeekBox
						day='Wednesday'
						boxIds={[
							`jun-week-2-wednesday-1`,
							`jun-week-2-wednesday-2`,
							`jun-week-2-wednesday-3`,
							`jun-week-2-wednesday-4`,
							`jun-week-2-wednesday-5`,
						]}
					/>
				</div>
				<div className='col-lg-3'>
					<WeekBox
						day='Thursday'
						boxIds={[
							`jun-week-2-thursday-1`,
							`jun-week-2-thursday-2`,
							`jun-week-2-thursday-3`,
							`jun-week-2-thursday-4`,
							`jun-week-2-thursday-5`,
						]}
					/>
				</div>

				<div className='w-100 d-none d-md-block mt-7'></div>

				<div className='col-lg-3'>
					<WeekBox
						day='Friday'
						boxIds={[
							`jun-week-2-friday-1`,
							`jun-week-2-friday-2`,
							`jun-week-2-friday-3`,
							`jun-week-2-friday-4`,
							`jun-week-2-friday-5`,
						]}
					/>
				</div>
				<div className='col-lg-3'>
					<WeekBox
						day='Saturday'
						boxIds={[
							`jun-week-2-saturday-1`,
							`jun-week-2-saturday-2`,
							`jun-week-2-saturday-3`,
							`jun-week-2-saturday-4`,
							`jun-week-2-saturday-5`,
						]}
					/>
				</div>
				<div className='col-lg-3'>
					<WeekBox
						day='Sunday'
						boxIds={[
							`jun-week-2-sunday-1`,
							`jun-week-2-sunday-2`,
							`jun-week-2-sunday-3`,
							`jun-week-2-sunday-4`,
							`jun-week-2-sunday-5`,
						]}
					/>
				</div>
				<div className='col-lg-3'>
					<span className='d-flex justify-content-center'>
						<span style={{ fontFamily: "Kalam", fontSize: "2em" }}>June</span>
					</span>
					<Calendar
						month={6}
						year={2023}
						headerColor='#B0A4A4'
						rowColor='#B0A4A4'
						rowfont='Kalam'
						rowStyle={{ padding: "1px" }}
						containerStyle={{
							border: "#8095c0 solid 4px;",
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default JuneWeek4;
