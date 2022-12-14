import React from 'react';

const ServiceContent = ({ serviceContentData }) => {
  return (
    <>
      <div className='services-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-md-12'>
              <div className='services-details-content'>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: serviceContentData.serviceContentTitle,
                  }}
                />
              </div>
            </div>
            <div className='col-lg-7 col-md-12'>
              <div className='services-details-text'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: serviceContentData.serviceContentDescription,
                  }}
                />
              </div>
            </div>
            <div className='col-lg-12 col-md-12'>
              <div className='services-details-image'>
                <img
                  src={serviceContentData.serviceContentImage.sourceUrl}
                  alt='services-details-image'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceContent;
