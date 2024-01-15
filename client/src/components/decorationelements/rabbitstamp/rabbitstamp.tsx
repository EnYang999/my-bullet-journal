import rabbitRun from "../../assets/img/rabbit-run.png";
import shadow from "../../assets/img/shodow.png";
import star5 from "../../assets/img/star-vector-5.svg";
import headShadow from "../../assets/img/head-shadow.svg";
import line from "../../assets/img/line-1.svg";
import "./rabbitstamp.css";
interface Props {
	stampWidth: number;
	className: string;
}

const RabbitStamp = ({ className }: Props): JSX.Element => {
	return (
		<div className={`rabbit-stamp-overlap-group ${className}`}>
			<img className='star-vector-5' alt='Star vector' src={star5} />

			<figure className='fig-rabbit'>
				<img
					className='rabbit-run'
					alt='Rabbit run'
					width={"252"}
					height={"378"}
					src={rabbitRun}
				/>
			</figure>
			<figure className='fig-shadow'>
				<img
					className='rabbit-shadow'
					alt='Shadow'
					width={"115px"}
					height={"64px"}
					src={shadow}
				/>
			</figure>

			<img className='head-shadow' alt='Head shadow' src={headShadow} />
			<div className='text-wrapper-inspiration'>Sep</div>
			<img className='rabbit-stamp-line' alt='Line' src={line} />
		</div>
	);
};

export default RabbitStamp;
