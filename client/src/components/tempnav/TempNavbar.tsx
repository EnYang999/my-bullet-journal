import "./TempNavbar.css";
const TempNavbar = () => {
	return (
		<nav className='navbar navbar-dark navbar-expand-lg navbar-togglable fixed-top'>
			<div className='container'>
				{/*  {/* <!--Navbar brand (mobile)  --> */}
				<a className='navbar-brand d-lg-none' href='./index.html'>
					Bullet Journal
				</a>

				{/*  {/* <!--Navbar toggler  --> */}
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarCollapse'
					aria-controls='navbarCollapse'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				{/*  <!--Navbar collaps --> */}
				<div className='collapse navbar-collapse' id='navbarCollapse'>
					{/* <!--Navbar nav  --> */}
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link ' href='./about-us.html'>
								About Us
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href='./menu.html'>
								Menu
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href='./reservation.html'>
								Reservation
							</a>
						</li>
					</ul>

					{/* <!--Navbar brand  --> */}
					<a
						className='navbar-brand d-none d-lg-flex mx-lg-auto'
						href='./index.html'
					>
						Bullet Journal
					</a>

					{/* <!--Navbar nav  --> */}
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link ' href='./news-and-events.html'>
								News & Events
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href='./gallery.html'>
								Gallery
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href='./contact-us.html'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default TempNavbar;
