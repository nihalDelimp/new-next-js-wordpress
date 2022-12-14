import React from 'react';

const PrivacyPolicyArea = ({ privacy }) => {
  const { privacyPolicyContent } = privacy;
  return (
    <>
      <div className='privacy-policy-area ptb-100'>
        <div className='container'>
          <div className='privacy-policy-content'>
            <div
              dangerouslySetInnerHTML={{
                __html: privacyPolicyContent,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyArea;
