import React from "react";
import ResourceContent from "./ResourceContent";
import ResourceHeader from "./ResourceHeader";

const ResourceDetailsArea = ({ resourceDetailsData }) => {
  const { 
    title, 
    content,
    featuredImage, 
    resourceDetails 
  } = resourceDetailsData;
  return (
    <>
      <div className="case-studies-details-area ptb-100">
        <div className="container">
          <div className="case-studies-details-header row align-items-center justify-content-center">
            <ResourceHeader 
              title={title} 
              content={content}
              featuredImage={featuredImage} 
              resourceDetails={resourceDetails} 
            />
          </div>

          <div className="case-studies-details-desc">
            <div className="article-content">
              <ResourceContent 
                resourceDetails={resourceDetails} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceDetailsArea;
