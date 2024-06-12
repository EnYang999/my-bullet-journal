// src/components/DropdownMenu.tsx

import { useState, useRef, useEffect } from "react";
import {
	useClick,
	useFloating,
	autoUpdate,
	useInteractions,
	arrow,
	flip,
	offset,
	shift,
	FloatingFocusManager,
} from "@floating-ui/react";
// Make sure to install @float-ui/react or any required packages, if not already installed:

const DropdownMenu: React.FC = ({}) => {
	const [isOpen, setIsOpen] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		placement: "bottom-start",
		strategy: "absolute",
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [flip(), offset(6), shift({ padding: 5 })],
		whileElementsMounted: autoUpdate,
	});

	const menuItems = [
		{ icon: "bi-bookmark", text: "Share profile in a message", href: "#" },
		{
			icon: "bi-file-earmark-pdf",
			text: "Save your profile to PDF",
			href: "#",
		},
		{ icon: "bi-lock", text: "Lock profile", href: "#" },
		{ isDivider: true },
		{ icon: "bi-gear", text: "Profile settings", href: "#" },
	];

	return (
		<FloatingFocusManager context={context} modal={false}>
			<ul
				className='dropdown-menu show'
				ref={refs.setFloating}
				style={{ ...floatingStyles }}
				{...getFloatingProps()}
			>
				{menuItems.map((item, index) =>
					item.isDivider ? (
						<li key={index}>
							<hr className='dropdown-divider' />
						</li>
					) : (
						<li key={index}>
							<a className='dropdown-item' href={item.href}>
								<i className={`bi ${item.icon} fa-fw pe-2`}></i>
								{item.text}
							</a>
						</li>
					)
				)}
			</ul>
		</FloatingFocusManager>
	);
};

export default DropdownMenu;
