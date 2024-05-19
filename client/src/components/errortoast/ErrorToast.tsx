import React, { useEffect, useState } from "react";
import "../scss/theme/_toast.scss";
import ballonicon from "../../assets/login/balloon-heart.svg";
export interface ToastProps {
	id: string;
	destroy: () => void;
	title: string;
	content: string;
	duration?: number;
}

const Toast: React.FC<ToastProps> = (props) => {
	const [visible, setVisible] = useState(false);
	const { destroy, content, title, duration = 5000, id } = props;
	setTimeout(() => setVisible(true), 10);
	useEffect(() => {
		if (!duration) return;

		const timer = setTimeout(() => {
			setVisible(false);
			setTimeout(() => destroy(), 300); // Allow some time for fade-out animation
			destroy();
		}, duration);

		return () => clearTimeout(timer);
	}, [destroy, duration]);

	return (
		<div
			className={`toast ${visible ? "slide-in" : "slide-out"}`}
			role='alert'
			aria-live='assertive'
			aria-atomic='true'
			id={id}
		>
			<div className='toast-header'>
				<img src={ballonicon} className='rounded me-2' alt='...' />
				<strong className='me-auto'>{title}</strong>
				<small className='text-body-secondary'>11 mins ago</small>
				<button
					type='button'
					className='btn-close'
					data-bs-dismiss='toast'
					aria-label='Close'
					onClick={() => {
						setVisible(false);
						setTimeout(destroy, 500);
					}}
				></button>
			</div>
			<div className='toast-body'>{content}</div>
		</div>
	);
};
// export default Toast;
const shouldRerender = (prevProps: ToastProps, nextProps: ToastProps) => {
	return prevProps.id === nextProps.id;
};
export default React.memo(Toast, shouldRerender);
