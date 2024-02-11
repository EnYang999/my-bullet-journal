import FourSquares from "../decorationelements/lineanddots/squares";

import WeekBox from "./weekday4";
const NovemberWeek1 = () => {
	return (
		<>
			<div className='row outer-row'>
				<div className='col-lg-9 h-100'>
					<div className='row inner-row h-100'>
						<div className='col-lg-6 col-md-6 d-flex day-box'>
							<WeekBox
								day='Monday'
								boxIds={[
									`nov-week-1-monday-1`,
									`nov-week-1-monday-2`,
									`nov-week-1-monday-3`,
									`nov-week-1-monday-4`,
									`nov-week-1-monday-5`,
								]}
							/>
						</div>
						<div className='col-lg-6 col-md-6 d-flex day-box'>
							<WeekBox
								day='Tuesday'
								boxIds={[
									`nov-week-1-tuesday-1`,
									`nov-week-1-tuesday-2`,
									`nov-week-1-tuesday-3`,
									`nov-week-1-tuesday-4`,
									`nov-week-1-tuesday-5`,
								]}
							/>
						</div>
						<div className='col-lg-6 col-md-6 d-flex day-box'>
							<WeekBox
								day='Wednesday'
								boxIds={[
									`nov-week-1-wednesday-1`,
									`nov-week-1-wednesday-2`,
									`nov-week-1-wednesday-3`,
									`nov-week-1-wednesday-4`,
									`nov-week-1-wednesday-5`,
								]}
							/>
						</div>

						<div className='col-lg-6 col-md-6 d-flex day-box'>
							<WeekBox
								day='Thursday'
								boxIds={[
									`nov-week-1-thursday-1`,
									`nov-week-1-thursday-2`,
									`nov-week-1-thursday-3`,
									`nov-week-1-thursday-4`,
									`nov-week-1-thursday-5`,
								]}
							/>
						</div>
						<div className='col-lg-6 col-md-6 d-flex day-box'>
							<WeekBox
								day='Friday'
								boxIds={[
									`nov-week-1-friday-1`,
									`nov-week-1-friday-2`,
									`nov-week-1-friday-3`,
									`nov-week-1-friday-4`,
									`nov-week-1-friday-5`,
								]}
							/>
						</div>
						<div className='col-lg-6 col-md-6 d-flex day-box'>
							<WeekBox
								day='Weekend'
								boxIds={[
									`nov-week-1-weekend-1`,
									`nov-week-1-weekend-2`,
									`nov-week-1-weekend-3`,
									`nov-week-1-weekend-4`,
									`nov-week-1-weekend-5`,
								]}
							/>
						</div>
					</div>
				</div>
				<div className='col-lg-3 text-center d-flex align-items-center'>
					<div className='d-flex flex-column position-relative w-100 h-100 justify-content-center'>
						<p
							style={{
								fontFamily: "Pinyon Script",
								fontSize: "2rem",
								marginBottom: 0,
								alignSelf: "center",
								justifySelf: "center",
								zIndex: "1",
							}}
						>
							Amidst the waning light of late autumn, the world takes on a
							serene and reflective beauty
						</p>
						<FourSquares
							squareStyles={[
								{ backgroundColor: "#749BC2" },
								{ backgroundColor: "#4A55A2" },
								{ backgroundColor: "#7895CB" },
								{ backgroundColor: "#A0BFE0" },
								{ backgroundColor: "#C5DFF8" },
							]}
							cusStyle={{ zIndex: "1", marginTop: "1rem" }}
						/>
						<div className='blob'></div>
						<div className='blob'></div>
						<div className='blob'></div>
						<div className='blob'></div>
						<div className='blob'></div>
						<p
							style={{
								fontFamily: "Aleo",
								fontSize: "3rem",
								alignSelf: "center",
								justifySelf: "center",
								zIndex: "1",
								color: "#c3dcff",
							}}
						>
							November
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default NovemberWeek1;
