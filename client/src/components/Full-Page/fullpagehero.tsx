import img54 from "../../assets/about/aboutme-hero-1.jpg";
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
				style={{ height: "100vh" }}
				ref={heroRef}
			>
				<div className='fp-tableCell' style={{ height: "100%" }}>
					<div className='section section-top'>
						{/* Cover */}
						<div
							className='bg-cover'
							style={{ backgroundImage: `url(${img54})` }}
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
										className={`font-weight-medium text-center text-xs text-uppercase text-white text-muted ${
											activeSection === "hero" ? "animate" : ""
										}`}
										data-toggle={`animation`}
										data-animation='fadeUp'
										data-animation-order={0}
										data-animation-trigger='load'
									>
										About Us
									</p>
									{/* Heading */}
									<h1
										className={`text-white text-center mb-4 ${
											activeSection === "hero" ? "animate" : ""
										}`}
										data-toggle={`animation`}
										data-animation='fadeUp'
										data-animation-order={1}
										data-animation-trigger='load'
									>
										Greetings, My name is En
									</h1>
									{/* Subheading */}
									<p
										className={`lead text-white text-muted text-center mb-5 ${
											activeSection === "hero" ? "animate" : ""
										}`}
										data-toggle={`animation`}
										data-animation='fadeUp'
										data-animation-order={2}
										data-animation-trigger='load'
									>
										I'm currently pursuing my academic journey at UWO, I'm
										dedicated to honing my skills and exploring my interests to
										their fullest potential
									</p>
									{/* Button */}
									<p
										className={`text-center mb-0 ${
											activeSection === "hero" ? "animate" : ""
										}`}
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
							</div>
						</div>
					</div>{" "}
				</div>
			</section>
		</>
	);
};

export default FullPageHero;
