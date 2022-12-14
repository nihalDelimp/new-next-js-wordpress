import React from "react";

const Banner = ({ homeTwoBannerData }) => {
  const {
    bannerTitle,
    bannerContent,
    bannerImage,
  } = homeTwoBannerData;
  return (
    <>
      <div className="banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="banner-content">
                <h1>{bannerTitle}</h1>
                <p>{bannerContent}</p>

                <form>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input-newsletter"
                  />
                  <button type="submit" className="default-btn">
                    <span>Get A Free Quote</span>
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="banner-image">
                <img 
                  src={bannerImage.sourceUrl} 
                  alt="Banner Image" 
                />
              </div>
            </div>
          </div>
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
