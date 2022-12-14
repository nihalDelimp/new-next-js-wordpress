import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Feedback = ({ feedbackData, bgColor }) => {
  const { feedbackItems } = feedbackData;
  return (
    <>
      <div className={`feedback-area ptb-100 ${bgColor} `}>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Trusted Clients Feedback</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
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
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="feedback-slides"
          > 
            {feedbackItems &&
              feedbackItems.slice(0, 5).map((item, i) => (
                <SwiperSlide key={i}>
                  <div className='single-feedback-box'>
                    <p>{item.feedbackItemsDescription}</p>
                    <div className='client-info'>
                      <div className='d-flex align-items-center'>
                        <img
                          src={item.feedbackItemsImage.sourceUrl}
                          alt='author'
                        />
                        <div className='title'>
                          <h3>
                            {item.feedbackItemsName} <span>- TV Model</span>
                          </h3>
                          <div className='rating'>
                            <i className='lni lni-star-filled'></i>
                            <i className='lni lni-star-filled'></i>
                            <i className='lni lni-star-filled'></i>
                            <i className='lni lni-star-filled'></i>
                            <i className='lni lni-star-filled'></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        
        {/* Shape Images */}
        <div className='shape3'>
          <img src='/img/shape/shape3.png' alt='shape' />
        </div>
        <div className='shape8'>
          <img src='/img/shape/shape8.png' alt='shape' />
        </div>
      </div>
    </>
  );
};

export default Feedback;
