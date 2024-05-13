import "./tutorial.scss";
import { useEffect, useRef } from "react";
import { arrow, useFloating, flip, offset, shift } from "@floating-ui/react";
import { placements } from "@popperjs/core";
interface ArrowData {
	x?: number;
	y?: number;
	centerOffset: number;
}
const Tutorial = () => {
	const arrowRef = useRef(null);
	const { refs, floatingStyles, middlewareData } = useFloating({
		placement: "bottom",

		middleware: [
			flip(),
			offset(6),
			shift({ padding: 5 }),
			arrow({
				element: arrowRef,
				padding: 5,
			}),
		],
	});

	return (
		<>
			<input ref={refs.setReference} id={"my-password"} />
			<label htmlFor={"my-password"} />
			<div
				id='tooltip'
				role='tooltip'
				ref={refs.setFloating}
				style={floatingStyles}
			>
				My floating element
				<div
					id='arrow'
					ref={arrowRef}
					style={{
						position: "absolute",
						left: middlewareData.arrow?.x,
						top: middlewareData.arrow?.y,
					}}
				></div>
			</div>
		</>
	);
};

export default Tutorial;
