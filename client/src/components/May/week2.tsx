import WeekBox from "./weekday2";
import Calendar from "../calender/Calendar";
const week2 = () => {
	return (
		<>
			<div className='row justify-content-md-center h-100 align-items-center'>
				<div className='col-lg-9'>
					<div className='row mb-2'>
						<div className='col-lg-3'>
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
						<div className='col-lg-3'>
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
						<div className='col-lg-3'>
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
						<div className='col-lg-3'>
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
					</div>
					<div className='row'>
						<div className='col-lg-3'>
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
						<div className='col-lg-3'>
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
						<div className='col-lg-3'>1 of 3</div>
						<div className='col-lg-3'>1 of 3</div>
					</div>
				</div>

				<div className='col col-lg-3 h-100'>
					<div className='row div-img-1 mb-1'>
						<div className='img-1'></div>
					</div>
					<div className='row div-img-2 d-flex justify-content-end mb-1'>
						<div
							className='img-2'
							style={{ fontFamily: "Parisienne", color: "#718b44" }}
						>
							May
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
								headerStyle={{ fontWeight: "bold" }}
								rowStyle={{ padding: "2px" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default week2;
