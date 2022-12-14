import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

const SearchArea = ({ posts: { posts } }) => {
  return (
    <>
      <div className='blog-area ptb-100'>
        <div className='container'>
          <div className='row'>
            {posts &&
              posts.nodes.map((post, i) => (
                <div className='col-lg-4 col-md-6' key={i}>
                  <div className='single-blog-post'>
                    <div className='image'>
                      <Link href={`/post/${post.slug}`}>
                        <a className='d-block'>
                          {post.featuredImage && (
                            <img
                              src={post.featuredImage.node.sourceUrl}
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
                        <li>{format(new Date(post.date), 'PPP')}</li>
                      </ul>
                      <h3>
                        <Link href={`/post/${post.slug}`}>
                          <a>{post.title}</a>
                        </Link>
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.content.slice(0, 100),
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchArea;
