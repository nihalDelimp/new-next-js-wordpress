import React from 'react';

const FeedbackArea = ({ feedbackData }) => {
  const { feedbackItems } = feedbackData;
  return (
    <>
      <div className='feedback-area pt-100 pb-75'>
        <div className='container'>
          <div className='row justify-content-center'>
            {feedbackItems &&
              feedbackItems.map((item, i) => (
                <div className='col-xl-4 col-lg-6 col-md-6' key={i}>
                  <div className='single-feedback-box bg-f9f9f9'>
                    <p>
                    {item.feedbackItemsDescription}
                    </p>
                    <div className='client-info'>
                      <div className='d-flex align-items-center'>
                        <img src={item.feedbackItemsImage.sourceUrl} alt='author' />
                        <div className='title'>
                          <h3>
                          {item.feedbackItemsName} <span>- TV Model</span>
                          </h3>
                          <div className='rating'>
                            <i className='lni lni-star-filled'></i>
                            <i className='lni lni-star-filled'></i>
                            <i className='lni lni-star-filled'></i>
                            <i className='lni lni-star-filled'></i>
                            <i className='lni lni-star-filled'></i>
                          </div>
                        </div>
                      </div>
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

export default FeedbackArea;
