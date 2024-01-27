import WeekBox from "./weekday2";
import LineDots from "../decorationelements/lineanddots/lineanddots";
import FourSquares from "../decorationelements/lineanddots/squares";
import Square from "../decorationelements/lineanddots/square";
import weekendShape from "../../assets/april2022/Weekend-aprweek2.png";
import friShape from "../../assets/april2022/Fri-aprweek2.png";
import thursShape from "../../assets/april2022/Thurs-aprweek2.png";
import wedShape from "../../assets/april2022/Wed-aprweek2.png";
import tuesShape from "../../assets/april2022/Tues-aprweek2.png";
import monShape from "../../assets/april2022/Mon-aprweek2.png";
const AprilWeek2 = () => {
	return (
		<>
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
				style={{ right: "0.5%", bottom: "5%" }}
			>
				<LineDots lineLeft={false} />
			</div>
			<div className='row outer-row'>
				<div className='col-lg-3 text-center d-flex flex-column align-items-center justify-content-around'>
					<FourSquares />
					<p
						style={{
							fontFamily: "Josefin Slab",
							fontSize: "4rem",
							marginBottom: 0,
							color: "white",
							// fontStyle: "italic",
						}}
					>
						April.
					</p>
				</div>
				<div className='col-lg-9 h-100'>
					<div className='row inner-row h-100'>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Monday'
								shapeImage={monShape}
								boxIds={[
									`apr-week-2-monday-1`,
									`apr-week-2-monday-2`,
									`apr-week-2-monday-3`,
									`apr-week-2-monday-4`,
									`apr-week-2-monday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Tuesday'
								shapeImage={tuesShape}
								boxIds={[
									`apr-week-2-tuesday-1`,
									`apr-week-2-tuesday-2`,
									`apr-week-2-tuesday-3`,
									`apr-week-2-tuesday-4`,
									`apr-week-2-tuesday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Wednesday'
								shapeImage={wedShape}
								boxIds={[
									`apr-week-2-wednesday-1`,
									`apr-week-2-wednesday-2`,
									`apr-week-2-wednesday-3`,
									`apr-week-2-wednesday-4`,
									`apr-week-2-wednesday-5`,
								]}
							/>
						</div>

						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Thursday'
								shapeImage={thursShape}
								boxIds={[
									`apr-week-2-thursday-1`,
									`apr-week-2-thursday-2`,
									`apr-week-2-thursday-3`,
									`apr-week-2-thursday-4`,
									`apr-week-2-thursday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Friday'
								shapeImage={friShape}
								boxIds={[
									`apr-week-2-friday-1`,
									`apr-week-2-friday-2`,
									`apr-week-2-friday-3`,
									`apr-week-2-friday-4`,
									`apr-week-2-friday-5`,
								]}
							/>
						</div>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Weekend'
								shapeImage={weekendShape}
								boxIds={[
									`apr-week-2-weekend-1`,
									`apr-week-2-weekend-2`,
									`apr-week-2-weekend-3`,
									`apr-week-2-weekend-4`,
									`apr-week-2-weekend-5`,
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AprilWeek2;
