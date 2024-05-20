import React, { useEffect, memo } from "react";
// import "../scss/theme/_toast.scss";
import ballonicon from "../../assets/login/balloon-heart.svg";
export interface ToastProps {
	id: string;
	destroy: () => void;
	title: string;
	content: string;
	duration?: number;
}

const Toast: React.FC<ToastProps> = (props) => {
	const { destroy, content, title, duration = 0, id } = props;

	useEffect(() => {
		if (!duration) return;
		console.log(duration);

		const timer = setTimeout(() => {
			destroy();
		}, duration);

		return () => clearTimeout(timer);
	}, [destroy, duration]);

	return (
		<div
			className={`my-toast`}
			role='alert'
			aria-live='assertive'
			aria-atomic='true'
			id={id}
		>
			<div className='toast-header'>
				<img src={ballonicon} className='rounded me-2' alt='...' />
				<strong className='me-auto'>{title}</strong>
				{/* <small className='text-body-secondary'>11 mins ago</small> */}
				<button
					type='button'
					className='btn-close'
					data-bs-dismiss='toast'
					aria-label='Close'
					onClick={destroy}
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
export default memo(Toast, shouldRerender);
