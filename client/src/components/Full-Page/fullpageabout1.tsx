import React from "react";
import img47 from "../../assets/about/about-me-4.jpg";
import ScrollText from "../decorationelements/ScrollText";
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
								<ScrollText
									texts={[
										"animation",
										"TypeScript",
										"HTML",
										"CSS",
										"React",
										"RESTful-API",
										"WebDev",
										"UI/UX",
									]}
								/>
								<div className='my-2' />
								<ScrollText
									texts={[
										"NodeJS",
										"C/C++",
										"PyThon",
										"  ",
										"Cloud-Deployment",
										"MongoDB",
										"Git",
									]}
									direction='right'
								/>
								<div className='row align-items-center'>
									<div className='col-md-6 col-lg-3 offset-lg-1'>
										{/* Image */}
										<div className=' img-effect img-effect-border mb-5 mb-md-0 img-hover-zoom--colorize'>
											<img src={img47} className='img-fluid' alt='...' />
										</div>

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
											Professional in FullStack
										</h2>
									</div>

									<div className='col-md-6 col-lg-8 offset-lg-1'>
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
											The website is where I've put my heart into creating an
											amazing user experience by using tools like React,
											Typescript, Node, and MongoDB. I've also utilized a strong
											REST API and Google Cloud for deployment. My goal is to
											provide a top-notch bullet journal experience with
											beautifully designed pages to inspire and motivate you.
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
