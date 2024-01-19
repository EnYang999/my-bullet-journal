import img20 from "../../assets/img/20.jpg";
import img21 from "../../assets/img/21.jpg";
import img22 from "../../assets/img/22.jpg";
import Flickity from "flickity";
import { useRef, useEffect } from "react";
const LandingTestimonial = () => {
	const flickityRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (flickityRef.current) {
			const flkty = new Flickity(flickityRef.current, {
				wrapAround: true,
				imagesLoaded: true,
				// pageDots: false,
			});
			return () => {
				flkty.destroy();
			};
		}
	}, []);

	return (
		<section className='py-7 py-md-9 border-bottom'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6 text-center'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>What clients say about us</h2>

						{/* <!--Subheading  --> */}
						<p className='mb-6'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						{/* <!--Slider  --> */}
						<div
							data-flickity='{"imagesLoaded": true, "wrapAround": true}'
							ref={flickityRef}
						>
							<div className='w-100'>
								<div className='row align-items-center justify-content-center'>
									<div className='col-8 col-md-3 order-md-1'>
										{/* <!--Avatar  --> */}
										<img
											className='img-fluid rounded-circle mb-5 mb-md-0'
											src={img20}
											alt='...'
										/>
									</div>
									<div className='col-md-7 order-md-0'>
										{/* <!--Blockquote  --> */}
										<figure
											className='mx-auto mb-0'
											// style='max-width: 500px;'
										>
											<blockquote className='blockquote mb-0'>
												<p className='font-serif text-black mb-5'>
													Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Eos at veritatis vitae modi ex quis quibusdam
													error repudiandae adipisci dolore perspiciatis iste,
													vel fuga a, libero architecto ratione deleniti sequi.
												</p>
											</blockquote>
											<figcaption className='blockquote-footer text-xs mb-0'>
												Liam Smith
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
							<div className='w-100'>
								<div className='row align-items-center justify-content-center'>
									<div className='col-8 col-md-3 order-md-1'>
										{/* <!--Avatar  --> */}
										<img
											className='img-fluid rounded-circle mb-5 mb-md-0'
											src={img21}
											alt='...'
										/>
									</div>
									<div className='col-md-7 order-md-0'>
										{/* <!--Blockquote  --> */}
										<figure
											className='mx-auto mb-0'
											// style='max-width: 500px;'
										>
											<blockquote className='blockquote mb-0'>
												<p className='font-serif text-black mb-5'>
													Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Eos at veritatis vitae modi ex quis quibusdam
													error repudiandae adipisci dolore perspiciatis iste,
													vel fuga a, libero architecto ratione deleniti sequi.
												</p>
											</blockquote>
											<figcaption className='blockquote-footer text-xs mb-0'>
												Olivia Johnson
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
							<div className='w-100'>
								<div className='row align-items-center justify-content-center'>
									<div className='col-8 col-md-3 order-md-1'>
										{/* <!--Avatar  --> */}
										<img
											className='img-fluid rounded-circle mb-5 mb-md-0'
											src={img22}
											alt='...'
										/>
									</div>
									<div className='col-md-7 order-md-0'>
										{/* <!--Blockquote  --> */}
										<figure
											className='mx-auto mb-0'
											// style='max-width: 500px;'
										>
											<blockquote className='blockquote mb-0'>
												<p className='font-serif text-black mb-5'>
													Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Eos at veritatis vitae modi ex quis quibusdam
													error repudiandae adipisci dolore perspiciatis iste,
													vel fuga a, libero architecto ratione deleniti sequi.
												</p>
											</blockquote>
											<figcaption className='blockquote-footer text-xs mb-0'>
												Emma Williams
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingTestimonial;
