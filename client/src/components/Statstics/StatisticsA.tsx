import ReactECharts from "echarts-for-react";

const StatisticsA = () => {
	// Past seven days -> data is the number of to_do  (filling data and description != '')
	const option = {
		xAxis: {
			type: "category",
			show: false,
		},
		yAxis: {
			type: "value",
			show: false,
		},
		series: [
			{
				data: [120, 200, 150, 80, 70, 110, 130],
				type: "bar",
				showBackground: true,
				barCategoryGap: "70%",
				height: "auto",
				backgroundStyle: {
					color: "rgba(180, 180, 180, 0.2)",
					borderRadius: [50, 50, 50, 50],
				},
				itemStyle: {
					borderRadius: [50, 50, 50, 50],
				},
			},
		],
	};

	return (
		<div className='col-md-6 col-xxl-3'>
			<div className='card h-md-100 ecommerce-card-min-width'>
				<div className='card-header pb-0'>
					<h6 className='mb-0 mt-2 d-flex align-items-center'>
						7-days Todos
						<span
							className='ms-1 text-400'
							data-bs-toggle='tooltip'
							data-bs-placement='top'
							aria-label="Calculated according to last week's sales"
							data-bs-original-title="Calculated according to last week's sales"
						>
							<span
								className='far fa-question-circle'
								data-fa-transform='shrink-1'
							></span>
						</span>
					</h6>
				</div>
				<div className='card-body d-flex flex-column justify-content-end'>
					<div className='row'>
						<div className='col'>
							<p className='font-sans-serif lh-1 mb-1 fs-5'>$47K</p>
							<span className='badge badge-subtle-success rounded-pill fs-11'>
								+3.5%
							</span>
						</div>
						<div className='col-auto ps-0'>
							<div className='echart-bar-weekly-sales'>
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
			</div>
		</div>
	);
};

export default StatisticsA;
