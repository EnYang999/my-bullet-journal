import img19 from "../../assets/landing/landing-02.jpg";
import { useEffect } from "react";
import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.min.css";
const LandingAbout = () => {
	useEffect(() => {
		jarallax(document.querySelectorAll(".jarallax"), {
			speed: 0.8,
			imgSrc: img19,
		});
		return () => {
			jarallax(document.querySelectorAll(".jarallax"), "destroy");
		};
	}, []);
	return (
		<section className='landing-about jarallax position-relative'>
			<div className='min-vh-100 py-7 py-md-9 bg-gradient-bottom-end-white'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-6 col-lg-4'>
							{/* <!--Divider  --> */}
							<hr className='hr-sm bg-primary' />

							{/* <!--Text  --> */}
							<p className='fs-lg lh-lg text-black mb-0'>
								May your days be adorned with moments of serenity, sprinkled
								with the fragrance of intentionality.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingAbout;
