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
import { useInView } from "react-intersection-observer";
const FullPage = () => {
	const sections = ["hero", "about-1", "about-2", "promo"];
	const [activeSection, setActiveSection] = useState<string>("hero");
	// const { ref, inView } = useInView();
	const mainRef = useRef();
	const sectionRefs = sections.reduce((acc, section) => {
		acc[section] = useRef<HTMLDivElement>(null);
		return acc;
	}, {} as Record<string, React.RefObject<HTMLDivElement>>);

	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			const anchor = entry.target.getAttribute("data-anchor");
			if (entry.isIntersecting && anchor !== null) {
				setActiveSection(anchor);
			}
		});
	};

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5,
		};

		const observer = new IntersectionObserver(handleIntersection, options);

		sections.forEach((section) => {
			if (sectionRefs[section].current) {
				observer.observe(sectionRefs[section].current!);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, [sectionRefs]);

	return (
		<div
			className={`fp-viewing-${activeSection} fp-responsive`}
			style={{ overflow: "visible", height: "initial" }}
		>
			<main
				className='fp-wrapper fullpage-wrapper'
				style={{
					height: "100%",
					position: "relative",
					transition: "all 700ms cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s",
				}}
			>
				<FullPageHero />
				{/* ABOUT */}
				<FullPageAbout1 />
				{/* ABOUT */}
				<FullPageAbout2 />
				{/* PROMO */}
				<FullPagePromo />
			</main>
		</div>
	);
};

export default FullPage;
