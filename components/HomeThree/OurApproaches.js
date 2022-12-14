import React from "react";

const OurApproaches = ({ ourApproachesData }) => {
  const { 
    title,
    shortText,
    approachList,
  } = ourApproachesData;
  return (
    <>
      <div className="approach-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2>{title}</h2>
            <p>
              {shortText}
            </p>
          </div>

          <div className="row justify-content-center">
            {ourApproachesData && approachList.map((approach, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="single-approach-box">
                  <div className="icon">
                    <img src={approach.icon.sourceUrl} alt="icon" />
                  </div>
                  <h3>{approach.title}</h3>
                  <p>
                    {approach.shortText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurApproaches;
