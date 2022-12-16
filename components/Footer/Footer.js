import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <>
            <section
                id="footer-wrapper"
                className="bg-gradient section"
                data-fp-styles="null"
                tabIndex={-1}
            >
                <div id="landing-page-footer-top-section" style={{ border: "none" }}>
                    <div id="landing-page-footer-top-section-container" className="container">
                        <div className="mx-lg-6 mx-3">
                            <div className="row row-cols-5">
                                <div className="col-lg col-md-6 col-12 text-lg-left text-center mb-3">
                                    <h2 className="small-heading text-grey mb-4 font-bold">Services</h2>
                                    <ul className="nav footer-services-nav fill flex-column">
                                        <li className="nav-item my-1">
                                            <Link href="/smart-solutions" >
                                                <a className="text-white font-normal pb-1">
                                                    Smart Solutions
                                                </a>
                                            </Link>

                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/data-center" className="text-white font-normal pb-1">
                                                Data Center
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/cybersecurity" className="text-white font-normal pb-1">
                                                Cyber Security
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <Link href="/software-defending-network">
                                                <a className="text-white font-normal pb-1">
                                                    Software Defending Network
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/applications" className="text-white font-normal pb-1">
                                                Applications
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/consultation-services" className="text-white font-normal pb-1">
                                                Consultation Services
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg col-md-6 col-12 text-lg-left text-center mb-3">
                                    <h2 className="small-heading text-grey mb-4 font-bold">
                                        Industries
                                    </h2>
                                    <ul className="nav footer-services-nav fill flex-column">
                                        <li className="nav-item my-1">
                                            <a href="/gov-industry" className="text-white font-normal pb-1">
                                                Government &amp; Semi-Government
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/healthcare-industry" className="text-white font-normal pb-1">
                                                Healthcare
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/finance-industry" className="text-white font-normal pb-1">
                                                Finance &amp; Banking
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/energy-industry" className="text-white font-normal pb-1">
                                                Energy &amp; Utility
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/education-industry" className="text-white font-normal pb-1">
                                                Education
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/communication-industry" className="text-white font-normal pb-1">
                                                Communication
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/enterprise-industry" className="text-white font-normal pb-1">
                                                Enterprise
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg col-md-6 col-12 text-lg-left text-center mb-3">
                                    <h2 className="small-heading text-grey mb-4 font-bold">Insights</h2>
                                    <ul className="nav footer-services-nav fill flex-column">
                                        <li className="nav-item my-1">
                                            <a href="/white-paper" className="text-white font-normal pb-1">
                                                White Paper
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/industry-insights" className="text-white font-normal pb-1">
                                                Industry Insights
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/newsroom" className="text-white font-normal pb-1">
                                                Newsroom
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/blogs" className="text-white font-normal pb-1">
                                                Blogs
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg col-md-6 col-12 text-lg-left text-center mb-3">
                                    <h2 className="small-heading text-grey mb-4 font-bold">About Us</h2>
                                    <ul className="nav footer-services-nav fill flex-column">
                                        <li className="nav-item my-1">
                                            <a href="/about-us" className="text-white font-normal pb-1">
                                                About alfanar Digital Solutions
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            <a href="/our-team" className="text-white font-normal pb-1">
                                                Our Team
                                            </a>
                                        </li>
                                        {/* <li class="nav-item my-1"><a href="/gov-industry.html" class="text-white font-normal pb-1">Governance</a></li> */}
                                        <li className="nav-item my-1">
                                            <a
                                                href="https://jobs.alfanar.com/alfanar/go/All-Openings/4442101/"
                                                target="_blank"
                                                className="text-white font-normal pb-1"
                                            >
                                                Careers
                                            </a>
                                        </li>
                                        <li className="nav-item my-1">
                                            {/* <Link href="/contactus"> */}
                                            <a href="/contactus" className="text-white font-normal pb-1">
                                                Contact Us
                                            </a>
                                            {/* </Link> */}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg col-md-6 col-12 text-lg-left text-center mb-3">
                                    <h2 className="small-heading text-grey mb-4 font-bold">
                                        Get in Touch
                                    </h2>
                                    <ul className="nav social-nav flex-row align-items-center justify-content-lg-start justify-content-center">
                                        <li className="nav-item cursor-pointer mr-1 mb-2">
                                            <a
                                                className="nav-link social-media-icon"
                                                href="tel:+966 92000 6111"
                                            >
                                                <i className="fas fa-phone-alt" />
                                            </a>
                                        </li>
                                        <li className="nav-item cursor-pointer mr-1 mb-2">
                                            <a
                                                className="nav-link social-media-icon"
                                                href="https://www.facebook.com/alfanar"
                                                target="_blank"
                                            >
                                                <i className="fab fa-facebook-square" />{" "}
                                            </a>
                                        </li>
                                        <li className="nav-item cursor-pointer mr-1 mb-2">
                                            <a
                                                className="nav-link social-media-icon"
                                                href="https://www.youtube.com/user/alfanartv"
                                                target="_blank"
                                            >
                                                <i className="fab fa-youtube" />{" "}
                                            </a>
                                        </li>
                                        <li className="nav-item cursor-pointer mr-1 mb-2">
                                            <a
                                                className="nav-link social-media-icon"
                                                href="https://twitter.com/alfanar"
                                                target="_blank"
                                            >
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="nav-item cursor-pointer mr-1 mb-2">
                                            <a
                                                className="nav-link social-media-icon"
                                                href="https://www.linkedin.com/company/alfanar-construction/mycompany"
                                                target="_blank"
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                        <li className="nav-item cursor-pointer mb-2">
                                            <a
                                                className="nav-link social-media-icon"
                                                href="https://www.instagram.com/alfanar_co/"
                                                target="_blank"
                                            >
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer landing-page-footer bg-gradient text-center">
                    <div className="container pt-2 pb-2">
                        <div className="mx-lg-6 mx-3">
                            <div className="row p-0">
                                <div className="col-lg-12 col-md-12 col-12 d-flex flex-md-row flex-column align-items-center justify-content-lg-start justify-content-center">
                                    <img
                                        className="nav-brand my-md-0 my-3 alfanar-logo-footer"
                                        src="https://dev-acf-testing.pantheonsite.io/wp-content/uploads/2022/12/logo-updated-white.png"
                                        alt="alfanar Digital Solution"
                                    />
                                    <p className="copyright-text text-md-left font-weight-medium mb-0 mx-4">
                                        Copyright © 2022 alfanar Digital Solutions.
                                        <br />
                                        All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer