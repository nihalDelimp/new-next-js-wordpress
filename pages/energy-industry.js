import getEnergyData from "../query/Industries/energy";
import Energy from '../components/Industries/EnergyAndUtility';

const EnergyIndustry = ({ energy }) => {
    // Industries Page Content
    const energyData = energy.data.pageBy.industriesContents.industriesPageContent;
    return (
        <Energy energyData={energyData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            energy: await getEnergyData()
        },
    };
}

export default EnergyIndustry;