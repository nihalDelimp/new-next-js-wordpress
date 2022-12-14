import Link from 'next/link';

const Footer = () => {
  // get year
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className='footer-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <Link href='/'>
                  <a className='logo d-inline-block'>
                    <img src='/img/logo.png' alt='logo' />
                  </a>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Minim veniam.
                </p>
                <ul className='social-links'>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <i className='lni lni-facebook-filled'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' target='_blank'>
                      <i className='lni lni-twitter-original'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/' target='_blank'>
                      <i className='lni lni-instagram-original'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/' target='_blank'>
                      <i className='lni lni-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h3>About Us</h3>
                <ul className='custom-links'>
                  <li>
                    <Link href='/about'>
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/service'>
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/blog'>
                      <a>Our Blog</a>
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
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-md-4 col-sm-4'>
              <div className='single-footer-widget'>
                <h3>Resourses</h3>

                <ul className='custom-links'>
                  <li>
                    <Link href='/resource'>
                      <a>Application Security</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/resource'>
                      <a>Cloud Security</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/resource'>
                      <a>Infrastructure Security</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/resource'>
                      <a>Threat Hunter</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/resource'>
                      <a>Disaster Planning</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-md-4 col-sm-4'>
              <div className='single-footer-widget'>
                <h3>Quick Links</h3>
                <ul className='custom-links'>
                  <li>
                    <Link href='/service'>
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about'>
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/faq'>
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/blog'>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/team'>
                      <a>Team</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-4'>
              <div className='single-footer-widget'>
                <h3>Contact Us</h3>
                <ul className='footer-contact-info'>
                  <li>
                    <span>Address</span> 2750 Quadra Street Victoria, Canada.
                  </li>
                  <li>
                    <span>Email</span>{' '}
                    <a href='mailto:hello@siard.com'>hello@siard.com</a>
                  </li>
                  <li>
                    <span>Phone</span>{' '}
                    <a href='tel:+1-485-456-0102'>+1-485-456-0102</a>
                  </li>
                  <li>
                    <span>Fax</span>{' '}
                    <a href='tel:+1-07854578964'>+1-0785 4578964</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='copyright-area'>
            <p>
              Copyright &copy;{year} Siard. All Rights Reserved by{' '}
              <a href='https://envytheme.com/' target='_blank'>
                EnvyTheme
              </a>
            </p>
          </div>
        </div>

        <div className='shape4'>
          <img src='/img/shape/shape4.png' alt='shape' />
        </div>
      </footer>
    </>
  );
};

export default Footer;
