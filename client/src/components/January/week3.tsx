import WeekBox from "./weekday3";
import Calendar from "../calender/CalendarPro";
// import satShape from "../../assets/jan2024/saturdayShape.png";
// import sunShape from "../../assets/jan2024/sundayShape.png";
// import friShape from "../../assets/jan2024/fridayShape.png";
// import thursShape from "../../assets/jan2024/thursdayShape.png";
// import wedShape from "../../assets/jan2024/wednesdayShape.png";
// import tuesShape from "../../assets/jan2024/tuesdayShape.png";
// import monShape from "../../assets/jan2024/mondayShape.png";
const week3 = () => {
	return (
		<>
			<div className='container text-center justify-content-center h-100'>
				<div className='row mb-2'>
					<div className='col-lg-3 col-md-4 d-flex day-box'>
						<WeekBox
							day='Monday'
							boxIds={[
								`jan-week-3-monday-1`,
								`jan-week-3-monday-2`,
								`jan-week-3-monday-3`,
								`jan-week-3-monday-4`,
								`jan-week-3-monday-5`,
							]}
						/>
					</div>
					<div className='col-lg-3 col-md-4 d-flex day-box'>
						<WeekBox
							day='Tuesday'
							boxIds={[
								`jan-week-3-tuesday-1`,
								`jan-week-3-tuesday-2`,
								`jan-week-3-tuesday-3`,
								`jan-week-3-tuesday-4`,
								`jan-week-3-tuesday-5`,
							]}
						/>
					</div>
					<div className='col-lg-3 col-md-4 d-flex day-box'>
						<WeekBox
							day='Wednesday'
							boxIds={[
								`jan-week-3-wednesday-1`,
								`jan-week-3-wednesday-2`,
								`jan-week-3-wednesday-3`,
								`jan-week-3-wednesday-4`,
								`jan-week-3-wednesday-5`,
							]}
						/>
					</div>
					<div className='col-lg-3 col-md-4 d-flex day-box'>
						<WeekBox
							day='Thursday'
							boxIds={[
								`jan-week-3-thursday-1`,
								`jan-week-3-thursday-2`,
								`jan-week-3-thursday-3`,
								`jan-week-3-thursday-4`,
								`jan-week-3-thursday-5`,
							]}
						/>
					</div>
				</div>
				<div
					className='d-none d-md-block background-img'
					style={{ width: "105%" }}
				></div>
				<div className='row'>
					<div className='col-lg-3 col-md-4 d-flex day-box'>
						<WeekBox
							day='Friday'
							boxIds={[
								`jan-week-3-friday-1`,
								`jan-week-3-friday-2`,
								`jan-week-3-friday-3`,
								`jan-week-3-friday-4`,
								`jan-week-3-friday-5`,
							]}
						/>
					</div>
					<div className='col-lg-3 col-md-4 d-flex day-box'>
						<WeekBox
							day='Saturday'
							boxIds={[
								`jan-week-3-saturday-1`,
								`jan-week-3-saturday-2`,
								`jan-week-3-saturday-3`,
								`jan-week-3-saturday-4`,
								`jan-week-3-saturday-5`,
							]}
						/>
					</div>
					<div className='col-lg-3 col-md-4 d-flex day-box'>
						<WeekBox
							day='Sunday'
							boxIds={[
								`jan-week-3-saturday-1`,
								`jan-week-3-saturday-2`,
								`jan-week-3-saturday-3`,
								`jan-week-3-saturday-4`,
								`jan-week-3-saturday-5`,
							]}
						/>
					</div>
					<div className='col-lg-3 col-md-4 d-flex'>
						<Calendar
							month={1}
							year={2022}
							headingColor='#bfb8dd'
							headingStyle={{ marginBottom: "2px", fontFamily: "Protest Riot" }}
							dayColor='#bfb8dd'
							dayStyle={{ fontFamily: "Protest Riot" }}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default week3;
