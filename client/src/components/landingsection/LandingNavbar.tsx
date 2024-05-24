import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { APP_AUTHENTICATE_TOKEN_NAME } from "../../../../common/constants";
interface User {
	id: string;
	username: string;
	_id: string;
}
const LandingNavbar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [showCollapse, setShowCollapse] = useState(false);
	const cookies = new Cookies();
	const [user, setUser] = useState<User | null>(null);
	const [currentCookie, setCurrentCookie] = useState<string | null>(null);
	let jwtCookie = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);
	console.log(APP_AUTHENTICATE_TOKEN_NAME);

	console.log(jwtCookie);
	useEffect(() => {
		let jwtCookie = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);
		console.log(APP_AUTHENTICATE_TOKEN_NAME);

		console.log(jwtCookie);

		if (jwtCookie && jwtCookie !== currentCookie) {
			setCurrentCookie(jwtCookie);

			const decodedToken: User = jwtDecode(jwtCookie);
			console.log(decodedToken);
			// console.log(decodedToken);
			setUser((prevUser) => {
				if (!prevUser) {
					return decodedToken;
				}
				return prevUser;
			});
		}
	}, [cookies, currentCookie, setUser]);
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
							<a className='nav-link ' href='./about-us'>
								About Us
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href='./month-planner'>
								Planner
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href='./habits'>
								Tracker
							</a>
						</li>
					</ul>

					{/* <!--Navbar brand  --> */}
					<a
						className='navbar-brand d-none d-lg-flex mx-lg-auto'
						href='./index'
					>
						Bullet Journal
					</a>

					{/* <!--Navbar nav  --> */}
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link ' href='./themes'>
								Themes
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href='./profile'>
								{user ? user.username : "Profile"}
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href={user ? "./logout" : "./login"}>
								{user ? "Log Out" : "Log In"}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default LandingNavbar;
