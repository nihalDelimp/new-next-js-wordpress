import React from "react";

const WebsiteSecurity = ({ securityData }) => {
  const { websecurityItems } = securityData;
  return (
    <>
      <div className="security-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="security-image">
                <img src="/img/security-bg.jpg" alt="security-bg" />
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="security-content">
                <div className="content">
                  <h2>Complete Website Security</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <ul className="features-list">
                    {websecurityItems &&
                      websecurityItems.map((items, i) => (
                        <li key={i}>
                          <i className="lni lni-checkmark"></i>{" "}
                          {items.websecurityTitle}
                        </li>
                      ))}
                  </ul>

                  {/* Shape Images */}
                  <div className="shape4">
                    <img src="/img/shape/shape4.png" alt="shape" />
                  </div>
                  <div className="shape2">
                    <img src="/img/shape/shape2.png" alt="shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteSecurity;
