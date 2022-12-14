import Link from 'next/link';

const ServiceArea = ({ service, readMore }) => {
  const { serviceItems } = service;
  return (
    <>
      <div className='services-area pt-100 pb-75 bg-f5f8ff'>
        <div className='container'>
          <div className='row justify-content-center'>
            {serviceItems &&
              serviceItems.map((item, i) => (
                <div className='col-lg-4 col-md-6' key={i}>
                  <div className='single-services-box'>
                    <div className='icon'>
                      <img
                        src={item.serviceItemIcon.sourceUrl}
                        alt='services-icon'
                      />
                    </div>
                    <h3>{item.serviceItemTitle}</h3>
                    <p>{item.serviceItemDescription}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Shape Images */}
        <div className='shape1'>
          <img src='/img/shape/shape1.png' alt='shape' />
        </div>
        <div className='shape3'>
          <img src='/img/shape/shape3.png' alt='shape' />
        </div>
        <div className='shape6'>
          <img src='/img/shape/shape6.png' alt='shape' />
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
