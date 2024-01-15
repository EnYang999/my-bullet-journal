import { useState, useEffect } from "react";
const LandingNavbar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [showCollapse, setShowCollapse] = useState(false);
	const handleScroll = () => {
		const currentScrollPos = window.scrollY;
		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 70) ||
				(prevScrollPos < currentScrollPos &&
					currentScrollPos - prevScrollPos > 70)
		);

		setPrevScrollPos(currentScrollPos);
	};
	const handleNavClick = () => {
		if (showCollapse) {
			setShowCollapse(false);
			setVisible(false);
		} else {
			setShowCollapse(true);
			setVisible(true);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`navbar ${
				visible ? "navbar-light" : "navbar-dark"
			} navbar-expand-lg navbar-togglable fixed-top`}
		>
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
					aria-expanded={showCollapse ? "true" : "false"}
					aria-label='Toggle navigation'
					onClick={handleNavClick}
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				{/*  <!--Navbar collaps --> */}
				<div
					className={`collapse navbar-collapse ${showCollapse ? "show" : ""}`}
					id='navbarCollapse'
				>
					{/* <!--Navbar nav  --> */}
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link ' href='./about-us.html'>
								About Us
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href='./month-planner.html'>
								Monthly Planner
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href='./habits.html'>
								Habits Tracker
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
							<a className='nav-link ' href='./themes.html'>
								Themes
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href='./gallery.html'>
								Gallery
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href='./login.html'>
								Log In
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default LandingNavbar;
