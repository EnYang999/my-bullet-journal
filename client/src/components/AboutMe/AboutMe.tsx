import img54 from "../../assets/about/54.jpg";
import img55 from "../../assets/about/55.jpg";
import img56 from "../../assets/about/56.jpg";
import img47 from "../../assets/about/47.jpg";
import img16 from "../../assets/about/16.jpg";
import img18 from "../../assets/about/18.jpg";
import img17 from "../../assets/about/17.jpg";
const AboutMe = () => {
	return (
		<div
			className='fp-viewing-hero fp-responsive'
			style={{ overflow: "visible", height: "initial" }}
		>
			{/* FULLPAGE ================================================== */}
			<main
				className='fp-wrapper fullpage-wrapper'
				style={{
					height: "100%",
					position: "relative",
					transform: "translate3d(0px, 0px, 0px)",
					transition: "all 700ms cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s",
				}}
			>
				{/* HERO */}
				<section
					className='fp-section fp-table active fp-completely'
					data-fp-styles='null'
					data-anchor='hero'
					style={{ height: 764 }}
				>
					<div className='fp-tableCell' style={{ height: 764 }}>
						<div className='section section-top'>
							{/* Cover */}
							<div className='bg-cover' style={{ backgroundImage: img54 }} />
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
				{/* ABOUT */}
				<section
					className='fp-section border-bottom fp-table'
					data-fp-styles='null'
					data-anchor='about-1'
					style={{ height: 764 }}
				>
					<div className='fp-tableCell' style={{ height: 764 }}>
						<div className='fp-scrollable' style={{ height: 764 }}>
							<div
								className='fp-scroller'
								style={{
									transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
									transitionDuration: "0ms",
									transform: "translate(0px, 0px) translateZ(0px)",
								}}
							>
								<div className='section section-top'>
									{/* Content */}
									<div className='container'>
										<div className='row align-items-center'>
											<div className='col-md-6 col-lg-5 offset-lg-1'>
												{/* Image */}
												<div className='img-effect img-effect-solid mb-5 mb-md-0'>
													<img src={img47} className='img-fluid' alt='...' />
												</div>
											</div>
											<div className='col-md-6 col-lg-4 offset-lg-1'>
												{/* Heading */}
												<h2
													className='mb-4 animate'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={0}
													data-animation-trigger='fpAfterLoad'
												>
													Fast and professional multilingual translation
													services
												</h2>
												{/* Content */}
												<p
													className='text-muted animate'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={1}
													data-animation-trigger='fpAfterLoad'
												>
													Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Sint, maiores, aperiam. Excepturi assumenda non
													quasi ipsa quidem harum debitis aut alias dicta.
													Laudantium reprehenderit ea, suscipit nulla deleniti
													excepturi repudiandae!
												</p>
												{/* Button */}
												<a
													href='contact.html'
													className='btn btn-outline-primary animate'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={2}
													data-animation-trigger='fpAfterLoad'
												>
													Get a free quote
												</a>
											</div>
										</div>{" "}
										{/* / .row */}
									</div>{" "}
									{/* / .container */}
								</div>
							</div>
							<div
								className='iScrollVerticalScrollbar iScrollLoneScrollbar'
								style={{
									position: "absolute",
									zIndex: 9999,
									width: 7,
									bottom: 2,
									top: 2,
									right: 1,
									overflow: "hidden",
								}}
							>
								<div
									className='iScrollIndicator'
									style={{
										boxSizing: "border-box",
										position: "absolute",
										background: "rgba(0, 0, 0, 0.5)",
										border: "1px solid rgba(255, 255, 255, 0.9)",
										borderRadius: 3,
										width: "100%",
										transitionDuration: "0ms",
										display: "block",
										height: 631,
										transform: "translate(0px, 0px) translateZ(0px)",
										transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
									}}
								/>
							</div>
						</div>
					</div>
				</section>
				{/* ABOUT */}
				<section
					className='fp-section fp-table'
					data-fp-styles='null'
					data-anchor='about-2'
					style={{ height: 764 }}
				>
					<div className='fp-tableCell' style={{ height: 764 }}>
						<div className='fp-scrollable' style={{ height: 764 }}>
							<div
								className='fp-scroller'
								style={{
									transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
									transitionDuration: "0ms",
									transform: "translate(0px, 0px) translateZ(0px)",
								}}
							>
								<div className='section section-top'>
									{/* Content */}
									<div className='container'>
										<div className='row align-items-center'>
											<div className='col-md-6 col-lg-5 offset-lg-1 order-md-2'>
												{/* Image */}
												<div className='img-effect img-effect-dotted mb-5 mb-md-0'>
													<img src={img55} className='img-fluid' alt='...' />
												</div>
											</div>
											<div className='col-md-6 col-lg-4 offset-lg-1 order-md-1'>
												{/* Heading */}
												<h2
													className='mb-4'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={0}
													data-animation-trigger='fpAfterLoad'
												>
													Guarantee of quality at the most competitive rates
												</h2>
												{/* Content */}
												<p
													className='text-muted'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={1}
													data-animation-trigger='fpAfterLoad'
												>
													Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Sint, maiores, aperiam. Excepturi assumenda non
													quasi ipsa quidem harum debitis aut alias dicta.
													Laudantium reprehenderit ea, suscipit nulla deleniti
													excepturi repudiandae!
												</p>
												{/* Button */}
												<a
													href='#pricing'
													className='btn btn-outline-primary'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={2}
													data-animation-trigger='fpAfterLoad'
												>
													Pricing options
												</a>
											</div>
										</div>{" "}
										{/* / .row */}
									</div>{" "}
									{/* / .container */}
								</div>
							</div>
							<div
								className='iScrollVerticalScrollbar iScrollLoneScrollbar'
								style={{
									position: "absolute",
									zIndex: 9999,
									width: 7,
									bottom: 2,
									top: 2,
									right: 1,
									overflow: "hidden",
								}}
							>
								<div
									className='iScrollIndicator'
									style={{
										boxSizing: "border-box",
										position: "absolute",
										background: "rgba(0, 0, 0, 0.5)",
										border: "1px solid rgba(255, 255, 255, 0.9)",
										borderRadius: 3,
										width: "100%",
										transitionDuration: "0ms",
										display: "block",
										height: 590,
										transform: "translate(0px, 0px) translateZ(0px)",
										transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
									}}
								/>
							</div>
						</div>
					</div>
				</section>
				{/* SERVICES */}
				<section
					className='fp-section bg-light fp-table'
					data-fp-styles='null'
					data-anchor='services'
					style={{ height: 764 }}
				>
					<div className='fp-tableCell' style={{ height: 764 }}>
						<div className='fp-scrollable' style={{ height: 764 }}>
							<div
								className='fp-scroller'
								style={{
									transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
									transitionDuration: "0ms",
									transform: "translate(0px, 0px) translateZ(0px)",
								}}
							>
								<div className='section section-top'>
									{/* Triangles */}
									<div className='bg-triangle bg-triangle-dark bg-triangle-left bg-triangle-top' />
									<div className='bg-triangle bg-triangle-dark bg-triangle-right bg-triangle-bottom' />
									{/* Content */}
									<div className='container'>
										<div className='row justify-content-center'>
											<div className='col-md-8 col-lg-6'>
												{/* Heading */}
												<h2
													className='text-center mb-4'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={0}
													data-animation-trigger='fpAfterLoad'
												>
													Full list of services
												</h2>
												{/* Subheading */}
												<p
													className='text-center text-muted text-left mb-5'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={1}
													data-animation-trigger='fpAfterLoad'
												>
													Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Illo officiis odio repudiandae illum molestiae.
												</p>
											</div>
										</div>{" "}
										{/* / .row */}
										<div className='row'>
											<div className='col-md-4'>
												{/* Item */}
												<div className='text-center mb-5'>
													{/* Icon */}
													<div
														className='text-primary mb-4'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={1}
														data-animation-trigger='fpAfterLoad'
													>
														<span className='icon icon-businessman icon-2x' />
													</div>
													{/* Heading */}
													<h4
														className='mb-3'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={2}
														data-animation-trigger='fpAfterLoad'
													>
														Translation services
													</h4>
													{/* Content */}
													<p
														className='text-muted mb-0'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={3}
														data-animation-trigger='fpAfterLoad'
													>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Animi culpa, corporis.
													</p>
												</div>
											</div>
											<div className='col-md-4'>
												{/* Item */}
												<div className='text-center mb-5'>
													{/* Icon */}
													<div
														className='text-primary mb-4'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={2}
														data-animation-trigger='fpAfterLoad'
													>
														<span className='icon icon-comment icon-2x' />
													</div>
													{/* Heading */}
													<h4
														className='mb-3'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={3}
														data-animation-trigger='fpAfterLoad'
													>
														Interpretation services
													</h4>
													{/* Content */}
													<p
														className='text-muted mb-0'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={4}
														data-animation-trigger='fpAfterLoad'
													>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Animi culpa, corporis.
													</p>
												</div>
											</div>
											<div className='col-md-4'>
												{/* Item */}
												<div className='text-center mb-5'>
													{/* Icon */}
													<div
														className='text-primary mb-4'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={3}
														data-animation-trigger='fpAfterLoad'
													>
														<span className='icon icon-edit icon-2x' />
													</div>
													{/* Heading */}
													<h4
														className='mb-3'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={4}
														data-animation-trigger='fpAfterLoad'
													>
														Proofreading services
													</h4>
													{/* Content */}
													<p
														className='text-muted mb-0'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={5}
														data-animation-trigger='fpAfterLoad'
													>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Animi culpa, corporis.
													</p>
												</div>
											</div>
										</div>{" "}
										{/* / .row */}
										<div className='row'>
											<div className='col-md-4'>
												{/* Item */}
												<div className='text-center mb-5 mb-md-0'>
													{/* Icon */}
													<div
														className='text-primary mb-4'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={4}
														data-animation-trigger='fpAfterLoad'
													>
														<span className='icon icon-at icon-2x' />
													</div>
													{/* Heading */}
													<h4
														className='mb-3'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={5}
														data-animation-trigger='fpAfterLoad'
													>
														Copywriting services
													</h4>
													{/* Content */}
													<p
														className='text-muted mb-0'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={6}
														data-animation-trigger='fpAfterLoad'
													>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Animi culpa, corporis.
													</p>
												</div>
											</div>
											<div className='col-md-4'>
												{/* Item */}
												<div className='text-center mb-5 mb-md-0'>
													{/* Icon */}
													<div
														className='text-primary mb-4'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={5}
														data-animation-trigger='fpAfterLoad'
													>
														<span className='icon icon-marker icon-2x' />
													</div>
													{/* Heading */}
													<h4
														className='mb-3'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={6}
														data-animation-trigger='fpAfterLoad'
													>
														Localization services
													</h4>
													{/* Content */}
													<p
														className='text-muted mb-0'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={7}
														data-animation-trigger='fpAfterLoad'
													>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Animi culpa, corporis.
													</p>
												</div>
											</div>
											<div className='col-md-4'>
												{/* Item */}
												<div className='text-center'>
													{/* Icon */}
													<div
														className='text-primary mb-4'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={6}
														data-animation-trigger='fpAfterLoad'
													>
														<span className='icon icon-support icon-2x' />
													</div>
													{/* Heading */}
													<h4
														className='mb-3'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={7}
														data-animation-trigger='fpAfterLoad'
													>
														Voiceover services
													</h4>
													{/* Content */}
													<p
														className='text-muted mb-0'
														data-toggle='animation'
														data-animation='fadeUp'
														data-animation-order={8}
														data-animation-trigger='fpAfterLoad'
													>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Animi culpa, corporis.
													</p>
												</div>
											</div>
										</div>{" "}
										{/* / .row */}
									</div>{" "}
									{/* / .container */}
								</div>
							</div>
							<div
								className='iScrollVerticalScrollbar iScrollLoneScrollbar'
								style={{
									position: "absolute",
									zIndex: 9999,
									width: 7,
									bottom: 2,
									top: 2,
									right: 1,
									overflow: "hidden",
								}}
							>
								<div
									className='iScrollIndicator'
									style={{
										boxSizing: "border-box",
										position: "absolute",
										background: "rgba(0, 0, 0, 0.5)",
										border: "1px solid rgba(255, 255, 255, 0.9)",
										borderRadius: 3,
										width: "100%",
										transitionDuration: "0ms",
										display: "block",
										height: 342,
										transform: "translate(0px, 0px) translateZ(0px)",
										transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
									}}
								/>
							</div>
						</div>
					</div>
				</section>
				{/* PROMO */}
				<section
					className='fp-section fp-table'
					data-fp-styles='null'
					data-anchor='promo'
					style={{ height: 764 }}
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
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Tenetur quas quidem asperiores consequatur
												aspernatur cum voluptas, atque!
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
								</div>{" "}
								{/* / .row */}
							</div>{" "}
							{/* / .container */}
						</div>
					</div>
				</section>
				{/* TESTIMONIALS */}
				<section
					className='fp-section fp-table'
					data-fp-styles='null'
					data-anchor='testimonials'
					style={{ height: 764 }}
				>
					<div className='fp-tableCell' style={{ height: 764 }}>
						<div className='fp-scrollable' style={{ height: 764 }}>
							<div
								className='fp-scroller'
								style={{
									transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
									transitionDuration: "0ms",
									transform: "translate(0px, 0px) translateZ(0px)",
								}}
							>
								<div className='section section-top'>
									{/* Content */}
									<div className='container'>
										<div className='row justify-content-center'>
											<div className='col-md-8 col-lg-6'>
												{/* Heading */}
												<h2
													className='text-center mb-4'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={0}
													data-animation-trigger='fpAfterLoad'
												>
													Client testimonials
												</h2>
												{/* Subheading */}
												<p
													className='text-center text-muted mb-5'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={1}
													data-animation-trigger='fpAfterLoad'
												>
													Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Ullam illo ut repellat tempora sequi vitae
													provident optio pariatur.
												</p>
											</div>
										</div>
										<div className='row'>
											<div className='col'>
												{/* Slider */}
												<div
													className='testimonial-slider flickity-enabled is-draggable'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={2}
													data-animation-trigger='fpAfterLoad'
													tabIndex={0}
												>
													{/* Item */}
													{/* Item */}
													{/* Item */}
													<div
														className='flickity-viewport'
														style={{ height: "394.75px", touchAction: "pan-y" }}
													>
														<div
															className='flickity-slider'
															style={{
																left: 0,
																transform: "translateX(-200%)",
															}}
														>
															<div
																className='testimonial-slider-item'
																aria-hidden='true'
																style={{ position: "absolute", left: "0%" }}
															>
																<div className='testimonial-slider-item-inner'>
																	{/* Quote */}
																	<div className='quote quote-sm'>
																		<blockquote className='quote-blockquote'>
																			<p className='quote-blockquote-content'>
																				Lorem ipsum dolor sit amet, consectetur
																				adipisicing elit. Quam exercitationem
																				nobis incidunt alias ipsa quis, rerum
																				doloribus nostrum, recusandae.
																				Laboriosam, quasi, dolores! Itaque nihil
																				quae, omnis, minus nisi iste iure.
																			</p>
																			<footer className='quote-blockquote-footer'>
																				<div className='avatar avatar-lg mr-3'>
																					<img
																						src={img16}
																						alt='...'
																						className='img-cover rounded-circle'
																					/>
																				</div>
																				<span>
																					John Doe,{" "}
																					<span className='text-zigzag'>
																						Chicago
																					</span>
																				</span>
																			</footer>
																		</blockquote>
																	</div>
																</div>
															</div>
															<div
																className='testimonial-slider-item'
																aria-hidden='true'
																style={{ position: "absolute", left: "100%" }}
															>
																<div className='testimonial-slider-item-inner'>
																	{/* Quote */}
																	<div className='quote quote-sm'>
																		<blockquote className='quote-blockquote'>
																			<p className='quote-blockquote-content'>
																				Lorem ipsum dolor sit amet, consectetur
																				adipisicing elit. Quam exercitationem
																				nobis incidunt alias ipsa quis, rerum
																				doloribus nostrum, recusandae.
																				Laboriosam, quasi, dolores! Itaque nihil
																				quae, omnis, minus nisi iste iure.
																			</p>
																			<footer className='quote-blockquote-footer'>
																				<div className='avatar avatar-lg mr-3'>
																					<img
																						src={img18}
																						alt='...'
																						className='img-cover rounded-circle'
																					/>
																				</div>
																				<span>
																					Anna Doe,{" "}
																					<span className='text-zigzag'>
																						San Francisco
																					</span>
																				</span>
																			</footer>
																		</blockquote>
																	</div>
																</div>
															</div>
															<div
																className='testimonial-slider-item is-selected'
																style={{ position: "absolute", left: "200%" }}
															>
																<div className='testimonial-slider-item-inner'>
																	{/* Quote */}
																	<div className='quote quote-sm'>
																		<blockquote className='quote-blockquote'>
																			<p className='quote-blockquote-content'>
																				Lorem ipsum dolor sit amet, consectetur
																				adipisicing elit. Quam exercitationem
																				nobis incidunt alias ipsa quis, rerum
																				doloribus nostrum, recusandae.
																				Laboriosam, quasi, dolores! Itaque nihil
																				quae, omnis, minus nisi iste iure.
																			</p>
																			<footer className='quote-blockquote-footer'>
																				<div className='avatar avatar-lg mr-3'>
																					<img
																						src={img17}
																						alt='...'
																						className='img-cover rounded-circle'
																					/>
																				</div>
																				<span>
																					Jane Roe,{" "}
																					<span className='text-zigzag'>
																						Los Angeles
																					</span>
																				</span>
																			</footer>
																		</blockquote>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>{" "}
												{/* / .testimonials-slider */}
											</div>
										</div>{" "}
										{/* / .row */}
									</div>{" "}
									{/* / .container */}
								</div>
							</div>
							<div
								className='iScrollVerticalScrollbar iScrollLoneScrollbar'
								style={{
									position: "absolute",
									zIndex: 9999,
									width: 7,
									bottom: 2,
									top: 2,
									right: 1,
									overflow: "hidden",
								}}
							>
								<div
									className='iScrollIndicator'
									style={{
										boxSizing: "border-box",
										position: "absolute",
										background: "rgba(0, 0, 0, 0.5)",
										border: "1px solid rgba(255, 255, 255, 0.9)",
										borderRadius: 3,
										width: "100%",
										transitionDuration: "0ms",
										display: "none",
										height: 756,
										transform: "translate(0px, 0px) translateZ(0px)",
										transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
									}}
								/>
							</div>
						</div>
					</div>
				</section>
				{/* PRICING */}
				<section
					className='fp-section bg-light fp-table'
					data-fp-styles='null'
					data-anchor='pricing'
					style={{ height: 764 }}
				>
					<div className='fp-tableCell' style={{ height: 764 }}>
						<div className='fp-scrollable' style={{ height: 764 }}>
							<div
								className='fp-scroller'
								style={{
									transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
									transitionDuration: "0ms",
									transform: "translate(0px, 0px) translateZ(0px)",
								}}
							>
								<div className='section section-top'>
									{/* Triangles */}
									<div className='bg-triangle bg-triangle-dark bg-triangle-left bg-triangle-top' />
									<div className='bg-triangle bg-triangle-dark bg-triangle-right bg-triangle-bottom' />
									{/* Content */}
									<div className='container'>
										<div className='row justify-content-center'>
											<div className='col-md-8 col-lg-6'>
												{/* Heading */}
												<h2
													className='text-center mb-4'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={0}
													data-animation-trigger='fpAfterLoad'
												>
													Pricing options
												</h2>
												{/* Subheading */}
												<p
													className='text-muted text-center mb-5'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={1}
													data-animation-trigger='fpAfterLoad'
												>
													Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Eligendi animi rerum, neque quia placeat soluta
													excepturi.
												</p>
											</div>
										</div>{" "}
										{/* / .row */}
										<div className='row justify-content-center'>
											<div className='col-md-6 col-lg-4'>
												{/* Card */}
												<div
													className='card card-lg bg-white mb-3 mb-lg-0'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={2}
													data-animation-trigger='fpAfterLoad'
												>
													{/* Body */}
													<div className='card-body text-center'>
														{/* Title */}
														<h4 className='card-title'>Relaxed</h4>
														{/* Price */}
														<h3 className='card-title font-weight-normal text-primary'>
															$0.05 <small>/ word</small>
														</h3>
														{/* Text */}
														<ul className='card-text list-iconed'>
															<li className='list-iconed-item'>
																Lorem ipsum dolor sit amet, consectetur
																adipisicing elit
															</li>
															<li className='list-iconed-item'>
																Aliquam quis perferendis, quas fugiat. Iste
																quisquam sit
															</li>
															<li className='list-iconed-item'>
																Cum ab error sit totam nemo
															</li>
														</ul>
														{/* Button */}
														<a
															href='contact.html'
															target='_blank'
															className='btn btn-outline-primary'
														>
															Get a free quote
														</a>
													</div>
												</div>{" "}
												{/* / .card */}
											</div>
											<div className='col-md-6 col-lg-4'>
												{/* Card */}
												<div
													className='card card-lg card-active bg-white mb-3 mb-lg-0'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={3}
													data-animation-trigger='fpAfterLoad'
												>
													{/* Body */}
													<div className='card-body text-center'>
														{/* Title */}
														<h4 className='card-title'>Standard</h4>
														{/* Price */}
														<h3 className='card-title font-weight-normal text-primary'>
															$0.1 <small>/ word</small>
														</h3>
														{/* Text */}
														<ul className='card-text list-iconed'>
															<li className='list-iconed-item'>
																Lorem ipsum dolor sit amet, consectetur
																adipisicing elit
															</li>
															<li className='list-iconed-item'>
																Aliquam quis perferendis, quas fugiat. Iste
																quisquam sit
															</li>
															<li className='list-iconed-item'>
																Cum ab error sit totam nemo
															</li>
														</ul>
														{/* Button */}
														<a
															href='contact.html'
															target='_blank'
															className='btn btn-outline-primary'
														>
															Get a free quote
														</a>
													</div>
												</div>{" "}
												{/* / .card */}
											</div>
											<div className='col-md-6 col-lg-4'>
												{/* Card */}
												<div
													className='card card-lg bg-white'
													data-toggle='animation'
													data-animation='fadeUp'
													data-animation-order={4}
													data-animation-trigger='fpAfterLoad'
												>
													{/* Body */}
													<div className='card-body text-center'>
														{/* Title */}
														<h4 className='card-title'>Urgent</h4>
														{/* Price */}
														<h3 className='card-title font-weight-normal text-primary'>
															$0.15 <small>/ word</small>
														</h3>
														{/* Text */}
														<ul className='card-text list-iconed'>
															<li className='list-iconed-item'>
																Lorem ipsum dolor sit amet, consectetur
																adipisicing elit
															</li>
															<li className='list-iconed-item'>
																Aliquam quis perferendis, quas fugiat. Iste
																quisquam sit
															</li>
															<li className='list-iconed-item'>
																Cum ab error sit totam nemo
															</li>
														</ul>
														{/* Button */}
														<a
															href='contact.html'
															target='_blank'
															className='btn btn-outline-primary'
														>
															Get a free quote
														</a>
													</div>
												</div>{" "}
												{/* / .card */}
											</div>
										</div>{" "}
										{/* / .row */}
									</div>{" "}
									{/* / .container */}
								</div>
							</div>
							<div
								className='iScrollVerticalScrollbar iScrollLoneScrollbar'
								style={{
									position: "absolute",
									zIndex: 9999,
									width: 7,
									bottom: 2,
									top: 2,
									right: 1,
									overflow: "hidden",
								}}
							>
								<div
									className='iScrollIndicator'
									style={{
										boxSizing: "border-box",
										position: "absolute",
										background: "rgba(0, 0, 0, 0.5)",
										border: "1px solid rgba(255, 255, 255, 0.9)",
										borderRadius: 3,
										width: "100%",
										transitionDuration: "0ms",
										display: "block",
										height: 285,
										transform: "translate(0px, 0px) translateZ(0px)",
										transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
									}}
								/>
							</div>
						</div>
					</div>
				</section>
				{/* FOOTER
================================================== */}
				<section
					className='fp-section fp-auto-height fp-table'
					data-fp-styles='null'
					style={{ height: 764 }}
				>
					<div className='fp-tableCell' style={{ height: 764 }}>
						<footer className='section bg-dark'>
							{/* Triangles */}
							<div className='bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-left' />
							<div className='bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-right' />
							{/*Content */}
							<div className='container'>
								<div className='row align-self-center'>
									<div className='col-md-auto'>
										{/* Brand */}
										<p>
											<a href='#' className='footer-brand text-white'>
												<svg
													className='footer-brand-svg'
													viewBox='0 0 235 80'
													xmlns='http://www.w3.org/2000/svg'
													xmlnsXlink='http://www.w3.org/1999/xlink'
												>
													<path
														d='M0 0 L 20 10 L 0 20 Z'
														className='text-primary'
														fill='currentColor'
													/>
													<path
														d='M0 30 L 20 40 L 0 50 Z M20 45 L 0 55 L 20 65 Z M0 60 L 20 70 L 0 80 Z'
														fill='currentColor'
													/>
													<text
														x={40}
														y={70}
														fontFamily='Arial, sans-serif'
														fontSize={60}
														fontWeight='bold'
														letterSpacing='-.025em'
														fill='currentColor'
													>
														incline.
													</text>
												</svg>
											</a>
										</p>
									</div>
									<div className='col-md'>
										{/* Links */}
										<ul className='list-unstyled list-inline text-md-right'>
											<li className='list-inline-item mr-2'>
												<a href='#' className='text-white'>
													Terms and conditions
												</a>
											</li>
											<li className='list-inline-item mr-2'>
												<a href='#' className='text-white'>
													Privacy policy
												</a>
											</li>
											<li className='list-inline-item'>
												<a href='#' className='text-white'>
													Contact us
												</a>
											</li>
										</ul>
									</div>
								</div>{" "}
								{/* / .row */}
								<div className='row align-items-center'>
									<div className='col-md'>
										{/* Copyright */}
										<p className='text-white text-muted'>
											<small>
												© Copyright <span className='current-year'>2024</span>{" "}
												Simpleqode. All rights reserved.
											</small>
										</p>
									</div>
									<div className='col-md'>
										{/* Social links */}
										<ul className='list-inline list-unstyled text-md-right'>
											<li className='list-inline-item'>
												<a href='#'>
													<i className='fab fa-github' />
												</a>
											</li>
											<li className='list-inline-item ml-3'>
												<a href='#'>
													<i className='fab fa-twitter' />
												</a>
											</li>
											<li className='list-inline-item ml-3'>
												<a href='#'>
													<i className='fab fa-instagram' />
												</a>
											</li>
										</ul>
									</div>
								</div>{" "}
								{/* / .row */}
							</div>{" "}
							{/* / .container */}
						</footer>
					</div>
				</section>
			</main>
		</div>
	);
};

export default AboutMe;
