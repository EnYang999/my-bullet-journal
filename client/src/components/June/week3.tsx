const JuneWeek3 = () => {
	return (
		<>
			<div className='row siderow left-side'>
				<div className='row'>
					<div className='leftline'></div>
					<div className='rightline'></div>
					<span className='topline'></span>
					<span className='bottomline'></span>
					<div className='img-bg'></div>
				</div>
				<div className='row'>
					<div className='weekdaybox monday'></div>
					<div className='weekdaybox tuesday'></div>
					<div className='weekdaybox wednesday'></div>
					<div className='weekdaybox thursday'></div>
				</div>
			</div>
			<div className='row siderow right-side'>
				<div className='row'>
					<div className='weekdaybox friday'></div>
					<div className='weekdaybox saturday'></div>
					<div className='weekdaybox sunday'></div>
				</div>
				<div className='row'>
					<div className='leftline'></div>
					<div className='rightline'></div>
					<span className='topline'></span>
					<span className='bottomline'></span>
					<div className='img-bg'></div>
				</div>
			</div>
		</>
	);
};

export default JuneWeek3;
