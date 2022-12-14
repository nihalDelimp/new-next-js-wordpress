import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Banner = ({ bannerData }) => {
  const { bannerItem } = bannerData;
  return (
    <>
      <div className="banner-area">
        <div className="container-fluid">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="home-slides"
          >
            {bannerData && bannerItem.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="banner-item">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                      <div className="banner-content">
                        <h1>{item.title}</h1>
                        <p>
                          {item.shortDescription}
                        </p>

                        <div className="btn-box d-flex align-items-center">
                          <Link href={item.getStartedBtnLink}>
                            <a className="default-btn">
                              <span>{item.getStartedBtnText}</span>
                            </a>
                          </Link>
                          <Link href={item.aboutBtnLink}>
                            <a className="link-btn">
                              {item.aboutBtnText}{" "}
                              <i className="lni lni-chevron-right"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                      <div className="banner-image">
                        <img src={item.image.sourceUrl} alt="banner-image" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src="/img/shape/shape1.png" alt="shape" />
        </div>
        <div className="shape2">
          <img src="/img/shape/shape2.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/img/shape/shape3.png" alt="shape" />
        </div>
        <div className="shape4">
          <img src="/img/shape/shape4.png" alt="shape" />
        </div>
        <div className="shape5">
          <img src="/img/shape/shape5.png" alt="shape" />
        </div>
        <div className="shape12">
          <img src="/img/shape/shape3.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default Banner;
