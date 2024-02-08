import WeekBox from "./weekday3";
import LineDots from "../decorationelements/lineanddots/lineanddots";
import FourSquares from "../decorationelements/lineanddots/squares";
import Square from "../decorationelements/lineanddots/square";
import weekendShape from "../../assets/jan2024/weekendShape.png";
import friShape from "../../assets/jan2024/fridayShape.png";
import thursShape from "../../assets/jan2024/thursdayShape.png";
import wedShape from "../../assets/jan2024/wednesdayShape.png";
import tuesShape from "../../assets/jan2024/tuesdayShape.png";
import monShape from "../../assets/jan2024/mondayShape.png";
const MarchWeek3 = () => {
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
				<Square backgroundColor='#81689D' />
			</div>
			<div
				className='d-flex position-absolute'
				style={{ right: "0.5%", bottom: "5%" }}
			>
				<LineDots lineLeft={false} backgroundColor='#81689D' />
			</div>
			<div className='row outer-row'>
				<div className='col-lg-3 text-center d-flex align-items-center'>
					<div className='d-flex flex-column'>
						<p
							style={{
								fontFamily: "Josefin Slab",
								fontSize: "5rem",
								marginBottom: 0,
								color: "#7077A1",
								// fontStyle: "italic",
							}}
						>
							March.
						</p>
						<FourSquares
							squareStyles={[
								{ backgroundColor: "#5D3587" },
								{ backgroundColor: "#AC87C5" },
								{ backgroundColor: "#756AB6" },
								{ backgroundColor: "#A367B1" },
								{ backgroundColor: "#BB9CC0" },
							]}
						/>
					</div>
				</div>
				<div className='col-lg-9 h-100'>
					<div className='row inner-row h-100'>
						<div className='col-lg-4 col-md-6 d-flex day-box'>
							<WeekBox
								day='Monday'
								shapeImage={monShape}
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
								shapeImage={tuesShape}
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
								shapeImage={wedShape}
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
								shapeImage={thursShape}
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
								shapeImage={friShape}
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
								shapeImage={weekendShape}
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
			</div>
		</>
	);
};

export default MarchWeek3;