import { useState } from "react";
import RightSideBar from "../sidebarpage/RightPage";
import SidePage from "../sidebarpage/SidePage";
import { useParams } from "react-router-dom";
interface Props {
	journalpage: React.ComponentType<any>;
	customName: string;
}

const BookTab = ({ journalpage: JournalPageComponent, customName }: Props) => {
	const [selectedMonth, setSelectedMonth] = useState<string>("09");
	const [selectedTab, setSelectedTab] = useState<string>("week1");

	return (
		<div className='week-container-layout'>
			<div
				className={`container py-8 px-6 d-flex week-box-container ${customName}`}
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
				<JournalPageComponent />
			</div>
		</div>
	);
};
export default BookTab;
