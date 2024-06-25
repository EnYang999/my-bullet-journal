import WeekBox from "./weekday2";
import Calendar from "../calender/CalendarPro";
const MayWeek2 = () => {
	return (
		<>
			<div className='row h-100 align-items-center'>
				<div className='col-lg-9 h-100 d-flex flex-column justify-content-evenly'>
					<div className='row'>
						<div className='col-lg-3'>
							<WeekBox
								day='M'
								boxIds={[
									`may-week-2-monday-1`,
									`may-week-2-monday-2`,
									`may-week-2-monday-3`,
									`may-week-2-monday-4`,
									`may-week-2-monday-5`,
								]}
							/>
						</div>
						<div className='col-lg-3'>
							<WeekBox
								day='T'
								boxIds={[
									`may-week-2-tuesday-1`,
									`may-week-2-tuesday-2`,
									`may-week-2-tuesday-3`,
									`may-week-2-tuesday-4`,
									`may-week-2-tuesday-5`,
								]}
							/>
						</div>
						<div className='col-lg-3'>
							<WeekBox
								day='W'
								boxIds={[
									`may-week-2-wednesday-1`,
									`may-week-2-wednesday-2`,
									`may-week-2-wednesday-3`,
									`may-week-2-wednesday-4`,
									`may-week-2-wednesday-5`,
								]}
							/>
						</div>
						<div className='col-lg-3'>
							<WeekBox
								day='T'
								boxIds={[
									`may-week-2-thursday-1`,
									`may-week-2-thursday-2`,
									`may-week-2-thursday-3`,
									`may-week-2-thursday-4`,
									`may-week-2-thursday-5`,
								]}
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-3'>
							<WeekBox
								day='F'
								boxIds={[
									`may-week-2-friday-1`,
									`may-week-2-friday-2`,
									`may-week-2-friday-3`,
									`may-week-2-friday-4`,
									`may-week-2-friday-5`,
								]}
							/>
						</div>
						<div className='col-lg-3'>
							<WeekBox
								day='S'
								boxIds={[
									`may-week-2-saturday-1`,
									`may-week-2-saturday-2`,
									`may-week-2-saturday-3`,
									`may-week-2-saturday-4`,
									`may-week-2-saturday-5`,
								]}
							/>
						</div>
						<div className='col-lg-3'>
							<WeekBox
								day='S'
								boxIds={[
									`may-week-2-sunday-1`,
									`may-week-2-sunday-2`,
									`may-week-2-sunday-3`,
									`may-week-2-sunday-4`,
									`may-week-2-sunday-5`,
								]}
							/>
						</div>
						<div className='col-lg-3'>
							<WeekBox
								day='N'
								boxIds={[
									`may-week-2-notes-1`,
									`may-week-2-notes-2`,
									`may-week-2-notes-3`,
									`may-week-2-notes-4`,
									`may-week-2-notes-5`,
								]}
							/>
						</div>
					</div>
				</div>

				<div className='col col-lg-3 h-100'>
					<div className='row div-img-1 mb-1'>
						<div className='img-1'></div>
					</div>
					<div className='row div-img-2 d-flex justify-content-end mb-1'>
						<div
							className='img-2'
							style={{
								fontFamily: "Parisienne",
								color: "#718b44",
								zIndex: "2",
								fontSize: "5rem",
							}}
						>
							May.
						</div>
					</div>
					<div className='row div-img-3 mb-2'>
						<div className='img-3'></div>
					</div>
					<div className='row div-img-4 d-flex justify-content-center'>
						<div className='img-4'>
							<Calendar
								month={5}
								year={2024}
								headingStyle={{ fontWeight: "bold" }}
								// headingFontSize='16px'
								dayStyle={{ padding: "2px" }}
								headingColor='white'
								dayColor='white'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MayWeek2;
