import FourSquares from "../decorationelements/lineanddots/squares";
import mondayShape from "../../assets/img/monday-shape.svg";
import tuesdayShape from "../../assets/img/thursday-shape.svg";
import wednesdayShape from "../../assets/img/wednesday-shape.svg";
import thursdayShape from "../../assets/img/thursday-shape.svg";
import fridayShape from "../../assets/img/friday-shape.svg";
import weekendShape from "../../assets/img/weekend-shape.svg";
import WeekBox from "./weekday5";
const MarchWeek5 = () => {
	return (
		<>
			<div
				className='col-lg-3 text-center d-flex flex-column align-items-center justify-content-around position-absolute'
				style={{ right: "0.5%", top: "35%" }}
			>
				<p
					style={{
						fontFamily: "Josefin Slab",
						fontSize: "4rem",
						marginBottom: 0,
						color: "#0B60B0",
					}}
				>
					March.
				</p>
				<FourSquares
					squareStyles={[
						{ backgroundColor: "#1D5D9B" },
						{ backgroundColor: "#91C8E4" },
						{ backgroundColor: "#749BC2" },
						{ backgroundColor: "#4682A9" },
						{ backgroundColor: "#DEE1DD" },
					]}
				/>
			</div>
			<div className='row h-100'>
				<div className='col-3 d-flex h-50 '>
					<WeekBox
						day='monday'
						shapeImage={mondayShape}
						boxIds={[
							`mar-week-5-monday-1`,
							`mar-week-5-monday-2`,
							`mar-week-5-monday-3`,
							`mar-week-5-monday-4`,
							`mar-week-5-monday-5`,
						]}
					/>
				</div>
				<div className='col-3 d-flex h-50'>
					<WeekBox
						day='tuesday'
						shapeImage={tuesdayShape}
						boxIds={[
							"mar-week-5-tuesday-1",
							"mar-week-5-tuesday-2",
							"mar-week-5-tuesday-3",
							"mar-week-5-tuesday-4",
							"mar-week-5-tuesday-5",
						]}
					/>
				</div>
				<div className='col-3 d-flex h-50'>
					<WeekBox
						day='wednesday'
						shapeImage={wednesdayShape}
						boxIds={[
							"mar-week-5-wednesday-1",
							"mar-week-5-wednesday-2",
							"mar-week-5-wednesday-3",
							"mar-week-5-wednesday-4",
							"mar-week-5-wednesday-5",
						]}
					/>
				</div>
				<div className='col-3 d-flex justify-content-center bluerose-img'></div>

				<div className='w-100 d-none d-md-block mt-7'></div>
				<div className='col-3 d-flex violet-img'></div>
				<div className='col-3 d-flex h-50'>
					<WeekBox
						day='thursday'
						shapeImage={thursdayShape}
						boxIds={[
							"mar-week-5-thursday-1",
							"mar-week-5-thursday-2",
							"mar-week-5-thursday-3",
							"mar-week-5-thursday-4",
							"mar-week-5-thursday-5",
						]}
					/>
				</div>
				<div className='col-3 d-flex h-50'>
					<WeekBox
						day='friday'
						shapeImage={fridayShape}
						boxIds={[
							"mar-week-5-friday-1",
							"mar-week-5-friday-2",
							"mar-week-5-friday-3",
							"mar-week-5-friday-4",
							"mar-week-5-friday-5",
						]}
					/>
				</div>
				<div className='col-3 d-flex h-50'>
					<WeekBox
						day='weekend'
						shapeImage={weekendShape}
						boxIds={[
							"mar-week-5-weekend-1",
							"mar-week-5-weekend-2",
							"mar-week-5-weekend-3",
							"mar-week-5-weekend-4",
							"mar-week-5-weekend-5",
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default MarchWeek5;
