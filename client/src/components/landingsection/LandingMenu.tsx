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
import { useState, useRef } from "react";
import LandingMenuTab from "./LandingMenuTab";
import text from "./landingtexts.json";
const LandingMenu = () => {
	const [activeTab, setActiveTab] = useState<string>("gold");
	const [markerColor, setMarkerColor] = useState<string>("#fff");
	const markerRef = useRef<HTMLDivElement>(null);
	const indicator = (e: HTMLElement) => {
		if (markerRef.current) {
			markerRef.current.style.left = e.offsetLeft + "px";
			markerRef.current.style.width = e.offsetWidth + "px";
			// markerRef.current.style.background = markerColor;
		}
	};
	const handleTabClick = (
		tabId: string,
		event: React.MouseEvent<HTMLAnchorElement>,
		color: string
	) => {
		setActiveTab(tabId);
		const target = event.target as HTMLElement;
		indicator(target);
		setMarkerColor(color);
	};

	return (
		<section className='landing-menu py-7 py-md-9'>
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
				{/* navigation */}
				<div className='row'>
					<div className='col'>
						{/* <!--Navigation  --> */}
						<div
							className='nav justify-content-center mb-6 position-relative'
							id='menuTabs'
							role='tablist'
						>
							<div
								id='marker'
								ref={markerRef}
								style={{ backgroundColor: markerColor }}
							></div>
							<a
								className={`nav-link ${activeTab === "gold" ? "active" : ""}`}
								id='goldTab'
								data-bs-toggle='tab'
								// href='#gold'
								role='tab'
								aria-controls='gold'
								aria-selected={activeTab === "gold"}
								onClick={(event) => handleTabClick("gold", event, "#ebd9b4")}
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
								onClick={(event) => handleTabClick("prelude", event, "#c3acd0")}
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
								onClick={(event) => handleTabClick("perano", event, "#adc4ce")}
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
								onClick={(event) => handleTabClick("frost", event, "#86a789")}
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
								onClick={(event) =>
									handleTabClick("moccasin", event, "#eeedeb")
								}
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
								onClick={(event) => handleTabClick("tomato", event, "#c68484")}
							>
								tomato
							</a>
						</div>
					</div>
				</div>
				{/* content for tabs */}
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
									<LandingMenuTab
										imgSrc={gold1}
										month={text.gold.months[0]}
										heading={text.gold.headings[0]}
										textHeading={text.gold.textHeadings[0]}
									/>
									<LandingMenuTab
										imgSrc={gold2}
										month={text.gold.months[1]}
										heading={text.gold.headings[1]}
										textHeading={text.gold.textHeadings[1]}
									/>
									<LandingMenuTab
										imgSrc={gold3}
										month={text.gold.months[2]}
										heading={text.gold.headings[2]}
										textHeading={text.gold.textHeadings[2]}
									/>
									<LandingMenuTab
										imgSrc={gold4}
										month={text.gold.months[3]}
										heading={text.gold.headings[3]}
										textHeading={text.gold.textHeadings[3]}
									/>
									<LandingMenuTab
										imgSrc={gold5}
										month={text.gold.months[4]}
										heading={text.gold.headings[4]}
										textHeading={text.gold.textHeadings[4]}
									/>
									<LandingMenuTab
										imgSrc={gold4}
										month={text.gold.months[5]}
										heading={text.gold.headings[5]}
										textHeading={text.gold.textHeadings[5]}
									/>
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
									<LandingMenuTab
										imgSrc={prelude1}
										month={text.prelude.months[0]}
										heading={text.prelude.headings[0]}
										textHeading={text.prelude.textHeadings[0]}
									/>
									<LandingMenuTab
										imgSrc={prelude2}
										month={text.prelude.months[1]}
										heading={text.prelude.headings[1]}
										textHeading={text.prelude.textHeadings[1]}
									/>
									<LandingMenuTab
										imgSrc={prelude1}
										month={text.prelude.months[2]}
										heading={text.prelude.headings[2]}
										textHeading={text.prelude.textHeadings[2]}
									/>
									<LandingMenuTab
										imgSrc={prelude2}
										month={text.prelude.months[3]}
										heading={text.prelude.headings[3]}
										textHeading={text.prelude.textHeadings[3]}
									/>
									<LandingMenuTab
										imgSrc={prelude1}
										month={text.prelude.months[4]}
										heading={text.prelude.headings[4]}
										textHeading={text.prelude.textHeadings[4]}
									/>
									<LandingMenuTab
										imgSrc={prelude2}
										month={text.prelude.months[5]}
										heading={text.prelude.headings[5]}
										textHeading={text.prelude.textHeadings[5]}
									/>
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
									<LandingMenuTab
										imgSrc={perano1}
										month={text.perano.months[0]}
										heading={text.perano.headings[0]}
										textHeading={text.perano.textHeadings[0]}
									/>
									<LandingMenuTab
										imgSrc={perano2}
										month={text.perano.months[1]}
										heading={text.perano.headings[1]}
										textHeading={text.perano.textHeadings[1]}
									/>
									<LandingMenuTab
										imgSrc={perano3}
										month={text.perano.months[2]}
										heading={text.perano.headings[2]}
										textHeading={text.perano.textHeadings[2]}
									/>
									<LandingMenuTab
										imgSrc={perano4}
										month={text.perano.months[3]}
										heading={text.perano.headings[3]}
										textHeading={text.perano.textHeadings[3]}
									/>
									<LandingMenuTab
										imgSrc={perano1}
										month={text.perano.months[4]}
										heading={text.perano.headings[4]}
										textHeading={text.perano.textHeadings[4]}
									/>
									<LandingMenuTab
										imgSrc={perano2}
										month={text.perano.months[5]}
										heading={text.perano.headings[5]}
										textHeading={text.perano.textHeadings[5]}
									/>
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
									<LandingMenuTab
										imgSrc={frost1}
										month={text.frost.months[0]}
										heading={text.frost.headings[0]}
										textHeading={text.frost.textHeadings[0]}
									/>
									<LandingMenuTab
										imgSrc={frost2}
										month={text.frost.months[1]}
										heading={text.frost.headings[1]}
										textHeading={text.frost.textHeadings[1]}
									/>
									<LandingMenuTab
										imgSrc={frost3}
										month={text.frost.months[2]}
										heading={text.frost.headings[2]}
										textHeading={text.frost.textHeadings[2]}
									/>
									<LandingMenuTab
										imgSrc={frost4}
										month={text.frost.months[3]}
										heading={text.frost.headings[3]}
										textHeading={text.frost.textHeadings[3]}
									/>
									<LandingMenuTab
										imgSrc={frost5}
										month={text.frost.months[4]}
										heading={text.frost.headings[4]}
										textHeading={text.frost.textHeadings[4]}
									/>
									<LandingMenuTab
										imgSrc={frost1}
										month={text.frost.months[5]}
										heading={text.frost.headings[5]}
										textHeading={text.frost.textHeadings[5]}
									/>
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
									<LandingMenuTab
										imgSrc={moccasin1}
										month={text.moccasin.months[0]}
										heading={text.moccasin.headings[0]}
										textHeading={text.moccasin.textHeadings[0]}
									/>
									<LandingMenuTab
										imgSrc={moccasin2}
										month={text.moccasin.months[1]}
										heading={text.moccasin.headings[1]}
										textHeading={text.moccasin.textHeadings[1]}
									/>
									<LandingMenuTab
										imgSrc={moccasin3}
										month={text.moccasin.months[2]}
										heading={text.moccasin.headings[2]}
										textHeading={text.moccasin.textHeadings[2]}
									/>
									<LandingMenuTab
										imgSrc={moccasin4}
										month={text.moccasin.months[3]}
										heading={text.moccasin.headings[3]}
										textHeading={text.moccasin.textHeadings[3]}
									/>
									<LandingMenuTab
										imgSrc={moccasin2}
										month={text.moccasin.months[4]}
										heading={text.moccasin.headings[4]}
										textHeading={text.moccasin.textHeadings[4]}
									/>
									<LandingMenuTab
										imgSrc={moccasin3}
										month={text.moccasin.months[5]}
										heading={text.moccasin.headings[5]}
										textHeading={text.moccasin.textHeadings[5]}
									/>
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
									<LandingMenuTab
										imgSrc={tomato1}
										month={text.tomato.months[0]}
										heading={text.tomato.headings[0]}
										textHeading={text.tomato.textHeadings[0]}
									/>
									<LandingMenuTab
										imgSrc={tomato2}
										month={text.tomato.months[1]}
										heading={text.tomato.headings[1]}
										textHeading={text.tomato.textHeadings[1]}
									/>
									<LandingMenuTab
										imgSrc={tomato3}
										month={text.tomato.months[2]}
										heading={text.tomato.headings[2]}
										textHeading={text.tomato.textHeadings[2]}
									/>
									<LandingMenuTab
										imgSrc={tomato1}
										month={text.tomato.months[3]}
										heading={text.tomato.headings[3]}
										textHeading={text.tomato.textHeadings[3]}
									/>
									<LandingMenuTab
										imgSrc={tomato2}
										month={text.tomato.months[4]}
										heading={text.tomato.headings[4]}
										textHeading={text.tomato.textHeadings[4]}
									/>
									<LandingMenuTab
										imgSrc={tomato3}
										month={text.tomato.months[5]}
										heading={text.tomato.headings[5]}
										textHeading={text.tomato.textHeadings[5]}
									/>
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
