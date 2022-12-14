import React from 'react';

const TeamArea = ({ teamData }) => {
  const { teamsMember } = teamData;
  return (
    <>
      <div className='team-area pt-100 pb-75 bg-f5f8ff'>
        <div className='container'>
          <div className='row justify-content-center'>
            {teamsMember &&
              teamsMember.map((item, i) => (
                <div className='col-lg-4 col-md-6 col-sm-6' key={i}>
                  <div className='single-team-member'>
                    <img 
                      src={item.teamImage.sourceUrl} 
                      alt='team-member' 
                    />

                    <div className='content'>
                      <h3>
                        {item.teamName} <span>{item.teamDesignation}</span>
                      </h3>

                      <p>{item.teamDescription}</p>
                      
                      <ul className='social-links'>
                        <li>
                          <a href='https://facebook.com/' target='_blank'>
                            <i className='lni lni-facebook-filled'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank'>
                            <i className='lni lni-twitter-original'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://instagram.com/' target='_blank'>
                            <i className='lni lni-instagram-original'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://youtube.com/' target='_blank'>
                            <i className='lni lni-youtube'></i>
                          </a>
                        </li>
                      </ul>
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

export default TeamArea;
