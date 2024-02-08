import WeekBox from "./weekday2";
import Calendar from "../calender/Calendar";
import FourLines from "../decorationelements/lineanddots/lines";
const JuneWeek2 = () => {
	return (
		<>
			<div className='row justify-content-between'>
				<div className='col-lg-2 col-md-2 left-banner d-flex flex-column justify-content-between'>
					<Calendar
						month={6}
						year={2024}
						containerStyle={{ height: "15%", padding: "0" }}
						rowColor='black'
						rowfont='Josefin Slab'
						headerfont='Indie Flower'
						headerColor='black'
						headerStyle={{
							padding: "0.2px",
							fontStyle: "italic",
							fontWeight: "bold",
						}}
						rowStyle={{ padding: "0.5px" }}
					/>
					<div className='row left-bg'></div>
				</div>
				<div className='col-lg-4 col-md-2 g-2 d-flex flex-column justify-content-evenly'>
					<div className='row'>
						<WeekBox
							day='Monday'
							boxIds={[
								`jun-week-2-monday-1`,
								`jun-week-2-monday-2`,
								`jun-week-2-monday-3`,
								`jun-week-2-monday-4`,
								`jun-week-2-monday-5`,
							]}
						/>
					</div>
					<div className='row'>
						<WeekBox
							day='Tuesday'
							boxIds={[
								`jun-week-2-tuesday-1`,
								`jun-week-2-tuesday-2`,
								`jun-week-2-tuesday-3`,
								`jun-week-2-tuesday-4`,
								`jun-week-2-tuesday-5`,
							]}
						/>
					</div>
					<div className='row'>
						<WeekBox
							day='Wednesday'
							boxIds={[
								`jun-week-2-wednesday-1`,
								`jun-week-2-wednesday-2`,
								`jun-week-2-wednesday-3`,
								`jun-week-2-wednesday-4`,
								`jun-week-2-wednesday-5`,
							]}
						/>
					</div>
					<div className='row'>
						<WeekBox
							day='Thursday'
							boxIds={[
								`jun-week-2-thursday-1`,
								`jun-week-2-thursday-2`,
								`jun-week-2-thursday-3`,
								`jun-week-2-thursday-4`,
								`jun-week-2-thursday-5`,
							]}
						/>
					</div>
				</div>
				<div className='col-lg-4 col-md-2 g-2 d-flex flex-column justify-content-evenly'>
					<div className='row'>
						<WeekBox
							day='Friday'
							boxIds={[
								`jun-week-2-friday-1`,
								`jun-week-2-friday-2`,
								`jun-week-2-friday-3`,
								`jun-week-2-friday-4`,
								`jun-week-2-friday-5`,
							]}
						/>
					</div>
					<div className='row'>
						<WeekBox
							day='Saturday'
							boxIds={[
								`jun-week-2-saturday-1`,
								`jun-week-2-saturday-2`,
								`jun-week-2-saturday-3`,
								`jun-week-2-saturday-4`,
								`jun-week-2-saturday-5`,
							]}
						/>
					</div>
					<div className='row'>
						<WeekBox
							day='Sunday'
							boxIds={[
								`jun-week-2-sunday-1`,
								`jun-week-2-sunday-2`,
								`jun-week-2-sunday-3`,
								`jun-week-2-sunday-4`,
								`jun-week-2-sunday-5`,
							]}
						/>
					</div>
					<div className='row'>
						<WeekBox
							day='Notes'
							boxIds={[
								`jun-week-2-notes-1`,
								`jun-week-2-notes-2`,
								`jun-week-2-notes-3`,
								`jun-week-2-notes-4`,
								`jun-week-2-notes-5`,
							]}
						/>
					</div>
				</div>
				<div className='col-lg-2 col-md-2 right-banner d-flex flex-column justify-content-between align-items-center'>
					<div className='row right-bg'></div>
					<FourLines
						isVertical={true}
						lineStyle={{ width: "100%", height: "20%", margin: "5% 0" }}
						linesStyle={{ width: "100%", height: "25%" }}
					/>
				</div>
			</div>
		</>
	);
};

export default JuneWeek2;
