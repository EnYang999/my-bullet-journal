import img7 from "../../assets/landing/7.jpg";
const LandingSectionb = () => {
	return (
		<section className='py-7 py-md-9'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-2 order-md-2 align-self-end'>
						{/* <!--Divider  --> */}
						<hr className='hr-sm bg-primary' />

						{/* <!--Text  --> */}
						<p className='fs-lg lh-lg text-black mb-5 mb-md-0'>
							Great variety of foods you will enjoy.
						</p>
					</div>
					<div className='col-md-4 order-md-3'>
						{/* <!--Media  --> */}
						<div className='media-decoration media-decoration-1 mb-5 mb-md-0'>
							{/* <!--Solid  --> */}
							<div
								className='media-decoration-solid'
								data-jarallax-element='-40'
							></div>

							{/* <!--Border  --> */}
							<div
								className='media-decoration-border'
								data-jarallax-element='-40'
							></div>

							{/* <!--Image  --> */}
							<img
								className='media-decoration-img img-fluid'
								src={img7}
								alt='...'
							/>
						</div>
					</div>
					<div className='col-md-5 order-md-1 align-self-center mx-auto'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>
							<em>Beautiful</em> outdoor seating
						</h2>

						{/* <!--Text  --> */}
						<p className='mb-0'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
							quae similique asperiores consequatur! Nihil temporibus qui enim.
							Accusamus voluptates a, et quidem! Quo, et?
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingSectionb;
