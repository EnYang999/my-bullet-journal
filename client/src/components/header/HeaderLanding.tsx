import "./HeaderLanding.css";
const HeaderLanding = () => {
	return (
		<header data-jarallax data-speed='.8' className='welcome'>
			<div className='d-flex flex-column min-vh-100 bg-black-50 pt-10 pt-md-8 pb-7 pb-md-0'>
				<div className='container my-auto'>
					<div className='row justify-content-center'>
						<div className='col-12 col-md-8 col-lg-6 text-center'>
							{/* <!--Preheading  --> */}
							<h6 className='text-xs text-white-75'>
								<span className='text-primary'>Café</span> / Restaurant
							</h6>

							{/* <!--Heading  --> */}
							<h1 className='display-1 text-white mb-4'>Touché</h1>

							{/* <!--Subheading  --> */}
							<p className='text-center text-white-75 mb-7'>
								A unique café located in the heart of Los Angeles. Always fresh
								coffee and biscuits. Open for indoor dining and to-go orders.
							</p>

							{/* <!--Button  --> */}
							<a
								className='btn btn-outline-primary text-white text-primary-hover mb-7 mb-md-0'
								href='#reservation'
							>
								Make reservation
							</a>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-md'>
							{/* <!--Social links  --> */}
							<ul className='list-inline text-center text-md-start mb-3 my-md-5'>
								<li className='list-inline-item'>
									<a className='text-white-75 text-primary-hover' href='#!'>
										<i className='fab fa-twitter'></i>
									</a>
								</li>
								<li className='list-inline-item ms-5'>
									<a className='text-white-75 text-primary-hover' href='#!'>
										<i className='fab fa-facebook-f'></i>
									</a>
								</li>
								<li className='list-inline-item ms-5'>
									<a className='text-white-75 text-primary-hover' href='#!'>
										<i className='fab fa-instagram'></i>
									</a>
								</li>
							</ul>
						</div>
						<div className='col-md'>
							{/* <!--Address  --> */}
							<p className='font-serif text-white-75 text-center text-md-end text-lg-end my-md-5'>
								<i className='fas fa-map-marker-alt text-primary me-3'></i> 1234
								Dining Str., Los Angeles, CA 12345-0000
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderLanding;
