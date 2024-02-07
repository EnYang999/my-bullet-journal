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
			<div className='row'>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='monday'
						shapeImage={mondayShape}
						boxIds={[
							`sep-week-4-monday-1`,
							`sep-week-4-monday-2`,
							`sep-week-4-monday-3`,
							`sep-week-4-monday-4`,
							`sep-week-4-monday-5`,
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='tuesday'
						shapeImage={tuesdayShape}
						boxIds={[
							"sep-week-4-tuesday-1",
							"sep-week-4-tuesday-2",
							"sep-week-4-tuesday-3",
							"sep-week-4-tuesday-4",
							"sep-week-4-tuesday-5",
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='wednesday'
						shapeImage={wednesdayShape}
						boxIds={[
							"sep-week-4-wednesday-1",
							"sep-week-4-wednesday-2",
							"sep-week-4-wednesday-3",
							"sep-week-4-wednesday-4",
							"sep-week-4-wednesday-5",
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center justify-content-center bluerose-img'></div>

				<div className='w-100 d-none d-md-block mt-7'></div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center violet-img'></div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='thursday'
						shapeImage={thursdayShape}
						boxIds={[
							"sep-week-4-thursday-1",
							"sep-week-4-thursday-2",
							"sep-week-4-thursday-3",
							"sep-week-4-thursday-4",
							"sep-week-4-thursday-5",
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='friday'
						shapeImage={fridayShape}
						boxIds={[
							"sep-week-4-friday-1",
							"sep-week-4-friday-2",
							"sep-week-4-friday-3",
							"sep-week-4-friday-4",
							"sep-week-4-friday-5",
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='weekend'
						shapeImage={weekendShape}
						boxIds={[
							"sep-week-4-weekend-1",
							"sep-week-4-weekend-2",
							"sep-week-4-weekend-3",
							"sep-week-4-weekend-4",
							"sep-week-4-weekend-5",
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default MarchWeek5;
