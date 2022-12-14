import getCyberSecurityData from "../query/Services/cyberSecurity";
import CyberSecurity from './../components/Services/CyberSecurity';

const CyberSecurityIndustry = ({ cyberSecurity }) => {
    const resData = cyberSecurity.data.pageBy.servicesSection.servicesContent;
    const section1 = resData && resData[0] ? resData[0] : ""
    const section2 = resData && resData[1] ? resData[1] : ""
    const section3 = resData && resData[2] ? resData[3] : ""
    const section4 = resData && resData[4] ? resData[4] : ""

    return (
        <CyberSecurity section1={section1} section2={section2} section3={section3} section4={section4} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            cyberSecurity: await getCyberSecurityData()

        },
    };
}

export default CyberSecurityIndustry;
