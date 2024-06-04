import ReactECharts from "echarts-for-react";

const StatisticsA = () => {
	const option = {
		xAxis: {
			type: "category",
			splitLine: { show: false },
			axisLine: { show: false },
			axisTick: { show: false },
			axisLabel: { show: false },
		},
		yAxis: {
			type: "value",
			splitLine: { show: false },
			axisLine: { show: false },
			axisTick: { show: false },
			axisLabel: { show: false },
		},
		series: [
			{
				data: [120, 200, 150, 80, 70, 110, 130],
				type: "bar",
				showBackground: true,
				barCategoryGap: "50%",
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
						Weekly Sales
						<span
							className='ms-1 text-400'
							data-bs-toggle='tooltip'
							data-bs-placement='top'
							aria-label="Calculated according to last week's sales"
							data-bs-original-title="Calculated according to last week's sales"
						>
							<svg
								className='svg-inline--fa fa-question-circle fa-w-16'
								data-fa-transform='shrink-1'
								aria-hidden='true'
								focusable='false'
								data-prefix='far'
								data-icon='question-circle'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
								data-fa-i2svg=''
								style={{ transformOrigin: "0.5em 0.5em" }}
							>
								<g transform='translate(256 256)'>
									<g transform='translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)'>
										<path
											fill='currentColor'
											d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z'
											transform='translate(-256 -256)'
										></path>
									</g>
								</g>
							</svg>
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
							<div
								className='echart-bar-weekly-sales '
								style={{
									userSelect: "none",
									WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
									position: "relative",
								}}
							>
								<ReactECharts option={option} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatisticsA;
