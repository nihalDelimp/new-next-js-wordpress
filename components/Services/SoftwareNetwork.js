import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import CommonFooter from '../CommonFooter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


function SoftwareNetwork({ section1, section2, section3, section4, section5, section6 }) {

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
        touchSensitivity={1000}
        render={() => {
          return (
            <>
              <section id="sdn-section_1" className={`section active bg-gradient bg-size-cover bg-no-repeat bg-center ${section1?.bgImageName}`}>
                <div id="sdn-container" className="container-lg pt-4 pb-4">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                    <section id="breadcrum-section">
                      <div id="breadcrum-container" className="pt-1 pb-1">
                        <div className="row pt-7 pb-0 pt-lg-2 pb-lg-2">
                          <div className="col-lg-12">
                            <ul className="alfanar-breadcrumb font-bold mb-2 mb-md-0 p-1">
                              <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                              <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">Services & Consulting : Software Defending Network</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="row mt-lg-2 text-center text-lg-left">
                      <div className="col-md-12 col-sm-12">
                        <h1 className="text-white font-bold bottom-buffer-1point5rem mt-2">{section1?.heading}</h1>
                      </div>
                    </div>
                    <div className="row mt-lg-2 text-center text-lg-left">
                      {section1 && section1.descriptionWithSubHeading && section1.descriptionWithSubHeading.length > 0 &&
                        section1.descriptionWithSubHeading.map((item, index) =>
                          <div key={index + 1} className="col-md-6 col-sm-12">
                            <p className="text-white extra-big mt-lg-3">{item?.description}</p>
                            <ul className="text-left mt-3 mb-3">
                              {item.listData && item.listData.length > 0 &&
                                item.listData.map((item2, index2) =>
                                  <li key={index2 + 1} className="text-white big">{item2?.listItems}</li>
                                )}
                            </ul>
                          </div>)}
                    </div>
                  </div>
                </div>
              </section>

              <section id="sdn-section_2" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center ${section2?.bgImageName}`}>
                <div id="sdn-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                    <div className="row pt-2 pb-2">
                      <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">{section2?.heading}</h1>
                        {section2 && section2.descriptionSection && section2.descriptionSection.length > 0 &&
                          section2.descriptionSection.map((item, index) =>
                            <p key={index + 1} className="text-white big mb-2 mt-2">{item?.description}</p>
                          )}
                        <ul className="text-left mt-3 mb-3">
                          {section2 && section2.listSection && section2.listSection.length > 0 &&
                            section2.listSection.map((item, index) =>
                              <li key={index + 1} className="text-white big">{item?.listItems}</li>
                            )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="sdn-section_3" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center ${section3?.bgImageName}`}>
                <div id="sdn-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                    <div className="row pt-2 pb-2">
                      <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">{section3?.heading}</h1>
                        {section3 && section3.descriptionSection && section3.descriptionSection.length > 0 &&
                          section3.descriptionSection.map((item, index) =>
                            <p key={index + 1} className="text-white big mb-2 mt-2">{item?.description}</p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="sdn-section_4" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center ${section4?.bgImageName}`} >
                <div id="sdn-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                    <div className="row pt-2 pb-2">
                      <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">{section4?.heading}</h1>
                        {section4 && section4.descriptionSection && section4.descriptionSection.length > 0 &&
                          section4.descriptionSection.map((item, index) =>
                            <p key={index + 1} className="text-white big mb-2 mt-2">{item?.description}</p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="sdn-section_5" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center ${section5?.bgImageName}`} >
                <div id="sdn-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                    <div className="row pt-2 pb-2">
                      <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">{section5?.heading}</h1>
                        {section5 && section5.descriptionSection && section5.descriptionSection.length > 0 &&
                          section5.descriptionSection.map((item, index) =>
                            <p key={index + 1} className="text-white big mb-2 mt-2">{item?.description}</p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="sdn-section_6" className={`section bg-gradient bg-size-cover bg-no-repeat bg-center ${section6?.bgImageName}`} >
                <div id="sdn-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                    <div className="row pt-2 pb-2">
                      <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">{section6?.heading}</h1>
                        {section6 && section6.descriptionSection && section6.descriptionSection.length > 0 &&
                          section6.descriptionSection.map((item, index) =>
                            <p key={index + 1} className="text-white big mb-2 mt-2">{item?.description}</p>
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

export default SoftwareNetwork