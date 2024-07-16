import WeekBox from "./weekday1";
import Calendar from "../calender/CalendarPro";
import LineDots from "../decorationelements/lineanddots/lineanddots";
import Square from "../decorationelements/lineanddots/square";
import weekendShape from "../../assets/jan2024/weekendShape.png";
import friShape from "../../assets/jan2024/fridayShape.png";
import thursShape from "../../assets/jan2024/thursdayShape.png";
import wedShape from "../../assets/jan2024/wednesdayShape.png";
import tuesShape from "../../assets/jan2024/tuesdayShape.png";
import monShape from "../../assets/jan2024/mondayShape.png";
const JanuaryWeek1 = () => {
	return (
		<>
			{/* <div className='container text-center mw-100 mh-100'> */}
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
				<Square backgroundColor='#424769' />
			</div>
			<div
				className='d-flex position-absolute'
				style={{ right: "0.5%", bottom: "5%" }}
			>
				<LineDots lineLeft={false} backgroundColor='#424769' />
			</div>
			<div className='row outer-row h-100'>
				<div className='col-3 text-center d-flex flex-column align-items-center justify-content-around'>
					<Calendar
						month={1}
						year={2024}
						dayColor='white'
						headingColor='white'
						dayStyle={{ fontStyle: "italic" }}
						// rowfontstyle='italic'
						headingFontFamily='Protest Riot'
						dayFontFamily='Protest Riot'
					/>
				</div>
				<div className='col-9 h-100'>
					<div className='row inner-row h-50 mb-2'>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Monday'
								shapeImage={monShape}
								boxIds={[
									`jan-week-1-monday-1`,
									`jan-week-1-monday-2`,
									`jan-week-1-monday-3`,
									`jan-week-1-monday-4`,
									`jan-week-1-monday-5`,
								]}
							/>
						</div>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Tuesday'
								shapeImage={tuesShape}
								boxIds={[
									`jan-week-1-tuesday-1`,
									`jan-week-1-tuesday-2`,
									`jan-week-1-tuesday-3`,
									`jan-week-1-tuesday-4`,
									`jan-week-1-tuesday-5`,
								]}
							/>
						</div>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Wednesday'
								shapeImage={wedShape}
								boxIds={[
									`jan-week-1-wednesday-1`,
									`jan-week-1-wednesday-2`,
									`jan-week-1-wednesday-3`,
									`jan-week-1-wednesday-4`,
									`jan-week-1-wednesday-5`,
								]}
							/>
						</div>
					</div>
					<div className='row inner-row h-50 overflow-auto'>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Thursday'
								shapeImage={thursShape}
								boxIds={[
									`jan-week-1-thursday-1`,
									`jan-week-1-thursday-2`,
									`jan-week-1-thursday-3`,
									`jan-week-1-thursday-4`,
									`jan-week-1-thursday-5`,
								]}
							/>
						</div>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Friday'
								shapeImage={friShape}
								boxIds={[
									`jan-week-1-friday-1`,
									`jan-week-1-friday-2`,
									`jan-week-1-friday-3`,
									`jan-week-1-friday-4`,
									`jan-week-1-friday-5`,
								]}
							/>
						</div>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Weekend'
								shapeImage={weekendShape}
								boxIds={[
									`jan-week-1-weekend-1`,
									`jan-week-1-weekend-2`,
									`jan-week-1-weekend-3`,
									`jan-week-1-weekend-4`,
									`jan-week-1-weekend-5`,
								]}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* </div> */}
		</>
	);
};
export default JanuaryWeek1;
