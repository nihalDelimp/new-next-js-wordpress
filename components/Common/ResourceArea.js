import Link from 'next/link';

const ResourceArea = ({ resourcesData }) => {
  return (
    <>
      <div className='resources-area pt-100 pb-75'>
        <div className='container'>
          <div className='section-title'>
            <h2>Exploressss Valuable Cybersecurity Resources</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <div className='row justify-content-center'>
            {resourcesData &&
              resourcesData.map((post, i) => (
                <div className='col-lg-6 col-md-6' key={i}>
                  <div className='single-resources-box'>
                    <div className='image'>
                      <Link href={`/resource/${post.node.slug}`}>
                        <a className='d-block'>
                          {post.node.featuredImage && (
                            <img
                              src={post.node.featuredImage.node.sourceUrl}
                              alt='resources-image'
                            />
                          )}
                        </a>
                      </Link>
                    </div>
                    <div className='content'>
                      <h3>
                        <Link href={`/resource/${post.node.slug}`}>
                          <a>{post.node.title}</a>
                        </Link>
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.node.content.slice(0, 200),
                        }}
                      />
                      <Link href={`/resource/${post.node.slug}`}>
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

        {/* Shape Images */}
        <div className='shape1'>
          <img src='/img/shape/shape1.png' alt='shape' />
        </div>
        <div className='shape4'>
          <img src='/img/shape/shape4.png' alt='shape' />
        </div>
        <div className='shape6'>
          <img src='/img/shape/shape6.png' alt='shape' />
        </div>
        <div className='shape7'>
          <img src='/img/shape/shape7.png' alt='shape' />
        </div>
      </div>
    </>
  );
};

export default ResourceArea;
