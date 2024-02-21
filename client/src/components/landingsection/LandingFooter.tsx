import React from "react";

const LandingFooter = () => {
	return (
		<>
			<footer className='py-7 py-md-9 bg-black'>
				<div className='container px-4'>
					<div className='row gx-7'>
						<div className='col-sm-4'>
							{/* <!-- Heading --> */}
							<h5 className='text-xs text-primary'>About Us</h5>

							{/* <!-- Text --> */}
							<p className='mb-6'>
								Hi, I'm En, a software engineering graduate student at the
								University of Western Ontario. I love designing web pages and
								bringing them to life for users to interact with. In my free
								time, I'm frequent about efficient time management techniques
								like bullet journaling. This site is dedicated to bullet
								journaling inspiration, fueled by the{" "}
								<a href='https://space.bilibili.com/3608590?spm_id_from=333.337.0.0'>
									"Joy"
								</a>
								. Let's make life productive and creative together!
							</p>
						</div>
						<div className='col-sm-4'>
							{/* <!-- Heading --> */}
							<h5 className='text-xs text-primary'>Contact info</h5>

							{/* <!-- List --> */}
							<ul className='list-unstyled mb-6'>
								<li className='d-flex mb-2'>
									<svg
										className='svg-inline--fa fa-location-dot me-3 mt-2 fs-sm'
										aria-hidden='true'
										focusable='false'
										data-prefix='fas'
										data-icon='location-dot'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 384 512'
										data-fa-i2svg=''
									>
										<path
											fill='currentColor'
											d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'
										></path>
									</svg>
									{/* <!-- <div className="fas fa-map-marker-alt me-3 mt-2 fs-sm"></div> Font Awesome fontawesome.com --> */}
									Richmond St, London, ON N6A 3K7, CA
								</li>
								<li className='d-flex mb-2'>
									<svg
										className='svg-inline--fa fa-phone me-3 mt-2 fs-sm'
										aria-hidden='true'
										focusable='false'
										data-prefix='fas'
										data-icon='phone'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
										data-fa-i2svg=''
									>
										<path
											fill='currentColor'
											d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'
										></path>
									</svg>
									{/* <!-- <div className="fas fa-phone me-3 mt-2 fs-sm"></div> Font Awesome fontawesome.com --> */}
									currently unavailable
								</li>
								<li className='d-flex'>
									<svg
										className='svg-inline--fa fa-envelope me-3 mt-2 fs-sm'
										aria-hidden='true'
										focusable='false'
										data-prefix='far'
										data-icon='envelope'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
										data-fa-i2svg=''
									>
										<path
											fill='currentColor'
											d='M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z'
										></path>
									</svg>
									{/* <!-- <div className="far fa-envelope me-3 mt-2 fs-sm"></div> Font Awesome fontawesome.com --> */}
									<a href='mailto:eyang87@uwo.com'>eyang87@uwo.com</a>
								</li>
							</ul>
						</div>
						<div className='col-sm-4'>
							{/* <!-- Heading --> */}
							<h5 className='text-xs text-primary'>Opening hours</h5>

							{/* <!-- Text --> */}
							<div className='mb-3'>
								<div className='text-xs'>Monday - Thursday</div>
								<div className='font-serif'>10:00 AM - 11:00 PM</div>
							</div>

							{/* <!-- Text --> */}
							<div className='mb-6'>
								<div className='text-xs'>Friday - Sunday</div>
								<div className='font-serif'>12:00 AM - 03:00 AM</div>
							</div>

							<div className='mb-6'>
								<div className='text-xs'>Sorry, in reality</div>
								<div className='font-serif'>all time (above is for format)</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							{/* <!-- Copyright --> */}
							<div className='d-flex align-items-center'>
								<hr className='hr-sm me-3' style={{ height: "1px" }} />© 2024
								En. All rights reserved.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default LandingFooter;
