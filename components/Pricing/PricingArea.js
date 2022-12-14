import Link from "next/link";

const PricingArea = ({ pricing }) => {
  const { pricingDetails } = pricing;
  return (
    <>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            {pricingDetails &&
              pricingDetails.map((item, i) => (
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6" key={i}>
                  <div className="single-pricing-box">
                    <div className="pricing-header">
                      <h3>{item.pricingTitle}</h3>
                      <p>{item.pricingSubtitle}</p>
                    </div>
                    <div className="price">
                      <h4>
                        {item.pricingPrice}
                        <span>/{item.pricingDuration}</span>
                      </h4>
                      <p>{item.pricingComment}</p>
                    </div>
                    <Link href="#">
                      <a className="link-btn">{item.pricingButton}</a>
                    </Link>
                    <div className="features-list">
                      <h5>ALL FEATURES:</h5>
                      <ul>
                        {item.pricingFeatures &&
                          item.pricingFeatures.map((feature, i) => (
                            <li key={i}>
                              <i className="lni lni-checkmark"></i>{" "}
                              {feature.pricingSingleFeature}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingArea;
