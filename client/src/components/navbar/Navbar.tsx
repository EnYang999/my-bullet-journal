import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
	const [activeItem, setActiveItem] = useState(0);

	const handleIndicator = (index: number) => {
		setActiveItem(index);
	};

	return (
		<div className='App'>
			<nav className='nav'>
				<a
					href='#'
					className={`nav-item ${activeItem === 0 ? "is-active" : ""}`}
					active-color='orange'
					onClick={() => handleIndicator(0)}
				>
					HOME
				</a>
				<a
					href='#'
					className={`nav-item ${activeItem === 1 ? "is-active" : ""}`}
					active-color='green'
					onClick={() => handleIndicator(1)}
				>
					CONTACT
				</a>
				<a
					href='#'
					className={`nav-item ${activeItem === 2 ? "is-active" : ""}`}
					active-color='blue'
					onClick={() => handleIndicator(2)}
				>
					ABOUT
				</a>
				<a
					href='#'
					className={`nav-item ${activeItem === 3 ? "is-active" : ""}`}
					active-color='red'
					onClick={() => handleIndicator(3)}
				>
					LOCATIONS
				</a>
				<a
					href='#'
					className={`nav-item ${activeItem === 4 ? "is-active" : ""}`}
					active-color='rebeccapurple'
					onClick={() => handleIndicator(4)}
				>
					TESTIMONIALS
				</a>
				<span className='nav-indicator'></span>
			</nav>
		</div>
	);
};

export default Navbar;
