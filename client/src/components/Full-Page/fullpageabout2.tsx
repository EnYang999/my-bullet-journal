import React from "react";
import img55 from "../../assets/about/55.jpg";
interface FullPageAbout2Props {
	heroRef: React.RefObject<HTMLDivElement>;
	about1Ref: React.RefObject<HTMLDivElement>;
	about2Ref: React.RefObject<HTMLDivElement>;
	promoRef: React.RefObject<HTMLDivElement>;
	activeSection: string;
}
const FullPageAbout2: React.FC<FullPageAbout2Props> = ({
	about2Ref,
	activeSection,
}) => {
	return (
		<section
			key='about-2'
			id='about-2'
			className={`fp-section fp-table  ${
				activeSection === "about2" ? "active fp-completely" : ""
			}`}
			data-fp-styles='null'
			data-anchor='about-2'
			style={{ height: 764 }}
			ref={about2Ref}
		>
			<h1>{activeSection}</h1>
			<div className='fp-tableCell' style={{ height: "100vh" }}>
				<div className='fp-scrollable' style={{ height: "100vh" }}>
					<div
						className='fp-scroller'
						style={{
							transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
							transitionDuration: "0ms",
							transform: "translate(0px, 0px) translateZ(0px)",
							transitionDelay: "2000ms",
						}}
					>
						<div className='section section-top'>
							{/* Content */}
							<div className='container'>
								<div className='row align-items-center'>
									<div className='col-md-6 col-lg-5 offset-lg-1 order-md-2'>
										{/* Image */}
										<div className='img-effect img-effect-dotted mb-5 mb-md-0'>
											<img src={img55} className='img-fluid' alt='...' />
										</div>
									</div>
									<div className='col-md-6 col-lg-4 offset-lg-1 order-md-1'>
										{/* Heading */}
										<h2
											className={`text-center mb-4  animate`}
											data-toggle={`${
												activeSection === "about1" ? "animation" : ""
											}`}
											data-animation='fadeUp'
											data-animation-order={0}
											data-animation-trigger='fpAfterLoad'
										>
											Guarantee of quality at the most competitive rates
										</h2>
										{/* Content */}
										<p
											className={`lead text-muted text-center mb-5 animate`}
											data-toggle={`${
												activeSection === "about1" ? "animation" : ""
											}`}
											data-animation='fadeUp'
											data-animation-order={1}
											data-animation-trigger='fpAfterLoad'
										>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sint, maiores, aperiam. Excepturi assumenda non quasi ipsa
											quidem harum debitis aut alias dicta. Laudantium
											reprehenderit ea, suscipit nulla deleniti excepturi
											repudiandae!
										</p>
										{/* Button */}
										<a
											href='#pricing'
											className={`btn btn-outline-primary animate`}
											data-toggle={`${
												activeSection === "about1" ? "animation" : ""
											}`}
											data-animation='fadeUp'
											data-animation-order={2}
											data-animation-trigger='fpAfterLoad'
										>
											Pricing options
										</a>
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

export default FullPageAbout2;
