import React from 'react';
import Footer from '../Footer/WrapperFooter';
import CommonFooter from '../CommonFooter';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../Header/Header';


function ConsultationServices({ section1, section2, section3, section4, section5 }) {


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
                     <section className={`section active bg-gradient bg-size-cover bg-no-repeat bg-center ${section1?.bgImageName}`}>
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
                                    {section1 && section1.descriptionSection && section1.descriptionSection.length > 0 &&
                                       section1.descriptionSection.map((item, index) =>
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
            }} />
      </>
   )
}

export default ConsultationServices
