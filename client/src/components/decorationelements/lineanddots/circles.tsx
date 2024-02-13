import React from "react";

interface Props {
	numElements?: number;
	rot?: number;
	circleSize?: string;
	radius?: number;
	container_style?: React.CSSProperties;
	cus_container_style?: React.CSSProperties;
	cus_circle_style?: React.CSSProperties;
}

const Circles: React.FC<Props> = ({
	numElements = 8,
	rot = 0,
	circleSize = "6px",
	radius = 20,
	container_style = {
		// left: "50%",
		// top: "50%",
		// width: radius,
		// height: radius,
		// border: "1px solid #eee",
		// transform: "translate(-50%, -50%)",
		// borderRadius: "50%",
	},
	cus_circle_style = {
		background: "#6DB9EF",
	},
	cus_container_style,
}) => {
	let circles = [];
	const angle = 360 / numElements;
	let currentRot = rot;
	for (let i = 1; i <= numElements; i++) {
		let circle_style: React.CSSProperties = {
			width: circleSize,
			height: circleSize,
			borderRadius: "50%",
			// top: " 50%",
			// left: "50%",
			margin: `-${parseInt(circleSize) / 2}px`,
			transform: `rotate(${currentRot}deg)  translate(${
				radius / 2
			}px) rotate(${-currentRot}deg)`,
			...cus_circle_style,
		};
		circles.push(
			<div key={i} className='circle-dot' style={circle_style}></div>
		);
		currentRot += angle;
	}

	return (
		<div
			className='circle-container'
			style={{ ...container_style, ...cus_container_style }}
		>
			{circles}
		</div>
	);
};

export default Circles;
