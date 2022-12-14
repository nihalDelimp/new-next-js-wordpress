import React from 'react';

const AboutArea = ({ aboutData, ptb100 }) => {
  const { aboutTitle, aboutSubtitle, aboutItems } = aboutData;
  return (
    <>
      <div className='about-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='about-image bg-image2'>
                <img src='/img/about/about2.jpg' alt='about-image' />
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='about-content'>
                <h2>{aboutTitle}</h2>
                <p>{aboutSubtitle}</p>
                
                <ul className='features-list'>
                  {aboutItems &&
                    aboutItems.map((item, i) => (
                      <li key={i}>
                        <img src={item.aboutItemImage.sourceUrl} alt='icon' />
                        <h3>{item.aboutItemTitle}</h3>
                        <p>{item.aboutItemSubtitle}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='shape3'>
          <img src='/img/shape/shape3.png' alt='shape' />
        </div>
      </div>
    </>
  );
};

export default AboutArea;
