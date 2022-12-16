import getOurTeamData from "../query/aboutUs/ourTeam";
import OurTeams from '../components/AboutUs/OurTeam';

const OurTeam = ({ ourTeam }) => {
    const resData = ourTeam.data.pageBy.ourTeamProfile.candidateProfile;
    const headerData = ourTeam.data.pageBy.industriesContents.industriesPageContent

    return (
        <OurTeams resData={resData} headerData={headerData} />
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