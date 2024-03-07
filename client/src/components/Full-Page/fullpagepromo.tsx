import React from "react";
import img56 from "../../assets/about/56.jpg";
interface FullPagePromoProps {
	heroRef: React.RefObject<HTMLDivElement>;
	about1Ref: React.RefObject<HTMLDivElement>;
	about2Ref: React.RefObject<HTMLDivElement>;
	promoRef: React.RefObject<HTMLDivElement>;
	activeSection: string;
}
const FullPagePromo: React.FC<FullPagePromoProps> = ({
	promoRef,
	activeSection,
}) => {
	return (
		<section
			key='promo'
			id='promo'
			className={`fp-section fp-table ${
				activeSection === "promo" ? "active fp-completely" : ""
			}`}
			data-fp-styles='null'
			data-anchor='promo'
			style={{ height: 764 }}
			ref={promoRef}
		>
			<div className='fp-tableCell' style={{ height: 764 }}>
				<div className='section section-top'>
					{/* Cover */}
					<div className='bg-cover' style={{ backgroundImage: img56 }} />
					{/* Content */}
					<div className='container'>
						<div className='row align-items-center justify-content-center'>
							<div className='col-md-10 col-lg-8'>
								{/* Promo */}
								<div
									className='bg-white text-center shadow py-5 px-4 p-md-6'
									data-toggle='animation'
									data-animation='fadeIn'
									data-animation-order={0}
									data-animation-trigger='fpAfterLoad'
								>
									{/* Icon */}
									<div
										className='mb-4'
										data-toggle='animation'
										data-animation='fadeUp'
										data-animation-order={1}
										data-animation-trigger='fpAfterLoad'
									>
										<span className='icon icon-comment icon-2x' />
									</div>
									{/* Heading */}
									<h2
										className='mb-4'
										data-toggle='animation'
										data-animation='fadeUp'
										data-animation-order={2}
										data-animation-trigger='fpAfterLoad'
									>
										We speak your language
									</h2>
									{/* Content */}
									<p
										className='text-muted mb-5'
										data-toggle='animation'
										data-animation='fadeUp'
										data-animation-order={3}
										data-animation-trigger='fpAfterLoad'
									>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Tenetur quas quidem asperiores consequatur aspernatur cum
										voluptas, atque!
									</p>
									{/* Button */}
									<a
										href='contact.html'
										className='btn btn-outline-primary'
										data-toggle='animation'
										data-animation='fadeUp'
										data-animation-order={4}
										data-animation-trigger='fpAfterLoad'
									>
										Get a free quote
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FullPagePromo;
