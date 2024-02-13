import WeekBox from "./weekday5";
import Circles from "../decorationelements/lineanddots/circles";
import FourSquares from "../decorationelements/lineanddots/squares";
const NovemberWeek2 = () => {
	return (
		<>
			<div className='dec-text'>
				<div
					className='november-text'
					style={{
						fontFamily: "Style Script",
						fontSize: "3rem",
						position: "absolute",
						right: "3rem",
						top: "2rem",
						letterSpacing: "8px",
						zIndex: "1",
						color: "#c3dcff",
					}}
				>
					November
				</div>
				<Circles
					cus_circle_style={{
						background: "#6DB9EF",
						position: "absolute",
						right: "15.5rem",
						top: "3rem",
					}}
				/>
				<FourSquares
					squareStyles={[
						{ backgroundColor: "#4A55A2" },
						{ backgroundColor: "#7895CB" },
						{ backgroundColor: "#A0BFE0" },
						{ backgroundColor: "#C5DFF8" },
						{ backgroundColor: "#A1C2F1" },
					]}
					cusStyle={{ position: "absolute", right: "4rem", top: "6rem" }}
				/>
			</div>
			<div className='blobs'>
				<div className='blob d-flex justify-content-center align-items-center'>
					<span style={{ color: "aliceblue" }}>ETERNITY</span>
				</div>
				<div className='blob'></div>
				<div className='blob'></div>
				<div className='blob'></div>
				<div className='blob'></div>
			</div>
			<div className='row h-100 justify-content-center align-items-center'>
				<div className='col-lg-2'>
					<WeekBox
						day='Monday'
						boxIds={[
							`nov-week-2-monday-1`,
							`nov-week-2-monday-2`,
							`nov-week-2-monday-3`,
							`nov-week-2-monday-4`,
							`nov-week-2-monday-5`,
						]}
					/>
				</div>
				<div className='col-lg-2'>
					<WeekBox
						day='Tuesday'
						boxIds={[
							`nov-week-2-tuesday-1`,
							`nov-week-2-tuesday-2`,
							`nov-week-2-tuesday-3`,
							`nov-week-2-tuesday-4`,
							`nov-week-2-tuesday-5`,
						]}
					/>
				</div>
				<div className='col-lg-2'>
					<WeekBox
						day='Wednesday'
						boxIds={[
							`nov-week-2-wednesday-1`,
							`nov-week-2-wednesday-2`,
							`nov-week-2-wednesday-3`,
							`nov-week-2-wednesday-4`,
							`nov-week-2-wednesday-5`,
						]}
					/>
				</div>
				<div className='col-lg-2'>
					<WeekBox
						day='Thursday'
						boxIds={[
							`nov-week-2-thursday-1`,
							`nov-week-2-thursday-2`,
							`nov-week-2-thursday-3`,
							`nov-week-2-thursday-4`,
							`nov-week-2-thursday-5`,
						]}
					/>
				</div>
				<div className='col-lg-2'>
					<WeekBox
						day='Friday'
						boxIds={[
							`nov-week-2-friday-1`,
							`nov-week-2-friday-2`,
							`nov-week-2-friday-3`,
							`nov-week-2-friday-4`,
							`nov-week-2-friday-5`,
						]}
					/>
				</div>
				<div className='col-lg-2'>
					<WeekBox
						day='Weekend'
						boxIds={[
							`nov-week-2-weekend-1`,
							`nov-week-2-weekend-2`,
							`nov-week-2-weekend-3`,
							`nov-week-2-weekend-4`,
							`nov-week-2-weekend-5`,
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default NovemberWeek2;
