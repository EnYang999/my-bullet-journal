interface Props {
	imgSrc: string;
	heading: string;
	textHeading: string;
}
const LandingDishTab = ({ imgSrc, heading, textHeading }: Props) => {
	return (
		<>
			<div className='w-100 px-2' style={{ maxWidth: "320px" }}>
				{/* <!--Card  --> */}
				<div className='card border-0'>
					{/* <!--Image  --> */}
					<img className='card-img-top' src={imgSrc} alt='...' />

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
