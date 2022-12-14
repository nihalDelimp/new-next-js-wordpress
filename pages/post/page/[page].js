
const Posts = () => {

  // const logoData = homeData.data.pageBy.homeLogo;
  // const partnerData = homeData.data.pageBy.partnerSection;
  // const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      Heloo 2
      {/* <TopHeader />

      <Navbar logoData={logoData} />

      <Pagebanner pageName='Blog' />

      <BlogArea posts={posts} pagination={pagination} />

      <CallToAction callToActionData={callToActionData} />

      <Partner partnerData={partnerData} />
      
      <Footer /> */}
    </>
  );
};

// export async function getServerSideProps({ query }) {
//   const page = query.page ? query.page : '1';
//   const res = await getPaginatedPosts(page);
//   // const homeData = await getHomeData();

//   return {
//     props: {
//       posts: res.posts,
//       pagination: {
//         ...res.pagination,
//         basePath: '/post',
//       },
//       homeData
//     },
//   };
// }

export default Posts;
