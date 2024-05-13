import { useRef, useEffect } from "react";
import "./tutorial.scss";
import { computePosition } from "@floating-ui/dom";
const Tutorial = () => {
	const buttonRef = useRef(null);
	const tooltipRef = useRef(null);

	useEffect(() => {
		const button = buttonRef.current;
		const tooltip = tooltipRef.current;
		if (button && tooltip) {
			computePosition(button, tooltip).then(({ x, y }) => {
				if (tooltip) {
					Object.assign(tooltip.style, {
						left: `${x}px`,
						top: `${y}px`,
					});
				}
			});
		}
		// This effect should run once on mount, hence the empty dependency array
	}, []);
	return (
		<>
			<button id='button' aria-describedby='tooltip' ref={buttonRef}>
				My reference element
			</button>
			<div id='tooltip' role='tooltip' ref={tooltipRef}>
				My floating element
			</div>
		</>
	);
};

export default Tutorial;
