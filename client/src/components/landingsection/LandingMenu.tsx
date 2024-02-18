import img28 from "../../assets/landing/28.jpg";
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
	const handleTabClick = (
		tabId: string,
		event: React.MouseEvent<HTMLAnchorElement>
	) => {
		event.preventDefault();
		setActiveTab(tabId);
	};
	return (
		<section className='py-7 py-md-9'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6 text-center'>
						{/* <!--Heading  --> */}
						<h2 className='mb-2'>Themes Options</h2>

						{/* <!--Subheading  --> */}
						<p className='mb-6'>
							Let the pages of your journal become a sanctuary where you weave
							dreams into plans.
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
								// href='#gold'
								role='tab'
								aria-controls='gold'
								aria-selected={activeTab === "gold"}
								onClick={(event) => handleTabClick("gold", event)}
							>
								gold
							</a>
							<a
								className={`nav-link ${
									activeTab === "prelude" ? "active" : ""
								}`}
								id='preludeTab'
								data-bs-toggle='tab'
								// href='#prelude'
								role='tab'
								aria-controls='prelude'
								aria-selected={activeTab === "prelude"}
								onClick={(event) => handleTabClick("prelude", event)}
							>
								prelude
							</a>
							<a
								className={`nav-link ${activeTab === "perano" ? "active" : ""}`}
								id='peranoTab'
								data-bs-toggle='tab'
								// href='#perano'
								role='tab'
								aria-controls='perano'
								aria-selected={activeTab === "perano"}
								onClick={(event) => handleTabClick("perano", event)}
							>
								perano
							</a>
							<a
								className={`nav-link ${activeTab === "frost" ? "active" : ""}`}
								id='frostTab'
								data-bs-toggle='tab'
								// href='#frost'
								role='tab'
								aria-controls='frost'
								aria-selected={activeTab === "frost"}
								onClick={(event) => handleTabClick("frost", event)}
							>
								frost
							</a>
							<a
								className={`nav-link ${
									activeTab === "moccasin" ? "active" : ""
								}`}
								id='moccasinTab'
								data-bs-toggle='tab'
								// href='#moccasin'
								role='tab'
								aria-controls='moccasin'
								aria-selected={activeTab === "moccasin"}
								onClick={(event) => handleTabClick("moccasin", event)}
							>
								moccasin
							</a>
							<a
								className={`nav-link ${activeTab === "tomato" ? "active" : ""}`}
								id='tomatoTab'
								data-bs-toggle='tab'
								// href='#tomato'
								role='tab'
								aria-controls='tomato'
								aria-selected={activeTab === "tomato"}
								onClick={(event) => handleTabClick("tomato", event)}
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
													<h5 className='mb-2'>Golden September</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Amber leaves, golden jewelry—September gleams with
														nature's and metal's brilliance.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>May's Golden Charm</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Spring blossoms, golden adornments—May sparkles with
														nature's and gold's allure.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>June's Gilded Glow</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Summer's warmth, golden accents—June shimmers with
														radiance and elegance.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>September Shine</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Autumn's hues, golden accents—September glows with
														timeless beauty and richness.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>Golden May Bloom</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Spring's bloom, golden hues—May blossoms with
														elegance and opulence.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>Harvest of Gold</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Nature's bounty, golden adornments—September
														harvests beauty and prosperity.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>Ethereal Light in Lavender</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														As autumn's whisper unfolds, September bathes in the
														delicate hue of light purple, a prelude to the
														changing seasons—a serene symphony of nature.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>
														Frosty Mornings in Soft Lilac
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														In the quiet embrace of winter, January emerges in
														hues of light purple, casting a gentle glow over
														frost-kissed landscapes—a tranquil beginning to the
														new year.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
															src={prelude1}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Awakening in Pale Lavender</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														With the promise of spring on the horizon, March
														awakens in shades of light purple—a delicate prelude
														to nature's vibrant rebirth.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>Sunset Dreams in Muted Mauve</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														As summer's warmth envelops the land, June dances in
														hues of light purple—a dreamy prelude to balmy
														evenings and sun-kissed days.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
															src={prelude1}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>
														Harvest Moon in Lavender Mist
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Amidst the golden harvest fields, October is bathed
														in the soft glow of light purple—a mystical prelude
														to autumn's enchantment.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>
														Winter's Eve in Hushed Violet
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Underneath a blanket of snow, December unfolds in
														whispers of light purple—a serene prelude to the
														quiet beauty of winter's embrace.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>Whispering Blue</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														In June's embrace, Perano's light blue whispers of
														endless skies.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>Soft Blue Hue</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														September bathes in serene light blue, a tranquil
														melody.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>
														August Breeze: Gentle Blue Touch
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														August carries gentle light blue, a breeze of
														calmness.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>
														August Tranquility: Subtle Blue Essence
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Amidst August's tranquility, light blue essence
														soothes the soul.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
															src={perano1}
															alt='...'
														/>
													</div>
												</div>
												<div className='col-7'>
													{/* <!--Heading  --> */}
													<h5 className='mb-2'>Whispering Blue Waters</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														In November's dreams, light blue waters beckon with
														tranquility.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>Light Blue Vista</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														On horizon, light blue paints a serene vista.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>Emerald Awakening</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Emerald hues of Frost greet May, a verdant
														awakening.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>
														December Chill: Frost's Evergreen Charm
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Frost's green charm enchants December with evergreen
														allure.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>Sprouting Verdancy</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Sprouting verdancy in April, Frost casts a green
														spell.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>
														March Frost: Whispering Green Symphony
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														March echoes with Frost's whispering green symphony,
														a tranquil melody.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>
														December Glow: Frost's Enigmatic Green
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														December basks in Frost's enigmatic green, a
														mystical glow.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>Frost's Shaded Green</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														July unveils Frost's shaded green, a mystery in
														midsummer's warmth.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>October Hues: Grey Embrace</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Moccasin grey envelops October, a cozy embrace
														amidst autumn's palette.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>
														November Chill: Subtle Grey Veil
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Subtle grey veils November, warmth against the
														chill.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>
														October Whispers: Grey Whimsy
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Moccasin grey whispers through October, a whimsical
														touch in fall's air.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>
														November Mists: Grey Serenity
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														In November mists, grey exudes serenity, a tranquil
														cloak.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>Reverie: Soft Grey Dream</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Soft grey dream of embraces time, a reverie of
														tranquility.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>July Twilight: Misty Grey</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Misty grey adorns July twilight, a subtle hue in
														summer's warmth.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>February Blaze: Crimson Fire</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Crimson fire of Red ignites February, warming hearts
														with passion.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>
														August Harvest: Vibrant Bounty
													</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Vibrant red bounty crowns August, ripe with summer's
														richness.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>November Spice: Rich Essence</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Rich red essence of spices up November, adding
														warmth.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
													<h5 className='mb-2'>April Bloom: Bold Blossoms</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Bold red blossoms of herald vibrant bloom, a
														spectacle.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>Radiance: Sunlit Glow</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Sunlit red glow beams, a radiant hue.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													<div className='fs-4 font-serif text-center text-black'></div>
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
													<h5 className='mb-2'>October Harvest: Deep Bounty</h5>

													{/* <!--Text  --> */}
													<p className='mb-0'>
														Deep red bounty crowns October, a harvest of
														richness.
													</p>
												</div>
												<div className='col-2'>
													{/* <!--Price  --> */}
													{/* <div className='fs-4 font-serif text-center text-black'></div> */}
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
