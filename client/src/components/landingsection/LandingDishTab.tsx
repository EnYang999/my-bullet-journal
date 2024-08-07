interface Props {
	imgSrc: string;
	imgSrcHover: string;
	heading: string;
	textHeading: string;
}
const LandingDishTab = ({
	imgSrc,
	imgSrcHover,
	heading,
	textHeading,
}: Props) => {
	return (
		<>
			<div className='w-100 px-2' style={{ maxWidth: "320px" }}>
				{/* <!--Card  --> */}
				<div className='card border-0'>
					{/* <!--Image  --> */}
					<div className='ratio ratio-4x3 card-img-top'>
						<img src={imgSrc} alt='...' />
						<img src={imgSrcHover} alt='' className='img-overlay' />
					</div>

					{/* <!--Body  --> */}
					<div className='card-body'>
						{/* <!--Heading  --> */}
						<div className='row mb-2'>
							<div className='col'>
								<h5 className='mb-0'>{heading}</h5>
							</div>
							{/* <div className='col-auto'>
								<span className='fs-4 font-serif text-black'></span>
							</div> */}
						</div>

						{/* <!--Text  --> */}
						<p className='mb-0'>{textHeading}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default LandingDishTab;
