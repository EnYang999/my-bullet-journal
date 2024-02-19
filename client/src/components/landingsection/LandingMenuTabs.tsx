import LandingMenuTab from "./LandingMenuTab";
interface Props {
	activeTab: string;
	imgSrcs: string[];
	months: string[];
	headings: string[];
	textHeadings: string[];
}
const LandingMenuTabs = ({
	activeTab,
	imgSrcs,
	months,
	headings,
	textHeadings,
}: Props) => {
	return (
		<>
			<div
				className={`tab-pane fade ${activeTab === "gold" ? "show active" : ""}`}
				id='gold'
				role='tabpanel'
				aria-labelledby='goldTab'
			>
				<div className='row'>
					<LandingMenuTab
						imgSrc={imgSrcs[0]}
						month={months[0]}
						heading={headings[0]}
						textHeading={textHeadings[0]}
					/>
					<LandingMenuTab
						imgSrc={imgSrcs[1]}
						month={months[1]}
						heading={headings[1]}
						textHeading={textHeadings[1]}
					/>
					<LandingMenuTab
						imgSrc={imgSrcs[2]}
						month={months[2]}
						heading={headings[2]}
						textHeading={textHeadings[2]}
					/>
					<LandingMenuTab
						imgSrc={imgSrcs[3]}
						month={months[3]}
						heading={headings[3]}
						textHeading={textHeadings[3]}
					/>
					<LandingMenuTab
						imgSrc={imgSrcs[4]}
						month={months[4]}
						heading={headings[4]}
						textHeading={textHeadings[4]}
					/>
					<LandingMenuTab
						imgSrc={imgSrcs[5]}
						month={months[5]}
						heading={headings[5]}
						textHeading={textHeadings[5]}
					/>
				</div>
			</div>
		</>
	);
};

export default LandingMenuTabs;
