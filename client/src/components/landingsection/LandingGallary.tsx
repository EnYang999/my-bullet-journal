import img11 from "../../assets/img/11.jpg";
import img13 from "../../assets/img/13.jpg";
import img15 from "../../assets/img/15.jpg";
import img14 from "../../assets/img/14.jpg";
import img18 from "../../assets/img/18.jpg";
import img16 from "../../assets/img/16.jpg";
import img17 from "../../assets/img/17.jpg";
import img12 from "../../assets/img/12.jpg";
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
	const handleImageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const imgSrc = e.currentTarget.dataset.imgsrc;

		if (imgSrc) {
			BigPicture({
				gallery: "#landing_gallary_container",
				imgSrc: imgSrc,
				loop: true,
			});
		}
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
					style={{ position: "relative" }}
				>
					<div
						className='col-6 col-sm-6 col-md-4 grid-item'
						style={{ position: "absolute" }}
					>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-imgsrc={img11}
							data-bigpicture={img11}
							onClick={handleImageClick}
						>
							<img
								className='img-fluid'
								src={img11}
								data-bigpicture={img11}
								alt='...'
							/>
						</a>
					</div>
					<div
						className='col-6 col-sm-6 col-md-4 grid-item'
						style={{ position: "absolute" }}
					>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							// data-bigpicture={img16}
							data-imgsrc={img16}
							data-bigpicture={img16}
							onClick={handleImageClick}
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
					<div
						className='col-6 col-sm-6 col-md-4 grid-item'
						style={{ position: "absolute" }}
					>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img13}
							data-imgsrc={img13}
							onClick={handleImageClick}
						>
							<img
								className='img-fluid'
								src={img13}
								data-bigpicture={img13}
								alt='...'
							/>
						</a>
					</div>
					<div
						className='col-6 col-sm-6 col-md-4 grid-item'
						style={{ position: "absolute" }}
					>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img15}
							data-imgsrc={img15}
							onClick={handleImageClick}
						>
							<img
								className='img-fluid'
								src={img15}
								data-bigpicture={img15}
								alt='...'
							/>
						</a>
					</div>
					<div
						className='col-6 col-sm-6 col-md-4 grid-item'
						style={{ position: "absolute" }}
					>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img14}
							data-imgsrc={img14}
							onClick={handleImageClick}
						>
							<img
								className='img-fluid'
								src={img14}
								data-bigpicture={img14}
								alt='...'
							/>
						</a>
					</div>
					<div
						className='col-6 col-sm-6 col-md-4 grid-item'
						style={{ position: "absolute" }}
					>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img18}
							data-imgsrc={img18}
							onClick={handleImageClick}
						>
							<img
								className='img-fluid'
								src={img18}
								data-bigpicture={img18}
								alt='...'
							/>
						</a>
					</div>
					<div
						className='col-6 col-sm-6 col-md-4 grid-item'
						style={{ position: "absolute" }}
					>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img17}
							data-imgsrc={img17}
							onClick={handleImageClick}
						>
							<img
								className='img-fluid'
								src={img17}
								data-bigpicture={img17}
								alt='...'
							/>
						</a>
					</div>
					<div
						className='col-6 col-sm-6 col-md-4 grid-item'
						style={{ position: "absolute" }}
					>
						{/* <!--Item  --> */}
						<a
							className='d-block mb-3'
							data-bigpicture={img12}
							data-imgsrc={img12}
							onClick={handleImageClick}
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

{
	/* <div className='row gx-3' data-isotope style={{ position: "relative" }}>
	<div className='col-6 col-sm-6 col-md-4' style={{ position: "absolute" }}>
		<a
			className='d-block mb-3'
			
			data-bigpicture='{ "imgSrc": "assets/img/11.jpg" }'
		>
			<img className='img-fluid' src={img11} alt='...' />
		</a>
	</div>
	<div className='col-6 col-sm-6 col-md-4' style={{ position: "absolute" }}>
		<a
			className='d-block mb-3'
			href='#'
			data-bigpicture='{ "imgSrc": "assets/img/16.jpg" }'
		>
			<img className='img-fluid' src={img16} alt='...' />
		</a>
	</div>
</div>; */
}
