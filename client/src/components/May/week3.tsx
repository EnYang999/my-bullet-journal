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
						shapeImage={monShape}
						boxIds={[
							`may-week-3-monday-1`,
							`may-week-3-monday-2`,
							`may-week-3-monday-3`,
							`may-week-3-monday-4`,
							`may-week-3-monday-5`,
						]}
					/>
				</div>
				<div className='col'>
					<WeekBox
						shapeImage={tuesShape}
						boxIds={[
							`may-week-3-tuesday-1`,
							`may-week-3-tuesday-2`,
							`may-week-3-tuesday-3`,
							`may-week-3-tuesday-4`,
							`may-week-3-tuesday-5`,
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
						shapeImage={wedShape}
						boxIds={[
							`may-week-3-wednesday-1`,
							`may-week-3-wednesday-2`,
							`may-week-3-wednesday-3`,
							`may-week-3-wednesday-4`,
							`may-week-3-wednesday-5`,
						]}
					/>
					<div className='doughnut wed-dn'></div>
				</div>
				<div className='col'>
					<WeekBox
						shapeImage={thursShape}
						boxIds={[
							`may-week-3-thursday-1`,
							`may-week-3-thursday-2`,
							`may-week-3-thursday-3`,
							`may-week-3-thursday-4`,
							`may-week-3-thursday-5`,
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
						shapeImage={friShape}
						boxIds={[
							`may-week-3-friday-1`,
							`may-week-3-friday-2`,
							`may-week-3-friday-3`,
							`may-week-3-friday-4`,
							`may-week-3-friday-5`,
						]}
					/>
					<div className='doughnut fri-dn'></div>
				</div>
				<div className='col'>
					<WeekBox
						shapeImage={satShape}
						boxIds={[
							`may-week-3-saturday-1`,
							`may-week-3-saturday-2`,
							`may-week-3-saturday-3`,
							`may-week-3-saturday-4`,
							`may-week-3-saturday-5`,
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
						shapeImage={sunShape}
						boxIds={[
							`may-week-3-sunday-1`,
							`may-week-3-sunday-2`,
							`may-week-3-sunday-3`,
							`may-week-3-sunday-4`,
							`may-week-3-sunday-5`,
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default MarchWeek3;
