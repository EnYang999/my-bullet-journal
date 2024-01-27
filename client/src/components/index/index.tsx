interface Props {
	month: string;
	color: string;
}
const Index = ({ month, color }: Props) => {
	return (
		<>
			<div
				className='d-flex position-absolute'
				style={{ left: "0.5%", bottom: "5%" }}
			></div>
			<div className='row outer-row'>
				<div className='col-lg-9 h-100'>
					<div className='row inner-row h-100'></div>
				</div>
				<div className='col-lg-3 text-center d-flex align-items-center'>
					<div className='d-flex flex-column'>
						<p
							style={{
								fontFamily: "Josefin Slab",
								fontSize: "5rem",
								marginBottom: 0,
								color: color,
							}}
						>
							{month}.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
