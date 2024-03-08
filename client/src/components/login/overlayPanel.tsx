interface OverlayPanelProps {
	h1Text: string;
	pText: string;
	id: string;
	buttonText: string;
	className: string;
	buttonClick: () => void;
}
const OverlayPanel = ({
	h1Text,
	pText,
	id,
	buttonClick,
	buttonText,
	className,
}: OverlayPanelProps) => {
	return (
		<div className={`overlay-panel overlay-${className}`}>
			<h1>{h1Text}</h1>
			<p>{pText}</p>
			<button className='ghost' id={id} onClick={() => buttonClick()}>
				{buttonText}
			</button>
		</div>
	);
};

export default OverlayPanel;
