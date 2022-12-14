import getBlogsData from "../query/Insights/blogs";
import Blogs from '../components/Insights/Blogs';

const BlogInsights = ({ blogs }) => {
    const resData = blogs.data.pageBy.insights.tabSection;
    const headerData = blogs.data.pageBy.industriesContents.industriesPageContent
    const tabContainer = resData && resData[0] ? resData[0]?.tabContainer : []
    const tabMenuItems = resData && resData[0] ? resData[0]?.tabMenuItems : []

    return (
        <Blogs tabContainer={tabContainer} tabMenuItems={tabMenuItems} headerData = {headerData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            blogs: await getBlogsData(),
        },
    };
}

export default BlogInsights;
