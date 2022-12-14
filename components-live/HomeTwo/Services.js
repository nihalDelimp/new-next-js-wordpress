import Link from 'next/link';

const Services = ({ serviceData }) => {
  const { serviceTitle, serviceSubtitle, serviceItems } = serviceData;
  return (
    <>
      <div className='services-area pt-100 pb-75 bg-f5f8ff'>
        <div className='container'>
          <div className='section-title'>
            <h2>{serviceTitle}</h2>
            <p>{serviceSubtitle}</p>
          </div>

          <div className='row justify-content-center'>
            {serviceItems &&
              serviceItems.slice(0, 6).map((item, i) => (
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

          <div className="view-more-box">
            <Link href="/service">
              <a className="default-btn"><span>View More Services</span></a>
            </Link>
          </div>
        </div>
              
        {/* Shape Images */}
        <div className="shape1">
          <img src="/img/shape/shape1.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/img/shape/shape3.png" alt="shape" />
        </div>
        <div className="shape6">
          <img src="/img/shape/shape6.png" alt="shape" />
        </div>
        <div className="shape11">
          <img src="/img/shape/shape11.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default Services;
