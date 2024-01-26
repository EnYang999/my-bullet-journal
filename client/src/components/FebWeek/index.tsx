import { useState } from "react";
import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";
import bgAprIndex from "../../assets/feb2024/2024FeburaryDigitalPlanner.png";
const FebIndex = () => {
	const [selectedMonth, setSelectedMonth] = useState<string>("04");
	const [selectedTab, setSelectedTab] = useState<string>("index");
	return (
		<div className='feb-week-index week-container-layout'>
			<div
				className='container py-8 px-6 d-flex week-box-container'
				style={{
					backgroundImage: `url(${bgAprIndex})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "right center",
					backgroundSize: "50%",
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
									// fontStyle: "italic",
								}}
							>
								February.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FebIndex;
