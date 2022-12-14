import getApplicationsData from "../query/Services/applications";
import Applications from './../components/Services/ApplicationsPage';

const ApplicationsIndustry = ({ applications}) => {
    const resData = applications.data.pageBy.servicesSection.servicesContent;
    const section1 = resData && resData[0] ? resData[0] :  ""
    const section2 = resData && resData[1] ? resData[1] :  ""
    const section3 = resData && resData[2] ? resData[3] :  ""
    const section4 = resData && resData[4] ? resData[4] :  ""

    return (
        <Applications section1={section1} section2={section2} section3={section3} section4={section4} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            applications: await getApplicationsData()

        },
    };
}

export default ApplicationsIndustry;
