import SoftwareNetwork from './../components/Services/SoftwareNetwork';
import getSoftwareNetworkData from "../query/Services/softwareNetwork";

const softwareNetworkIndustry = ({ softwareNetwork }) => {
    const resData = softwareNetwork.data.pageBy.servicesSection.servicesContent;
    const section1 = resData && resData[0] ? resData[0] : ""
    const section2 = resData && resData[1] ? resData[1] : ""
    const section3 = resData && resData[2] ? resData[2] : ""
    const section4 = resData && resData[3] ? resData[3] : ""
    const section5 = resData && resData[4] ? resData[4] : ""
    const section6 = resData && resData[5] ? resData[5] : ""


    return (
        <SoftwareNetwork section1={section1} section2={section2} section3={section3} section4={section4} section5={section5} section6={section6} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            softwareNetwork: await getSoftwareNetworkData(),
        },
    };
}

export default softwareNetworkIndustry;
