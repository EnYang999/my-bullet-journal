import backgroundImageUrl from "../../assets/landing/15.jpg";
import avatar from "../../assets/landing/8.jpg";
import { useState, useRef } from "react";
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

const ProfileHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const arrowRef = useRef(null);

	const { refs, floatingStyles, context } = useFloating({
		placement: "bottom-start",
		strategy: "absolute",
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [
			flip(),
			offset(6),
			shift({ padding: 5 }),
			arrow({ element: arrowRef, padding: 5 }),
		],
		whileElementsMounted: autoUpdate,
	});

	const click = useClick(context);
	const { getReferenceProps, getFloatingProps } = useInteractions([click]);

	return (
		<div className='card'>
			<div
				className='h-200px rounded-top'
				style={{
					backgroundImage: `url(${backgroundImageUrl})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					height: "200px",
				}}
			></div>
			<div className='card-body py-0'>
				<div className='d-sm-flex align-items-start text-center text-sm-start'>
					<div>
						<div className='avatar avatar-xxl mt-n5 mb-3'>
							<img
								className='avatar-img rounded-circle border border-white border-3'
								src={avatar}
								alt='Profile'
							/>
						</div>
					</div>
					<div className='ms-sm-4 mt-sm-3'>
						<h1 className='mb-0 h5'>Sam Lanson</h1>
					</div>
					<div className='d-flex mt-3 justify-content-center ms-sm-auto'>
						<div className='dropdown'>
							<button
								className='icon-md btn btn-light'
								type='button'
								ref={refs.setReference}
								{...getReferenceProps()}
								onClick={() => setIsOpen(!isOpen)}
							>
								<i className='bi bi-pencil-fill pe-1'></i> Edit profile
							</button>
							{isOpen && (
								<FloatingFocusManager context={context} modal={false}>
									<ul
										className='dropdown-menu show'
										ref={refs.setFloating}
										style={{ ...floatingStyles }}
										{...getFloatingProps()}
									>
										<li>
											<a className='dropdown-item' href='#'>
												<i className='bi bi-bookmark fa-fw pe-2'></i>Share
												profile in a message
											</a>
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												<i className='bi bi-file-earmark-pdf fa-fw pe-2'></i>
												Save your profile to PDF
											</a>
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												<i className='bi bi-lock fa-fw pe-2'></i>Lock profile
											</a>
										</li>
										<li>
											<hr className='dropdown-divider' />
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												<i className='bi bi-gear fa-fw pe-2'></i>Profile
												settings
											</a>
										</li>
									</ul>
								</FloatingFocusManager>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className='card-footer mt-3 pt-2 pb-0'></div>
		</div>
	);
};

export default ProfileHeader;
