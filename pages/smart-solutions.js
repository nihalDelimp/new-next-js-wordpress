import getsmartSolutionsData from "../query/Services/smartSolutions";
import SmartSolutions from '../components/Services/SmartSolutions';

const SmartSolutionsIndustry = ({ smartSolutions }) => {
    const resData = smartSolutions.data.pageBy.servicesSection.servicesContent;
    const section1 = resData && resData[0] ? resData[0] :  []
    const section2 = resData && resData[1] ? resData[1] :  []
    const section3 = resData && resData[2] ? resData[2] :  []
    const section4 = resData && resData[3] ? resData[3] :  []
    const section5 = resData && resData[4] ? resData[4] :  []

    console.log("resDataDDDDDDDDDDDDDDDDDSSSSSSS" , resData)

    return (
        <SmartSolutions section1={section1} section2={section2} section3={section3} section4={section4} section5 = {section5}   />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            smartSolutions: await getsmartSolutionsData(),
        },
    };
}

export default SmartSolutionsIndustry;
