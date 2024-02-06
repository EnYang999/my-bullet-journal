import WeekBox from "./weekday1";
import LineDots from "../decorationelements/lineanddots/lineanddots";
import FourSquares from "../decorationelements/lineanddots/squares";
import marchShape from "../../assets/mar2022/marchShape.png";
import Calendar from "../calender/Calendar";
const MarchWeek1 = () => {
	return (
		<>
			<div
				className='d-flex flex-column position-absolute align-items-center'
				style={{ left: "20%", top: "4%", width: "15rem", height: "auto" }}
			>
				<figure className={`week-fig w-100`}>
					<img className={`week-shape w-100`} alt={`march`} src={marchShape} />
				</figure>
				<FourSquares
					squareStyles={[
						{ backgroundColor: "#9BB8CD" },
						{ backgroundColor: "#176B87" },
						{ backgroundColor: "#86B6F6" },
						{ backgroundColor: "#B4D4FF" },
						{ backgroundColor: "#EEF5FF" },
					]}
				/>
			</div>
			<Calendar
				month={3}
				year={2022}
				containerStyle={{
					position: "absolute",
					right: "10%",
					top: "4%",
					width: "12.5rem",
					height: "auto",
					marginTop: "0",
				}}
				headerColor='black'
				rowColor='black'
				headerfont='Open Sans'
				rowfont='Open Sans'
				headerStyle={{
					marginBottom: "2px",
				}}
				rowStyle={{
					padding: "0px auto",
				}}
			/>
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
						boxIds={[
							`mar-week-1-monday-1`,
							`mar-week-1-monday-2`,
							`mar-week-1-monday-3`,
							`mar-week-1-monday-4`,
							`mar-week-1-monday-5`,
						]}
					/>
				</div>
				<div className='col d-flex day-box'>
					<WeekBox
						day='26'
						boxIds={[
							`mar-week-1-tuesday-1`,
							`mar-week-1-tuesday-2`,
							`mar-week-1-tuesday-3`,
							`mar-week-1-tuesday-4`,
							`mar-week-1-tuesday-5`,
						]}
					/>
				</div>
				<div className='col d-flex day-box'>
					<WeekBox
						day='27'
						boxIds={[
							`mar-week-1-wednesday-1`,
							`mar-week-1-wednesday-2`,
							`mar-week-1-wednesday-3`,
							`mar-week-1-wednesday-4`,
							`mar-week-1-wednesday-5`,
						]}
					/>
				</div>

				<div className='col d-flex day-box'>
					<WeekBox
						day='28'
						boxIds={[
							`mar-week-1-thursday-1`,
							`mar-week-1-thursday-2`,
							`mar-week-1-thursday-3`,
							`mar-week-1-thursday-4`,
							`mar-week-1-thursday-5`,
						]}
					/>
				</div>
				<div className='col d-flex day-box'>
					<WeekBox
						day='29'
						boxIds={[
							`mar-week-1-friday-1`,
							`mar-week-1-friday-2`,
							`mar-week-1-friday-3`,
							`mar-week-1-friday-4`,
							`mar-week-1-friday-5`,
						]}
					/>
				</div>
				<div className='col d-flex day-box'>
					<WeekBox
						day='30'
						boxIds={[
							`mar-week-1-saturday-1`,
							`mar-week-1-saturday-2`,
							`mar-week-1-saturday-3`,
							`mar-week-1-saturday-4`,
							`mar-week-1-saturday-5`,
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default MarchWeek1;
