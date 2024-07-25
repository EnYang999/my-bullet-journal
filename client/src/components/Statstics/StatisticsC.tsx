import ReactECharts from "echarts-for-react";
type Brand = {
	color: string;
	name: string;
	percentage: string;
	value: number;
};

type BrandItemProps = {
	color: string;
	name: string;
	percentage: string;
};
const StatisticsC = () => {
	// Throughout history : monday, tuesday, wednesday, thursday, friday, weekend occupy

	const BrandItem: React.FC<BrandItemProps> = ({ color, name, percentage }) => (
		<div className='d-flex flex-between-center mb-1'>
			<div className='d-flex align-items-center'>
				<span className={`dot`} style={{ backgroundColor: `${color}` }}></span>
				<span className='fw-semi-bold'>{name}</span>
			</div>
			<div className='d-xxl-none'>{percentage}</div>
		</div>
	);

	const brandData: Brand[] = [
		{ color: "#CDFADB", name: "Monday", percentage: "33%", value: 33 },
		{ color: "#F6FDC3", name: "Tuesday", percentage: "29%", value: 29 },
		{ color: "#F6E9B2", name: "Wednesday", percentage: "20%", value: 20 },
		{ color: "#FFCF96", name: "Thursday", percentage: "20%", value: 40 },
		{ color: "#FF8080", name: "Friday", percentage: "29%", value: 29 },
		{ color: "#7ABA78", name: "Weekend", percentage: "20%", value: 20 },
	];
	const option = {
		tooltip: {
			trigger: "item",
		},
		legend: {
			top: "5%",
			left: "center",
			show: false, // Hide the legend
		},
		series: [
			{
				name: "Day From",
				type: "pie",
				radius: ["40%", "70%"],
				avoidLabelOverlap: false,

				itemStyle: {
					borderRadius: 10,
				},
				label: {
					show: false,
					position: "center", // Uncomment if you need centered labels
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 10,
						fontWeight: "bold",
					},
				},
				labelLine: {
					show: false,
				},
				data: brandData.map((brand) => ({
					value: brand.value,
					name: brand.name,
					itemStyle: { color: brand.color },
				})),
			},
		],
	};
	return (
		<div className='card h-md-100'>
			<div className='card-header pb-0'>
				<h6 className='mt-1'>Day's To Do</h6>
			</div>
			<div className='card-body d-flex flex-column justify-content-end'>
				<div className='row h-100 justify-content-between g-0'>
					<div className='col-5 col-sm-6 col-xxl pe-2'>
						<div className='fs-11 mt-3'>
							{brandData.map((brand, index) => (
								<BrandItem key={index} {...brand} />
							))}
						</div>
					</div>
					<div className='col-auto position-relative justify-content-center align-items-center'>
						<div
							className='echart-market-share justify-content-center align-items-center'
							style={{
								userSelect: "none",
								WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
								position: "relative",
								height: "120%",
							}}
						>
							<ReactECharts
								option={option}
								style={{
									height: "90%",
									width: "100%",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatisticsC;
