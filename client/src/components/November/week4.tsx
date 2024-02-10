import FourSquares from "../decorationelements/lineanddots/squares";

import WeekBox from "./weekday4";
const MarchWeek5 = () => {
	return (
		<>
			{/* <div
				className='col-lg-3 text-center d-flex flex-column align-items-center justify-content-around position-absolute'
				style={{ right: "0.5%", top: "35%" }}
			>
				<p
					style={{
						fontFamily: "Josefin Slab",
						fontSize: "4rem",
						marginBottom: 0,
						color: "#0B60B0",
						writingMode: "vertical-rl",
						textOrientation: "mixed",
					}}
				>
					November.
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
			</div> */}
			<div className='row'>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='Monday'
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
						day='Tuesday'
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
						day='Wednesday'
						boxIds={[
							"sep-week-4-wednesday-1",
							"sep-week-4-wednesday-2",
							"sep-week-4-wednesday-3",
							"sep-week-4-wednesday-4",
							"sep-week-4-wednesday-5",
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex'>
					<figure className='flowersOnSea'></figure>
					<figure className='fishUndSea'></figure>
					<div className='doughnut dn-1' />
					{/* <div className='doughnut dn-2' /> */}
					<div className='doughnut dn-3' />
					<div className='doughnut dn-4' />
					<div className='doughnut dn-5' />
					<div className='doughnut dn-6' />
					<div className='doughnut dn-7' />
					<div className='doughnut dn-8' />
					<div className='doughnut dn-9' />
					<div className='doughnut dn-10' />
					<div className='doughnut dn-11' />
					<p
						style={{
							fontFamily: "Pinyon Script",
							fontSize: "4rem",
							marginBottom: 0,
							color: "#436850",
							writingMode: "vertical-rl",
							textOrientation: "mixed",
						}}
					>
						November.
					</p>
				</div>

				<div className='w-100 d-none d-md-block mt-7'></div>

				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='Thursday'
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
						day='Friday'
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
						day='Saturday'
						boxIds={[
							"sep-week-4-saturday-1",
							"sep-week-4-saturday-2",
							"sep-week-4-saturday-3",
							"sep-week-4-saturday-4",
							"sep-week-4-saturday-5",
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='Sunday'
						boxIds={[
							"sep-week-4-sunday-1",
							"sep-week-4-sunday-2",
							"sep-week-4-sunday-3",
							"sep-week-4-sunday-4",
							"sep-week-4-sunday-5",
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default MarchWeek5;
