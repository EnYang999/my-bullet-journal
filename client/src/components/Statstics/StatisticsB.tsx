import ReactECharts from "echarts-for-react";

const StatisticsB = () => {
	// Past month trend -> data is to fill
	const option = {
		xAxis: {
			type: "category",
			show: false,
			data: ["Week 4", "Week 5", "Week 6", "Week 7"],
		},
		yAxis: {
			type: "value",
			show: false,
		},
		series: [
			{
				type: "line",
				data: [20, 40, 100, 120],
				smooth: true,
				lineStyle: {
					width: 3,
				},
				areaStyle: {
					color: {
						type: "linear",
						x: 1,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: "#5AB2FF", // Gradient color start
							},
							{
								offset: 1,
								color: "rgba(255, 255, 255, 0)", // Gradient color end with transparency // Gradient color end
							},
						],
					},
				},
			},
		],
		tooltip: {
			trigger: "axis",
			formatter: "{b0} : {c0}",
		},
		grid: {
			bottom: "2%",
			top: "2%",
			right: "10px",
			left: "10px",
		},
	};

	return (
		<div className='card h-md-100'>
			<div className='card-header pb-0'>
				<h6 className='mb-0 mt-2'>Total Order</h6>
			</div>
			<div className='card-body d-flex flex-column justify-content-end'>
				<div className='row justify-content-between'>
					<div className='col-auto align-self-end'>
						<div className='fs-5 fw-normal font-sans-serif text-700 lh-1 mb-1'>
							58.4K
						</div>
						<span className='badge rounded-pill fs-11 bg-200'>
							<span className='fas fa-caret-up me-1'></span>13.6%
						</span>
					</div>
					<div className='col-auto ps-0 mt-n4'>
						<ReactECharts
							option={option}
							style={{
								height: "75%",
								width: "100%",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatisticsB;
