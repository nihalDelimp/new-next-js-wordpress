import { format } from 'date-fns';

const Description = ({ post }) => {
  const {
    title,
    content,
    date,
    featuredImage: {
      node: { sourceUrl },
    },
    comments,
  } = post.data.post;

  return (
    <>
      <div className='blog-details-desc'>
        <div className='post-thumb'>
          <img src={sourceUrl} alt='blog-details' />
        </div>

        <h4>{title}</h4>
        <div className='post-meta'>
          <ul>
            <li>
              <i className='lni lni-calendar'></i>{' '}
              {format(new Date(date), 'PPP')}
            </li>
            <li>
              <i className='lni lni-comments'></i>{' '}
              <a>{comments.nodes.length} Comments</a>
            </li>
          </ul>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>

        <div className='post-footer'>
          <div className='post-tags'>
            <span className='sub'>Tags:</span>
            <ul>
              <li>
                <a rel='tag'>Fashion</a>
              </li>
              <li>
                <a rel='tag'>Design</a>
              </li>
            </ul>
          </div>
          
          <div className='article-share'>
            <ul className='social'>
              <li>
                <span>Share:</span>
              </li>
              <li>
                <a href='https://www.facebook.com/' className='facebook' target='_blank'>
                  <i className='lni lni-facebook-filled'></i>
                </a>
              </li>
              <li>
                <a href='https://www.twitter.com/' className='twitter' target='_blank'>
                  <i className='lni lni-twitter-filled'></i>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/' className='linkedin' target='_blank'>
                  <i className='lni lni-linkedin'></i>
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/' className='instagram' target='_blank'>
                  <i className='lni lni-instagram-original'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
