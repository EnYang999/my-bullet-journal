import img26 from "../../assets/img/26.jpg";
import img27 from "../../assets/img/27.jpg";
import img28 from "../../assets/img/28.jpg";
import img29 from "../../assets/img/29.jpg";
import img30 from "../../assets/img/30.jpg";
import img31 from "../../assets/img/31.jpg";
import { useState } from "react";

const LandingMenu = () => {
	const [activeTab, setActiveTab] = useState<string>("mains"); // Set the default active tab

	const handleTabClick = (tabId: string) => {
		setActiveTab(tabId);
	};
	return (
		<section className='py-7 py-md-9 border-bottom'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6 text-center'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>Menu options</h2>

						{/* <!--Subheading  --> */}
						<p className='mb-6'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
							numquam eos perferendis itaque hic unde, ad, laudantium minima.
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						{/* <!--Navigation  --> */}
						<div
							className='nav justify-content-center mb-6'
							id='menuTabs'
							role='tablist'
						>
							<a
								className={`nav-link ${activeTab === "mains" ? "active" : ""}`}
								id='mainsTab'
								data-bs-toggle='tab'
								href='#mains'
								role='tab'
								aria-controls='mains'
								aria-selected={activeTab === "mains"}
								onClick={() => handleTabClick("mains")}
							>
								Mains
							</a>
							<a
								className={`nav-link ${activeTab === "lunch" ? "active" : ""}`}
								id='lunchTab'
								data-bs-toggle='tab'
								href='#lunch'
								role='tab'
								aria-controls='lunch'
								aria-selected={activeTab === "lunch"}
								onClick={() => handleTabClick("lunch")}
							>
								Lunch
							</a>
							<a
								className={`nav-link ${activeTab === "dinner" ? "active" : ""}`}
								id='dinnerTab'
								data-bs-toggle='tab'
								href='#dinner'
								role='tab'
								aria-controls='dinner'
								aria-selected={activeTab === "dinner"}
								onClick={() => handleTabClick("dinner")}
							>
								Dinner
							</a>
							<a
								className={`nav-link ${activeTab === "drinks" ? "active" : ""}`}
								id='drinksTab'
								data-bs-toggle='tab'
								href='#drinks'
								role='tab'
								aria-controls='drinks'
								aria-selected={activeTab === "drinks"}
								onClick={() => handleTabClick("drinks")}
							>
								Drinks
							</a>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						{/* <!--Content  --> */}
						<div className='tab-content' id='menuContent'>
							<div
								className={`tab-pane fade ${
									activeTab === "mains" ? "show active" : ""
								}`}
								id='mains'
								role='tabpanel'
								aria-labelledby='mainsTab'
							>
								<div className='row'>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img26}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Lorem ipsum dolor sit amet</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$15
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img27}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce id ante ut arcu</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$23
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img28}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce sed dolor eget tortor</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$16
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img29}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Lorem ipsum dolor sit amet</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$15
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img30}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce id ante ut arcu</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$23
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img31}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce sed dolor eget tortor</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$16
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								// className='tab-pane fade show active'
								className={`tab-pane fade ${
									activeTab === "lunch" ? "show active" : ""
								}`}
								id='lunch'
								role='tabpanel'
								aria-labelledby='lunchTab'
							>
								<div className='row'>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img27}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce id ante ut arcu</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$23
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img26}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Lorem ipsum dolor sit amet</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$15
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img29}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Lorem ipsum dolor sit amet</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$15
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img28}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce sed dolor eget tortor</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$16
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img31}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce sed dolor eget tortor</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$16
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img30}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce id ante ut arcu</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$23
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className={`tab-pane fade ${
									activeTab === "dinner" ? "show active" : ""
								}`}
								id='dinner'
								role='tabpanel'
								aria-labelledby='dinnerTab'
							>
								<div className='row'>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img28}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce sed dolor eget tortor</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$16
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img26}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Lorem ipsum dolor sit amet</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$15
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img29}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Lorem ipsum dolor sit amet</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$15
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img27}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce id ante ut arcu</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$23
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img30}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce id ante ut arcu</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$23
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img31}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce sed dolor eget tortor</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$16
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className={`tab-pane fade ${
									activeTab === "drinks" ? "show active" : ""
								}`}
								id='drinks'
								role='tabpanel'
								aria-labelledby='drinksTab'
							>
								<div className='row'>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img26}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Lorem ipsum dolor sit amet</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$15
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img30}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce id ante ut arcu</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$23
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img29}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Lorem ipsum dolor sit amet</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$15
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img27}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce id ante ut arcu</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$23
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img28}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce sed dolor eget tortor</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$16
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<div className='py-3 border-bottom'>
											<div className='row'>
												<div className='col-3 align-self-center'>
													{/* <!--Image  --> */}
													<div className='ratio ratio-1x1'>
														<img
															className='object-fit-cover'
															src={img31}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Fusce sed dolor eget tortor</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Modi, obcaecati! Sapiente laudantium.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'>
														$16
													</div>
												</div>
											</div>
										</div>
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

export default LandingMenu;
