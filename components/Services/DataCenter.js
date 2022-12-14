import React from 'react'
import Footer from '../Footer/WrapperFooter'

function DataCenter({ section1, section2, section3, section4, section5 }) {

   return (
      <div id="fullpage" style={{ backgroundColor: 'rgb(2,0,36)' }}  >
         <section id="data-center-section_1" className="section bg-gradient bg-size-cover bg-no-repeat bg-center fp-section fp-table active fp-completely" style={{ backgroundImage: `url(${section1?.backgroundImage?.sourceUrl}) !important` }}>
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
                        <h1 className="text-white font-bold bottom-buffer-1point5rem mt-2">{section1?.heading}</h1>
                        {section1?.descriptionSection && section1?.descriptionSection.length > 0 &&
                           section1?.descriptionSection.map((item, index) =>
                              <p key={index + 1} className="text-white big mb-2 mt-2">{item.description}</p>
                           )}
                        <ul className="text-left mt-3 mb-3">
                           {section1?.listSection && section1?.listSection.length > 0 &&
                              section1?.listSection.map((item, index) =>
                                 <li key={index + 1} className="text-white big">{item.listItems}</li>
                              )}
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
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">{section2?.heading}</h1>descriptionWithIcon heading description icon

                     </div>
                  </div>
                  <div className="row pt-2 pb-2">
                     {section2?.descriptionWithIcon && section2?.descriptionWithIcon.length > 0 &&
                        section2?.descriptionWithIcon.map((item, i) =>
                           <>
                              <div className="col-lg-1 mt-2 mb-2 text-center text-lg-left">
                                 <div className="d-flex justify-content-center">
                                    <span className="px-2 py-1 bg-primary text-white font-small font-bold extra-large rounded-circle">{item.icon}</span>
                                 </div>
                              </div>
                              <div className="col-lg-5 mt-2 mb-2 text-center text-lg-left">
                                 <div className="row">
                                    <div className="col-sm-12">
                                       <h2 className="text-white font-bold mb-2 mt-2">{item.heading}</h2>
                                       <p className="text-white big mb-2 mt-2">{item.description}</p>
                                    </div>
                                 </div>
                              </div>
                           </>)}
                  </div>
               </div>
            </div>
         </section>

         <section id="data-center-section_3" className="section  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section3?.backgroundImage?.sourceUrl}) !important` }}>
            <div id="data-center-container" className="container-lg">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">{section3?.heading}</h1>
                        {section3 && section3?.descriptionSection && section3?.descriptionSection.length > 0 &&
                           section3?.descriptionSection.map((item, index) =>
                              <p key={index} className="text-white big mb-2 mt-2">{item.description}</p>
                           )}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="data-center-section_4" className="section  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section4?.image?.sourceUrl}) !important` }}>
            <div id="data-center-container" className="container-lg">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">{section4?.heading}</h1>
                        {section4 && section4?.descriptionWithSubHeading.length > 0 &&
                           section4?.descriptionWithSubHeading.map((item, index) =>
                              <>
                                 <h3 className="text-white font-bold mb-2">{item.heading}</h3>
                                 <p className="text-white big mb-2 mt-2">{item.description}</p>
                              </>
                           )}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="data-center-section_5" className="section  bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section5?.image?.sourceUrl}) !important` }}>
            <div id="data-center-container" className="container-lg pb-4 pt-4 pb-lg-6 pt-lg-6">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">{section5?.heading}</h1>
                        {section5 && section5?.descriptionWithSubHeading.length > 0 &&
                           section5?.descriptionWithSubHeading.map((item, index) =>
                              <>
                                 <h3 className="text-white font-bold mb-2">{item.heading}</h3>
                                 <p className="text-white big mb-2 mt-2">{item.description}</p>
                              </>
                           )}
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
                           <img className="w-100" src="https://alfanar-digital-solution.azurewebsites.net/public/final-images/careers-header-img.png" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </div>
   )
}

export default DataCenter
