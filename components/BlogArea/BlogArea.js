import { format } from 'date-fns';
import Link from 'next/link';
import Pagination from './Pagination';

const BlogArea = ({ posts, pagination }) => {
  return (
    <>
      <div className='blog-area ptb-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            {posts &&
              posts.map((post, i) => (
                <div className='col-lg-4 col-md-6' key={i}>
                  <div className='single-blog-post'>
                    <div className='image'>
                    <Link href={`/post/${post.node.slug}`}>
                      <a className='d-block'>
                        {post.node.featuredImage && (
                          <img
                            src={post.node.featuredImage.node.sourceUrl}
                            alt='blog-image'
                          />
                        )}
                      </a>
                      </Link>
                    </div>
                    <div className='content'>
                      <ul className='meta'>
                        <li>
                          <a>Security</a>
                        </li>
                       
                        <li>{format(new Date(post.node.date), 'PPP')}</li>
                      </ul>
                      <h3>
                        <Link href={`/post/${post.node.slug}`}>
                          <a>{post.node.title}</a>
                        </Link>
                      </h3>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.node.content.slice(0, 100),
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}

            <div className='col-lg-12 col-md-12'>
              <Pagination
                currentPage={pagination?.currentPage}
                pagesCount={pagination?.pagesCount}
                basePath={pagination?.basePath}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArea;
