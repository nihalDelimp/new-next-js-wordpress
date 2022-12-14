import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';

function SmartSolutions({ section1, section2, section3, section4 ,section5 }) {
   console.log('SmartSolutionsTTTTTTTTTTTTT1', section1)
   console.log('SmartSolutionsTTTTTTTTTTTTT2', section2)
   console.log('SmartSolutionsTTTTTTTTTTTTT3', section3)
   console.log('SmartSolutionsTTTTTTTTTTTTT4', section4)
   console.log('SmartSolutionsTTTTTTTTTTTTT5', section5)



   useEffect(() => {
      function removeJS(filename) {
         var tags = document.getElementsByTagName('script');
         for (var i = tags.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
            if (tags[i] && tags[i].getAttribute('src') != null && tags[i].getAttribute('src').indexOf(filename) != -1)
               tags[i].parentNode.removeChild(tags[i]); //remove element by calling parentNode.removeChild()
         }
      }
      removeJS();
   }, [])
   // console.log('section1' , section1)
   return (

      <div id="fullpage" style={{ backgroundColor: 'rgb(2,0,36)' }}>
         <section id="smart-solutions-section_1" className="section bg-gradient bg-size-cover bg-no-repeat bg-center fp-section fp-table active fp-completely" style={{ backgroundImage: `url(${section1?.backgroundImage?.sourceUrl}) !important` }}>
            <div id="smart-solutions-container" className="container-lg pt-4 pb-4">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <section id="breadcrum-section">
                     <div id="breadcrum-container" className="pt-1 pb-1">
                        <div className="row pt-7 pb-0 pt-lg-2 pb-lg-2">
                           <div className="col-lg-12">
                              <ul className="alfanar-breadcrumb font-bold mb-2 mb-md-0 p-1">
                                 <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                                 <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">Services & Consulting : Smart Solutions</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </section>
                  <div className="row mt-lg-2 text-center text-lg-left">
                     <div className="col-md-12 col-sm-12">
                        <h1 className="text-white font-bold bottom-buffer-1point5rem mt-2">{section1?.heading}</h1>
                        <p className="text-white extra-big mt-lg-3">{section1.descriptionSection && section1.descriptionSection[0]?.description}</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="smart-solutions-section_2" className="section  bg-size-cover bg-no-repeat bg-center" >
            <section id="" className="slide  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="smart-solutions-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h1 className="text-white font-bold bottom-buffer-2point5rem">Beyond smart cities</h1>
                           <p className="text-white big mb-2 mt-2">We create smart cities that will redefine urban power</p>
                           <p className="text-white big mb-2 mt-2">The demand for smart city solutions has arisen as a result of the Saudi 2030 vision. alfanar Digital Solutions offers wide range of smart solutions in many different use cases.Smart cities are considered the future facilitators in boosting economic growth and increasing the quality of life for inhabitants.</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-3 mb-2">
                           <h2 className="text-white font-bold bottom-buffer-2point5rem">Smart solutions leading to smart living:</h2>
                           <h3 className="text-white font-bold mb-2">Smart Metering</h3>
                           <p className="text-white big mb-2 mt-2">Fully automated, consumption real time information, remote controlling and faster power restoring.The smart meter data collecting system is feature-rich and compatible with numerous types of meters.</p>
                           <h3 className="text-white font-bold mb-2 mt-3">Smart Lighting</h3>
                           <p className="text-white big mb-2 mt-2">Wireless Lighting Control, Wireless Mesh Transceiver, RGBA Notification, Image Sensors, Water Level Sensor, Mobile Device Charger and more</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="" className="slide  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="smart-solutions-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row">
                        <div className="col-md-6 col-sm-12">
                           <div className="row">
                              <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                 <h3 className="text-white font-bold mb-2">Smart Environment Management Solution</h3>
                                 <p className="text-white big mb-2 mt-2">Pollution levels in key locations are being monitored.</p>
                              </div>
                              <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                 <h3 className="text-white font-bold mb-2">Smart Campus</h3>
                                 <p className="text-white big mb-2 mt-2">Locate points of interest, the best routes, and emergency exits with indoor navigation and video analysis.</p>
                              </div>
                              <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                 <h3 className="text-white font-bold mb-2">Smart Parking</h3>
                                 <p className="text-white big mb-2 mt-2">Smart Parking is an IoT based sensing technology, fully integrated, end-to-end solutions, that transforms the complete parking experience.</p>
                              </div>
                              <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                 <h3 className="text-white font-bold mb-2">Smart Transportation</h3>
                                 <p className="text-white big mb-2 mt-2">Vehicle monitoring, dispatching, parking space management, and efficient fuel use are part of an end-to-end transportation system.</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                           <div className="row">
                              <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                 <h3 className="text-white font-bold mb-2">Smart Waste Management</h3>
                                 <p className="text-white big mb-2 mt-2">Smart bins with automated bin status and pick-up message.</p>
                              </div>
                              <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                 <h3 className="text-white font-bold mb-2">Smart Water</h3>
                                 <p className="text-white big mb-2 mt-2">IoT ecosystems and data analytics are being used to distribute and monitor water.</p>
                              </div>
                              <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                 <h3 className="text-white font-bold mb-2">Smart Building Management Systems</h3>
                                 <p className="text-white big mb-2 mt-2">Heating, ventilation, and air conditioning (HVAC), as well as lighting, access control, and surveillance, are all part of an integrated solution.</p>
                              </div>
                              <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                 <h3 className="text-white font-bold mb-2">Smart Energy Management</h3>
                                 <p className="text-white big mb-2 mt-2">Machine learning-based real-time monitoring for preventative maintenance and energy savings.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </section>

         <section id="smart-solutions-section_3" className="section  bg-size-cover bg-no-repeat bg-center" >
            <section id="" className="slide  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section3?.backgroundImage?.sourceUrl}) !important` }} >
               <div id="smart-solutions-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h1 className="text-white font-bold bottom-buffer-1point5rem">Industrial IoT (IIoT)</h1>
                           <h2 className="text-white font-bold bottom-buffer-1point5rem">Build your IoT Platform with alfanar Digital Solutions</h2>
                           <p className="text-white big mb-1 mt-2">Connecting the world with collaborative IoT</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-3 mb-2">
                           <h2 className="text-white font-bold bottom-buffer-1point5rem">Automated manufacturing data:</h2>
                           <p className="text-white big mb-2 mt-2">alfanar Industrial Internet of Things (IIoT) offers a unified, scalable, and reliable toolkit for connecting manufacturing equipment to various Industry 4.0 applications, using smart sensors, actuators, and more to connect your people, products, and processes to power digital transformation.</p>
                           <h3 className="text-white font-bold mb-2 mt-3">Product as a service</h3>
                           <p className="text-white big mb-2 mt-2">OEMs can drive service revenue by innovating new offerings with IIoT and selling the outcomes their products provide to their customers.</p>
                           <h3 className="text-white font-bold mb-2 mt-3">Remote condition monitoring</h3>
                           <p className="text-white big mb-2 mt-2">What if you could eliminate blind dispatches and reduce truck rolls while improving customer success and satisfaction? Empower your teams with access to monitor asset data remotely to help prevent downtime for your customers—and even prevent issues before they occur</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="" className="slide  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section3?.backgroundImage?.sourceUrl}) !important` }} >
               <div id="smart-solutions-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row">
                        <div className="col-md-6 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Digital work instructions</h3>
                           <p className="text-white big mb-2 mt-2">using AR Give your frontline workers the digital tools and data they need to be safer and more productive. Connect humans with real-time, actionable machine data in one unified view to help scale knowledge, improve safety, and boost efficiency.</p>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Real-time data visibility</h3>
                           <p className="text-white big mb-2 mt-2">Know what’s happening with your machines in real time in an actionable view—so you can reduce unplanned downtime, maximize asset efficiency and utilization, and improve output quality.</p>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Plant Benchmarking</h3>
                           <p className="text-white big mb-2 mt-2">Shop floor improvements start with better KPIs—and a way to track them and act quickly. Plant benchmarking solutions help you achieve consistent performance analysis across all sites for optimized efficiency and output across plants, equipment, lines, and shifts.</p>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Predictive Maintenance</h3>
                           <p className="text-white big mb-2 mt-2">Eliminate up to 30% unplanned downtime and allow for multiple procedures to be scheduled at once by detecting problems before they happen.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </section>
         <section id="smart-solutions-section_4" className="section  bg-size-cover bg-no-repeat bg-center" >

            <section id="" className="slide  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section4?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="smart-solutions-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h1 className="text-white font-bold bottom-buffer-1point5rem">Asset Management System</h1>
                           <h2 className="text-white font-bold bottom-buffer-1point5rem">Gain Visibility & Control Over Your IT Assets & Costs with alfanar’s ITAM solution</h2>
                           <p className="text-white big mb-2 mt-2">Ensure your organization's assets are accounted for, deployed, maintained, upgraded, and disposed of when the time comes. It guarantees that your organization's valuable items, tangible and intangible, are tracked and used.</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-3 mb-2">
                           <h3 className="text-white font-bold mb-2">Control software costs and licenses</h3>
                           <p className="text-white big mb-2 mt-2">Stop surprise software costs and ensure deployed software compliance through accurate license counts with software asset management.</p>
                           <h3 className="text-white font-bold mb-2 mt-3">Manage hardware and physical assets</h3>
                           <p className="text-white big mb-2 mt-2">Reduce hardware and equipment costs while optimizing your TCO, ROI, and depreciation to maximize you IT asset investments.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="" className="slide  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section4?.backgroundImage?.sourceUrl}) !important` }} >
               <div id="smart-solutions-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row">
                        <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Get asset portfolio management</h3>
                           <p className="text-white big mb-2 mt-2">Make better decisions by combining information on contracts, procurement, assets, vendors, and budget for comprehensive ITAM visibility.</p>
                        </div>
                        <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Accelerate procurement processes</h3>
                           <p className="text-white big mb-2 mt-2">Create vendor catalogs for approved purchase options and easily enter received assets into inventory or track against service tickets.</p>
                        </div>
                        <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Get a financial view of each asset</h3>
                           <p className="text-white big mb-2 mt-2">See the projected value for each procured asset over time, assign assets to cost centers, and more for better financial understanding of assets.</p>
                        </div>
                        <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Manage vendors and contracts</h3>
                           <p className="text-white big mb-2 mt-2">Track your vendors, their brands, the contracts you have with them, and which ones are subject to caution for better vendor relationships</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </section>
         <section id="smart-solutions-section_5" className="section  bg-size-cover bg-no-repeat bg-center" >
            <section id="" className="slide  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }} >
               <div id="smart-solutions-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h1 className="text-white font-bold bottom-buffer-1point5rem">Big Data, Machine Learning, BI and AI</h1>
                           <h2 className="text-white font-bold bottom-buffer-1point5rem">Unlocking the power of Data</h2>
                           <p className="text-white big mb-2 mt-2">Because, where data flows, ideas follow</p>
                           <p className="text-white big mb-2 mt-2">Building a data-driven culture across the enterprise no longer has to add layers of complexity that impact business agility. With alfanar Digital Solutions’ platforms, you can create value from your data with a modern data architecture that includes a unified data fabric, open data lakehouse, and scalable data mesh. As the growth and distribution of data continues, businesses must provide employees easy access to the data needed to make the right decisions.It’s essential. Because where data flows, ideas follow.</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-3 mb-2">
                           <h3 className="text-white font-bold mb-2">Data Hub</h3>
                           <p className="text-white big mb-2 mt-2">Simplify building mission-critical data-driven applications with security, governance, scale, and control across the data lifecycle.</p>
                           <h3 className="text-white font-bold mb-2 mt-3">Data Warehouse</h3>
                           <p className="text-white big mb-2 mt-2">Unleash hybrid and multi-cloud data warehouse service for all modern, self-service, and advanced analytics use cases, at scale.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="" className="slide  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="smart-solutions-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row">
                        <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Machine Learning</h3>
                           <p className="text-white big mb-2 mt-2">Accelerate development at scale, anywhere, with self-service machine learning workspaces and the underlying compute clusters.</p>
                        </div>
                        <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Data Engineering</h3>
                           <p className="text-white big mb-2 mt-2">Orchestrate, operationalize, and automate complex data pipelines to increase efficiency and accelerate time to value.</p>
                        </div>
                        <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Data Visualization</h3>
                           <p className="text-white big mb-2 mt-2">Curate and deliver rich, visual dashboards and applications that accelerate operationalization of analytical insight across your enterprise.</p>
                        </div>
                        <div className="col-md-12 col-sm-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Operational Database</h3>
                           <p className="text-white big mb-2 mt-2">Bring unparalleled scale and performance to your mission-critical applications while securing future readiness for evolving data models.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </section>
         <section id="landing-page-footer-top-section" className="section bg-gradient fp-section fp-table active fp-completely fp-overflow">
            <div id="landing-page-footer-top-container" className="container-lg pb-4 pt-4 pb-lg-9 pt-lg-6">
               <div className="row equalRow">
                  <div className="col-lg-6 col-12">
                     <div className="row equalColumns h-100">
                        <div className="col-lg-7">
                           <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{ fontSsize: '42px !important' }}>We’re Here to Help You</h1>
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
                           <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{ fontSsize: '42px !important', minHeight: '100px' }}>Careers</h1>
                           <p className="text-white bottom-buffer-2point5rem">Join our professional team and play a role timport Footer from './../Footer/Footer';
                              o build what’s next. The future starts here</p>
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

export default SmartSolutions
