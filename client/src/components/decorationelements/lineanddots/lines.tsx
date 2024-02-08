interface Props {
	isVertical?: boolean;
	squareStyles?: React.CSSProperties[];
	linesStyle?: React.CSSProperties;
	lineStyle?: React.CSSProperties;
}
const FourLines = ({
	isVertical = false,
	squareStyles = [
		{ backgroundColor: "#cccdd4" },
		{ backgroundColor: "#ddcdb5" },
		{ backgroundColor: "#c1c5da" },
		{ backgroundColor: "#8e99b9" },
	],
	lineStyle,
	linesStyle,
}: Props) => {
	return (
		<div
			className={`d-flex justify-content-center ${
				isVertical ? "flex-column" : ""
			}`}
			style={linesStyle}
		>
			{squareStyles.map((style, index) => (
				<div
					key={index}
					style={{
						width: "100%",
						height: "20px",
						...style,
						...lineStyle,
					}}
				></div>
			))}
		</div>
	);
};

export default FourLines;
