import React, { useState } from 'react';
import Link from 'next/link';

const FaqArea = ({ faqData }) => {
  const { faqItems } = faqData;

  //faq tab toggle
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      <div className='faq-area ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Frequently Asked Questions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          
          <div className='row'>
            <div className='col-lg-4 col-md-12'>
              <div className='faq-sidebar'>
                <ul>
                  <li>
                    <Link href='/terms-condition'>
                      <a className='active'>Help Center</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/privacy-policy'>
                      <a>Shipping Information</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/terms-condition'>
                      <a>Return Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/terms-condition'>
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/privacy-policy'>
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-8 col-md-12'>
              <div className='faq-accordion accordion' id='faqAccordion'>
                {faqItems &&
                  faqItems.map((item, index) => (
                    <div
                      className='accordion-item'
                      key={index}
                      onClick={() => toggle(index)}
                    >
                      <button className='accordion-button' type='button'>
                        {item.faqItemTitle}
                        <i className='lni lni-chevron-down'></i>
                      </button>
                      <div
                        id='collapseOne'
                        className={
                          clicked === index
                            ? 'accordion-collapse show'
                            : 'accordion-collapse collapse'
                        }
                      >
                        {clicked === index && (
                          <div
                            className='accordion-body'
                            dangerouslySetInnerHTML={{
                              __html: item.faqItemDescription,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;
