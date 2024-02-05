interface Props {
	lineLeft: boolean;
	backgroundColor?: string;
}

const LineDots = ({ lineLeft, backgroundColor = "#6E8061" }: Props) => {
	const dotsContainer = (
		<div className='dots-container d-flex'>
			{[...Array(3)].map((_, index) => (
				<div
					key={index}
					className='dot'
					style={{
						width: "10px",
						height: "10px",
						backgroundColor: backgroundColor,
						borderRadius: "50%",
						margin: "0 5px",
					}}
				></div>
			))}
		</div>
	);

	return (
		<div className='container d-flex align-items-center'>
			{lineLeft ? dotsContainer : null}
			<div
				className='long-line mx-2'
				style={{
					height: "2px",
					width: "300px",
					backgroundColor: backgroundColor,
				}}
			></div>
			{lineLeft ? null : dotsContainer}
		</div>
	);
};

export default LineDots;
