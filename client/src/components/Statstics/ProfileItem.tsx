import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import {
	API_ENDPOINT,
	APP_BACKEND_PORT,
	APP_TODO_POST,
	APP_TODO_API,
	APP_AUTHENTICATE_TOKEN_NAME,
} from "../../../../common/constants";
interface Props {
	iconClass: string;
	label: string;
	value: string;
	dropdownId: string;
}
const ProfileItem = ({ iconClass, label, value, dropdownId }: Props) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const cookies = new Cookies();
	const bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);

	return (
		<div className='col-sm-6'>
			<div className='d-flex align-items-center rounded border px-3 py-2'>
				<p className='mb-0'>
					<i className={`bi ${iconClass} fa-fw me-2`}></i>
					{label}: <strong>{value}</strong>
				</p>
				<div className='dropdown ms-auto'>
					<a
						className='nav nav-link text-secondary mb-0'
						href='#'
						id={dropdownId}
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						<i className='bi bi-three-dots'></i>
					</a>
					<ul
						className='dropdown-menu dropdown-menu-end'
						aria-labelledby={dropdownId}
					>
						<li>
							<a className='dropdown-item' href='#'>
								<i className='bi bi-pencil-square fa-fw pe-2'></i>Edit
							</a>
						</li>
						<li>
							<a className='dropdown-item' href='#'>
								<i className='bi bi-trash fa-fw pe-2'></i>Delete
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProfileItem;
