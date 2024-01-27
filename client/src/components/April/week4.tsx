import WeekBox from "./weekday4";
import LineDots from "../decorationelements/lineanddots/lineanddots";
import FourSquares from "../decorationelements/lineanddots/squares";
import Square from "../decorationelements/lineanddots/square";
import friShape from "../../assets/april2022/Fri-aprweek2.png";
import thursShape from "../../assets/april2022/Thurs-aprweek2.png";
import wedShape from "../../assets/april2022/Wed-aprweek2.png";
import tuesShape from "../../assets/april2022/Tues-aprweek2.png";
import monShape from "../../assets/april2022/Mon-aprweek2.png";
import satShape from "../../assets/april2022/Sat-aprweek2.png";
import sunShape from "../../assets/april2022/Sun-aprweek2.png";
const AprilWeek4 = () => {
	return (
		<>
			<div
				className='d-flex flex-column position-absolute align-items-center'
				style={{ right: "2.5%", top: "4%" }}
			>
				<p
					style={{
						fontFamily: "Josefin Slab",
						fontSize: "4rem",
						marginBottom: 0,
						color: "white",
					}}
				>
					April.
				</p>
				<FourSquares />
			</div>
			<div
				className='d-flex position-absolute align-items-center justify-content-center'
				style={{ right: "0.5%", bottom: "5%" }}
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
				style={{ left: "0.5%", bottom: "5%" }}
			>
				<LineDots lineLeft={true} />
			</div>
			<div className='row h-100'>
				<div className='col d-flex day-box'>
					<WeekBox
						day='25'
						shapeImage={monShape}
						boxIds={[
							`apr-week-4-monday-1`,
							`apr-week-4-monday-2`,
							`apr-week-4-monday-3`,
							`apr-week-4-monday-4`,
							`apr-week-4-monday-5`,
						]}
					/>
				</div>
				<div className='col d-flex day-box'>
					<WeekBox
						day='26'
						shapeImage={tuesShape}
						boxIds={[
							`apr-week-4-tuesday-1`,
							`apr-week-4-tuesday-2`,
							`apr-week-4-tuesday-3`,
							`apr-week-4-tuesday-4`,
							`apr-week-4-tuesday-5`,
						]}
					/>
				</div>
				<div className='col d-flex day-box'>
					<WeekBox
						day='27'
						shapeImage={wedShape}
						boxIds={[
							`apr-week-4-wednesday-1`,
							`apr-week-4-wednesday-2`,
							`apr-week-4-wednesday-3`,
							`apr-week-4-wednesday-4`,
							`apr-week-4-wednesday-5`,
						]}
					/>
				</div>

				<div className='col d-flex day-box'>
					<WeekBox
						day='28'
						shapeImage={thursShape}
						boxIds={[
							`apr-week-4-thursday-1`,
							`apr-week-4-thursday-2`,
							`apr-week-4-thursday-3`,
							`apr-week-4-thursday-4`,
							`apr-week-4-thursday-5`,
						]}
					/>
				</div>
				<div className='col d-flex day-box'>
					<WeekBox
						day='29'
						shapeImage={friShape}
						boxIds={[
							`apr-week-4-friday-1`,
							`apr-week-4-friday-2`,
							`apr-week-4-friday-3`,
							`apr-week-4-friday-4`,
							`apr-week-4-friday-5`,
						]}
					/>
				</div>
				<div className='col d-flex day-box'>
					<WeekBox
						day='30'
						shapeImage={satShape}
						boxIds={[
							`apr-week-4-saturday-1`,
							`apr-week-4-saturday-2`,
							`apr-week-4-saturday-3`,
							`apr-week-4-saturday-4`,
							`apr-week-4-saturday-5`,
						]}
					/>
				</div>
				<div className='col d-flex day-box'>
					<WeekBox
						day='31'
						shapeImage={sunShape}
						boxIds={[
							`apr-week-4-sunday-1`,
							`apr-week-4-sunday-2`,
							`apr-week-4-sunday-3`,
							`apr-week-4-sunday-4`,
							`apr-week-4-sunday-5`,
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default AprilWeek4;
