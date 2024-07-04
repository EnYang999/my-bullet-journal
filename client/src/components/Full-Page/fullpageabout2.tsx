import React from "react";
import imgbg from "../../assets/about/about-me-2.jpg";
import img55 from "../../assets/about/about-me-1.jpg";
// import UnityComponent from "../../assets/unity/UnityComponent";
import GameUnityComponent from "../GameUnity/GameUnityComponent";
import { useEffect } from "react";
import { jarallax } from "jarallax";
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
	useEffect(() => {
		jarallax(document.querySelectorAll(".jarallaxHeader"), {
			speed: 0.8,
			imgSrc: imgbg,
		});
		return () => {
			jarallax(document.querySelectorAll(".jarallaxHeader"), "destroy");
		};
	}, []);
	return (
		<section
			key='about-2'
			id='about-2'
			className={`fp-section fp-table  ${
				activeSection === "about2" ? "active fp-completely" : ""
			}`}
			data-fp-styles='null'
			data-anchor='about-2'
			style={{ height: "100vh" }}
			ref={about2Ref}
		>
			{/* <h1>{activeSection}</h1> */}
			<div className='fp-tableCell' style={{ height: "100%" }}>
				<div className='fp-scrollable' style={{ height: "100%" }}>
					<div className='fp-scroller h-100'>
						<div className='section section-top h-100'>
							{/* Content */}
							<div
								className='bg-cover jarallaxHeader'
								style={{ backgroundImage: `url(${imgbg})` }}
							/>
							{/* Overlay */}
							<div className='bg-overlay' />
							<div className='container d-flex justify-content-center'>
								<div className='row align-items-center'>
									<div className='col-md-6 col-lg-5 offset-lg-1 order-md-1'>
										{/* Heading */}
										<h2
											className={`mb-4 animate ${
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
										<div className='img-effect img-effect-dotted img-hover-zoom--colorize mb-5 mb-md-0'>
											<img src={img55} className='img-fluid px-4' alt='...' />
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
