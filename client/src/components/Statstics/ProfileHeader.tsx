import backgroundImageUrl from "../../assets/landing/15.jpg";
import avatar from "../../assets/landing/8.jpg";
import { useState, useRef } from "react";
import {
	useClick,
	useFloating,
	useInteractions,
	arrow,
	flip,
	offset,
	shift,
	FloatingArrow,
} from "@floating-ui/react";
const ProfileHeader = () => {
	const [isOpen, setIsOpen] = useState(true);
	const arrowRef = useRef(null);
	const { refs, floatingStyles, context } = useFloating({
		placement: "top",
		strategy: "absolute",
		open: isOpen,
		onOpenChange(isOpen) {
			setIsOpen(isOpen);
		},
		middleware: [
			flip(),
			offset(6),
			shift({ padding: 5 }),
			arrow({
				element: arrowRef,
				padding: 5,
			}),
		],
	});
	const click = useClick(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click]);
	return (
		// {/* <!-- Card START --> */}
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
			{/* <!-- Card body START --> */}
			<div className='card-body py-0'>
				<div className='d-sm-flex align-items-start text-center text-sm-start'>
					<div>
						{/* <!-- Avatar --> */}
						<div className='avatar avatar-xxl mt-n5 mb-3'>
							<img
								className='avatar-img rounded-circle border border-white border-3'
								src={avatar}
								alt=''
							/>
						</div>
					</div>
					<div className='ms-sm-4 mt-sm-3'>
						{/* <!-- Info --> */}
						<h1 className='mb-0 h5'>Sam Lanson</h1>
					</div>
					{/* <!-- Button --> */}
					<div className='d-flex mt-3 justify-content-center ms-sm-auto'>
						<div className='dropdown'>
							{/* <!-- Card share action menu --> */}
							<button
								className='icon-md btn btn-light'
								type='button'
								id='profileAction2'
								// data-bs-toggle='dropdown'
								// aria-expanded='true'
								ref={refs.setReference}
								{...getReferenceProps({})}
							>
								<i className='bi bi-pencil-fill pe-1'></i> Edit profile
							</button>
							{/* <!-- Card share action dropdown menu --> */}
							{isOpen && (
								<ul
									className='dropdown-menu dropdown-menu-end'
									// aria-labelledby='profileAction2'
									ref={refs.setFloating}
									style={{ ...floatingStyles, backgroundColor: "red" }}
									{...getFloatingProps()}
								>
									<li>
										<a className='dropdown-item' href='#'>
											<i className='bi bi-bookmark fa-fw pe-2'></i>Share profile
											in a message
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
											<i className='bi bi-gear fa-fw pe-2'></i>Profile settings
										</a>
									</li>
								</ul>
							)}
						</div>
					</div>
				</div>
				{/* <!-- List profile --> */}
				<ul className='list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0'>
					<li className='list-inline-item'>
						<i className='bi bi-briefcase me-1'></i> Lead Developer
					</li>
					<li className='list-inline-item'>
						<i className='bi bi-geo-alt me-1'></i> New Hampshire
					</li>
					<li className='list-inline-item'>
						<i className='bi bi-calendar2-plus me-1'></i> Joined on Nov 26, 2019
					</li>
				</ul>
			</div>
			{/* <!-- Card body END --> */}
			<div className='card-footer mt-3 pt-2 pb-0'>
				{/* <!-- Nav profile pages --> */}
			</div>
		</div>
	);
};

export default ProfileHeader;
