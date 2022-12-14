import getFinanceData from "../query/Industries/finance";
import Finance from '../components/Industries/Finance';


const FinanceIndustry = ({ finance }) => {
    // Industries Page Content
    const financeData = finance.data.pageBy.industriesContents.industriesPageContent;
    return (
        <Finance financeData={financeData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            finance: await getFinanceData()

        },
    };
}

export default FinanceIndustry;
