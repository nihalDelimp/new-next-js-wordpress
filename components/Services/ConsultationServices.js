import React from 'react';
import Footer from '../Footer/Footer';

function ConsultationServices({section1 ,section2 ,section3 , section4 , section5}) {
   console.log('SmartSolutionsTTTTTTTTTTTTT1', section1)
   console.log('SmartSolutionsTTTTTTTTTTTTT2', section2)
   console.log('SmartSolutionsTTTTTTTTTTTTT3', section3)
   console.log('SmartSolutionsTTTTTTTTTTTTT4', section4)
   console.log('SmartSolutionsTTTTTTTTTTTTT5', section5)
  return (
    <div id="fullpage">
    <section id="consultation-services-section_1" className="section bg-gradient fp-section fp-table bg-no-repeat bg-center" style={{backgroundImage: `url(${section1?.backgroundImage?.sourceUrl}) !important`}}>
       <div id="consultation-services-container" className="container-lg pt-4 pt-lg-8 pb-4">
          <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
             <section id="breadcrum-section">
                <div id="breadcrum-container" className="pt-1 pb-1">
                   <div className="row pt-7 pb-0 pt-lg-2 pb-lg-2">
                      <div className="col-lg-12">
                         <ul className="alfanar-breadcrumb font-bold mb-2 mb-md-0 p-1">
                            <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                            <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">Services & Consulting : Consultation Services</a></li>
                         </ul>
                      </div>
                   </div>
                </div>
             </section>
             <div className="row mt-lg-2 text-center text-lg-left">
                <div className="col-md-12 align-self-center">
                   <h1 className="text-white font-bold bottom-buffer-1point5rem">{section1?.heading}</h1>
                   <p className="text-white big mb-2 mt-2">Discover the knowledge you need to set your digital world approach See our experts’ views on the latest rising technologies and seize the true potential of change.</p>
                   <p className="text-white big mb-2 mt-2">alfanar Digital Solutions is a leading consulting partner focused on your digital strategy, platform technologies, cybersecurity, and business transformation. We will work closely with your team to understand your goals, business processes, and current information systems capabilities. Let us listen to your needs and build together your IT Strategy Plan, align our tactics with your goals and tailor your enterprise digital solutions. And along the way, improve, operate, and deliver measurable results.</p>
                </div>
             </div>
          </div>
       </div>
    </section>

    <section id="landing-page-footer-top-section" className="section bg-gradient fp-section fp-table active fp-completely fp-overflowion ">
       <div id="landing-page-footer-top-container" className="container-lg pb-4 pt-4 pb-lg-9 pt-lg-6">
          <div className="row equalRow">
             <div className="col-lg-6 col-12">
                <div className="row equalColumns h-100">
                   <div className="col-lg-7">
                      <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{fontSize: '42px !important'}}>We’re Here to Help You</h1>
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
                      <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{fontSize: "42px !important", minHeight: "100px"}}>Careers</h1>
                      <p className="text-white bottom-buffer-2point5rem">Join our professional team and play a role import Footer from './../Footer/Footer';
                       to build what’s next. The future starts here</p>
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

export default ConsultationServices
