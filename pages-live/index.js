// import Navbar from "../components/Navbar/Navbar";
// import TopHeader from "../components/Navbar/TopHeader";

// import Banner from "../components/HomeOne/Banner";
// import Feature from "../components/HomeOne/Feature";
// import About from "../components/HomeOne/About";
// import Partner from "../components/Common/Partner";
// import Service from "../components/HomeOne/Service";
// import Websecurity from "../components/HomeOne/Websecurity";
// import ResourceArea from "../components/Common/ResourceArea";
// import Feedback from "../components/Common/Feedback";
// import LatestBlogPost from "../components/Common/LatestBlogPost";
// import CallToAction from "../components/Common/CallToAction";
// import Footer from "../components/Footer/Footer";

// fetch all data
// import getNavbarData from "../query/navbar/navData";
// import getHomeData from "../query/homeQuery/homeData";
// import getAllPosts from "../query/posts";
// import getAllResources from "../query/resourceQuery/allResourcesData";
import { it } from "date-fns/locale";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import getNewHomeData from "../query/newHome/newHome";

const Index = ({ home }) => {
  // console.log(newHome.data.pageBy.nihal.nihalLife[0].teamImage, "resos")
  const bannerData = home.data.pageBy.bannerSection.banner;
  const videoData = bannerData.filter(item => item.video)
  const singleImageData = bannerData.filter(item => item.singleImage)
  const referencesData = bannerData.filter(item => item.referencesSectionItems)
  const footerSectionData = bannerData.filter(item => item.footerSection)

  // const referencesData = home.data.pageBy.referencesSection.referencesSection;
  // const featureData = homeData.data.pageBy.featureSection;
  // const aboutData = homeData.data.pageBy.aboutSection;
  // const partnerData = homeData.data.pageBy.partnerSection;
  // const serviceData = homeData.data.pageBy.serviceSection;
  // const resourcesData = resources.data.resources.edges;
  // const securityData = homeData.data.pageBy.websecuritySection;
  // const feedbackData = homeData.data.pageBy.feedbackSection;
  // const logoData = homeData.data.pageBy.homeLogo;
  // const callToActionData = homeData.data.pageBy.callToAction;
  // const posts = homePosts.data.posts.edges;
  console.log("bannerDataTTTTTT", singleImageData)

  return (
    <>
      {/* <Header/> */}
      <Banner banner={bannerData} singleImageData={singleImageData} video={videoData} references={referencesData} footerSection={footerSectionData} />
      <Footer />
      {/* <TopHeader /> */}

      {/* <Navbar logoData={logoData} />

      <Banner bannerData={bannerData} />

      <Feature featureData={featureData} />

      <About aboutData={aboutData} />

      <Partner partnerData={partnerData} />

      <Service serviceData={serviceData} />

      <Websecurity securityData={securityData} />

      <ResourceArea resourcesData={resourcesData} />

      <Feedback feedbackData={feedbackData} bgColor="bg-f5f8ff" />

      <LatestBlogPost posts={posts} />

      <CallToAction callToActionData={callToActionData} />

      <Footer /> */}
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      // navData: await getNavbarData(),
      // homeData: await getHomeData(),
      // homePosts: await getAllPosts(),
      // resources: await getAllResources(),
      home: await getNewHomeData()
    },
  };
}

export default Index;
