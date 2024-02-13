interface Props {
	cusStyle?: React.CSSProperties;
	cusName?: string;
}
const BlueEllip = ({ cusStyle, cusName }: Props) => {
	return (
		<svg
			id='Layer_2'
			data-name='Layer 2'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 2134.72 1570.1'
			style={cusStyle}
			className={cusName}
		>
			<defs>
				<linearGradient
					id='Water_5'
					data-name='Water 5'
					x1='2030.76'
					y1='1197.72'
					x2='2779.61'
					y2='1197.72'
					gradientTransform='translate(3771.88 546.65) rotate(151.57)'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0' stopColor='#c1e0ef' />
					<stop offset='.5' stopColor='#9bd0e8' />
					<stop offset='.76' stopColor='#8ccae5' />
					<stop offset='1' stopColor='#86c8e4' />
				</linearGradient>
			</defs>
			<path
				className='cls-1'
				d='M741.16,745.14c-4.25-90.5,57.29-159.31,74.32-178.37,64.7-72.36,108.92-49.36,185.72-123.97,77.31-75.11,59.88-125.01,119.42-151.28,73.37-32.37,169.92,12.48,224.08,63.62,58.15,54.91,74.03,123.3,78.72,154.03,21.55,141.17-76.21,253.06-109.34,290.97-21.45,24.55-206.34,230.35-396.31,163.08-85.88-30.41-171.83-116.3-176.61-218.08Z'
				fill='url(#Water_5)'
				strokeWidth='0px'
			/>
		</svg>
	);
};

export default BlueEllip;
