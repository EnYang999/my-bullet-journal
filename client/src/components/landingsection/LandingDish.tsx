import img26 from "../../assets/landing/landing-dish-1.jpg";
import img27 from "../../assets/landing/landing-dish-2.jpg";
import img28 from "../../assets/landing/landing-dish-3.jpg";
import img29 from "../../assets/landing/landing-dish-4.jpg";
import img30 from "../../assets/landing/landing-dish-5.jpg";
import img26hover from "../../assets/landing/landing-dish-hover-1.jpg";
import img27hover from "../../assets/landing/landing-dish-hover-2.jpg";
import img28hover from "../../assets/landing/landing-dish-hover-3.jpg";
import img29hover from "../../assets/landing/landing-dish-hover-4.jpg";
import img30hover from "../../assets/landing/landing-dish-hover-5.jpg";
import text from "./landingtexts.json";
import { useRef, useEffect } from "react";
import LandingDishTab from "./LandingDishTab";
import Flickity from "flickity";

const LandingDish = () => {
	const flickityRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (flickityRef.current) {
			const flkty = new Flickity(flickityRef.current, {
				cellAlign: "left",
				contain: true,
				imagesLoaded: true,
				pageDots: false,
			});
			return () => {
				flkty.destroy();
			};
		}
	}, []);

	return (
		<section className='landing-dish py-7 py-md-9 overflow-hidden border-bottom'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6 text-center'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>
							The <em>Featured</em> Themes
						</h2>

						{/* <!--Subheading  --> */}
						<p className='mb-6'>
							Time, the silent orchestrator of life's symphony, dances
							gracefully with the rhythm of purposeful management.
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						{/* <!--Slider  --> */}
						<div
							className='flickity-viewport-visible flickity-enabled is-draggable'
							tabIndex={0}
							ref={flickityRef}
						>
							<LandingDishTab
								imgSrc={img26}
								imgSrcHover={img26hover}
								heading={text.dish.headings[0]}
								textHeading={text.dish.textHeadings[0]}
							/>
							<LandingDishTab
								imgSrc={img27}
								imgSrcHover={img27hover}
								heading={text.dish.headings[1]}
								textHeading={text.dish.textHeadings[1]}
							/>
							<LandingDishTab
								imgSrc={img28}
								imgSrcHover={img28hover}
								heading={text.dish.headings[2]}
								textHeading={text.dish.textHeadings[2]}
							/>
							<LandingDishTab
								imgSrc={img29}
								imgSrcHover={img29hover}
								heading={text.dish.headings[3]}
								textHeading={text.dish.textHeadings[3]}
							/>
							<LandingDishTab
								imgSrc={img30}
								imgSrcHover={img30hover}
								heading={text.dish.headings[4]}
								textHeading={text.dish.textHeadings[4]}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
	<script src='/path/to/flickity.pkgd.min.js'></script>;
};

export default LandingDish;
