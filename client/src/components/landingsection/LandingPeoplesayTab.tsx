interface Props {
	imgSrc: string;
	saying: string;
	// name: string;
}
const LandingPeoplesayTab = ({ imgSrc, saying }: Props) => {
	return (
		<>
			<div className='w-100'>
				<div className='row align-items-center justify-content-center'>
					<div className='col-8 col-md-3 order-md-1'>
						{/* <!--Avatar  --> */}
						<div className='ratio ratio-1x1 img-hover-zoom--brightness '>
							<img
								className='img-fluid rounded-circle mb-5 mb-md-0'
								src={imgSrc}
								alt='...'
							/>
						</div>
					</div>
					<div className='col-md-7 order-md-0'>
						{/* <!--Blockquote  --> */}
						<figure
							className='mx-auto mb-0'
							// style='max-width: 500px;'
						>
							<blockquote className='blockquote mb-0'>
								<p className='font-serif text-black mb-5'>{saying}</p>
							</blockquote>
							{/* <figcaption className='blockquote-footer text-xs mb-0'>
								{name}
							</figcaption> */}
						</figure>
					</div>
				</div>
			</div>
		</>
	);
};

export default LandingPeoplesayTab;
