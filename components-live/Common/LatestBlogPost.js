import { format } from 'date-fns';
import Link from 'next/link';

const LatestBlogPost = ({ posts }) => {
  return (
    <>
      <div className='blog-area pt-100 pb-75'>
        <div className='container'>
          <div className='section-title'>
            <h2>Latest Blog Post</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className='row justify-content-center'>
            {posts &&
              posts.slice(0, 3).map((item, i) => (
                <div className='col-lg-4 col-md-6' key={i}>
                  <div className='single-blog-post'>
                    <div className='image'>
                      <Link href={`/post/${item.node.slug}`}>
                        <a className='d-block'>
                          <img
                            src={item.node.featuredImage.node.sourceUrl}
                            alt='blog-image'
                          />
                        </a>
                      </Link>
                    </div>
                    <div className='content'>
                      <ul className='meta'>
                        <li>
                          <a>Security</a>
                        </li>
                        <li>{format(new Date(item.node.date), 'PPP')}</li>
                      </ul>
                      <h3>
                        <Link href={`/post/${item.node.slug}`}>
                          <a>{item.node.title}</a>
                        </Link>
                      </h3>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.node.content.slice(0, 200),
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className='shape2'>
          <img src='/img/shape/shape2.png' alt='shape' />
        </div>
        <div className='shape6'>
          <img src='/img/shape/shape6.png' alt='shape' />
        </div>
      </div>
    </>
  );
};

export default LatestBlogPost;
