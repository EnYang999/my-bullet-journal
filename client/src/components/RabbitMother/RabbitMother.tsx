import "./RabbitMother.css";
import star3 from "../../assets/img/star-vector-3.svg";
import rabbitMother from "../../assets/img/rabbit-mother.png";
interface Props {
	className: string;
}
const RabbitMother = ({ className }: Props): JSX.Element => {
	return (
		<div className={`rabbit-mother-overlap-group ${className}`}>
			<figure className='figure-rabbitmother-star'>
				<img className='star-vector-3' alt='Star vector' src={star3} />
			</figure>

			<figure className='fig-rabbitmother'>
				<img className='rabbit-mother' alt='Rabbit mother' src={rabbitMother} />
			</figure>
		</div>
	);
};

export default RabbitMother;
