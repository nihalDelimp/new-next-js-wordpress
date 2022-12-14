import React from 'react';

const Websecurity = ({ securityData,mb100 }) => {
  const { websecurityItems } = securityData;

  return (
    <>
      <div className={`web-security-area bg-image1 ptb-100 ${mb100}`}>
        <div className='container'>
          <div className='web-security-content'>
            <h2>Complete Website Security</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className='features-list'>
              {websecurityItems &&
                websecurityItems.map((items, i) => (
                  <li key={i}>
                    <i className='lni lni-checkmark'></i> {items.websecurityTitle}
                  </li>
                ))}
            </ul>
            <div className='shape4'>
              <img src='/img/shape/shape4.png' alt='shape' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Websecurity;
