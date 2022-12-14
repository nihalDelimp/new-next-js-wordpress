import React, { useState } from "react";
import SearchOverlay from "./SearchOverlay";
import Link from "../../utils/ActiveLink";

const NavbarStyle2 = ({ logoData }) => {
  const [display, setDisplay] = useState(false);
  const [displayMiniAccess, setDisplayMiniAccess] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleSearchOvelay = () => {
    setDisplay(!display);
  };

  const handleMiniAccess = () => {
    setDisplayMiniAccess(!displayMiniAccess);
  };

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }

  return (
    <>
      <div className={sticky ? "is-sticky navbar-area" : "navbar-area"}>
        <div className="siard-responsive-nav">
          <div className="container">
            <div className="siard-responsive-menu">
              <div onClick={() => toggleMenu()} className="hamburger-menu">
                {showMenu ? (
                  <i className="lni lni-close cross-close"></i>
                ) : (
                  <i className="lni lni-menu"></i>
                )}
              </div>

              <div className="logo">
                <Link href="/">
                  <a>
                    <img src={logoData.whiteLogo.sourceUrl} alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={showMenu ? "siard-nav show" : "siard-nav"}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={logoData.whiteLogo.sourceUrl} alt="logo" />
                </a>
              </Link>

              <div className="collapse navbar-collapse mean-menu">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className=" nav-link">
                      Home{" "}
                      <i className="lni lni-chevron-down dropdown-chevron"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a className="nav-link">Home Demo - One</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/index-2" activeClassName="active">
                          <a className="nav-link">Home Demo - Two</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/index-3" activeClassName="active">
                          <a className="nav-link">Home Demo - Three</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/index-4" activeClassName="active">
                          <a className="nav-link">Home Demo - Four</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className=" nav-link">
                      Services{" "}
                      <i className="lni lni-chevron-down dropdown-chevron"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/service-details">
                          <a className="nav-link">Application Security</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service-details">
                          <a className="nav-link">Cloud Security</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service-details">
                          <a className="nav-link">Infrastructure Security</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service-details">
                          <a className="nav-link">Threat Hunter</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service-details">
                          <a className="nav-link">Disaster Planning</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service-details">
                          <a className="nav-link">Incident Responder</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service" activeClassName="active">
                          <a className="nav-link">More Services</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/resource" activeClassName="active">
                      <a className=" nav-link">
                        Case Studies
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#" className=" nav-link">
                      Pages{" "}
                      <i className="lni lni-chevron-down dropdown-chevron"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about" activeClassName="active">
                          <a className="nav-link">About</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/team" activeClassName="active">
                          <a className="nav-link">Team</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/pricing" activeClassName="active">
                          <a className="nav-link">Pricing</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/feedback" activeClassName="active">
                          <a className="nav-link">Feedback</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/faq" activeClassName="active">
                          <a className="nav-link">FAQ</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/privacy-policy" activeClassName="active">
                          <a className="nav-link">Privacy Policy</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/terms-condition" activeClassName="active">
                          <a className="nav-link">Terms & Conditions</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/404" activeClassName="active">
                          <a className="nav-link">404 Error Page</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/blog" activeClassName="active">
                      <a className=" nav-link">Blog</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>

                <div className="others-option">
                  <div className="d-flex align-items-center">
                    <div className="option-item">
                      <ul className="search-cart">
                        <li>
                          <div
                            className="search-icon"
                            onClick={handleSearchOvelay}
                          >
                            <i className="lni lni-search-alt"></i>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="option-item">
                      <ul className="social-links">
                        <li>
                          <a href="https://facebook.com/" target="_blank">
                            <i className="lni lni-facebook-filled"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="lni lni-twitter-original"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://instagram.com/" target="_blank">
                            <i className="lni lni-instagram-original"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="option-item">
                      <a href="mailto:hello@siard.com" className="default-btn">
                        <span>Get A Free Quote</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu" onClick={handleMiniAccess}>
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>
            <div
              className={displayMiniAccess ? "container active" : "container"}
            >
              <div className="option-inner">
                <div className="others-option">
                  <div className="option-item">
                    <ul className="search-cart">
                      <li>
                        <div
                          className="search-icon"
                          onClick={handleSearchOvelay}
                        >
                          <i className="lni lni-search-alt"></i>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="option-item">
                    <ul className="social-links">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="lni lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i className="lni lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="lni lni-instagram-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="option-item">
                    <a href="mailto:hello@siard.com" className="default-btn">
                      <span>Get A Free Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <SearchOverlay
        display={display}
        handleSearchOvelay={handleSearchOvelay}
      />
    </>
  );
};

export default NavbarStyle2;
