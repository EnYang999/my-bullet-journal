import FourSquares from "../decorationelements/lineanddots/squares";

import WeekBox from "./weekday5";
const NovemberWeek5 = () => {
	return (
		<>
			<div className='row'>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='Monday'
						boxIds={[
							`nov-week-5-monday-1`,
							`nov-week-5-monday-2`,
							`nov-week-5-monday-3`,
							`nov-week-5-monday-4`,
							`nov-week-5-monday-5`,
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='Tuesday'
						boxIds={[
							"nov-week-5-tuesday-1",
							"nov-week-5-tuesday-2",
							"nov-week-5-tuesday-3",
							"nov-week-5-tuesday-4",
							"nov-week-5-tuesday-5",
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='Wednesday'
						boxIds={[
							"nov-week-5-wednesday-1",
							"nov-week-5-wednesday-2",
							"nov-week-5-wednesday-3",
							"nov-week-5-wednesday-4",
							"nov-week-5-wednesday-5",
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
					<FourSquares
						isVertical={true}
						cusStyle={{ position: "absolute", left: "30%" }}
						squareStyles={[
							{ backgroundColor: "#ECE3CE" },
							{ backgroundColor: "#739072" },
							{ backgroundColor: "#4F6F52" },
							{ backgroundColor: "#3A4D39" },
							{ backgroundColor: "#86A789" },
						]}
					/>
				</div>

				<div className='w-100 d-none d-md-block mt-7'></div>

				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='Thursday'
						boxIds={[
							"nov-week-5-thursday-1",
							"nov-week-5-thursday-2",
							"nov-week-5-thursday-3",
							"nov-week-5-thursday-4",
							"nov-week-5-thursday-5",
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='Friday'
						boxIds={[
							"nov-week-5-friday-1",
							"nov-week-5-friday-2",
							"nov-week-5-friday-3",
							"nov-week-5-friday-4",
							"nov-week-5-friday-5",
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='Saturday'
						boxIds={[
							"nov-week-5-saturday-1",
							"nov-week-5-saturday-2",
							"nov-week-5-saturday-3",
							"nov-week-5-saturday-4",
							"nov-week-5-saturday-5",
						]}
					/>
				</div>
				<div className='col-lg-3 col-md-6 d-flex align-items-center'>
					<WeekBox
						day='Sunday'
						boxIds={[
							"nov-week-5-sunday-1",
							"nov-week-5-sunday-2",
							"nov-week-5-sunday-3",
							"nov-week-5-sunday-4",
							"nov-week-5-sunday-5",
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default NovemberWeek5;
