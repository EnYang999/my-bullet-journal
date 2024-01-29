interface Props {
	month: string;
	color: string;
}
const Index = ({ month, color }: Props) => {
	const month_color: { [key: string]: string } = {
		"01": "#6DABC5",
		"02": "#D8E3EB",
		"03": "#6566AE",
		"04": "#9FB8A2",
		"05": "#A5CC8D",
		"06": "#969BB7",
		"07": "#9197BB",
		"08": "#0077BB",
		"09": "#9CCDF0",
		"10": "#37658A",
		"11": "#DFDED7",
		"12": "#E9AE6A",
	};
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
