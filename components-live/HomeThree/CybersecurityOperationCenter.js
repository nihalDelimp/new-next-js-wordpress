import React from "react";

const CybersecurityOperationCenter = ({ operationCenterData }) => {
  const { 
    operationImage, 
    title, 
    shortText, 
    operationCenterList 
  } = operationCenterData;
  return (
    <>
      <div className="operation-center-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="operation-center-image">
                <img
                  src={operationImage.sourceUrl}
                  alt="operation-center-image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="operation-center-content">
                <h2>{title}</h2>
                <p>{shortText}</p>

                <ul className="features-list">
                  {operationCenterData &&
                    operationCenterData.operationCenterList.map(
                      (feature, i) => (
                        <li key={i}>
                          <span>
                            <i className="lni lni-checkmark"></i>{" "}
                            {feature.listTitle}
                          </span>
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2">
          <img src="/img/shape/shape2.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/img/shape/shape3.png" alt="shape" />
        </div>
        <div className="shape4">
          <img src="/img/shape/shape4.png" alt="shape" />
        </div>
        <div className="shape6">
          <img src="/img/shape/shape6.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default CybersecurityOperationCenter;
