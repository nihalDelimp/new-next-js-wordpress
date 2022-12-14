import getaboutDigitalSolutionsData from "../query/aboutUs/aboutDigitalSolutions";
import AboutDigitalSolutions from '../components/AboutUs/AboutDigitalSolutions';

const AboutUsDigitalSolution = ({ aboutDigitalSolutions }) => {
    const headerData = aboutDigitalSolutions.data.pageBy.industriesContents.industriesPageContent

    const bannerData = aboutDigitalSolutions.data.pageBy.bannerSection.banner
    const videoData = bannerData.filter(item => item.video)

    const nndustriescontents = aboutDigitalSolutions.data.pageBy.industriesContents.industriesPageContent
    let ourTopClients = nndustriescontents.filter(item => item.heading === 'Our Top Clients')
    let ourPartners = nndustriescontents.filter(item => item.heading === 'Our Partners')
    ourTopClients = ourTopClients[0]
    ourPartners = ourPartners[0]
    const resData = aboutDigitalSolutions.data.pageBy.aboutSection.aboutUsContent;
    const aboutUs = resData && resData[0] ? resData[0] : {}
    const downloadIcon = resData && resData[1] ? resData[1] : {}
    const testimonials = resData && resData[2] ? resData[2] : {}

  
    return (
        <AboutDigitalSolutions
            aboutUs={aboutUs}
            downloadIcon={downloadIcon}
            headerData={headerData}
            testimonials={testimonials}
            video={videoData}
            ourTopClients = {ourTopClients}
            ourPartners = {ourPartners}
        />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            aboutDigitalSolutions: await getaboutDigitalSolutionsData(),
        },
    };
}

export default AboutUsDigitalSolution;
