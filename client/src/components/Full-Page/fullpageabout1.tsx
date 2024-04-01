import React from "react";
import img47 from "../../assets/about/47.jpg";
interface FullPageAbout1Props {
	heroRef: React.RefObject<HTMLDivElement>;
	about1Ref: React.RefObject<HTMLDivElement>;
	about2Ref: React.RefObject<HTMLDivElement>;
	promoRef: React.RefObject<HTMLDivElement>;
	activeSection: string;
}
const FullPageAbout1: React.FC<FullPageAbout1Props> = ({
	about1Ref,
	activeSection,
}) => {
	return (
		<section
			key='about-1'
			id='about-1'
			className={`fp-section fp-table ${
				activeSection === "about1" ? "active fp-completely" : ""
			}`}
			data-fp-styles='null'
			data-anchor='about-1'
			style={{ height: "100vh", overflow: "hidden" }}
			ref={about1Ref}
		>
			<h1>{activeSection}</h1>
			<div className='fp-tableCell' style={{ height: "100%" }}>
				<div className='fp-scrollable' style={{ height: "100%" }}>
					<div className='fp-scroller'>
						<div className='section section-top'>
							{/* Content */}
							<div className='container'>
								<div className='row align-items-center'>
									<div className='col-md-6 col-lg-5 offset-lg-1'>
										{/* Image */}
										<div className='img-effect img-effect-solid mb-5 mb-md-0'>
											<img src={img47} className='img-fluid' alt='...' />
										</div>
									</div>
									<div className='col-md-6 col-lg-4 offset-lg-1'>
										{/* Heading */}
										<h2
											className={`mb-4 animate ${
												activeSection === "about1" ? "animate" : ""
											}`}
											data-toggle={`animation`}
											data-animation='fadeUp'
											data-animation-order={0}
											data-animation-trigger='load'
										>
											Professional in
										</h2>
										{/* Content */}
										<p
											className={`text-muted animate ${
												activeSection === "about1" ? "animate" : ""
											}`}
											data-toggle={`animation`}
											data-animation='fadeUp'
											data-animation-order={1}
											data-animation-trigger='load'
										>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sint, maiores, aperiam. Excepturi assumenda non quasi ipsa
											quidem harum debitis aut alias dicta. Laudantium
											reprehenderit ea, suscipit nulla deleniti excepturi
											repudiandae!
										</p>
										{/* Button */}
										<a
											href='contact.html'
											className={`btn btn-outline-primary animate ${
												activeSection === "about1" ? "animate" : ""
											}`}
											data-toggle={`animation`}
											data-animation='fadeUp'
											data-animation-order={2}
											data-animation-trigger='load'
										>
											Get a free quote
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

export default FullPageAbout1;
