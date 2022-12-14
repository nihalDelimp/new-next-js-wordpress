import getCommunicationData from "../query/Industries/communication";
import Communication from './../components/Industries/Communication';

const CommunicationIndustry = ({ communication, }) => {

    const communicationData = communication.data.pageBy.industriesContents.industriesPageContent;
    return (
        <Communication communicationData={communicationData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            communication: await getCommunicationData()

        },
    };
}

export default CommunicationIndustry;
