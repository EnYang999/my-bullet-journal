import SidePage from "../sidebarpage/SidePage";
import { useState } from "react";
import RabbitStamp from "../decorationelements/rabbitstamp/rabbitstamp";
import RabbitMother from "../decorationelements/rabbitmother/RabbitMother";
import "./septemberweek4.scss";
import RightSideBar from "../sidebarpage/RightPage";
import mondayShape from "../../assets/img/monday-shape.svg";
import tuesdayShape from "../../assets/img/thursday-shape.svg";
import wednesdayShape from "../../assets/img/wednesday-shape.svg";
import thursdayShape from "../../assets/img/thursday-shape.svg";
import fridayShape from "../../assets/img/friday-shape.svg";
import weekendShape from "../../assets/img/weekend-shape.svg";
import WeekBox from "./weekday4";
const SeptemberWeek4 = () => {
	const [selectedMonth, setSelectedMonth] = useState<string>("04");
	const [selectedTab, setSelectedTab] = useState<string>("index");
	return (
		<div className='september-week-4 week-container-layout'>
			<div className='container py-8 px-6 d-flex flex-column week-box-container'>
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
				<div className='row'>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<WeekBox
							day='monday'
							shapeImage={mondayShape}
							boxIds={[
								`sep-week-4-monday-1`,
								`sep-week-4-monday-2`,
								`sep-week-4-monday-3`,
								`sep-week-4-monday-4`,
								`sep-week-4-monday-5`,
							]}
						/>
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<WeekBox
							day='tuesday'
							shapeImage={tuesdayShape}
							boxIds={[
								"sep-week-4-tuesday-1",
								"sep-week-4-tuesday-2",
								"sep-week-4-tuesday-3",
								"sep-week-4-tuesday-4",
								"sep-week-4-tuesday-5",
							]}
						/>
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<WeekBox
							day='wednesday'
							shapeImage={wednesdayShape}
							boxIds={[
								"sep-week-4-wednesday-1",
								"sep-week-4-wednesday-2",
								"sep-week-4-wednesday-3",
								"sep-week-4-wednesday-4",
								"sep-week-4-wednesday-5",
							]}
						/>
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center justify-content-center'>
						<RabbitStamp stampWidth={10} className='rabbit' />
					</div>

					<div className='w-100 d-none d-md-block mt-7'></div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<RabbitMother className='rabbitmother' />
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<WeekBox
							day='thursday'
							shapeImage={thursdayShape}
							boxIds={[
								"sep-week-4-thursday-1",
								"sep-week-4-thursday-2",
								"sep-week-4-thursday-3",
								"sep-week-4-thursday-4",
								"sep-week-4-thursday-5",
							]}
						/>
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<WeekBox
							day='friday'
							shapeImage={fridayShape}
							boxIds={[
								"sep-week-4-friday-1",
								"sep-week-4-friday-2",
								"sep-week-4-friday-3",
								"sep-week-4-friday-4",
								"sep-week-4-friday-5",
							]}
						/>
					</div>
					<div className='col-lg-3 col-md-6 d-flex align-items-center'>
						<WeekBox
							day='weekend'
							shapeImage={weekendShape}
							boxIds={[
								"sep-week-4-weekend-1",
								"sep-week-4-weekend-2",
								"sep-week-4-weekend-3",
								"sep-week-4-weekend-4",
								"sep-week-4-weekend-5",
							]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SeptemberWeek4;
