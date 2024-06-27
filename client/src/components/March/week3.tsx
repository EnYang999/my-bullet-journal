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
			<div className='row outer-row h-100'>
				<div className='col-lg-3 col-md-2 text-center d-flex align-items-center'>
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
				<div className='col-lg-9 col-md-10 h-100'>
					<div className='row inner-row h-50 mb-2'>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Monday'
								shapeImage={monShape}
								boxIds={[
									`mar-week-3-monday-1`,
									`mar-week-3-monday-2`,
									`mar-week-3-monday-3`,
									`mar-week-3-monday-4`,
									`mar-week-3-monday-5`,
								]}
							/>
						</div>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Tuesday'
								shapeImage={tuesShape}
								boxIds={[
									`mar-week-3-tuesday-1`,
									`mar-week-3-tuesday-2`,
									`mar-week-3-tuesday-3`,
									`mar-week-3-tuesday-4`,
									`mar-week-3-tuesday-5`,
								]}
							/>
						</div>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Wednesday'
								shapeImage={wedShape}
								boxIds={[
									`mar-week-3-wednesday-1`,
									`mar-week-3-wednesday-2`,
									`mar-week-3-wednesday-3`,
									`mar-week-3-wednesday-4`,
									`mar-week-3-wednesday-5`,
								]}
							/>
						</div>
					</div>
					<div className='row inner-row h-50'>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Thursday'
								shapeImage={thursShape}
								boxIds={[
									`mar-week-3-thursday-1`,
									`mar-week-3-thursday-2`,
									`mar-week-3-thursday-3`,
									`mar-week-3-thursday-4`,
									`mar-week-3-thursday-5`,
								]}
							/>
						</div>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Friday'
								shapeImage={friShape}
								boxIds={[
									`mar-week-3-friday-1`,
									`mar-week-3-friday-2`,
									`mar-week-3-friday-3`,
									`mar-week-3-friday-4`,
									`mar-week-3-friday-5`,
								]}
							/>
						</div>
						<div className='col-4 d-flex h-100'>
							<WeekBox
								day='Weekend'
								shapeImage={weekendShape}
								boxIds={[
									`mar-week-3-weekend-1`,
									`mar-week-3-weekend-2`,
									`mar-week-3-weekend-3`,
									`mar-week-3-weekend-4`,
									`mar-week-3-weekend-5`,
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
