import { useState } from "react";
import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";
const AprilIndex = () => {
	const [selectedMonth, setSelectedMonth] = useState<string>("09");
	return (
		<div className='april-week-1'>
			<div className='container py-8 px-6 d-flex week-box-container'>
				<SidePage className='sidebar' setSelectedMonth={setSelectedMonth} />
				<RightSideBar className='rightside' month={selectedMonth} />
				<div
					className='d-flex position-absolute align-items-center justify-content-center'
					style={{ left: "0.5%", top: "5%" }}
				>
					<p
						className='d-flex align-items-center justify-content-center m-0 px-2'
						style={{ fontFamily: "Aleo" }}
					>
						My Year
					</p>
				</div>
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
								April.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AprilIndex;
