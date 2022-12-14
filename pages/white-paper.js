import getWhitePaperData from "../query/Insights/whitePaper";
import WhitePaper from '../components/Insights/WhitePaper';

const WhitePaperInsights = ({ whitePaper }) => {
    const resData = whitePaper.data.pageBy.insights.tabSection;
    const headerData = whitePaper.data.pageBy.industriesContents.industriesPageContent
    const tabContainer = resData && resData[0] ? resData[0]?.tabContainer : []
    const tabMenuItems = resData && resData[0] ? resData[0]?.tabMenuItems : []

    console.log("resDataWhitePaperInsights" , headerData)

    return (
        <WhitePaper tabContainer = {tabContainer}  tabMenuItems = {tabMenuItems} headerData = {headerData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            whitePaper: await getWhitePaperData(),
        },
    };
}

export default WhitePaperInsights;
