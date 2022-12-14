import React from 'react'
import Footer from '../Footer/Footer'

function CyberSecurity({ section1, section2, section3, section4 }) {
   console.log(section2?.backgroundImage?.sourceUrl, "SOURURRB")
   return (
      <div id="fullpage" style={{ backgroundColor: 'rgb(2,0,36)' }}>
         <section id="cybersecurity-section_1" className="section bg-gradient bg-size-cover bg-no-repeat bg-center fp-section fp-table active fp-completely" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
            <div id="cybersecurity-container" className="container-lg pt-4 pt-lg-8 pb-4">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <section id="breadcrum-section">
                     <div id="breadcrum-container" className="pt-1 pb-1">
                        <div className="row pt-7 pb-0 pt-lg-2 pb-lg-2">
                           <div className="col-lg-12">
                              <ul className="alfanar-breadcrumb font-bold mb-2 mb-md-0 p-1">
                                 <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                                 <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">Services & Consulting : Cybersecurity</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </section>
                  <div className="row mt-lg-2 text-center text-lg-left">
                     <div className="col-xl-12 col-lg-12 align-self-center">
                        <h1 className="text-white font-bold bottom-buffer-1point5rem">Meet The market leaders in Cybersecurity</h1>
                        <p className="text-white extra-big">alfanar digital solution strives to provide viable, end-to-end IT solutions to make a significant difference to your organization as one of the leading cybersecurity companies. Our knowledgeable IT Consulting experts in kingdom and oversees have extensive experience evaluating the business operations, discovering technology-related difficulties, and providing the best services using the latest and dominant security product and tools. </p>
                        <p className="text-white extra-big">We make certain that our best cybersecurity solutions are cutting-edge and tailored to your specific needs. Our expertise in varies layer of security industry, combined with worldwide spread, will provide you the best service. </p>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <section id="cybersecurity-section_2" className="section  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
            <div id="cybersecurity-container" className="container-lg">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">Cybersecurity Defense</h1>
                        <p className="text-white big mb-2 mt-2">alfanar digital solution provide diversified services and solutions including network security, application security, end point security, content security.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="cybersecurity-section_3" className="section  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
            <div id="cybersecurity-container" className="container-lg">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">Cybersecurity Governance</h1>
                        <p className="text-white big mb-2 mt-2">alfanar digital solution follow the best practices and top GRC methodologies in building the cybersecurity governance form business continuity and IT architecture prospect including all related attributes such as organization structure, tools, law and regulation specifically for General Data Protection Regulation in kingdom and world.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="cybersecurity-section_4" className="section  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
            <div id="cybersecurity-container" className="container-lg">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">Cyber Threat Intelligence</h1>
                        <p className="text-white big mb-2 mt-2">The attack techniques are becoming increasingly sophisticated, requiring continuous in countermeasures. The security architectures typically consist to intrusion detection, intrusion prevention and event management systems. In conjunction with the well-known vendors in the security services industry, alfanar Digital Solutions offer the solutions that prevent, detect, and respond to attacks, including security analytics and threat hunting. Incident response, and threat intelligence with network and endpoint protection.</p>
                        <p className="text-white big mb-2 mt-2">We offer assessment, advisory, and assurance solutions to reduce cybersecurity threats as well as located accountability for cybersecurity for effective decision making, execution, and incident response.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="landing-page-footer-top-section" className="section bg-gradient fp-section fp-table active fp-completely fp-overflow ">
            <div id="landing-page-footer-top-container" className="container-lg pb-4 pt-4 pb-lg-9 pt-lg-6">
               <div className="row equalRow">
                  <div className="col-lg-6 col-12">
                     <div className="row equalColumns h-100">
                        <div className="col-lg-7">
                           <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{ fontSize: '42px !important' }}>We’re Here to Help You</h1>
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

export default CyberSecurity
