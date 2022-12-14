import React from 'react'
import Footer from '../Footer/Footer'

function DataCenter({ section1, section2, section3, section4 }) {
   console.log("DataCentersection22222222222222", section2)
   return (
      <div id="fullpage" style={{ backgroundColor: 'rgb(2,0,36)' }}  >
         <section id="data-center-section_1" className="section bg-gradient bg-size-cover bg-no-repeat bg-center fp-section fp-table active fp-completely" style={{ backgroundImage: `url(${section2?.image?.sourceUrl}) !important` }}>
            <div id="data-center-container" className="container-lg pt-4 pb-4">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <section id="breadcrum-section">
                     <div id="breadcrum-container" className="pt-1 pb-1">
                        <div className="row pt-7 pb-0 pt-lg-2 pb-lg-2">
                           <div className="col-lg-12">
                              <ul className="alfanar-breadcrumb font-bold mb-2 mb-md-0 p-1">
                                 <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                                 <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">Services & Consulting : Data Center</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </section>
                  <div className="row mt-lg-2 text-center text-lg-left">
                     <div className="col-md-12 align-self-center">
                        <h1 className="text-white font-bold bottom-buffer-1point5rem mt-2">Accelerate digital transformation: Data Center</h1>
                        <p className="text-white extra-big mt-lg-3">alfanar digital solution provides a 360° view of data center services from consultation services, building, and managing up to automate services.</p>
                        <ul className="text-left mt-3 mb-3">
                           <li className="text-white big"> Power Systems</li>
                           <li className="text-white big"> Cooling system</li>
                           <li className="text-white big"> Structure cable</li>
                           <li className="text-white big"> Racking and Enclosures</li>
                           <li className="text-white big"> Monitoring & Management Solution</li>
                           <li className="text-white big"> Manage Services</li>
                           <li className="text-white big"> Low Current Services</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="data-center-section_2" className="section  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.image?.sourceUrl}) !important` }}>
            <div id="data-center-container" className="container-lg">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">Data Center Infrastructure</h1>
                     </div>
                  </div>
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-1 mt-2 mb-2 text-center text-lg-left">
                        <div className="d-flex justify-content-center">
                           <span className="px-2 py-1 bg-primary text-white font-small font-bold extra-large rounded-circle">01</span>
                        </div>
                     </div>
                     <div className="col-lg-5 mt-2 mb-2 text-center text-lg-left">
                        <div className="row">
                           <div className="col-sm-12">
                              <h2 className="text-white font-bold mb-2 mt-2">Facility Services</h2>
                              <p className="text-white big mb-2 mt-2">alfanar digital solution provides a scalable Data center up to Multiple MW DC as a lump sum turn-key contracts included not limited to Civil work, Power, MEP, HVAC, Low current, Structure cable, etc…</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-1 mt-2 mb-2 text-center text-lg-left">
                        <div className="d-flex justify-content-center">
                           <span className="px-2 py-1 bg-primary text-white font-small font-bold extra-large rounded-circle">02</span>
                        </div>
                     </div>
                     <div className="col-lg-5 mt-2 mb-2 text-center text-lg-left">
                        <div className="row">
                           <div className="col-sm-12">
                              <h2 className="text-white font-bold mb-2 mt-2">Infrastructure as a Service</h2>
                              <p className="text-white big mb-2 mt-2">Servers, storage, networking, administration, and services that deliver a uniform experience and cost control across hybrid cloud data center infrastructure are secure and agile. From the edge to the core to the cloud, the hybrid cloud helps you accelerate digital transformation and harness the potential of your applications and data. </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-1 mt-2 mb-2 text-center text-lg-left">
                        <div className="d-flex justify-content-center">
                           <span className="px-2 py-1 bg-primary text-white font-small font-bold extra-large rounded-circle">03</span>
                        </div>
                     </div>
                     <div className="col-lg-5 mt-2 mb-2 text-center text-lg-left">
                        <div className="row">
                           <div className="col-sm-12">
                              <h2 className="text-white font-bold mb-2 mt-2">Platform as a Service</h2>
                              <p className="text-white big mb-2 mt-2">alfanar digital solution have partnerships with technology pioneers where we could provide their services in local data centers with the availability of high scale professional team for managing services on-site or through proactive mechanism.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-1 mt-2 mb-2 text-center text-lg-left">
                        <div className="d-flex justify-content-center">
                           <span className="px-2 py-1 bg-primary text-white font-small font-bold extra-large rounded-circle">04</span>
                        </div>
                     </div>
                     <div className="col-lg-5 mt-2 mb-2 text-center text-lg-left">
                        <div className="row">
                           <div className="col-sm-12">
                              <h2 className="text-white font-bold mb-2 mt-2">Software as a Service</h2>
                              <p className="text-white big mb-2 mt-2">alfanar digital solution has multiple successful in-house developed software and services specifically in total quality management health and safety, e-commerce solution, and Asset management in addition to the foundation services such as Collaboration and E-mails, VDI. </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="data-center-section_3" className="section  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.image?.sourceUrl}) !important` }}>
            <div id="data-center-container" className="container-lg">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">Data Center Design & Standardization</h1>
                        <p className="text-white big mb-2 mt-2">High-quality data centers required achieving Standard certificates such as UPTIME, TIE-942, and ISO Certification. alfanar digital solution has the capability to give you all requirements to achieve TIER IV design and Facility certificate with multiple options of constructed or prefab building DC.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="data-center-section_4" className="section  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.image?.sourceUrl}) !important` }}>
            <div id="data-center-container" className="container-lg">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">Data Center Automation</h1>
                        <h3 className="text-white font-bold mb-2">Data Center Automation: Increasing the Business Agility</h3>
                        <p className="text-white big mb-2 mt-2">alfanar digital solution provides automation services across all layers, starting from the DCIM solutions to automate facility services up to providing Billing and KPI for DC services.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="data-center-section_5" className="section  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.image?.sourceUrl}) !important` }}>
            <div id="data-center-container" className="container-lg pb-4 pt-4 pb-lg-6 pt-lg-6">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">Command & Control Center</h1>
                        <h3 className="text-white font-bold mb-2">Next-Generation Command & Control Center</h3>
                        <p className="text-white big mb-2 mt-2">alfanar digital solution builds and prepares a decision-maker by building a Command-and-Control center to manage the complete gamut of operations for a corporation, from the requirements of IT infrastructure to delivering managed services, which is a tenacious service.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="landing-page-footer-top-section" className="section bg-gradient fp-section fp-table active fp-completely fp-overflow">
            <div id="landing-page-footer-top-container" className="container-lg pb-4 pt-4 pb-lg-9 pt-lg-6">
               <div className="row equalRow">
                  <div className="col-lg-6 col-12">
                     <div className="row equalColumns h-100">
                        <div className="col-lg-7">
                           <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{ fontSize: "42px !important" }}>We’re Here to Help You</h1>
                           <p className="text-white bottom-buffer-2point5rem">At alfanar Digital Solutions we value your comments and feedback! You are welcome to submit any questions about alfanar Digital Solutions or any of its services, we will handle your queries as soon as possible.</p>
                           <div className="align-bottom-content-lg "><a className="btn btn-primary" href="/contactus.html" alt="Get In Touch">Get in Touch</a></div>
                        </div>
                        <div className="col-lg-5 align-self-center text-lg-right text-center">
                           <img className="w-100 mt-5 mb-5" src="/images/final-images/contactus-header-img.png" />
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-12">
                     <div className="row equalColumns h-100">
                        <div className="col-lg-7">
                           <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{ fontSize: '42px !important', minHeight: '100px' }}>Careers</h1>
                           <p className="text-white bottom-buffer-2point5rem">Join our professional team and play a role to build what’s next. The future starts here</p>
                           <div className="align-bottom-content-lg "><a className="btn btn-primary" href="https://jobs.alfanar.com/alfanar/go/All-Openings/4442101/" target="_blank" alt="Discover Opportunities">Discover Opportunities</a></div>
                        </div>
                        <div className="col-lg-5 align-self-center text-lg-right text-center">
                           <img className="w-100" src="/images/final-images/careers-header-img.png" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <Footer /> */}
      </div>
   )
}

export default DataCenter
