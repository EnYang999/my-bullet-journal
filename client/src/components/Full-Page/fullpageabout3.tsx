import React from "react";
import img55 from "../../assets/about/about-me-5.jpg";
interface FullPageAbout3Props {}
const FullPageAbout3: React.FC<FullPageAbout3Props> = ({}) => {
	return (
		<section
			key='about-2'
			id='about-2'
			className={`fp-section fp-table fp-completely`}
			data-fp-styles='null'
			data-anchor='about-2'
			style={{ height: "100vh" }}
		>
			<div className='fp-tableCell' style={{ height: "100vh" }}>
				<div className='fp-scrollable' style={{ height: "100vh" }}>
					<div className='fp-scroller h-100'>
						<div className='section section-top h-100'>
							{/* Content */}
							<div className='container'>
								<div className='row align-items-center'>
									<div className='col-md-6 col-lg-5 offset-lg-1 order-md-2'>
										{/* Heading */}
										<h2
											className={`text-center mb-4 animate`}
											data-toggle={`animation`}
											data-animation='fadeUp'
											data-animation-order={0}
											data-animation-trigger='load'
										>
											Experienced in Machine Learning
										</h2>
										{/* Image */}
										<div className='img-effect img-effect-solid mb-5 mb-md-0'>
											<img src={img55} className='img-fluid' alt='...' />
										</div>
									</div>
									<div className='col-md-6 col-lg-4 offset-lg-1 order-md-1'>
										<p
											className={`text-muted animate animate`}
											data-toggle={`animation`}
											data-animation='fadeUp'
											data-animation-order={1}
											data-animation-trigger='load'
										>
											In my CS master's program, I fully immersed myself in
											machine learning for three years, during which I worked
											for top companies, JD and ByteDance. At ByteDance, I
											helped develop the popular HELO app in southern Asia by
											developing recommendation algorithms that increased user
											engagement. My time at ByteDance taught me to think
											creatively, and I gained valuable experience and
											knowledge.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FullPageAbout3;
