import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import {
	API_ENDPOINT,
	APP_BACKEND_PORT,
	APP_USER_API,
	APP_AUTHENTICATE_TOKEN_NAME,
	APP_PROFILE_API,
} from "../../../../common/constants";
import { toast } from "../errortoast/ErrorToastManager";
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
	const navigate = useNavigate();
	const [user, setUser] = useState<User | null>(null);
	const [currentCookie, setCurrentCookie] = useState<string | null>(null);
	let bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);
	const handleLogout = async () => {
		cookies.remove(bearToken);
		try {
			const response = await axios.get(
				`${API_ENDPOINT}${APP_BACKEND_PORT}${APP_USER_API}/logout`,
				{ withCredentials: true }
			);
			console.log(`${API_ENDPOINT}${APP_BACKEND_PORT}${APP_USER_API}/logout`);

			console.log(response);

			if (response.status == 200) {
				window.location.href = "/login";
			} else {
				console.error("Logout failed");
			}
		} catch (error: any) {
			console.error("Error fetching data", error);
			if (error.response) {
				toast.show({
					title: "Error",
					content: error.response.data.error,
					duration: 3000,
				});
			}
		}
		// setUser((prevUser) => {
		// 	if (prevUser !== null) {
		// 		return null;
		// 	}
		// 	return prevUser;
		// });
	};
	const handleProfileCreate = async () => {
		try {
			const response = await axios.post(
				`${API_ENDPOINT}${APP_BACKEND_PORT}${APP_PROFILE_API}/create-profile`,
				{},
				{
					headers: {
						Authorization: `Bearer ${bearToken}`,
					},
				}
			);
			console.log(response);
			navigate("/profile");
		} catch (error: any) {
			console.log("Error from client:", error);
			if (error.response) {
				toast.show({
					title: "Error",
					content: error.response.data.error,
					duration: 3000,
				});
			}
		}
	};
	useEffect(() => {
		let bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);
		if (bearToken && bearToken !== currentCookie) {
			setCurrentCookie(bearToken);

			const decodedToken: User = jwtDecode(bearToken);
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
						<li className='nav-item' onClick={handleProfileCreate}>
							<a className='nav-link'>{user ? user.username : "Profile"}</a>
						</li>
						<li className='nav-item' onClick={handleLogout}>
							<a className='nav-link '>{user ? "Log Out" : "Log In"}</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default LandingNavbar;
