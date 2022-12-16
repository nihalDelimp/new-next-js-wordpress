import React from 'react';
import Footer from '../Footer/WrapperFooter';
import CommonFooter from '../CommonFooter';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../Header/Header';


function DataCenter({ section1, section2, section3, section4, section5 }) {

   return (

      <>
         <Header />
         <ReactFullpage
            licenseKey='G4K1J-NS516-K5W16-MJ63I-NYLVP'
            responsiveWidth={1024}
            animateAnchor={true}
            lockAnchors={false}
            navigation={true}
            navigationPosition="left"
            scrollOverflow={false}
            slidesNavigation={true}
            slidesNavPosition="bottom"

            render={() => {
               return (
                  <>
                     <section id="data-center-section_1" className={`section active bg-gradient bg-size-cover bg-no-repeat bg-center ${section1?.bgImageName}`}>
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
                                    {section1 && section1.descriptionSection && section1.descriptionSection.length > 0 &&
                                       section1.descriptionSection.map((item, index) =>
                                          <p key={index + 1} className="text-white big mb-2 mt-2">{item.description}</p>
                                       )}
                                    <ul className="text-left mt-3 mb-3">
                                       {section1 && section1.listSection && section1.listSection.length > 0 &&
                                          section1.listSection.map((item, index) =>
                                             <li key={index + 1} className="text-white big">{item.listItems}</li>
                                          )}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     <section id="data-center-section_2" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center ${section2?.bgImageName}`}>
                        <div id="data-center-container" className="container-lg">
                           <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                              <div className="row pt-2 pb-2">
                                 <div className="col-lg-12 text-center text-lg-left">
                                    <h1 className="text-white font-bold bottom-buffer-2point5rem">{section2?.heading}</h1>
                                 </div>
                              </div>
                              <div className="row pt-2 pb-2">
                                 {section2 && section2.descriptionWithIcon && section2.descriptionWithIcon.length > 0 &&
                                    section2.descriptionWithIcon.map((item, i) =>
                                       <React.Fragment key={i + 1}>
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
                                       </React.Fragment>
                                    )}
                              </div>
                           </div>
                        </div>
                     </section>

                     <section id="data-center-section_3" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center ${section3?.bgImageName}`}>
                        <div id="data-center-container" className="container-lg">
                           <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                              <div className="row pt-2 pb-2">
                                 <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                    <h1 className="text-white font-bold bottom-buffer-2point5rem">{section3?.heading}</h1>
                                    {section3 && section3.descriptionSection && section3.descriptionSection.length > 0 &&
                                       section3.descriptionSection.map((item, index) =>
                                          <p key={index} className="text-white big mb-2 mt-2">{item.description}</p>
                                       )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     <section id="data-center-section_4" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center ${section4?.bgImageName}`}>
                        <div id="data-center-container" className="container-lg">
                           <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                              <div className="row pt-2 pb-2">
                                 <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                    <h1 className="text-white font-bold bottom-buffer-2point5rem">{section4?.heading}</h1>
                                    {section4 && section4.descriptionWithSubHeading && section4.descriptionWithSubHeading.length > 0 &&
                                       section4.descriptionWithSubHeading.map((item, index) =>
                                          <React.Fragment key={index + 1}>
                                             <h3 className="text-white font-bold mb-2">{item.heading}</h3>
                                             <p className="text-white big mb-2 mt-2">{item.description}</p>
                                          </React.Fragment>
                                       )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     <section id="data-center-section_5" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center ${section5?.bgImageName}`}>
                        <div id="data-center-container" className="container-lg pb-4 pt-4 pb-lg-6 pt-lg-6">
                           <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                              <div className="row pt-2 pb-2">
                                 <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                    <h1 className="text-white font-bold bottom-buffer-2point5rem">{section5?.heading}</h1>
                                    {section5 && section5.descriptionWithSubHeading && section5.descriptionWithSubHeading.length > 0 &&
                                       section5.descriptionWithSubHeading.map((item, index) =>
                                          <React.Fragment key={index + 1}>
                                             <h3 className="text-white font-bold mb-2">{item.heading}</h3>
                                             <p className="text-white big mb-2 mt-2">{item.description}</p>
                                          </React.Fragment>
                                       )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     <CommonFooter />

                     <Footer />

                  </>
               )
            }
            } />

      </>
   )
}

export default DataCenter
