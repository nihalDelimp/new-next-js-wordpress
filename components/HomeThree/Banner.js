import React, { useState } from "react";
import Link from "next/link";
import Feature from "./Feature";

const Banner = ({ bannerData, featureData }) => {
  const {
    bannerTitle,
    bannerContent,
    getStartedText,
    getStartedLink,
    aboutBtnText,
    aboutBtnLink,
    bannerBgImage,
    videoLink,
  } = bannerData;

  const [isActiveVideoModal, setActiveVideoModal] = useState("false");
  const handleToggleVideoModal = () => {
    setActiveVideoModal(!isActiveVideoModal);
  };

  return (
    <>
      <div
        className="banner-wrapper-area"
        style={{ backgroundImage: `url(${bannerBgImage.sourceUrl})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="banner-wrapper-content">
                <h1>{bannerTitle}</h1>
                <p>{bannerContent}</p>
                <div className="btn-box d-flex align-items-center">
                  <Link href={getStartedLink}>
                    <a className="default-btn">
                      <span>{getStartedText}</span>
                    </a>
                  </Link>
                  <Link href={aboutBtnLink}>
                    <a className="link-btn">
                      {aboutBtnText} <i className="lni lni-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="banner-wrapper-video">
                <div className="video-btn" onClick={handleToggleVideoModal}>
                  <i className="lni lni-play"></i>
                </div>
              </div>
            </div>
          </div>

          <Feature featureData={featureData} />
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src="/img/shape/shape1.png" alt="shape" />
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
      </div>

      {/* Popup Video */}
      <div className={`popup-video ${isActiveVideoModal ? "" : "show"}`}>
        <div className="container h-100">
          <div className="d-table">
            <div className="d-table-cell">
              <i
                className="lni lni-close close-popup"
                onClick={handleToggleVideoModal}
              ></i>
              <div className="iframe-content">
                <iframe
                  className="responsive-iframe"
                  src={videoLink}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
