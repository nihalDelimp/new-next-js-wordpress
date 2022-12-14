import React from 'react';

const TermsConditionArea = ({ termsCondition }) => {
  const { termsConditionContent } = termsCondition;
  return (
    <>
      <div className='terms-conditions-area ptb-100'>
        <div className='container'>
          <div className='terms-conditions-content'>
            <div
              dangerouslySetInnerHTML={{
                __html: termsConditionContent,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditionArea;
