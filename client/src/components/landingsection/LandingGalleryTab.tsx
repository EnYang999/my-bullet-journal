interface Props {
	imgSrc: string;
}
const LandingGalleryTab = ({ imgSrc }: Props) => {
	return (
		<div className='col-6 col-sm-6 col-md-4 grid-item'>
			{/* <!--Item  --> */}
			<a
				className='d-block mb-3 img-hover-zoom--colorize'
				data-imgsrc={imgSrc}
				data-bigpicture={imgSrc}
			>
				<img
					className='img-fluid'
					src={imgSrc}
					data-bigpicture={imgSrc}
					alt='...'
				/>
			</a>
		</div>
	);
};

export default LandingGalleryTab;
