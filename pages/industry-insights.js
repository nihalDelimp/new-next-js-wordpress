import getindustryInsightsData from "../query/Insights/industryInsights";
import IndustryInsights from '../components/Insights/IndustryInsights';

const IndustryInsight = ({ industryinsight }) => {
    const resData = industryinsight.data.pageBy.insights.tabSection;
    const headerData = industryinsight.data.pageBy.industriesContents.industriesPageContent
    const tabContainer = resData && resData[0] ? resData[0]?.tabContainer : []
    const tabMenuItems = resData && resData[0] ? resData[0]?.tabMenuItems : []


    return (
        <IndustryInsights tabContainer={tabContainer} tabMenuItems = {tabMenuItems} headerData = {headerData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            industryinsight: await getindustryInsightsData(),
        },
    };
}

export default IndustryInsight;
