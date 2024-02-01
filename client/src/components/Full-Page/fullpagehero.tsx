import img54 from "../../assets/about/54.jpg";
interface FullPageHeroProps {
	heroRef: React.RefObject<HTMLDivElement>;
	about1Ref: React.RefObject<HTMLDivElement>;
	about2Ref: React.RefObject<HTMLDivElement>;
	promoRef: React.RefObject<HTMLDivElement>;
	activeSection: string;
}
const FullPageHero: React.FC<FullPageHeroProps> = ({
	heroRef,
	activeSection,
}) => {
	return (
		<>
			{/* HERO */}
			<section
				className={`fp-section fp-table ${
					activeSection === "hero" ? "active fp-completely" : ""
				}`}
				data-fp-styles='null'
				data-anchor='hero'
				style={{ height: 764 }}
				ref={heroRef}
			>
				<div className='fp-tableCell' style={{ height: 764 }}>
					<div className='section section-top'>
						{/* Cover */}
						<div
							className='bg-cover'
							style={{
								backgroundImage: `url(${img54})`,
								backgroundSize: "cover",
							}}
						/>
						{/* Overlay */}
						<div className='bg-overlay' />
						{/* Triangles */}
						<div className='bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-left' />
						<div className='bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-right' />
						{/* Content */}
						<div className='container'>
							<div className='row justify-content-center align-items-center'>
								<div className='col-md-8 col-lg-7'>
									{/* Preheading */}
									<p
										className='font-weight-medium text-center text-xs text-uppercase text-white text-muted animate'
										data-toggle='animation'
										data-animation='fadeUp'
										data-animation-order={0}
										data-animation-trigger='load'
									>
										by Simpleqode
									</p>
									{/* Heading */}
									<h1
										className='text-white text-center mb-4 animate'
										data-toggle='animation'
										data-animation='fadeUp'
										data-animation-order={1}
										data-animation-trigger='load'
									>
										Language professionals on demand
									</h1>
									{/* Subheading */}
									<p
										className='lead text-white text-muted text-center mb-5 animate'
										data-toggle='animation'
										data-animation='fadeUp'
										data-animation-order={2}
										data-animation-trigger='load'
									>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Veniam officia unde aperiam totam, labore obcaecati dolore
										repellendus.
									</p>
									{/* Button */}
									<p
										className='text-center mb-0 animate'
										data-toggle='animation'
										data-animation='fadeUp'
										data-animation-order={3}
										data-animation-trigger='load'
									>
										<a
											href='#about-1'
											className='btn btn-outline-primary text-white'
										>
											More about us
										</a>
									</p>
								</div>
							</div>{" "}
							{/* / .row */}
						</div>{" "}
						{/* / .container */}
					</div>
				</div>
			</section>
		</>
	);
};

export default FullPageHero;
