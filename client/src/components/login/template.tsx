// src/App.tsx
import React, { useState, useRef } from "react";
import { useFloating, offset, flip, arrow } from "@floating-ui/react-dom";
import {
	validateEmail,
	validateUsername,
	validatePassword,
} from "../../utils/validate";

const Temp: React.FC = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [activeField, setActiveField] = useState<
		"email" | "username" | "password" | ""
	>("");
	const messageMap = {
		email: validateEmail(email).message,
		username: validateUsername(username).message,
		password: validatePassword(password).message,
	};
	const emailRef = useRef<HTMLInputElement>(null);
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const {
		x,
		y,
		reference: emailReference,
		floating: floatingEmail,
		strategy: strategyEmail,
	} = useFloating({
		placement: "right",
		middleware: [offset(10), flip(), arrow({ element: arrowElement.current })],
	});

	let reference = emailRef; // default to email if needed or determine based on activeField
	if (activeField === "username") reference = usernameRef;
	if (activeField === "password") reference = passwordRef;

	const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

	const getInputClass = (field: "email" | "username" | "password") => {
		switch (field) {
			case "email":
				return validateEmail(email).isValid ? "valid" : "invalid";
			case "username":
				return validateUsername(username).isValid ? "valid" : "invalid";
			case "password":
				return validatePassword(password).isValid ? "valid" : "invalid";
			default:
				return "";
		}
	};

	return (
		<div className='app'>
			<form className='signup-form'>
				<div className='input-group'>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						className={getInputClass("email")}
						value={email}
						onFocus={() => setActiveField("email")}
						onBlur={() => setActiveField("")}
						onChange={(e) => setEmail(e.target.value)}
						ref={reference}
					/>
				</div>
				<div className='input-group'>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						className={getInputClass("username")}
						value={username}
						onFocus={() => setActiveField("username")}
						onBlur={() => setActiveField("")}
						onChange={(e) => setUsername(e.target.value)}
						ref={reference}
					/>
				</div>
				<div className='input-group'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						className={getInputClass("password")}
						value={password}
						onFocus={() => setActiveField("password")}
						onBlur={() => setActiveField("")}
						onChange={(e) => setPassword(e.target.value)}
						ref={reference}
					/>
				</div>
				{activeField && (
					<div
						className='popover'
						ref={floating}
						style={{
							position: strategy,
							top: y ?? "",
							left: x ?? "",
						}}
					>
						<div
							ref={setArrowElement}
							className='arrow'
							style={{
								left: middlewareData.arrow?.x ?? "",
								top: middlewareData.arrow?.y ?? "",
							}}
						/>
						{messageMap[activeField]}
					</div>
				)}
			</form>
		</div>
	);
};

export default Temp;
