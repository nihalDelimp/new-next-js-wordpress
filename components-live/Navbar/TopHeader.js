import React from 'react';
import Link from 'next/link';

const TopHeader = () => {
  return (
    <>
      <div className='top-header-area'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <ul className='top-header-contact-info'>
                <li>
                  <a href='mailto:hello@siard.com'>Join our company</a>
                </li>
                <li className='email'>
                  Email:
                  <a href='mailto:hello@siard.com'>
                    <i className='lni lni-envelope'></i> hello@siard.com
                  </a>
                </li>
                <li className='phone-number'>
                  Phone:
                  <a href='tel:+1-485-456-0102'>
                    <i className='lni lni-phone'></i> +1-485-456-0102
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-lg-6 col-md-12'>
              <ul className='top-header-right-side'>
                <li>
                  <Link href='/contact'>
                    <a>
                      <i className='lni lni-headphone-alt'></i> Support Center
                    </a>
                  </Link>
                </li>
                <li className='language-switcher'>
                  <div className='languages-switch'>
                    <select>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>Russian</option>
                      <option>Chinese</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
