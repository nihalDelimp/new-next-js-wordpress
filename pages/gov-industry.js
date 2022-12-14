import getGovermentData from "../query/Industries/government";
import Government from '../components/Industries/Government';


const GovernmentIndustry = ({ government }) => {
    const govermentData = government.data.pageBy.industriesContents.industriesPageContent;

    return (
        <Government govermentData={govermentData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            government: await getGovermentData()
        },
    };
}

export default GovernmentIndustry;
