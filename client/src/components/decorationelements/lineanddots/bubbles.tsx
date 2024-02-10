// DonutBubble.tsx
import React from "react";
import { Circle, Group, Layer, Stage } from "react-konva";

const DonutBubble: React.FC = () => {
	const radius = 50;
	const holeRadius = 20;

	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<Layer>
				<Group x={window.innerWidth / 2} y={window.innerHeight / 2}>
					<Circle
						radius={radius}
						fill='#00ccff'
						stroke='#0099cc'
						strokeWidth={4}
					/>
					<Circle
						radius={holeRadius}
						fill='#ffffff'
						stroke='#cccccc'
						strokeWidth={2}
					/>
				</Group>
			</Layer>
		</Stage>
	);
};

export default DonutBubble;
