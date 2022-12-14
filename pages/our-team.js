import getOurTeamData from "../query/aboutUs/ourTeam";
import OurTeams from '../components/AboutUs/OurTeam';

const OurTeam = ({ ourTeam }) => {
    const resData = ourTeam.data.pageBy.aboutSection.aboutUsContent;
    const headerData = ourTeam.data.pageBy.industriesContents.industriesPageContent

    const tabContainer = resData && resData[0] ? resData[0]?.tabContainer : []
    const tabMenuItems = resData && resData[0] ? resData[0]?.tabMenuItems : []

    console.log("resDataOurTeam" , resData)

    return (
        <OurTeams tabContainer = {tabContainer}  tabMenuItems = {tabMenuItems} headerData = {headerData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            ourTeam: await getOurTeamData(),
        },
    };
}

export default OurTeam;
