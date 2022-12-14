import React from 'react';

const Feature = ({ featureData }) => {
  const { featureItems } = featureData;
  return (
    <>
      <div className='features-area pb-75'>
        <div className='container'>
          <div className='row justify-content-center'>
            {featureItems &&
              featureItems.map((feature, i) => (
                <div className='col-lg-4 col-md-6' key={i}>
                  <div className='single-features-box'>
                    <div className='icon'>
                      <img
                        src={feature.featureIcon.sourceUrl}
                        alt='services-icon'
                      />
                    </div>
                    <h3>{feature.featureTitle}y</h3>
                    <p>{feature.featureDescription}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
