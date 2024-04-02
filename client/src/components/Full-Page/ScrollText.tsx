import React from "react";

interface ScrollTextProps {
	texts: string[];
	direction?: string;
}

const ScrollText: React.FC<ScrollTextProps> = ({
	texts,
	direction = "left",
}) => {
	return (
		<div
			className='scroll-text-container d-flex justify-content-center'
			data-animated='true'
			data-direction={direction}
			style={{ backgroundColor: "#D6DEE7", overflow: "hidden" }}
		>
			{texts.map((text, index) => (
				<div
					key={index}
					className={`scroll-text d-inline-block px-2 mx-1`}
					style={{ backgroundColor: "#DBE2EB" }}
				>
					{text}
				</div>
			))}
		</div>
	);
};

export default ScrollText;
