import React from 'react';

const ResourceContent = ({ resourceDetails }) => {
  const { resourceContentItems } = resourceDetails;
  return (
    <>
      {resourceContentItems &&
        resourceContentItems.map((item, i) => (
          <div className='row mb-40' key={i}>
            <div className='col-lg-5 col-md-12'>
              <h2>
                <span>{item.resourceContentTitle}</span>
              </h2>
            </div>
            <div className='col-lg-7 col-md-12'>
              <div className='content'>
                <h3>{item.resourceContentSubtitle}</h3>
 
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.resourceContentDescription,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ResourceContent;
