import React from "react";

interface ScrollTextProps {
	texts: string[];
	direction?: string;
	angle?: string;
}

const ScrollText: React.FC<ScrollTextProps> = ({
	texts,
	angle = "true",
	direction = "left",
}) => {
	return (
		<div
			className='scroll-text-container d-flex justify-content-center align-items-center zindex-sticky'
			data-animated='true'
			data-angle={angle}
			data-direction={direction}
			style={{ backgroundColor: "#FFC94A", overflow: "hidden" }}
		>
			{texts.map((text, index) => (
				<div
					key={index}
					className={`scroll-text d-inline-block px-2 mx-1`}
					style={{ backgroundColor: "rgba(255, 235, 178, 0.4)" }}
				>
					{text}
				</div>
			))}
		</div>
	);
};

export default ScrollText;
