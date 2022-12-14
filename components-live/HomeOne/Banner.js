import Link from "next/link";

const Banner = ({ bannerData }) => {
  const {
    bannerTitle,
    bannerDescription,
    bannerImage,
    bannerButtonText,
    bannerButtonUrl,
  } = bannerData;
  return (
    <>
      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="main-banner-content">
                <h1>{bannerTitle}</h1>
                <p>{bannerDescription}</p>

                <div className="btn-box d-flex align-items-center">
                  <Link href={bannerButtonUrl}>
                    <a className="default-btn">
                      <span>{bannerButtonText}</span>
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="link-btn">
                      Know More About Us{" "}
                      <i className="lni lni-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div
                className="main-banner-image"
                data-speed="0.06"
                data-revert="true"
              >
                <img src={bannerImage.sourceUrl} alt="banner-image" />
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
      </div>
    </>
  );
};

export default Banner;
