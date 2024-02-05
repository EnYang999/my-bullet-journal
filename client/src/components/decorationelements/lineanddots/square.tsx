interface Props {
	backgroundColor?: string;
}
const Square = ({ backgroundColor = "#6E8061" }: Props) => {
	return (
		<div className='d-flex'>
			<div
				className='m-1'
				style={{
					width: "1.8rem",
					height: "1.8rem",
					borderRadius: "0.2rem",
					backgroundColor: backgroundColor,
				}}
			></div>
		</div>
	);
};

export default Square;
