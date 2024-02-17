import img26 from "../../assets/landing/26.jpg";
import img27 from "../../assets/landing/27.jpg";
import img28 from "../../assets/landing/28.jpg";
// import img29 from "../../assets/landing/29.jpg";
import img30 from "../../assets/landing/30.jpg";
import img31 from "../../assets/landing/31.jpg";
import frost1 from "../../assets/landing/landing-frost-2105.jpg";
import frost2 from "../../assets/landing/landing-frost-2112.jpg";
import frost3 from "../../assets/landing/landing-frost-2204.jpg";
import frost4 from "../../assets/landing/landing-frost-2303.jpg";
import frost5 from "../../assets/landing/landing-frost-2312.jpg";
import perano1 from "../../assets/landing/landing-perano-2306.jpg";
import perano2 from "../../assets/landing/landing-perano-2309.jpg";
import perano3 from "../../assets/landing/landing-perano-2108.jpg";
import perano4 from "../../assets/landing/landing-perano-2208.jpg";
import prelude1 from "../../assets/landing/landing-prelude-2106.jpg";
import prelude2 from "../../assets/landing/landing-prelude-2301.jpg";
import gold1 from "../../assets/landing/landing-gold-2109.jpg";
import gold2 from "../../assets/landing/landing-gold-2205.jpg";
import gold3 from "../../assets/landing/landing-gold-2206.jpg";
import gold4 from "../../assets/landing/landing-gold-2209.jpg";
import gold5 from "../../assets/landing/landing-gold-2305.jpg";
import moccasin1 from "../../assets/landing/landing-Moccasin-2110.jpg";
import moccasin2 from "../../assets/landing/landing-Moccasin-2210.jpg";
import moccasin3 from "../../assets/landing/landing-Moccasin-2211.jpg";
import moccasin4 from "../../assets/landing/landing-Moccasin-2311.jpg";
import tomato1 from "../../assets/landing/landing-tomato-2302.jpg";
import tomato2 from "../../assets/landing/landing-tomato-2308.jpg";
import tomato3 from "../../assets/landing/landing-tomato-2311.jpg";
import { useState } from "react";

const LandingMenu = () => {
	const [activeTab, setActiveTab] = useState<string>("gold"); // Set the default active tab

	const handleTabClick = (tabId: string) => {
		setActiveTab(tabId);
	};
	return (
		<section className='py-7 py-md-9'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6 text-center'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>Themes options</h2>

						{/* <!--Subheading  --> */}
						<p className='mb-6'>
							Let the pages of your journal become a sanctuary where you weave
							dreams into plans, where the whispers of inspiration guide your
							pen to map out the landscape of your aspirations.
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
								className={`nav-link ${activeTab === "gold" ? "active" : ""}`}
								id='goldTab'
								data-bs-toggle='tab'
								href='#gold'
								role='tab'
								aria-controls='gold'
								aria-selected={activeTab === "gold"}
								onClick={() => handleTabClick("gold")}
							>
								gold
							</a>
							<a
								className={`nav-link ${
									activeTab === "prelude" ? "active" : ""
								}`}
								id='preludeTab'
								data-bs-toggle='tab'
								href='#prelude'
								role='tab'
								aria-controls='prelude'
								aria-selected={activeTab === "prelude"}
								onClick={() => handleTabClick("prelude")}
							>
								prelude
							</a>
							<a
								className={`nav-link ${activeTab === "perano" ? "active" : ""}`}
								id='peranoTab'
								data-bs-toggle='tab'
								href='#perano'
								role='tab'
								aria-controls='perano'
								aria-selected={activeTab === "perano"}
								onClick={() => handleTabClick("perano")}
							>
								perano
							</a>
							<a
								className={`nav-link ${activeTab === "frost" ? "active" : ""}`}
								id='frostTab'
								data-bs-toggle='tab'
								href='#frost'
								role='tab'
								aria-controls='frost'
								aria-selected={activeTab === "frost"}
								onClick={() => handleTabClick("frost")}
							>
								frost
							</a>
							<a
								className={`nav-link ${
									activeTab === "moccasin" ? "active" : ""
								}`}
								id='moccasinTab'
								data-bs-toggle='tab'
								href='#moccasin'
								role='tab'
								aria-controls='moccasin'
								aria-selected={activeTab === "moccasin"}
								onClick={() => handleTabClick("moccasin")}
							>
								moccasin
							</a>
							<a
								className={`nav-link ${activeTab === "tomato" ? "active" : ""}`}
								id='tomatoTab'
								data-bs-toggle='tab'
								href='#tomato'
								role='tab'
								aria-controls='tomato'
								aria-selected={activeTab === "tomato"}
								onClick={() => handleTabClick("tomato")}
							>
								tomato
							</a>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						{/* <!--Content  --> */}
						<div className='tab-content' id='menuContent'>
							{/* <!--gold  --> */}
							<div
								className={`tab-pane fade ${
									activeTab === "gold" ? "show active" : ""
								}`}
								id='gold'
								role='tabpanel'
								aria-labelledby='goldTab'
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
															src={gold1}
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
															src={gold2}
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
															src={gold3}
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
															src={gold4}
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
															src={gold5}
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
							{/* <!--prelude  --> */}
							<div
								className={`tab-pane fade ${
									activeTab === "prelude" ? "show active" : ""
								}`}
								id='prelude'
								role='tabpanel'
								aria-labelledby='preludeTab'
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
															src={prelude1}
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
															src={prelude2}
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
															src={img27}
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
							{/* <!--perano  --> */}
							<div
								// className='tab-pane fade show active'
								className={`tab-pane fade ${
									activeTab === "perano" ? "show active" : ""
								}`}
								id='perano'
								role='tabpanel'
								aria-labelledby='peranoTab'
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
															src={perano1}
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
															src={perano2}
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
															src={perano3}
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
															src={perano4}
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
															src={img27}
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
							{/* <!--frost  --> */}
							<div
								className={`tab-pane fade ${
									activeTab === "frost" ? "show active" : ""
								}`}
								id='frost'
								role='tabpanel'
								aria-labelledby='frostTab'
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
															src={frost1}
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
															src={frost2}
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
															src={frost3}
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
															src={frost4}
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
															src={frost5}
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
							{/* <!--moccasin --> */}
							<div
								className={`tab-pane fade ${
									activeTab === "moccasin" ? "show active" : ""
								}`}
								id='moccasin'
								role='tabpanel'
								aria-labelledby='moccasinTab'
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
															src={moccasin1}
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
															src={moccasin2}
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
															src={moccasin3}
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
															src={moccasin4}
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
							{/* <!-- tomato --> */}
							<div
								className={`tab-pane fade ${
									activeTab === "tomato" ? "show active" : ""
								}`}
								id='tomato'
								role='tabpanel'
								aria-labelledby='tomatoTab'
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
															src={tomato1}
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
															src={tomato2}
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
															src={tomato3}
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
															src={tomato1}
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
