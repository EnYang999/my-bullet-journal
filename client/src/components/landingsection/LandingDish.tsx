import img26 from "../../assets/landing/landing-dish-1.jpg";
import img27 from "../../assets/landing/landing-dish-2.jpg";
import img28 from "../../assets/landing/landing-dish-3.jpg";
import img29 from "../../assets/landing/landing-dish-4.jpg";
import img30 from "../../assets/landing/landing-dish-5.jpg";
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
	}, []); // Empty dependency array ensures that this effect runs only once

	return (
		<section className='landing-dish py-7 py-md-9 overflow-hidden'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6 text-center'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>
							The <em>featured</em> Themes
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
							data-flickity='{"cellAlign": "left", "contain": true, "imagesLoaded": true, "pageDots": false}'
							tabIndex={0}
							ref={flickityRef}
						>
							<LandingDishTab
								imgSrc={img26}
								heading={text.dish.headings[0]}
								textHeading={text.dish.textHeadings[0]}
							/>
							<LandingDishTab
								imgSrc={img27}
								heading={text.dish.headings[1]}
								textHeading={text.dish.textHeadings[1]}
							/>
							<LandingDishTab
								imgSrc={img28}
								heading={text.dish.headings[2]}
								textHeading={text.dish.textHeadings[2]}
							/>
							<LandingDishTab
								imgSrc={img29}
								heading={text.dish.headings[3]}
								textHeading={text.dish.textHeadings[3]}
							/>
							<LandingDishTab
								imgSrc={img30}
								heading={text.dish.headings[4]}
								textHeading={text.dish.textHeadings[4]}
							/>
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
