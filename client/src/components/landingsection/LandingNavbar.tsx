import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import {
	InputBase,
	IconButton,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	List,
	ListItem,
	ListItemText,
	Avatar,
	ListItemAvatar,
	Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

import {
	API_ENDPOINT,
	APP_USER_API,
	APP_AUTHENTICATE_TOKEN_NAME,
	APP_PROFILE_API,
	APP_TODO_API,
	APP_TODO_SEARCH,
} from "../../../../common/constants";
import { toast } from "../errortoast/ErrorToastManager";

interface Todo {
	account: string;
	completed: boolean;
	description: string;
	updatedAt: string;
	todoDate: {
		todoDay: string;
		todoMonth: string;
		todoNum: string;
		todoWeek: string;
	};
}
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

interface SearchResultsPageProps {
	results: Todo[];
}
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
	const [searchOpen, setSearchOpen] = useState(false);
	const [open, setOpen] = useState(false);

	const [searchText, setSearchText] = useState("");
	const [searchResults, setSearchResults] = useState<any[]>([]);
	const [user, setUser] = useState<User | null>(null);
	const [currentCookie, setCurrentCookie] = useState<string | null>(null);

	let bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);
	const handleLogout = async () => {
		cookies.remove(bearToken);
		try {
			const response = await axios.get(
				`${API_ENDPOINT}${APP_USER_API}/logout`,
				{ withCredentials: true }
			);
			console.log(`${API_ENDPOINT}${APP_USER_API}/logout`);

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
	const MonthFormate: { [key: string]: string } = {
		jan: "January",
		feb: "February",
		mar: "March",
		apr: "April",
		may: "May",
		jun: "June",
		jul: "July",
		aug: "August",
		sep: "September",
		oct: "October",
		nov: "November",
		dec: "December",
	};
	const MonthLink: { [key: string]: string } = {
		jan: "01",
		feb: "02",
		mar: "03",
		apr: "04",
		may: "05",
		jun: "06",
		jul: "07",
		aug: "08",
		sep: "09",
		oct: "10",
		nov: "11",
		dec: "12",
	};
	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	const handleProfileCreate = async () => {
		try {
			const response = await axios.post(
				`${API_ENDPOINT}${APP_PROFILE_API}/create-profile`,
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
	const handleSearchClick = () => {
		setSearchOpen(!searchOpen);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value);
	};

	const handleSearchSubmit = async () => {
		try {
			const response = await axios.get(
				`${API_ENDPOINT}${APP_TODO_API}${APP_TODO_SEARCH}?search_word=${searchText}`,
				{
					headers: {
						Authorization: `Bearer ${bearToken}`,
					},
				}
			);
			console.log(response.data);
			setSearchResults(response.data);
			setOpen(true);
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
	const handleRedirect = (todo: Todo) => {
		const month = todo.todoDate.todoMonth;
		const week = todo.todoDate.todoWeek;
		const url = `/themes/${MonthLink[month]}/week${week}`;
		navigate(url);
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
		<>
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
								<a className='nav-link ' href='./demo'>
									Demo
								</a>
							</li>
							<li className='nav-item'>
								{searchOpen ? (
									<InputBase
										placeholder='Search…'
										value={searchText}
										onChange={handleInputChange}
										onKeyUp={(event) => {
											if (event.key === "Enter") {
												handleSearchSubmit();
											}
										}}
										endAdornment={
											<IconButton onClick={handleSearchSubmit}>
												<SearchIcon />
											</IconButton>
										}
										style={{
											backgroundColor: "#EEEDEB",
											borderRadius: "4px",
											padding: "0 8px",
										}}
									/>
								) : (
									<span
										className='nav-link'
										onClick={handleSearchClick}
										style={{ cursor: "pointer" }}
									>
										Search
									</span>
								)}
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
								<a className='nav-link ' href='./themes/01/week1'>
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
			{open && (
				<Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
					<DialogTitle>
						Search Results
						<IconButton
							aria-label='close'
							onClick={handleClose}
							sx={{ position: "absolute", right: 8, top: 8 }}
						>
							<CloseIcon />
						</IconButton>
					</DialogTitle>
					<DialogContent dividers>
						{searchResults.length > 0 ? (
							<List>
								{searchResults.map((todo, index) => (
									<ListItem
										key={index}
										secondaryAction={
											<IconButton
												edge='end'
												aria-label='redirect'
												onClick={() => handleRedirect(todo)}
											>
												<ShortcutIcon />
											</IconButton>
										}
									>
										<ListItemAvatar>
											<Avatar>
												<CalendarViewDayIcon />
											</Avatar>
										</ListItemAvatar>

										<ListItemText
											primary={todo.description}
											secondary={`Date: ${
												MonthFormate[todo.todoDate.todoMonth]
											} Week-${todo.todoDate.todoWeek} ${capitalizeFirstLetter(
												todo.todoDate.todoDay
											)}`}
										/>
									</ListItem>
								))}
							</List>
						) : (
							<p>No results found.</p>
						)}
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color='primary'>
							Close
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</>
	);
};

export default LandingNavbar;
