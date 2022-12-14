import React from "react";

const ResourceHeader = ({ title, featuredImage, content, resourceDetails }) => {
  const { technology, category, previewLinkText, previewLink } = resourceDetails;
  return (
    <>
      <div className="col-lg-6 col-md-12">
        <div className="image">
          <img src={featuredImage.node.sourceUrl} alt="resources-image" />
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="content">
          <h1>{title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />

          <ul className="meta">
            <li>
              <i className="lni lni-folder"></i>
              <span>Technology</span>
              <p>{technology}</p>
            </li>
            <li>
              <i className="lni lni-tag"></i>
              <span>CATEGORY</span>
              <p>{category}</p>
            </li>
            <li>
              <i className="lni lni-chrome"></i>
              <span>LINK</span>
              <a href={previewLink} target="_blank">
                {previewLinkText}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResourceHeader;
