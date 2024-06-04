import React from "react";
import StatisticsA from "./StatisticsA";
const Statstics = () => {
	return (
		<div className='content'>
			<div className='row g-3 mb-3'>
				<StatisticsA />
				<div className='col-md-6 col-xxl-3'>
					<div className='card h-md-100'>
						<div className='card-header pb-0'>
							<h6 className='mb-0 mt-2'>Total Order</h6>
						</div>
						<div className='card-body d-flex flex-column justify-content-end'>
							<div className='row justify-content-between'>
								<div className='col-auto align-self-end'>
									<div className='fs-5 fw-normal font-sans-serif text-700 lh-1 mb-1'>
										58.4K
									</div>
									<span className='badge rounded-pill fs-11 bg-200 text-primary'>
										<svg
											className='svg-inline--fa fa-caret-up fa-w-10 me-1'
											aria-hidden='true'
											focusable='false'
											data-prefix='fas'
											data-icon='caret-up'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 320 512'
											data-fa-i2svg=''
										>
											<path
												fill='currentColor'
												d='M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z'
											></path>
										</svg>
										<span className='fas fa-caret-up me-1'></span> Font Awesome
										fontawesome.com 13.6%
									</span>
								</div>
								<div className='col-auto ps-0 mt-n4'>
									<div
										className='echart-default-total-order'
										data-echarts='{"tooltip":{"trigger":"axis","formatter":"{b0} : {c0}"},"xAxis":{"data":["Week 4","Week 5","Week 6","Week 7"]},"series":[{"type":"line","data":[20,40,100,120],"smooth":true,"lineStyle":{"width":3}}],"grid":{"bottom":"2%","top":"2%","right":"10px","left":"10px"}}'
										data-echart-responsive='true'
										style={{
											userSelect: "none",
											WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
											position: "relative",
										}}
									>
										<div
											style={{
												position: "relative",
												width: "138px",
												height: "90px",
												padding: "0px",
												margin: "0px",
												borderWidth: "0px",
												cursor: "pointer",
											}}
										>
											<canvas
												data-zr-dom-id='zr_0'
												width='276'
												height='180'
												style={{
													position: "absolute",
													left: "0px",
													top: "0px",
													width: "138px",
													height: "90px",
													userSelect: "none",
													WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
													padding: "0px",
													margin: "0px",
													borderWidth: "0px",
												}}
											></canvas>
										</div>
										<div
											className=''
											style={{
												position: "absolute",
												display: "block",
												borderStyle: "solid",
												whiteSpace: "nowrap",
												zIndex: 9999999,
												boxShadow: "rgba(0, 0, 0, 0.2) 1px 2px 10px",
												backgroundColor: "rgb(249, 250, 253)",
												borderWidth: "1px",
												borderRadius: "4px",
												color: "rgb(11, 23, 39)",
												font: "14px / 21px sans-serif",
												padding: "7px 10px",
												top: "0px",
												left: "0px",
												transform: "translate3d(43px, -13px, 0px)",
												borderColor: "rgb(216, 226, 239)",
												pointerEvents: "none",
												visibility: "hidden",
												opacity: "0",
											}}
										>
											Week 6 : 100
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-6 col-xxl-3'>
					<div className='card h-md-100'>
						<div className='card-body'>
							<div className='row h-100 justify-content-between g-0'>
								<div className='col-5 col-sm-6 col-xxl pe-2'>
									<h6 className='mt-1'>Market Share</h6>
									<div className='fs-11 mt-3'>
										<div className='d-flex flex-between-center mb-1'>
											<div className='d-flex align-items-center'>
												<span className='dot bg-primary'></span>
												<span className='fw-semi-bold'>Samsung</span>
											</div>
											<div className='d-xxl-none'>33%</div>
										</div>
										<div className='d-flex flex-between-center mb-1'>
											<div className='d-flex align-items-center'>
												<span className='dot bg-info'></span>
												<span className='fw-semi-bold'>Huawei</span>
											</div>
											<div className='d-xxl-none'>29%</div>
										</div>
										<div className='d-flex flex-between-center mb-1'>
											<div className='d-flex align-items-center'>
												<span className='dot bg-300'></span>
												<span className='fw-semi-bold'>Apple</span>
											</div>
											<div className='d-xxl-none'>20%</div>
										</div>
									</div>
								</div>
								<div className='col-auto position-relative'>
									<div
										className='echart-market-share'
										style={{
											userSelect: "none",
											WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
											position: "relative",
										}}
									>
										<div
											style={{
												position: "relative",
												width: "106px",
												height: "106px",
												padding: "0px",
												margin: "0px",
												borderWidth: "0px",
											}}
										>
											<canvas
												data-zr-dom-id='zr_0'
												width='212'
												height='212'
												style={{
													position: "absolute",
													left: "0px",
													top: "0px",
													width: "106px",
													height: "106px",
													userSelect: "none",
													WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
													padding: "0px",
													margin: "0px",
													borderWidth: "0px",
												}}
											></canvas>
										</div>
										<div className=''></div>
									</div>
									<div className='position-absolute top-50 start-50 translate-middle text-1100 fs-7'>
										26M
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
