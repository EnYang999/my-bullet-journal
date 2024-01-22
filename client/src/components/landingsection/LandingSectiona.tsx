import img2 from "../../assets/landing/2.jpg";
const LandingSectiona = () => {
	return (
		<section className='pt-7 pt-md-9'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-2'>
						{/* <!--Divider  --> */}
						<hr className='hr-sm bg-primary' />

						{/* <!--Text  --> */}
						<p className='fs-lg lh-lg text-black mb-5 mb-md-0'>
							Take a coffee break or enjoy a meal.
						</p>
					</div>
					<div className='col-md-4'>
						{/* <!--Media  --> */}
						<div className='media-decoration media-decoration-1 mb-5 mb-md-0'>
							{/* <!--Border  --> */}
							<div
								className='media-decoration-border'
								data-jarallax-element='-40'
							></div>

							{/* <!--Image  --> */}
							<img
								className='media-decoration-img img-fluid'
								src={img2}
								alt='...'
							/>
						</div>
					</div>
					<div className='col-md-5 align-self-center mx-auto'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>
							<em>Always</em> amazing experience
						</h2>

						{/* <!--Text  --> */}
						<p className='mb-0'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Molestias veritatis nisi, consequatur, laborum libero a neque
							ducimus. Porro rem illum quo nostrum quisquam asperiores. Possimus
							facilis velit, voluptatibus!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingSectiona;
