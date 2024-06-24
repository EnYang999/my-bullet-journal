import WeekBox from "./weekday4";
import satShape from "../../assets/jan2024/saturdayShape.png";
import sunShape from "../../assets/jan2024/sundayShape.png";
import friShape from "../../assets/jan2024/fridayShape.png";
import thursShape from "../../assets/jan2024/thursdayShape.png";
import wedShape from "../../assets/jan2024/wednesdayShape.png";
import tuesShape from "../../assets/jan2024/tuesdayShape.png";
import monShape from "../../assets/jan2024/mondayShape.png";
const MarchWeek4 = () => {
	return (
		<>
			<div className='row justify-content-md-center w-100 justify-content-lg-space-between align-items-center h-100'>
				<div className='col col-lg-6 h-100'>
					<div className='row position-relative h-100'>
						<div className='col col-lg-5 d-flex flex-column justify-content-end g-1 h-100'>
							<WeekBox
								day='Monday'
								shapeImage={monShape}
								cusClassName='h-50 overflow-auto'
								boxIds={[
									`mar-week-4-monday-1`,
									`mar-week-4-monday-2`,
									`mar-week-4-monday-3`,
									`mar-week-4-monday-4`,
									`mar-week-4-monday-5`,
								]}
							/>
							<WeekBox
								day='Tuesday'
								shapeImage={tuesShape}
								cusClassName='h-50 overflow-auto'
								boxIds={[
									`mar-week-4-tuesday-1`,
									`mar-week-4-tuesday-2`,
									`mar-week-4-tuesday-3`,
									`mar-week-4-tuesday-4`,
									`mar-week-4-tuesday-5`,
								]}
							/>
						</div>
						<div className='col col-lg-5 h-100'>
							<WeekBox
								day='Wednesday'
								shapeImage={wedShape}
								cusClassName='h-50 overflow-auto'
								boxIds={[
									`mar-week-4-wednesday-1`,
									`mar-week-4-wednesday-2`,
									`mar-week-4-wednesday-3`,
									`mar-week-4-wednesday-4`,
									`mar-week-4-wednesday-5`,
								]}
							/>
							<WeekBox
								day='Thursday'
								shapeImage={thursShape}
								cusClassName='h-50 overflow-auto'
								boxIds={[
									`mar-week-4-thursday-1`,
									`mar-week-4-thursday-2`,
									`mar-week-4-thursday-3`,
									`mar-week-4-thursday-4`,
									`mar-week-4-thursday-5`,
								]}
							/>
						</div>
						<div className='col col-lg-2 position-relative'>
							<div className='crane-img h-100 position-absolute'></div>
						</div>
					</div>
				</div>
				<div className='col col-lg-6 h-100'>
					<div className='row h-100'>
						<div className='col col-lg-2 position-relative h-100'>
							<div className='hydrangea-img h-100 position-absolute'></div>
						</div>
						<div className='col col-lg-5 h-100'>
							<WeekBox
								day='Friday'
								shapeImage={friShape}
								cusClassName='h-50 overflow-auto'
								boxIds={[
									`mar-week-4-friday-1`,
									`mar-week-4-friday-2`,
									`mar-week-4-friday-3`,
									`mar-week-4-friday-4`,
									`mar-week-4-friday-5`,
								]}
							/>
							<WeekBox
								day='Saturday'
								shapeImage={satShape}
								cusClassName='h-50 overflow-auto'
								boxIds={[
									`mar-week-4-saturday-1`,
									`mar-week-4-saturday-2`,
									`mar-week-4-saturday-3`,
									`mar-week-4-saturday-4`,
									`mar-week-4-saturday-5`,
								]}
							/>
						</div>
						<div className='col col-lg-5  d-flex flex-column justify-content-end g-1 h-100'>
							<WeekBox
								day='Sunday'
								shapeImage={sunShape}
								cusClassName='h-50 overflow-auto'
								boxIds={[
									`mar-week-4-sunday-1`,
									`mar-week-4-sunday-2`,
									`mar-week-4-sunday-3`,
									`mar-week-4-sunday-4`,
									`mar-week-4-sunday-5`,
								]}
							/>
							<WeekBox
								day='Notes'
								shapeImage={sunShape}
								cusClassName='h-50 overflow-auto'
								boxIds={[
									`jan-week-4-notes-1`,
									`jan-week-4-notes-2`,
									`jan-week-4-notes-3`,
									`jan-week-4-notes-4`,
									`jan-week-4-notes-5`,
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MarchWeek4;
