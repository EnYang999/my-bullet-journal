import img20 from "../../assets/landing/landing-peoplesay-1.jpg";
import img21 from "../../assets/landing/landing-peoplesay-2.jpg";
import img22 from "../../assets/landing/landing-peoplesay-3.jpg";
import Flickity from "flickity";
import { useRef, useEffect } from "react";
import LandingPeoplesayTab from "./LandingPeoplesayTab";
import text from "./landingtexts.json";
const LandingTestimonial = () => {
	const flickityRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (flickityRef.current) {
			const flkty = new Flickity(flickityRef.current, {
				wrapAround: true,
				imagesLoaded: true,
				// pageDots: false,
			});
			return () => {
				flkty.destroy();
			};
		}
	}, []);

	return (
		<section className='py-7 py-md-9 border-bottom landing-peoplesay'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6 text-center'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>Beauty of Time Management</h2>

						{/* <!--Subheading  --> */}
						<p className='mb-6'>
							Harmonizing Efficiency and Elegance through Time Mastery.
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						{/* <!--Slider  --> */}
						<div
							data-flickity='{"imagesLoaded": true, "wrapAround": true}'
							ref={flickityRef}
						>
							<LandingPeoplesayTab
								imgSrc={img20}
								saying={text.timeusefulness.sayings[0]}
							/>
							<LandingPeoplesayTab
								imgSrc={img21}
								saying={text.timeusefulness.sayings[1]}
							/>
							<LandingPeoplesayTab
								imgSrc={img22}
								saying={text.timeusefulness.sayings[2]}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingTestimonial;
