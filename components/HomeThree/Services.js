import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Services = ({ serviceData }) => {
  const { serviceTitle, serviceSubtitle, serviceItems } = serviceData;
  return (
    <>
      <div className='services-area ptb-100 bg-image'>
        <div className='container'>
          <div className='section-title'>
            <h2>{serviceTitle}</h2>
            <p>{serviceSubtitle}</p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="services-slides"
          > 
            {serviceItems &&
              serviceItems.slice(0, 5).map((item, i) => (
                <SwiperSlide key={i}>
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
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="view-more-box">
            <Link href="/services">
              <a className="default-btn"><span>View More Services</span></a>
            </Link>
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

export default Services;
