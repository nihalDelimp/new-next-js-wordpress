import React from 'react';
import Link from 'next/link';

const ResourceArea = ({ resources }) => {
  return (
    <>
      <div className='resources-area pt-100 pb-75'>
        <div className='container'>
          <div className='section-title'>
            <h2>Discover Our Latest Resources</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className='row justify-content-center'>
            {resources &&
              resources.slice(0, 3).map((item, i) => (
                <div className='col-xl-4 col-lg-6 col-md-6' key={i}>
                  <div className='resources-box'>
                    <div className='image'>
                      <Link href={`/resource/${item.node.slug}`}>
                        <a className='d-block'>
                        {item.node.featuredImage && (
                          <img
                            src={item.node.featuredImage.node.sourceUrl}
                            alt='resources-image'
                          />
                        )}
                        </a>
                      </Link>
                    </div>
                    <div className='content'>
                      <Link href={`/resource/${item.node.slug}`}>
                        <a className='category'>White Paper</a>
                      </Link>
                      <h3>
                        <Link href={`/resource/${item.node.slug}`}>
                          <a>{item.node.title}</a>
                        </Link>
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.node.content.slice(0, 100),
                        }}
                      />
                      <Link href={`/resource/${item.node.slug}`}>
                        <a className='link-btn'>
                          View Case Studie Details{' '}
                          <i className='lni lni-chevron-right'></i>
                        </a>
                      </Link>
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

export default ResourceArea;
