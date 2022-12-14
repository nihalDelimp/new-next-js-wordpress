import Head from "next/head";
import * as React from "react";
import Link from 'next/link';

const Header = () => (
  <>
    {/* <Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" defer></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" defer></script>
      <script src='/static/owl.js' ></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js" defer></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.9/fullpage.min.js' defer ></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.9/fullpage.extensions.min.js' defer ></script>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
      <script src='/static/wow.min.js' defer></script>
      <script src='/static/landing-page.js' defer></script>
      <script src='/static/custom-fullpage-vertical.js' defer></script>
    </Head> */}
    <header className="landing-page-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark px-lg-0 p-0">
          <div
            className="collapse navbar-collapse order-lg-1 order-2 justify-content-xl-start justify-content-start flex-wrap"
            id="navbarNav"
          >
            <ul className="navbar-nav main-nav flex-wrap">
              <li className="nav-item active">
                <Link href="/" >
                <a className="nav-link">
                  Home
                </a>
                </Link>
              </li>
              <li className="nav-item dropdown navbarDropdownClass">
                <a
                  className="nav-link navbarDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services &amp; Consulting
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <span className="dropdown-menu-arrow" />
                  <div className="">
                    <div className="row no-gutters w-100">
                      <div className="col-lg-4 col-12">
                        <ul
                          className="nav nav-tabs nav-tabs border-none flex-column mega-menu-nav-tabs"
                          id="mega-menu-nav-tabs"
                          role="tablist"
                        >
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium active"
                              id="nav-tab-smart-solutions-tab"
                              data-toggle="tab"
                              href="#nav-tab-smart-solutions"
                              role="tab"
                              aria-controls="nav-tab-smart-solutions"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/smart-solutions.png"
                              />
                              Smart Solutions
                            </a>
                            <ul className="navbar-nav flex-column secondary-nav pt-0 d-lg-none border-none mx-auto">
                              <li className="nav-item">
                                <a className="nav-link" href="/data-center/">
                                  - Data Centers
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Cloud
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Unified Communication
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Network Function Virtualization
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-data-centre-tab"
                              data-toggle="tab"
                              href="#nav-tab-data-centre"
                              role="tab"
                              aria-controls="nav-tab-data-centre"
                              onclick="hideDefaultTab('nav-tab-smart-solutions')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/data-centre.png"
                              />
                              Data Center
                            </a>
                          </li>
                          <li className="nav-item my-2 ">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-cybersecurity-tab"
                              data-toggle="tab"
                              href="#nav-tab-cybersecurity"
                              role="tab"
                              aria-controls="nav-tab-cybersecurity"
                              onclick="hideDefaultTab('nav-tab-smart-solutions')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/cybersecurity.png"
                              />
                              Cybersecurity
                            </a>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-software-defending-network-tab"
                              data-toggle="tab"
                              href="#nav-tab-software-defending-network"
                              role="tab"
                              aria-controls="nav-tab-software-defending-network"
                              onclick="hideDefaultTab('nav-tab-smart-solutions')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/software-defending-network.png"
                              />
                              Software Defending Network
                            </a>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-applications-tab"
                              data-toggle="tab"
                              href="#nav-tab-applications"
                              role="tab"
                              aria-controls="nav-tab-applications"
                              onclick="hideDefaultTab('nav-tab-smart-solutions')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/applications.png"
                              />
                              Applications
                            </a>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-consultation-services-tab"
                              data-toggle="tab"
                              href="#nav-tab-consultation-services"
                              role="tab"
                              aria-controls="nav-tab-consultation-services"
                              onclick="hideDefaultTab('nav-tab-smart-solutions')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/consultation-services.png"
                              />
                              Consultation Services
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*smart-solutions SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade active show"
                        id="nav-tab-smart-solutions"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Smart Solutions</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            alfanar Digital Solution offers innovative technologies,
                            that gather tremendous amounts of data from sensors and
                            other sources, using machine learning algorithms...
                          </p>
                          <Link href="/smart-solutions/">
                            <a className="btn btn-primary">Learn More</a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/Smart-Solutions.png"
                          alt="Smart Solutions"
                        />
                      </div>
                      {/*data-centre SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-data-centre"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Data Center</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            alfanar digital solution provides a 360° view of data
                            center services from consultation services, building,
                            and managing up...
                          </p>
                          <Link href="/data-center/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/smart-solutions/updated/Data-Centre.png"
                          alt="Data Center"
                        />
                      </div>
                      {/*Cybersecurity SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-cybersecurity"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Cybersecurity</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            alfanar digital solution strives to provide viable,
                            end-to-end IT solutions to make a significant difference
                            to your organization as one of the leading
                            cybersecurity...
                          </p>
                          <Link href="/cybersecurity/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/smart-solutions/updated/Cybersecurity.png"
                          alt="Cybersecurity"
                        />
                      </div>
                      {/*Software Defending Network SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-software-defending-network"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">
                            Software Defending Network
                          </h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            alfanar Digital solution provides end-to-end network
                            automation across different layers and industries...
                          </p>
                          {/* <Link href="/software-defending-network/" >
                          <a className="btn btn-primary">
                            Learn More
                          </a>
                          </Link> */}
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/smart-solutions/updated/Software-Defending-Network.png"
                          alt="Software Defending Network"
                        />
                      </div>
                      {/*applications SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-applications"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Applications</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            alfanar Digital Solutions takes your business value
                            software development to the next level...
                          </p>
                          <Link href="/applications/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/smart-solutions/updated/Applications.png"
                          alt="Applications"
                        />
                      </div>
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-consultation-services"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">
                            Consultation Services
                          </h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            Discover the knowledge you need to set your digital
                            world approach See our experts’ views on the latest
                            rising technologies and seize the true potential of
                            change...
                          </p>
                          <Link href="/consultation-services/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/smart-solutions/updated/Consultation-Services.png"
                          alt="Consultation Services"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown navbarDropdownClass">
                <a
                  className="nav-link navbarDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Industries
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <span className="dropdown-menu-arrow" />
                  <div className="">
                    <div className="row no-gutters w-100">
                      <div className="col-lg-4 col-12">
                        <ul
                          className="nav nav-tabs nav-tabs border-none flex-column mega-menu-nav-tabs"
                          id="mega-menu-nav-tabs"
                          role="tablist"
                        >
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium active"
                              id="nav-tab-gov-tab"
                              data-toggle="tab"
                              href="#nav-tab-gov"
                              role="tab"
                              aria-controls="nav-tab-gov"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/government-semi-government.png"
                              />
                              Government and Semi-government
                            </a>
                            <ul className="navbar-nav flex-column secondary-nav pt-0 d-lg-none border-none mx-auto">
                              <li className="nav-item">
                                <a className="nav-link" href="/data-center/">
                                  - Data Centers
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Cloud
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Unified Communication
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Network Function Virtualization
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-healthcare-tab"
                              data-toggle="tab"
                              href="#nav-tab-healthcare"
                              role="tab"
                              aria-controls="nav-tab-healthcare"
                              onclick="hideDefaultTab('nav-tab-gov')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/healthcare.png"
                              />
                              Healthcare
                            </a>
                          </li>
                          <li className="nav-item my-2 ">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-data-finance-tab"
                              data-toggle="tab"
                              href="#nav-tab-data-finance"
                              role="tab"
                              aria-controls="nav-tab-data-finance"
                              onclick="hideDefaultTab('nav-tab-gov')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/finance-and-banking.png"
                              />
                              Finance and Banking
                            </a>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-energy-tab"
                              data-toggle="tab"
                              href="#nav-tab-energy"
                              role="tab"
                              aria-controls="nav-tab-energy"
                              onclick="hideDefaultTab('nav-tab-gov')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/energy-utility.png"
                              />
                              Energy &amp; Utility
                            </a>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-education-tab"
                              data-toggle="tab"
                              href="#nav-tab-education"
                              role="tab"
                              aria-controls="nav-tab-education"
                              onclick="hideDefaultTab('nav-tab-gov')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/education.png"
                              />
                              Education
                            </a>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-communication-tab"
                              data-toggle="tab"
                              href="#nav-tab-communication"
                              role="tab"
                              aria-controls="nav-tab-communication"
                              onclick="hideDefaultTab('nav-tab-gov')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/communication.png"
                              />
                              Communication
                            </a>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-enterprise-tab"
                              data-toggle="tab"
                              href="#nav-tab-enterprise"
                              role="tab"
                              aria-controls="nav-tab-enterprise"
                              onclick="hideDefaultTab('nav-tab-gov')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/enterprise.png"
                              />
                              Enterprise
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*INFRASTRUCTURE SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade active show"
                        id="nav-tab-gov"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">
                            Government and Semi-government
                          </h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            With the growth in cyber-attacks and data breaches
                            severely impacting businesses of all kinds, government
                            organization needs a robust IT security solution...
                          </p>
                          <Link href="/gov-industry/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/gov-header-img.png"
                          alt="Government and Semi-government"
                        />
                      </div>
                      {/*SECURITY SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-healthcare"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Healthcare</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            alfanar Digital Solutions is a leading tech-driven
                            platform that helps healthcare organizations to design,
                            use, and manage technology...
                          </p>
                          <Link href="/healthcare-industry/">
                          <a  className="btn btn-primary" >
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/healthcare-header-img.png"
                          alt="Healthcare"
                        />
                      </div>
                      {/*DATA ANALYTICS SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-data-finance"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Finance and Banking</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            Protecting your consumer’s financial data is the key to
                            your organization’s growth and reputation. alfanar
                            Digital Solutions has a dedicated crew of...
                          </p>
                          <Link href="/finance-industry/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/finance-header-img.png"
                          alt="Finance and Banking"
                        />
                      </div>
                      {/*BUSINESS APPLICATION SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-energy"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">
                            Energy &amp; Utility
                          </h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            Energy and Utility organizations provide services that
                            power our lives and even a small security breach on the
                            industry may cost all...
                          </p>
                          <Link  href="/energy-industry/">
                          <a className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/energy-header-img.png"
                          alt="Energy & Utility"
                        />
                      </div>
                      {/*DIGITAL TRANSFORMATION SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-education"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Education</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            In today’s tech-driven landscape, educational
                            institutions are entrusted with all types of data,
                            including business, student, parent, employee, donor,
                            card data, and more...
                          </p>
                           <Link href="/education-industry/">
                          <a href="/education-industry/" className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/education-header-img.png"
                          alt="Education"
                        />
                      </div>
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-communication"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Communication</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            Companies that offer telecommunications, media,
                            entertainment, apps, and other information-related
                            services—often across a physical network—are...
                          </p>
                          <Link href="/communication-industry/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/communication-header-img.png"
                          alt="Communication"
                        />
                      </div>
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-enterprise"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Enterprise</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            Clearly, industrial enterprises (IEs) work in a setting
                            where quick expansion is challenging. It entails
                            striking the ideal balance between today's...
                          </p>
                          <Link  href="/enterprise-industry/">
                          <a className="btn btn-primary">
                           Learn More
                           </a>
                          </Link>
                         
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/enterprise-header-img.png"
                          alt="Enterprise"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown navbarDropdownClass">
                <a
                  className="nav-link navbarDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Insights &amp; Newsroom
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <span className="dropdown-menu-arrow" />
                  <div className="">
                    <div className="row no-gutters w-100">
                      <div className="col-lg-4 col-12">
                        <ul
                          className="nav nav-tabs nav-tabs border-none flex-column mega-menu-nav-tabs"
                          id="mega-menu-nav-tabs"
                          role="tablist"
                        >
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium active"
                              id="nav-tab-whitepapers-tab"
                              data-toggle="tab"
                              href="#nav-tab-whitepapers"
                              role="tab"
                              aria-controls="nav-tab-whitepapers"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/white-papers.png"
                              />
                              White Papers
                            </a>
                            <ul className="navbar-nav flex-column secondary-nav pt-0 d-lg-none border-none mx-auto">
                              <li className="nav-item">
                                <a className="nav-link" href="/data-center/">
                                  - Data Centers
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Cloud
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Unified Communication
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Network Function Virtualization
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-industry-insights-tab"
                              data-toggle="tab"
                              href="#nav-tab-industry-insights"
                              role="tab"
                              aria-controls="nav-tab-industry-insights"
                              onclick="hideDefaultTab('nav-tab-whitepapers')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/industry-insights.png"
                              />
                              Industry Insights
                            </a>
                          </li>
                          <li className="nav-item my-2 ">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-newsroom-tab"
                              data-toggle="tab"
                              href="#nav-tab-newsroom"
                              role="tab"
                              aria-controls="nav-tab-newsroom"
                              onclick="hideDefaultTab('nav-tab-whitepapers')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/newsroom.png"
                              />
                              Newsroom
                            </a>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-blogs-tab"
                              data-toggle="tab"
                              href="#nav-tab-blogs"
                              role="tab"
                              aria-controls="nav-tab-blogs"
                              onclick="hideDefaultTab('nav-tab-whitepapers')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/blogs.png"
                              />
                              Blogs
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*INFRASTRUCTURE SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade active show"
                        id="nav-tab-whitepapers"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">White Papers</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            Sharing knowledge helps us connect, perform, and become
                            stronger as professionals &amp; experts. we put our
                            knowledge...
                          </p>
                          <Link href="/white-paper/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/whitepaper-header-img.png"
                          alt="White Papers"
                        />
                      </div>
                      {/*SECURITY SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-industry-insights"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Industry Insights</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            Whether you are an Executive Director, Administrator,
                            President, or Analyst, the time you dedicate to your
                            organization is valuable. Your members count on you...
                          </p>
                          <Link href="/industry-insights/">
                            <a className="btn btn-primary">Learn More</a>
                          </Link>
                          
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/industry-insights-header-img-fix.png"
                          alt="Industry Insights"
                        />
                      </div>
                      {/*DATA ANALYTICS SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-newsroom"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Newsroom</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            Find out all the latest news, events &amp; press release
                            all in once place...
                          </p>
                          <Link href="/newsroom/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/newsroom-header-img.png"
                          alt="Newsroom"
                        />
                      </div>
                      {/*BUSINESS APPLICATION SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-blogs"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Blogs</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            Tips, tricks, and digital solution inspiration from
                            alfanar Digital Solution experts.
                          </p>
                          <Link href="/blogs/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/blogs-header-img.png"
                          alt="Blogs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown navbarDropdownClass">
                <a
                  className="nav-link navbarDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <span className="dropdown-menu-arrow" />
                  <div className="">
                    <div className="row no-gutters w-100">
                      <div className="col-lg-4 col-12">
                        <ul
                          className="nav nav-tabs nav-tabs border-none flex-column mega-menu-nav-tabs"
                          id="mega-menu-nav-tabs"
                          role="tablist"
                        >
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium active"
                              id="nav-tab-aboutus-tab"
                              data-toggle="tab"
                              href="#nav-tab-aboutus"
                              role="tab"
                              aria-controls="nav-tab-aboutus"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/about-us.png"
                              />
                              About Us
                            </a>
                            <ul className="navbar-nav flex-column secondary-nav pt-0 d-lg-none border-none mx-auto">
                              <li className="nav-item">
                                <a className="nav-link" href="/data-center/">
                                  - Data Centers
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Cloud
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Unified Communication
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="/smart-solutions/"
                                >
                                  - Network Function Virtualization
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-ourteam-tab"
                              data-toggle="tab"
                              href="#nav-tab-ourteam"
                              role="tab"
                              aria-controls="nav-tab-ourteam"
                              onclick="hideDefaultTab('nav-tab-aboutus')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/our-team.png"
                              />
                              Our Team
                            </a>
                          </li>
                          <li className="nav-item my-2 ">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-careers-tab"
                              data-toggle="tab"
                              href="#nav-tab-careers"
                              role="tab"
                              aria-controls="nav-tab-careers"
                              onclick="hideDefaultTab('nav-tab-aboutus')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/careers.png"
                              />
                              Careers
                            </a>
                          </li>
                          <li className="nav-item my-2">
                            <a
                              className="nav-link d-flex align-items-center text-primary font-weight-medium"
                              id="nav-tab-contactus-tab"
                              data-toggle="tab"
                              href="#nav-tab-contactus"
                              role="tab"
                              aria-controls="nav-tab-contactus"
                              onclick="hideDefaultTab('nav-tab-aboutus')"
                            >
                              <img
                                className="mega-menu-icon"
                                src="/images/mega-menu-icon/contact-us.png"
                              />
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*INFRASTRUCTURE SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade active show"
                        id="nav-tab-aboutus"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">About Us</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            For the last twenty years alfanar Digital Solutions has
                            managed to build a large client data base including both
                            the government and private sectors...
                          </p>
                          <Link href="/about-us/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/aboutus-header-img.png"
                          alt="About Us"
                        />
                      </div>
                      {/*SECURITY SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-ourteam"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Our Team</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            Behind every successful team is a strong culture, great
                            leadership and passionate, committed people...
                          </p>
                          <Link href="/our-team/">
                          <a  className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/ourteam-header-img.png"
                          alt="Our Team"
                        />
                      </div>
                      {/*DATA ANALYTICS SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-careers"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Careers</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            Explore our opportunities, take your career to the next
                            step...
                          </p>
                          <a
                            href="https://jobs.alfanar.com/alfanar/go/All-Openings/4442101/"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            Learn More
                          </a>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/careers-header-img.png"
                          alt="Careers"
                        />
                      </div>
                      {/*BUSINESS APPLICATION SECTION TOGGLE CONTENT*/}
                      <div
                        className="col-lg-8 col-12 my-lg-0 my-3 d-flex flex-lg-row flex-column justify-content-between tab-pane fade"
                        id="nav-tab-contactus"
                      >
                        <div className="detail-card">
                          <h2 className="text-primary my-3">Contact Us</h2>
                          <p className="text-grey normal pr-lg-5 pr-2 mb-3">
                            You are welcome to submit any questions about alfanar
                            Digital Solutions or any of its services, we will handle
                            your queries as soon as possible...
                          </p>
                          <Link href="/contactus/">
                          <a className="btn btn-primary">
                            Learn More
                          </a>
                          </Link>
                        </div>
                        <img
                          className="img-fluid mega-menu-image bg-gradient"
                          src="/images/final-images/contactus-header-img.png"
                          alt="Contact Us"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  عـربـي
                </a>
              </li>
            </ul>
            <ul className="navbar-nav flex-column secondary-nav d-lg-none mx-auto my-lg-0 my-3">
              <li className="nav-item">
                <a className="nav-link" href="/blogs/">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/white-paper/">
                  White Papers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://jobs.alfanar.com/alfanar/go/All-Openings/4442101/"
                  target="_blank"
                >
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <a
            className="navbar-brand order-lg-2 mx-xl-0 mx-lg-auto mx-sm-0 mx-xs-0"
            href="/"
          >
            <img
             src ="/images/logo-updated-color.png"
              className="alfanar-logo"
              title="alfanar Digital Solution"
              alt="alfanar Digital Solution"
            />
          </a>
          <a
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="close-icon">X</span>
            <span className="custom-hamburger">
              <i className="fas fa-bars" />
            </span>
          </a>
        </nav>
      </div>
    </header>
  </>

)

export default Header
