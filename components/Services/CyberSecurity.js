import React from 'react';
import Footer from '../Footer/WrapperFooter';
import CommonFooter from '../CommonFooter';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../Header/Header';



function CyberSecurity({ section1, section2, section3, section4, section5 }) {

   return (
      <><Header />
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
                     <section className="section bg-gradient bg-size-cover bg-no-repeat bg-center " style={{ backgroundImage: `url(${section1?.backgroundImage?.sourceUrl}) !important` }}>
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
                                    <h1 className="text-white font-bold bottom-buffer-1point5rem mt-2">{section1?.heading}</h1>
                                    {section1 && section1.descriptionSection && section1.descriptionSection.length > 0 &&
                                       section1.descriptionSection.map((item, index) =>
                                          <p key={index + 1} className="text-white big mb-2 mt-2">{item.description}</p>
                                       )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section >

                     <section className="section bg-gradient bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
                        <div id="cybersecurity-container" className="container-lg">
                           <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                              <div className="row pt-2 pb-2">
                                 <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                    <h1 className="text-white font-bold bottom-buffer-1point5rem mt-2">{section2?.heading}</h1>
                                    {section2 && section2.descriptionSection && section2.descriptionSection.length > 0 &&
                                       section2.descriptionSection.map((item, index) =>
                                          <p key={index + 1} className="text-white big mb-2 mt-2">{item.description}</p>
                                       )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     <section id="cybersecurity-section_3" className="section bg-gradient bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section3?.backgroundImage?.sourceUrl}) !important` }}>
                        <div id="cybersecurity-container" className="container-lg">
                           <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                              <div className="row pt-2 pb-2">
                                 <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                    <h1 className="text-white font-bold bottom-buffer-1point5rem mt-2">{section3?.heading}</h1>
                                    {section3 && section3.descriptionSection && section3.descriptionSection.length > 0 &&
                                       section3.descriptionSection.map((item, index) =>
                                          <p key={index + 1} className="text-white big mb-2 mt-2">{item.description}</p>
                                       )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     <section className="section bg-gradient bg-size-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${section4?.backgroundImage?.sourceUrl}) !important` }}>
                        <div id="cybersecurity-container" className="container-lg">
                           <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                              <div className="row pt-2 pb-2">
                                 <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                                    <h1 className="text-white font-bold bottom-buffer-1point5rem mt-2">{section4?.heading}</h1>
                                    {section4 && section4.descriptionSection && section4.descriptionSection.length > 0 &&
                                       section4.descriptionSection.map((item, index) =>
                                          <p key={index + 1} className="text-white big mb-2 mt-2">{item.description}</p>
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
            }}
         />
      </>

   )
}

export default CyberSecurity
