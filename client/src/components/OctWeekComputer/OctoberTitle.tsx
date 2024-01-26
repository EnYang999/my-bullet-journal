import octlabel from "../../assets/oct2020/octlabel.svg";
import envelop from "../../assets/oct2020/envelop_copy.png";
import dish from "../../assets/oct2020/food.png";
import "./OctoberTitle.css";
const OctoberTitle = () => {
	return (
		<div className='octtitle'>
			<figure className='envelop'>
				<img src={envelop} alt='envelop' />
			</figure>

			<figure className='octlabel'>
				<img src={octlabel} alt='octlabel' />
			</figure>
			<figure className='dish'>
				<img src={dish} alt='dish' />
			</figure>
		</div>
	);
};

export default OctoberTitle;
