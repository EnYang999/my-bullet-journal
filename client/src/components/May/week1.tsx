import WeekBox from "./weekday1";
import weekendShape from "../../assets/jan2024/weekendShape.png";
import friShape from "../../assets/jan2024/fridayShape.png";
import thursShape from "../../assets/jan2024/thursdayShape.png";
import wedShape from "../../assets/jan2024/wednesdayShape.png";
import tuesShape from "../../assets/jan2024/tuesdayShape.png";
import monShape from "../../assets/jan2024/mondayShape.png";
const MayWeek1 = () => {
	return (
		<>
			<div className='row justify-content-between h-100'>
				<div className='col-2 flower-bg h-100'></div>
				<div className='col-4 h-100'>
					<div className='row'>
						<WeekBox
							day='Monday'
							shapeImage={monShape}
							boxIds={[
								`apr-week-2-monday-1`,
								`apr-week-2-monday-2`,
								`apr-week-2-monday-3`,
								`apr-week-2-monday-4`,
								`apr-week-2-monday-5`,
							]}
						/>
					</div>
					<div className='row'>
						<WeekBox
							day='Tuesday'
							shapeImage={tuesShape}
							boxIds={[
								`apr-week-2-tuesday-1`,
								`apr-week-2-tuesday-2`,
								`apr-week-2-tuesday-3`,
								`apr-week-2-tuesday-4`,
								`apr-week-2-tuesday-5`,
							]}
						/>
					</div>
					<div className='row'>
						{" "}
						<WeekBox
							day='Wednesday'
							shapeImage={wedShape}
							boxIds={[
								`apr-week-2-wednesday-1`,
								`apr-week-2-wednesday-2`,
								`apr-week-2-wednesday-3`,
								`apr-week-2-wednesday-4`,
								`apr-week-2-wednesday-5`,
							]}
						/>
					</div>
				</div>
				<div className='col-4 h-100'>
					<div className='row'>
						<WeekBox
							day='Thursday'
							shapeImage={thursShape}
							boxIds={[
								`apr-week-2-thursday-1`,
								`apr-week-2-thursday-2`,
								`apr-week-2-thursday-3`,
								`apr-week-2-thursday-4`,
								`apr-week-2-thursday-5`,
							]}
						/>
					</div>
					<div className='row'>
						<WeekBox
							day='Friday'
							shapeImage={friShape}
							boxIds={[
								`apr-week-2-friday-1`,
								`apr-week-2-friday-2`,
								`apr-week-2-friday-3`,
								`apr-week-2-friday-4`,
								`apr-week-2-friday-5`,
							]}
						/>
					</div>
					<div className='row'>
						<WeekBox
							day='Weekend'
							shapeImage={weekendShape}
							boxIds={[
								`apr-week-2-weekend-1`,
								`apr-week-2-weekend-2`,
								`apr-week-2-weekend-3`,
								`apr-week-2-weekend-4`,
								`apr-week-2-weekend-5`,
							]}
						/>
					</div>
				</div>
				<div className='col-2 flower-bg-re h-100'></div>
			</div>
		</>
	);
};

export default MayWeek1;
