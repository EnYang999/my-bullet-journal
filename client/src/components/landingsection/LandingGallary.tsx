import img11 from "../../assets/landing/11.jpg";
import img13 from "../../assets/landing/13.jpg";
import img15 from "../../assets/landing/15.jpg";
import img14 from "../../assets/landing/14.jpg";
import img18 from "../../assets/landing/18.jpg";
import img16 from "../../assets/landing/16.jpg";
import img17 from "../../assets/landing/17.jpg";
import img12 from "../../assets/landing/12.jpg";
import { useEffect } from "react";
import BigPicture from "bigpicture";
import Isotope from "isotope-layout";

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
		<section className='py-7 py-md-9'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6 text-center'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>Our gallery</h2>

						{/* <!--Subheading  --> */}
						<p className=' mb-6'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
					</div>
				</div>
				<div
					className='row gx-3'
					id='landing_gallary_container'
					data-isotope
					onClick={handleImageClick}
				>
					<div className='col-6 col-sm-6 col-md-4 grid-item'>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-imgsrc={img11}
							data-bigpicture={img11}
						>
							<img
								className='img-fluid'
								src={img11}
								data-bigpicture={img11}
								alt='...'
							/>
						</a>
					</div>
					<div className='col-6 col-sm-6 col-md-4 grid-item'>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							// data-bigpicture={img16}
							data-imgsrc={img16}
							data-bigpicture={img16}
						>
							<img
								className='img-fluid'
								data-bigpicture={img16}
								data-imgsrc={img16}
								src={img16}
								alt='...'
							/>
						</a>
					</div>
					<div className='col-6 col-sm-6 col-md-4 grid-item'>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img13}
							data-imgsrc={img13}
						>
							<img
								className='img-fluid'
								src={img13}
								data-bigpicture={img13}
								alt='...'
							/>
						</a>
					</div>
					<div className='col-6 col-sm-6 col-md-4 grid-item'>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img15}
							data-imgsrc={img15}
						>
							<img
								className='img-fluid'
								src={img15}
								data-bigpicture={img15}
								alt='...'
							/>
						</a>
					</div>
					<div className='col-6 col-sm-6 col-md-4 grid-item'>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img14}
							data-imgsrc={img14}
						>
							<img
								className='img-fluid'
								src={img14}
								data-bigpicture={img14}
								alt='...'
							/>
						</a>
					</div>
					<div className='col-6 col-sm-6 col-md-4 grid-item'>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img18}
							data-imgsrc={img18}
						>
							<img
								className='img-fluid'
								src={img18}
								data-bigpicture={img18}
								alt='...'
							/>
						</a>
					</div>
					<div className='col-6 col-sm-6 col-md-4 grid-item'>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img17}
							data-imgsrc={img17}
						>
							<img
								className='img-fluid'
								src={img17}
								data-bigpicture={img17}
								alt='...'
							/>
						</a>
					</div>
					<div className='col-6 col-sm-6 col-md-4 grid-item'>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img12}
							data-imgsrc={img12}
						>
							<img
								className='img-fluid'
								src={img12}
								data-bigpicture={img12}
								alt='...'
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingGallary;
