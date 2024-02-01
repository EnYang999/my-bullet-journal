import img55 from "../../assets/about/55.jpg";
import img56 from "../../assets/about/56.jpg";
import img47 from "../../assets/about/47.jpg";
import img16 from "../../assets/about/16.jpg";
import img18 from "../../assets/about/18.jpg";
import img17 from "../../assets/about/17.jpg";
import FullPageHero from "./fullpagehero";
import img54 from "../../assets/about/54.jpg";
import React, { useEffect, useRef, useState } from "react";
import FullPageAbout1 from "./fullpageabout1";
import FullPageAbout2 from "./fullpageabout2";
import FullPagePromo from "./fullpagepromo";

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
				console.log(name);
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
			className={`fp-responsive`}
			style={{ overflow: "visible", height: "initial" }}
		>
			<main
				className='fp-wrapper fullpage-wrapper'
				style={{
					height: "100%",
					position: "relative",
					transition: "all 700ms cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s",
					transform:
						activeSection === "hero"
							? "translate3d(0px, 0px, 0px)"
							: activeSection === "about1"
							? "translate3d(0px, -678px, 0px)"
							: activeSection === "about2"
							? "translate3d(0px,-1357px, 0px)"
							: activeSection === "promo"
							? "translate3d(0px, -2035px, 0px)"
							: "",
				}}
			>
				<FullPageHero
					heroRef={heroRef}
					about1Ref={about1Ref}
					about2Ref={about2Ref}
					promoRef={promoRef}
					activeSection={activeSection}
				/>
				<hr />
				{/* ABOUT */}
				<FullPageAbout1
					heroRef={heroRef}
					about1Ref={about1Ref}
					about2Ref={about2Ref}
					promoRef={promoRef}
					activeSection={activeSection}
				/>
				<hr />
				{/* ABOUT */}
				<FullPageAbout2
					heroRef={heroRef}
					about1Ref={about1Ref}
					about2Ref={about2Ref}
					promoRef={promoRef}
					activeSection={activeSection}
				/>
				<hr />
				{/* PROMO */}
				{/* <FullPagePromo
					heroRef={heroRef}
					about1Ref={about1Ref}
					about2Ref={about2Ref}
					promoRef={promoRef}
					activeSection={activeSection}
				/> */}
			</main>
		</div>
	);
};

export default FullPage;
