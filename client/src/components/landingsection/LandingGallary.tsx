import img1 from "../../assets/landing/landing-gallery-1.jpg";
import img2 from "../../assets/landing/landing-gallery-2.jpg";
import img3 from "../../assets/landing/landing-gallery-3.jpg";
import img4 from "../../assets/landing/landing-gallery-4.jpg";
import img5 from "../../assets/landing/landing-gallery-5.jpg";
import img6 from "../../assets/landing/landing-gallery-6.jpg";
import img7 from "../../assets/landing/landing-gallery-7.jpg";
import img8 from "../../assets/landing/landing-gallery-8.jpg";
import img9 from "../../assets/landing/landing-gallery-9.jpg";
import img10 from "../../assets/landing/landing-gallery-10.jpg";
import img11 from "../../assets/landing/landing-gallery-11.jpg";
import img12 from "../../assets/landing/landing-gallery-12.jpg";
import img13 from "../../assets/landing/landing-gallery-13.jpg";

import { useEffect } from "react";
import BigPicture from "bigpicture";
import Isotope from "isotope-layout";
import LandingGalleryTab from "./LandingGalleryTab";
const LandingGallary = () => {
	useEffect(() => {
		const iso = new Isotope("#landing_gallary_container", {
			itemSelector: ".grid-item",
			layoutMode: "masonry",
		});
		return () => {
			iso.destroy();
		};
	}, []);
	const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		BigPicture({
			el: e.target,
			gallery: "#landing_gallary_container",
			galleryAttribute: "src",
		});
	};
	return (
		<section className='landing-gallery py-7 py-md-9'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6 text-center'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>Our Gallery</h2>

						{/* <!--Subheading  --> */}
						<p className=' mb-6'>
							Capturing Moments: A Timeless Journey Through Our Gallery
						</p>
					</div>
				</div>
				<div
					className='row gx-3'
					id='landing_gallary_container'
					data-isotope
					onClick={handleImageClick}
				>
					<LandingGalleryTab imgSrc={img11} />
					<LandingGalleryTab imgSrc={img13} />
					<LandingGalleryTab imgSrc={img1} />
					<LandingGalleryTab imgSrc={img2} />
					<LandingGalleryTab imgSrc={img12} />
					<LandingGalleryTab imgSrc={img3} />
					<LandingGalleryTab imgSrc={img4} />
					<LandingGalleryTab imgSrc={img5} />
					<LandingGalleryTab imgSrc={img6} />
					<LandingGalleryTab imgSrc={img7} />
					<LandingGalleryTab imgSrc={img8} />
					<LandingGalleryTab imgSrc={img9} />
					<LandingGalleryTab imgSrc={img10} />
				</div>
			</div>
		</section>
	);
};

export default LandingGallary;
