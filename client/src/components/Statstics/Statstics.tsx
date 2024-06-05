import React from "react";
import StatisticsA from "./StatisticsA";
import StatisticsB from "./StatisticsB";
import StatisticsC from "./StatisticsC";
const Statstics = () => {
	return (
		<div className='content'>
			<div className='row g-3 mb-3'>
				<StatisticsA />
				<StatisticsB />
				<StatisticsC />
				<div className='col-md-6 col-xxl-3'>
					<div className='card h-md-100'>
						<div className='card-header d-flex flex-between-center pb-0'>
							<h6 className='mb-0'>Weather</h6>
							<div className='dropdown font-sans-serif btn-reveal-trigger'>
								<button
									className='btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal'
									type='button'
									id='dropdown-weather-update'
									data-bs-toggle='dropdown'
									data-boundary='viewport'
									aria-haspopup='true'
									aria-expanded='false'
								>
									<svg
										className='svg-inline--fa fa-ellipsis-h fa-w-16 fs-11'
										aria-hidden='true'
										focusable='false'
										data-prefix='fas'
										data-icon='ellipsis-h'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
										data-fa-i2svg=''
									>
										<path
											fill='currentColor'
											d='M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z'
										></path>
									</svg>
									<span className='fas fa-ellipsis-h fs-11'></span> Font Awesome
									fontawesome.com
								</button>
								<div
									className='dropdown-menu dropdown-menu-end border py-2'
									aria-labelledby='dropdown-weather-update'
								>
									<a className='dropdown-item' href='#!'>
										View
									</a>
									<a className='dropdown-item' href='#!'>
										Export
									</a>
									<div className='dropdown-divider'></div>
									<a className='dropdown-item text-danger' href='#!'>
										Remove
									</a>
								</div>
							</div>
						</div>
						<div className='card-body pt-2'>
							<div className='row g-0 h-100 align-items-center'>
								<div className='col'>
									<div className='d-flex align-items-center'>
										<img
											className='me-3'
											src='assets/img/icons/weather-icon.png'
											alt=''
											height='60'
										/>
										<div>
											<h6 className='mb-2'>New York City</h6>
											<div className='fs-11 fw-semi-bold'>
												<div className='text-warning'>Sunny</div>Precipitation:
												50%
											</div>
										</div>
									</div>
								</div>
								<div className='col-auto text-center ps-2'>
									<div className='fs-5 fw-normal font-sans-serif text-primary mb-1 lh-1'>
										31°
									</div>
									<div className='fs-10 text-800'>32° / 25°</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statstics;
