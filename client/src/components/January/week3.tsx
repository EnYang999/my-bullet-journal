import WeekBox from "./weekday3";
import Calendar from "../calender/Calendar";
import satShape from "../../assets/jan2024/saturdayShape.png";
import sunShape from "../../assets/jan2024/sundayShape.png";
import friShape from "../../assets/jan2024/fridayShape.png";
import thursShape from "../../assets/jan2024/thursdayShape.png";
import wedShape from "../../assets/jan2024/wednesdayShape.png";
import tuesShape from "../../assets/jan2024/tuesdayShape.png";
import monShape from "../../assets/jan2024/mondayShape.png";
const week3 = () => {
	return (
		<>
			<div className='container text-center'>
				<div className='row'>
					<div className='col-lg-3 col-md-4 d-flex day-box'>
						<WeekBox
							shapeImage={monShape}
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
							shapeImage={tuesShape}
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
							shapeImage={wedShape}
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
							shapeImage={thursShape}
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
					style={{ width: "100%" }}
				></div>
				<div className='row'>
					<div className='col-lg-3 col-md-4 d-flex day-box'>
						<WeekBox
							shapeImage={friShape}
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
							shapeImage={satShape}
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
							shapeImage={sunShape}
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
							headerColor='#bfb8dd'
							headerStyle={{ marginBottom: "2px", fontFamily: "Protest Riot" }}
							rowColor='#bfb8dd'
							rowStyle={{ fontFamily: "Protest Riot" }}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default week3;
