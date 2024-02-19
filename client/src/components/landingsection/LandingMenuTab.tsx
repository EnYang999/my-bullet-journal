interface Props {
	imgSrc: string;
	month: string;
	heading: string;
	textHeading: string;
}
const LandingMenuTab = ({ imgSrc, month, heading, textHeading }: Props) => {
	return (
		<>
			<div className='col-12 col-md-6'>
				<div className='py-3 border-bottom'>
					<div className='row'>
						<div className='col-3 align-self-center'>
							{/* <!--Image  --> */}
							<div className='ratio ratio-1x1'>
								<img className='object-fit-cover' src={imgSrc} alt='...' />
								<div className='overlay'>
									<div className='text-overlay'>
										<div className='text'>{month}</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-7'>
							{/* <!--Heading  --> */}
							<h5 className='mb-2'>{heading}</h5>

							{/* <!--Text  --> */}
							<p className='mb-0'>{textHeading}</p>
						</div>
						<div className='col-2'>
							{/* <!--Price  --> */}
							{/* <div className='fs-4 font-serif text-center text-black'></div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LandingMenuTab;
