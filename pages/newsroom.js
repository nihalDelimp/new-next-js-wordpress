import getnewsroomData from "../query/Insights/newsroom";
import Newsroom from '../components/Insights/Newsroom';

const NewsroomInsights = ({ newsroom }) => {
    const resData = newsroom.data.pageBy.insights.tabSection;
    const headerData = newsroom.data.pageBy.industriesContents.industriesPageContent
    const tabContainer = resData && resData[0] ? resData[0]?.tabContainer : []
    const tabMenuItems = resData && resData[0] ? resData[0]?.tabMenuItems : []

    return (
        <Newsroom tabContainer = {tabContainer}  tabMenuItems = {tabMenuItems} headerData = {headerData}  />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            newsroom: await getnewsroomData(),
        },
    };
}

export default NewsroomInsights;
