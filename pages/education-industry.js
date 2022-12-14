import getEducationData from "../query/Industries/education";
import Education from '../components/Industries/Education';


const EductionIndustry = ({ education }) => {
    const educationData = education.data.pageBy.industriesContents.industriesPageContent;
    return (
        <Education educationData={educationData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            education: await getEducationData()
        },
    };
}

export default EductionIndustry;
