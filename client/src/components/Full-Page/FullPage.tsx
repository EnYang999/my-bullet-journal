import FullPageHero from "./fullpagehero";
import React, { useEffect, useRef, useState } from "react";
import FullPageAbout1 from "./fullpageabout1";
import FullPageAbout2 from "./fullpageabout2";
import FullPageAbout3 from "./fullpageabout3";
import LandingNavbar from "../landingsection/LandingNavbar";
import LandingFooter from "../landingsection/LandingFooter";
const FullPage = () => {
	const heroRef = useRef(null);
	const about1Ref = useRef(null);
	const about2Ref = useRef(null);
	const promoRef = useRef(null);
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const observeElement = (
			elementRef: React.RefObject<HTMLDivElement>,
			name: string
		) => {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(name);
					}
				});
				// console.log(name);
			});

			if (elementRef.current) {
				observer.observe(elementRef.current);
			}

			return () => {
				observer.disconnect();
			};
		};

		const cleanupFunctions = [
			observeElement(heroRef, "hero"),
			observeElement(about1Ref, "about1"),
			observeElement(about2Ref, "about2"),
			observeElement(promoRef, "promo"),
		];

		return () => {
			cleanupFunctions.forEach((cleanup) => cleanup());
		};
	}, [heroRef, about1Ref, about2Ref, promoRef]);

	return (
		<div
			className={`fp-responsive aboutme`}
			style={{ overflow: "visible", height: "initial" }}
		>
			<LandingNavbar />
			<main className='fp-wrapper fullpage-wrapper'>
				<FullPageHero
					heroRef={heroRef}
					about1Ref={about1Ref}
					about2Ref={about2Ref}
					promoRef={promoRef}
					activeSection={activeSection}
				/>
				{/* <hr /> */}
				{/* ABOUT */}
				<FullPageAbout1
					heroRef={heroRef}
					about1Ref={about1Ref}
					about2Ref={about2Ref}
					promoRef={promoRef}
					activeSection={activeSection}
				/>
				{/* <hr /> */}
				{/* ABOUT */}
				<FullPageAbout2
					heroRef={heroRef}
					about1Ref={about1Ref}
					about2Ref={about2Ref}
					promoRef={promoRef}
					activeSection={activeSection}
				/>
				{/* <hr /> */}
				{/* PROMO */}
				{/* <FullPagePromo
					heroRef={heroRef}
					about1Ref={about1Ref}
					about2Ref={about2Ref}
					promoRef={promoRef}
					activeSection={activeSection}
				/> */}
				<FullPageAbout3 />
			</main>
			<LandingFooter />
		</div>
	);
};

export default FullPage;
