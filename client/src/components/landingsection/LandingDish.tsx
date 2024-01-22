import img26 from "../../assets/landing/26.jpg";
import img27 from "../../assets/landing/27.jpg";
import img28 from "../../assets/landing/28.jpg";
import img29 from "../../assets/landing/29.jpg";
import img30 from "../../assets/landing/30.jpg";
import img31 from "../../assets/landing/31.jpg";
import { useRef, useEffect } from "react";
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
				// Add other Flickity options here
			});

			// Optionally, you can destroy Flickity when the component unmounts
			return () => {
				flkty.destroy();
			};
		}
	}, []); // Empty dependency array ensures that this effect runs only once

	return (
		<section className='py-7 py-md-9 overflow-hidden'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6 text-center'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>
							Our <em>featured</em> dishes
						</h2>

						{/* <!--Subheading  --> */}
						<p className='mb-6'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
							aliquam id sint accusamus eius voluptatum explicabo quae
							similique, quas.
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						{/* <!--Slider  --> */}
						<div
							className='flickity-viewport-visible flickity-enabled is-draggable'
							data-flickity='{"cellAlign": "left", "contain": true, "imagesLoaded": true, "pageDots": false}'
							tabIndex={0}
							ref={flickityRef}
						>
							{/* <div
								className='flickity-viewport'
								style={{ height: "362.977px", touchAction: "pan-y" }}
							>
								<div
									className='flickity-slider'
									style={{ left: "0px", transform: "translateX(0%)" }}
								> */}
							<div className='w-100 px-2' style={{ maxWidth: "320px" }}>
								{/* <!--Card  --> */}
								<div className='card border-0'>
									{/* <!--Image  --> */}
									<img className='card-img-top' src={img26} alt='...' />

									{/* <!--Body  --> */}
									<div className='card-body'>
										{/* <!--Heading  --> */}
										<div className='row mb-2'>
											<div className='col'>
												<h5 className='mb-0'>
													Lorem ipsum dolor sit amet consectetur
												</h5>
											</div>
											<div className='col-auto'>
												<span className='fs-4 font-serif text-black'>$15</span>
											</div>
										</div>

										{/* <!--Text  --> */}
										<p className='mb-0'>
											In perspiciatis nisi dicta, aperiam magnam eaque laborum
											iste.
										</p>
									</div>
								</div>
							</div>
							<div className='w-100 px-2' style={{ maxWidth: "320px" }}>
								{/* <!--Card  --> */}
								<div className='card border-0'>
									{/* <!--Image  --> */}
									<img className='card-img-top' src={img27} alt='...' />

									{/* <!--Body  --> */}
									<div className='card-body'>
										{/* <!--Heading  --> */}
										<div className='row mb-2'>
											<div className='col'>
												<h5 className='mb-0'>
													Lorem ipsum dolor sit amet consectetur
												</h5>
											</div>
											<div className='col-auto'>
												<span className='fs-4 font-serif text-black'>$18</span>
											</div>
										</div>

										{/* <!--Text  --> */}
										<p className='mb-0'>
											In perspiciatis nisi dicta, aperiam magnam eaque laborum
											iste.
										</p>
									</div>
								</div>
							</div>
							<div className='w-100 px-2' style={{ maxWidth: "320px" }}>
								{/* <!--Card  --> */}
								<div className='card border-0'>
									{/* <!--Image  --> */}
									<img className='card-img-top' src={img28} alt='...' />

									{/* <!--Body  --> */}
									<div className='card-body'>
										{/* <!--Heading  --> */}
										<div className='row mb-2'>
											<div className='col'>
												<h5 className='mb-0'>
													Lorem ipsum dolor sit amet consectetur
												</h5>
											</div>
											<div className='col-auto'>
												<span className='fs-4 font-serif text-black'>$23</span>
											</div>
										</div>

										{/* <!--Text  --> */}
										<p className='mb-0'>
											In perspiciatis nisi dicta, aperiam magnam eaque laborum
											iste.
										</p>
									</div>
								</div>
							</div>
							<div className='w-100 px-2' style={{ maxWidth: "320px" }}>
								{/* <!--Card  --> */}
								<div className='card border-0'>
									{/* <!--Image  --> */}
									<img className='card-img-top' src={img29} alt='...' />

									{/* <!--Body  --> */}
									<div className='card-body'>
										{/* <!--Heading  --> */}
										<div className='row mb-2'>
											<div className='col'>
												<h5 className='mb-0'>
													Lorem ipsum dolor sit amet consectetur
												</h5>
											</div>
											<div className='col-auto'>
												<span className='fs-4 font-serif text-black'>$32</span>
											</div>
										</div>

										{/* <!--Text  --> */}
										<p className='mb-0'>
											In perspiciatis nisi dicta, aperiam magnam eaque laborum
											iste.
										</p>
									</div>
								</div>
							</div>
							<div className='w-100 px-2' style={{ maxWidth: "320px" }}>
								{/* <!--Card  --> */}
								<div className='card border-0'>
									{/* <!--Image  --> */}
									<img className='card-img-top' src={img30} alt='...' />

									{/* <!--Body  --> */}
									<div className='card-body'>
										{/* <!--Heading  --> */}
										<div className='row mb-2'>
											<div className='col'>
												<h5 className='mb-0'>
													Lorem ipsum dolor sit amet consectetur
												</h5>
											</div>
											<div className='col-auto'>
												<span className='fs-4 font-serif text-black'>$15</span>
											</div>
										</div>

										{/* <!--Text  --> */}
										<p className='mb-0'>
											In perspiciatis nisi dicta, aperiam magnam eaque laborum
											iste.
										</p>
									</div>
								</div>
							</div>
							<div className='w-100 px-2' style={{ maxWidth: "320px" }}>
								{/* <!--Card  --> */}
								<div className='card border-0'>
									{/* <!--Image  --> */}
									<img className='card-img-top' src={img31} alt='...' />

									{/* <!--Body  --> */}
									<div className='card-body'>
										{/* <!--Heading  --> */}
										<div className='row mb-2'>
											<div className='col'>
												<h5 className='mb-0'>
													Lorem ipsum dolor sit amet consectetur
												</h5>
											</div>
											<div className='col-auto'>
												<span className='fs-4 font-serif text-black'>$42</span>
											</div>
										</div>

										{/* <!--Text  --> */}
										<p className='mb-0'>
											In perspiciatis nisi dicta, aperiam magnam eaque laborum
											iste.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* </div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
	<script src='/path/to/flickity.pkgd.min.js'></script>;
};

export default LandingDish;

<div
	className='flickity-viewport-visible'
	data-flickity='{"cellAlign": "left", "contain": true, "imagesLoaded": true, "pageDots": false}'
>
	<div
		className='w-100 px-2'
		// style='max-width: 320px;'
	>
		{/* <!--Card  --> */}
		<div className='card border-0'>
			{/* <!--Image  --> */}
			<img className='card-img-top' src={img26} alt='...' />

			{/* <!--Body  --> */}
			<div className='card-body'>
				{/* <!--Heading  --> */}
				<div className='row mb-2'>
					<div className='col'>
						<h5 className='mb-0'>Lorem ipsum dolor sit amet consectetur</h5>
					</div>
					<div className='col-auto'>
						<span className='fs-4 font-serif text-black'>$15</span>
					</div>
				</div>

				{/* <!--Text  --> */}
				<p className='mb-0'>
					In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.
				</p>
			</div>
		</div>
	</div>
	<div
		className='w-100 px-2'
		// style='max-width: 320px;'
	>
		{/* <!--Card  --> */}
		<div className='card border-0'>
			{/* <!--Image  --> */}
			<img className='card-img-top' src={img27} alt='...' />

			{/* <!--Body  --> */}
			<div className='card-body'>
				{/* <!--Heading  --> */}
				<div className='row mb-2'>
					<div className='col'>
						<h5 className='mb-0'>Lorem ipsum dolor sit amet consectetur</h5>
					</div>
					<div className='col-auto'>
						<span className='fs-4 font-serif text-black'>$18</span>
					</div>
				</div>

				{/* <!--Text  --> */}
				<p className='mb-0'>
					In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.
				</p>
			</div>
		</div>
	</div>
	<div
		className='w-100 px-2'
		// style='max-width: 320px;'
	>
		{/* <!--Card  --> */}
		<div className='card border-0'>
			{/* <!--Image  --> */}
			<img className='card-img-top' src={img28} alt='...' />

			{/* <!--Body  --> */}
			<div className='card-body'>
				{/* <!--Heading  --> */}
				<div className='row mb-2'>
					<div className='col'>
						<h5 className='mb-0'>Lorem ipsum dolor sit amet consectetur</h5>
					</div>
					<div className='col-auto'>
						<span className='fs-4 font-serif text-black'>$23</span>
					</div>
				</div>

				{/* <!--Text  --> */}
				<p className='mb-0'>
					In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.
				</p>
			</div>
		</div>
	</div>
</div>;
