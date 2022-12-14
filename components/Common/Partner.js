import React from 'react';

const Partner = ({ partnerData }) => {
  const { partner } = partnerData;
  return (
    <>
      <div className='partner-area pb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-3 col-md-12'>
              <div className='partner-title'>
                <h4>Our Valuable Clients</h4>
              </div>
            </div>
            <div className='col-lg-9 col-md-12'>
              <div className='partners-list align-items-center'>
                {partner &&
                  partner.map((item, i) => (
                    <div className='partner-item' key={i}>
                      <img src={item.partnerImage.sourceUrl} alt='partner' />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
