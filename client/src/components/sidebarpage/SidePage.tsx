import "./SidePage.css";
const SidePage = () => {
	return (
		<div className='pagination-container'>
			<div className='pagination-overlap'>
				<ul>
					<li className='active'>
						<a href='#'>
							<span className='month-cap'>J</span>
							<span className='month-name'>an</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='month-cap'>F</span>
							<span className='month-name'>eb</span>
						</a>
					</li>
					<li className='active'>
						<a href='#'>
							<span className='month-cap'>M</span>
							<span className='month-name'>ar</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='month-cap'>A</span>
							<span className='month-name'>pr</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='month-cap'>M</span>
							<span className='month-name'>ay</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='month-cap'>J</span>
							<span className='month-name'>un</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='month-cap'>J</span>
							<span className='month-name'>ul</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='month-cap'>A</span>
							<span className='month-name'>ug</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='month-cap'>S</span>
							<span className='month-name'>ep</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='month-cap'>O</span>
							<span className='month-name'>ct</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='month-cap'>N</span>
							<span className='month-name'>ov</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='month-cap'>D</span>
							<span className='month-name'>ec</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SidePage;
