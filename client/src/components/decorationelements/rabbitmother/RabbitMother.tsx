import "./RabbitMother.scss";
import SeptemberLabel from "../septemberlabel/SeptemberLabel";
import rabbitMother from "../../../assets/img/rabbit-mother.png";
interface Props {
	className: string;
}
const RabbitMother = ({ className }: Props): JSX.Element => {
	return (
		<div className={`rabbit-mother-overlap-group ${className}`}>
			<figure className='fig-seplabel'>
				<SeptemberLabel className='septemberlabel' />
			</figure>
			<figure className='fig-rabbitmother'>
				<img className='rabbit-mother' alt='Rabbit mother' src={rabbitMother} />
			</figure>
		</div>
	);
};

export default RabbitMother;
