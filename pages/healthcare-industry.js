import getHealthcareData from "../query/Industries/healthcare";
import Healthcare from '../components/Industries/Healthcare';

const HealthcareIndustry = ({ healthcare }) => {
    const healthcareData = healthcare.data.pageBy.industriesContents.industriesPageContent;
    return (
        <Healthcare healthcareData={healthcareData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            healthcare: await getHealthcareData()

        },
    };
}

export default HealthcareIndustry;
