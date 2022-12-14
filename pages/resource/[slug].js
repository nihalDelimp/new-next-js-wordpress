// import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import TopHeader from '../../components/Navbar/TopHeader';
// import ResourceDetailsArea from '../../components/ResourceDetails/ResourceDetailsArea';
// import RelatedPost from '../../components/ResourceDetails/RelatedPost';
// import CallToAction from '../../components/Common/CallToAction';
// import Footer from '../../components/Footer/Footer';

// // fetch resource data
// import getAllResources from '../../query/resourceQuery/allResourcesData';
// import getSingleResource from '../../query/resourceQuery/singleResourceData';
// import getHomeData from '../../query/homeQuery/homeData';

const ResourceDetails = () => {
  // const ResourceDetails = ({ resourceDetails, resources, homeData }) => {

  // const resourceDetailsData = resourceDetails.data.resource;
  // const relatedResources = resources.data.resources.edges;
  // const logoData = homeData.data.pageBy.homeLogo;
  // const callToActionData = homeData.data.pageBy.callToAction;

  // console.log(resourceDetails)

  return (
    <>
      Heloo footer
      {/* <TopHeader />

      <Navbar logoData={logoData} />

      <ResourceDetailsArea resourceDetailsData={resourceDetailsData} />

      <RelatedPost relatedResources={relatedResources} />

      <CallToAction callToActionData={callToActionData} />

      <Footer /> */}
    </>
  );
};

// export async function getServerSideProps({ query }) {

//   return {
//     props: {
//       resourceDetails: await getSingleResource(query.slug),
//       resources: await getAllResources(),
//       homeData: await getHomeData()
//     },
//   };
// }

export default ResourceDetails;
