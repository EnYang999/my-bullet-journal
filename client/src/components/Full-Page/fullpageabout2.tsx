import React from "react";
import imgbg from "../../assets/about/about-me-2.jpg";
import img55 from "../../assets/about/about-me-5.jpg";
// import UnityComponent from "../../assets/unity/UnityComponent";
import GameUnityComponent from "../GameUnity/GameUnityComponent";
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
					<div className='fp-scroller h-100'>
						<div className='section section-top h-100'>
							{/* Content */}
							<div
								className='bg-cover animated-bg-cover'
								style={{ backgroundImage: `url(${imgbg})` }}
							/>
							{/* Overlay */}
							<div className='bg-overlay' />
							<div className='container'>
								<div className='row align-items-center'>
									<div className='col-md-6 col-lg-5 offset-lg-1 order-md-1'>
										{/* Heading */}
										<h2
											className={`text-center mb-4 animate ${
												activeSection === "about2" ? "animate" : ""
											}`}
											data-toggle={`animation`}
											data-animation='fadeUp'
											data-animation-order={0}
											data-animation-trigger='load'
										>
											Passion In Game Design
										</h2>
										{/* Image */}
										<div className='img-effect img-effect-dotted mb-5 mb-md-0'>
											<img src={img55} className='img-fluid' alt='...' />
										</div>
									</div>
									<div className='col-md-6 col-lg-4 offset-lg-1 order-md-2'>
										<GameUnityComponent
											style={{
												backgroundColor: "orange",
												width: "100%",
												height: "500px",
											}}
										/>
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
