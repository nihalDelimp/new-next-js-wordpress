import React from 'react';
import CountUp from 'react-countup';

const FunfactArea = () => {
  return (
    <>
      <div className='funfacts-area pb-75'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-3 col-sm-3 col-6 col-md-3'>
              <div className='single-funfacts-box'>
                <div className='icon'>
                  <img
                    src='/img/funfacts/funfacts-icon1.png'
                    alt='funfacts-icon'
                  />
                </div>
                <h3>
                  <span className='odometer' data-count='3k'>
                  <CountUp end={3} duration={5} />
                  </span>
                  <span className='sign'>k+</span>
                </h3>
                <p>Cyber Security Projects</p>
              </div>
            </div>

            <div className='col-lg-3 col-sm-3 col-6 col-md-3'>
              <div className='single-funfacts-box'>
                <div className='icon'>
                  <img
                    src='/img/funfacts/funfacts-icon2.png'
                    alt='funfacts-icon'
                  />
                </div>
                <h3>
                  <span className='odometer' data-count='1575'>
                  <CountUp end={1575} duration={5}/>
                  </span>
                </h3>
                <p>Customers Globally</p>
              </div>
            </div>

            <div className='col-lg-3 col-sm-3 col-6 col-md-3'>
              <div className='single-funfacts-box'>
                <div className='icon'>
                  <img
                    src='/img/funfacts/funfacts-icon3.png'
                    alt='funfacts-icon'
                  />
                </div>
                <h3>
                  <span className='odometer' data-count='250'>
                  <CountUp end={250} duration={5}/>
                  </span>
                  <span className='sign'>+</span>
                </h3>
                <p>Cyber Security Experts</p>
              </div>
            </div>

            <div className='col-lg-3 col-sm-3 col-6 col-md-3'>
              <div className='single-funfacts-box'>
                <div className='icon'>
                  <img
                    src='/img/funfacts/funfacts-icon4.png'
                    alt='funfacts-icon'
                  />
                </div>
                <h3>
                  <span className='odometer' data-count='100'>
                  <CountUp end={100} duration={5} />
                  </span>
                  <span className='sign'>%</span>
                </h3>
                <p>Client Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunfactArea;
