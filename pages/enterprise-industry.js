import getEnterpriseData from "../query/Industries/enterprise";
import EnterPrise from '../components/Industries/Enterprise';

const Index = ({ enterprise }) => {
    const enterPriseData = enterprise.data.pageBy.industriesContents.industriesPageContent;

    return (
        <EnterPrise enterPriseData={enterPriseData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            enterprise: await getEnterpriseData()

        },
    };
}

export default Index;
