import SidePage from "../sidebarpage/SidePage";

const septemberweek1 = () => {
	return (
		<div className='september-week-computer'>
			<div className='container py-8 px-6 d-flex flex-column week-box-container'>
				<SidePage className='sidebar' />
				<div className='row'>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'></div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'></div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'></div>

					<div className='col-lg-3 col-md-6 d-flex align-items-center'></div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'></div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'></div>
				</div>
			</div>
		</div>
	);
};

export default septemberweek1;
