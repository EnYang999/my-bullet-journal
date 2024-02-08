import WeekBox from "./weekday3";
import satShape from "../../assets/jan2024/saturdayShape.png";
import sunShape from "../../assets/jan2024/sundayShape.png";
import friShape from "../../assets/jan2024/fridayShape.png";
import thursShape from "../../assets/jan2024/thursdayShape.png";
import wedShape from "../../assets/jan2024/wednesdayShape.png";
import tuesShape from "../../assets/jan2024/tuesdayShape.png";
import monShape from "../../assets/jan2024/mondayShape.png";
const MarchWeek3 = () => {
	return (
		<>
			<div className='row'>
				<div className='col'>
					<div className='img-header header-img-mon'>
						<span className='d-flex'>{25}</span>
					</div>
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
				<div className='col'>
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

					<div className='img-header header-img-tue'>
						<span className='d-flex'>{25}</span>
					</div>
					<div className='doughnut tue-dn'></div>
				</div>
				<div className='col'>
					<div className='img-header header-img-wed'>
						<span className='d-flex'>{25}</span>
					</div>
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
					<div className='doughnut wed-dn'></div>
				</div>
				<div className='col'>
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
					<div className='img-header header-img-thu'>
						<span className='d-flex'>{25}</span>
					</div>
				</div>
				<div className='col'>
					<div className='img-header header-img-fri'>
						<span className='d-flex'>{25}</span>
					</div>
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
					<div className='doughnut fri-dn'></div>
				</div>
				<div className='col'>
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
					<div className='img-header header-img-sat'>
						<span className='d-flex'>{25}</span>
					</div>
				</div>
				<div className='col'>
					<div className='img-header header-img-sun'>
						<span className='d-flex'>{25}</span>
					</div>
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

export default MarchWeek3;
