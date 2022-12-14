import Link from 'next/link';

const TeamArea = ({ teamData }) => {
  const { teamsMember } = teamData;
  return (
    <>
      <div className='team-area ptb-100 bg-f5f8ff'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Team of Experts</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <div className='row justify-content-center'>
            {teamsMember &&
              teamsMember.slice(0, 3).map((item, i) => (
                <div className='col-lg-4 col-md-6 col-sm-6' key={i}>
                  <div className='single-team-member'>
                    <img src={item.teamImage.sourceUrl} alt='team-member' />
                    <div className='content'>
                      <h3>
                        {item.teamName} <span>{item.teamDesignation}</span>
                      </h3>
                      <p>{item.teamDescription}</p>
                      <ul className='social-links'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank'>
                            <i className='lni lni-facebook-filled'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.twitter.com/' target='_blank'>
                            <i className='lni lni-twitter-original'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank'>
                            <i className='lni lni-instagram-original'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.youtube.com/' target='_blank'>
                            <i className='lni lni-youtube'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='view-more-box'>
                <Link href='/team'>
                  <a className='default-btn'>
                    <span>View All Expert</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
              
        {/* shape Images */}
        <div className='shape2'>
          <img src='/img/shape/shape2.png' alt='shape' />
        </div>
        <div className='shape3'>
          <img src='/img/shape/shape3.png' alt='shape' />
        </div>
        <div className='shape4'>
          <img src='/img/shape/shape4.png' alt='shape' />
        </div>
      </div>
    </>
  );
};

export default TeamArea;
