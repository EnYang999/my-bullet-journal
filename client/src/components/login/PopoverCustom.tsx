import React, { useState, useRef, useMemo, useEffect } from "react";
import {
	useFloating,
	offset,
	flip,
	shift,
	arrow as floatingArrow,
} from "@floating-ui/react-dom";

interface PopoverProps {
	children: React.ReactNode;
	isValid?: boolean;
}

const Popover: React.FC<PopoverProps> = ({ children, isValid }) => {
	const [open, setOpen] = useState(false);
	const arrowRef = useRef<HTMLDivElement>(null);
	const { x, y, refs, strategy, middlewareData, update } = useFloating({
		placement: "bottom",
		middleware: [
			offset(10),
			flip(),
			shift(),
			floatingArrow({ element: arrowRef.current }),
		],
	});

	useEffect(() => {
		if (open) {
			update();
		}
	}, [open, update]);

	const containerClasses = useMemo(
		() =>
			`popover-container ${
				isValid === true
					? "popover-valid"
					: isValid === false
					? "popover-invalid"
					: ""
			}`,
		[isValid]
	);

	return (
		<>
			{/* Updated to use the spread operator for setting the ref and props*/}
			<div {...refs.reference} onClick={() => setOpen((prev) => !prev)}>
				Reference Element
			</div>
			{open && (
				<div
					{...refs.floating} // Updated to use the spread operator for setting the ref and props
					style={{
						position: strategy,
						top: y ?? "",
						left: x ?? "",
					}}
					className={containerClasses}
				>
					{children}
					<div
						ref={arrowRef}
						className='popover-arrow'
						style={{
							position: "absolute",
							left:
								middlewareData.arrow?.x != null
									? `${middlewareData.arrow.x}px`
									: "",
							top:
								middlewareData.arrow?.y != null
									? `${middlewareData.arrow.y}px`
									: "",
						}}
					/>
				</div>
			)}
		</>
	);
};

export default Popover;
