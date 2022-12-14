import React from 'react';
// import Footer from '../../components/Footer/Footer';
// import Navbar from '../../components/Navbar/Navbar';
// import TopHeader from '../../components/Navbar/TopHeader';
// import Comments from '../../components/SinglePost/Comments';
// import Description from '../../components/SinglePost/Description';
// import Sidebar from '../../components/SinglePost/Sidebar';

// fetch data
// import getSinglePost from '../../query/single-post';
// import getHomeData from '../../query/homeQuery/homeData';


const Post = () => {
  // const Post = ({ post, homeData }) => {

  // const logoData = homeData.data.pageBy.homeLogo;

  return (
    <>
      {/* <header className='header-area'>
        <TopHeader />

        <Navbar logoData={logoData} />
      </header>

      <div className='blog-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12'>
              <Sidebar
                widgets={post.data.post}
              />
            </div>

            <div className='col-lg-8 col-md-12'>
              <Description
                post={post}
              />

              <Comments
                id={post.data.post.databaseId}
                comments={post.data.post.comments.nodes}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer /> */}
      Heklloo
    </>
  );
};

// export async function getServerSideProps({ query }) {
//   // const post = await getSinglePost(query.slug);
//   const homeData = await getHomeData();

//   return {
//     props: {
//       post,
//       homeData
//     },
//   };
// }

export default Post;
