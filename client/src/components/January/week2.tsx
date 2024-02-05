import WeekBox from "./weekday2";
import LineDots from "../decorationelements/lineanddots/lineanddots";
import FourSquares from "../decorationelements/lineanddots/squares";
import Square from "../decorationelements/lineanddots/square";
import Calendar from "../calender/Calendar";
import weekendShape from "../../assets/jan2024/weekendShape.png";
import friShape from "../../assets/jan2024/fridayShape.png";
import thursShape from "../../assets/jan2024/thursdayShape.png";
import wedShape from "../../assets/jan2024/wednesdayShape.png";
import tuesShape from "../../assets/jan2024/tuesdayShape.png";
import monShape from "../../assets/jan2024/mondayShape.png";
const janilWeek1 = () => {
	return (
		<>
			<div
				className='d-flex position-absolute align-items-center justify-content-center'
				style={{ left: "0.5%", top: "5%" }}
			>
				<Square backgroundColor='#637A9F' />
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
				<LineDots lineLeft={true} backgroundColor='#637A9F' />
			</div>
			<div className='row outer-row'>
				<div className='col-lg-9 h-100'>
					<div className='row inner-row h-100'>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Monday'
								shapeImage={monShape}
								boxIds={[
									`jan-week-2-monday-1`,
									`jan-week-2-monday-2`,
									`jan-week-2-monday-3`,
									`jan-week-2-monday-4`,
									`jan-week-2-monday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Tuesday'
								shapeImage={tuesShape}
								boxIds={[
									`jan-week-2-tuesday-1`,
									`jan-week-2-tuesday-2`,
									`jan-week-2-tuesday-3`,
									`jan-week-2-tuesday-4`,
									`jan-week-2-tuesday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Wednesday'
								shapeImage={wedShape}
								boxIds={[
									`jan-week-2-wednesday-1`,
									`jan-week-2-wednesday-2`,
									`jan-week-2-wednesday-3`,
									`jan-week-2-wednesday-4`,
									`jan-week-2-wednesday-5`,
								]}
							/>
						</div>

						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Thursday'
								shapeImage={thursShape}
								boxIds={[
									`jan-week-2-thursday-1`,
									`jan-week-2-thursday-2`,
									`jan-week-2-thursday-3`,
									`jan-week-2-thursday-4`,
									`jan-week-2-thursday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Friday'
								shapeImage={friShape}
								boxIds={[
									`jan-week-2-friday-1`,
									`jan-week-2-friday-2`,
									`jan-week-2-friday-3`,
									`jan-week-2-friday-4`,
									`jan-week-2-friday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Weekend'
								shapeImage={weekendShape}
								boxIds={[
									`jan-week-2-weekend-1`,
									`jan-week-2-weekend-2`,
									`jan-week-2-weekend-3`,
									`jan-week-2-weekend-4`,
									`jan-week-2-weekend-5`,
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
								fontSize: "2rem",
								marginBottom: 0,
								// fontStyle: "italic",
							}}
						>
							Unleash Your Inner Spark!
						</p>
						<FourSquares
							squareStyles={[
								{ backgroundColor: "#164863" },
								{ backgroundColor: "#427D9D" },
								{ backgroundColor: "#9BBEC8" },
								{ backgroundColor: "#DDF2FD" },
								{ backgroundColor: "#86B6F6" },
							]}
						/>
						<Calendar
							month={1}
							year={2024}
							rowfontstyle='italic'
							headerfont='Protest Riot'
							rowfont='Protest Riot'
							containerStyle={{
								display: "flex",
								flexDirection: "column",
							}}
							headerStyle={{
								marginBottom: "2px",
							}}
							rowStyle={{
								padding: "0px auto",
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default janilWeek1;
