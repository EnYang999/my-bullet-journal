import { useState } from "react";
import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";

interface Props {
	sourceImage: string;
	month: string;
	color: string;
}
const Index = ({ sourceImage, month, color }: Props) => {
	const [selectedMonth, setSelectedMonth] = useState<string>("04");
	const [selectedTab, setSelectedTab] = useState<string>("index");
	return (
		<div className={`${month}-week-index week-container-layout`}>
			<div
				className='container py-8 px-6 d-flex week-box-container'
				style={{
					backgroundImage: `url(${sourceImage})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "right center",
					backgroundSize: "contain",
				}}
			>
				<SidePage
					className='sidebar'
					setSelectedMonth={setSelectedMonth}
					tab={selectedTab}
				/>
				<RightSideBar
					className='rightside'
					month={selectedMonth}
					setSelectedTab={setSelectedTab}
				/>
				<div
					className='d-flex position-absolute'
					style={{ left: "0.5%", bottom: "5%" }}
				></div>
				<div className='row outer-row'>
					<div className='col-lg-9 h-100'>
						<div className='row inner-row h-100'></div>
					</div>
					<div className='col-lg-3 text-center d-flex align-items-center'>
						<div className='d-flex flex-column'>
							<p
								style={{
									fontFamily: "Josefin Slab",
									fontSize: "5rem",
									marginBottom: 0,
									color: color,
								}}
							>
								{month}.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
