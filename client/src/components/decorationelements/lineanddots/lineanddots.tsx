const LineDots = () => {
	return (
		<div className='container d-flex align-items-center mt-3'>
			<div className='dots-container d-flex'>
				<div
					className='dot'
					style={{
						width: "10px",
						height: "10px",
						backgroundColor: "#6E8061",
						borderRadius: "50%",
						margin: "0 5px",
					}}
				></div>
				<div
					className='dot'
					style={{
						width: "10px",
						height: "10px",
						backgroundColor: "#6E8061",
						borderRadius: "50%",
						margin: "0 5px",
					}}
				></div>
				<div
					className='dot'
					style={{
						width: "10px",
						height: "10px",
						backgroundColor: "#6E8061",
						borderRadius: "50%",
						margin: "0 5px",
					}}
				></div>
			</div>
			<div
				className='long-line ms-2 w-50'
				style={{
					height: "2px",
					backgroundColor: "#6E8061",
				}}
			></div>
		</div>
	);
};

export default LineDots;
