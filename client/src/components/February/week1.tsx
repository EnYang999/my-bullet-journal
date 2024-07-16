import WeekBox from "./weekday1";
import satShape from "../../assets/jan2024/saturdayShape.png";
import sunShape from "../../assets/jan2024/sundayShape.png";
import friShape from "../../assets/jan2024/fridayShape.png";
import thursShape from "../../assets/jan2024/thursdayShape.png";
import wedShape from "../../assets/jan2024/wednesdayShape.png";
import tuesShape from "../../assets/jan2024/tuesdayShape.png";
import monShape from "../../assets/jan2024/mondayShape.png";
const FebruaryWeek1 = () => {
	return (
		<>
			<div className='row gx-1'>
				<div className='col'>
					<div className='img-header header-img-mon'></div>
					<WeekBox
						day='25'
						shapeImage={monShape}
						boxIds={[
							`jun-week-1-monday-1`,
							`jun-week-1-monday-2`,
							`jun-week-1-monday-3`,
							`jun-week-1-monday-4`,
							`jun-week-1-monday-5`,
						]}
					/>
					<div className='img-footer footer-img-mon'></div>
				</div>
				<div className='col'>
					<div className='img-header header-img-tue'></div>
					<WeekBox
						day='26'
						shapeImage={tuesShape}
						boxIds={[
							`jun-week-1-tuesday-1`,
							`jun-week-1-tuesday-2`,
							`jun-week-1-tuesday-3`,
							`jun-week-1-tuesday-4`,
							`jun-week-1-tuesday-5`,
						]}
					/>
					<div className='img-footer footer-img-tue'></div>
				</div>
				<div className='col'>
					<div className='img-header header-img-wed'></div>
					<WeekBox
						day='27'
						shapeImage={wedShape}
						boxIds={[
							`jun-week-1-wednesday-1`,
							`jun-week-1-wednesday-2`,
							`jun-week-1-wednesday-3`,
							`jun-week-1-wednesday-4`,
							`jun-week-1-wednesday-5`,
						]}
					/>
					<div className='img-footer footer-img-fri'></div>
				</div>
				<div className='col'>
					<div className='img-header header-img-fri'></div>
					<WeekBox
						day='28'
						shapeImage={thursShape}
						boxIds={[
							`jun-week-1-thursday-1`,
							`jun-week-1-thursday-2`,
							`jun-week-1-thursday-3`,
							`jun-week-1-thursday-4`,
							`jun-week-1-thursday-5`,
						]}
					/>
					<div className='img-footer footer-img-thu'></div>
				</div>
				<div className='col'>
					<div className='img-header header-img-fri'></div>
					<WeekBox
						day='29'
						shapeImage={friShape}
						boxIds={[
							`jun-week-1-friday-1`,
							`jun-week-1-friday-2`,
							`jun-week-1-friday-3`,
							`jun-week-1-friday-4`,
							`jun-week-1-friday-5`,
						]}
					/>
					<div className='img-footer footer-img-fri'></div>
				</div>
				<div className='col'>
					<div className='img-header header-img-sat'></div>
					<WeekBox
						day='30'
						shapeImage={satShape}
						boxIds={[
							`jun-week-1-saturday-1`,
							`jun-week-1-saturday-2`,
							`jun-week-1-saturday-3`,
							`jun-week-1-saturday-4`,
							`jun-week-1-saturday-5`,
						]}
					/>
					<WeekBox
						day='31'
						shapeImage={sunShape}
						boxIds={[
							`jun-week-1-sunday-1`,
							`jun-week-1-sunday-2`,
							`jun-week-1-sunday-3`,
							`jun-week-1-sunday-4`,
							`jun-week-1-sunday-5`,
						]}
					/>
					<div className='img-footer footer-img-sat'></div>
				</div>
			</div>
		</>
	);
};

export default FebruaryWeek1;
