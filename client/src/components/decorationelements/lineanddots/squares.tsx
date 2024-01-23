const FourSquares = () => {
	const squareStyles = [
		{ backgroundColor: "#727E66" },
		{ backgroundColor: "#5A7642" },
		{ backgroundColor: "#889480" },
		{ backgroundColor: "#C0C9BA" },
		{ backgroundColor: "#DEE1DD" },
	];

	return (
		<div className='d-flex justify-content-center'>
			{squareStyles.map((style, index) => (
				<div
					className='m-1'
					key={index}
					style={{
						width: "1.8rem",
						height: "1.8rem",
						borderRadius: "0.2rem",
						...style,
					}}
				></div>
			))}
		</div>
	);
};

export default FourSquares;
