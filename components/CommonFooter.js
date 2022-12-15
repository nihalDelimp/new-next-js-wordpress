import React from 'react'

function CommonFooter() {
  return (
    <>
          <section id="landing-page-footer-top-section" className="section bg-gradient bg-size-cover bg-no-repeat bg-center">
            <div id="landing-page-footer-top-container" className="container-lg pb-4 pt-4 pb-lg-9 pt-lg-6">
               <div className="row equalRow">
                  <div className="col-lg-6 col-12">
                     <div className="row equalColumns h-100">
                        <div className="col-lg-7">
                           <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{ fontSize: '42px !important' }}>We’re Here to Help You</h1>
                           <p className="text-white bottom-buffer-2point5rem">At alfanar Digital Solutions we value your comments and feedback! You are welcome to submit any questions about alfanar Digital Solutions or any of its services, we will handle your queries as soon as possible.</p>
                           <div className="align-bottom-content-lg "><a className="btn btn-primary" href="/contactus" alt="Get In Touch">Get in Touch</a></div>
                        </div>
                        <div className="col-lg-5 align-self-center text-lg-right text-center">
                           <img className="w-100 mt-5 mb-5" src="https://alfanar-digital-solution.azurewebsites.net/public/final-images/contactus-header-img.png" />
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-12">
                     <div className="row equalColumns h-100">
                        <div className="col-lg-7">
                           <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{ fontSize: "42px !important", minHeight: '100px' }}>Careers</h1>
                           <p className="text-white bottom-buffer-2point5rem">Join our professional team and play a role to build what’s next. The future starts here</p>
                           <div className="align-bottom-content-lg "><a className="btn btn-primary" href="https://jobs.alfanar.com/alfanar/go/All-Openings/4442101/" target="_blank" alt="Discover Opportunities">Discover Opportunities</a></div>
                        </div>
                        <div className="col-lg-5 align-self-center text-lg-right text-center">
                           <img className="w-100" src="https://alfanar-digital-solution.azurewebsites.net/public/final-images/careers-header-img.png"/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </>
  )
}

export default CommonFooter
