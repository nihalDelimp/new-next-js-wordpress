import React, { useState } from 'react'
import Footer from '../Footer/Footer'

function IndustryInsights({ tabContainer, tabMenuItems, headerData }) {
   const [tabMenuId, setTabMenuId] = useState('all')

   return (
      <div >
         <section id="industry-insights-section_1"  className="wow fadeInUp  sectionsection bg-gradient bg-size-cover bg-no-repeat bg-center fp-section fp-table  fp-completely">
            <div id="industry-insights-container" className="container-lg pt-4 pb-4">
               <div className="row pt-8 pb-4 pt-lg-1 pb-lg-1">
                  <div className="col-lg-12 text-left">
                     <ul className="alfanar-breadcrumb font-bold no-margin-bottom">
                        <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                        <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">Insights & Newsroom : Industry Insights</a></li>
                     </ul>
                  </div>
               </div>
               <div className="row">
                  <div className="pt-2 pb-2 col-lg-6 align-self-center wow">
                     <h1 className="text-white font-bold bottom-buffer-2point5rem">{headerData[0]?.heading}</h1>
                     <p className="text-white font-medium extra-large">{headerData[0]?.description}</p>
                  </div>
                  <div className="pt-2 pb-2 col-lg-6 align-self-center text-lg-right text-center wow">
                     <img className="w-100" src={headerData[0].image?.sourceUrl} />
                  </div>
               </div>
            </div>
         </section>
         <section id="blogs-section_2" className="wow section">
            <div id="blogs-container" className="container-lg pt-4 pb-4 pt-lg-8 pb-lg-8">
               <div className="row pt-4 pb-4">
                  <div className="col-lg-12">
                     <ul className="nav nav-tabs alfanar-tabs">
                        {tabMenuItems && tabMenuItems.length > 0 &&
                           tabMenuItems.map((item, index) =>
                              <li key={index + 1} className="pb-3">
                                 <a onClick={() => setTabMenuId(item.tabId)} className={`text-dark-grey pb-lg-3 pb-2 show   ${item.tabId == tabMenuId ? 'active' : ''} `} data-toggle="tab">
                                    {item?.tabName}
                                 </a>
                              </li>)}
                     </ul>
                     <div className="tab-content alfanar-tab-content">
                        <div id="all" className="mt-2 mt-lg-5 mb-3 tab-pane active">
                           <div className="row">
                              {tabContainer && tabContainer.length > 0 &&
                                 tabContainer.map((ele, index) =>
                                    ele.tabMenuId == tabMenuId &&
                                    ele.tabData.map((item, index2) =>
                                       <div key={index2 + 1} className="col-lg-4 col-sm-12 pt-4 pb-4">
                                          <div className="service-block-container">
                                             <div className="service-block-image bg-primary">
                                                <img src= {item?.image?.sourceUrl} />
                                             </div>
                                             <div className="service-block-content text-justify bg-section-grey-1 p-3 m-4 pr-lg-4">
                                                <p className="small pt-2 mb-0 text-left">{item?.by}</p>
                                                <h2 className="pb-3 text-dark-grey pt-2 pr-lg-5 mr-lg-5">{item.title}</h2>
                                                <p className="pt-2 pb-2 text-dark-grey pr-lg-5">{item.description}</p>
                                                <p className="small mb-0 text-right">{item.buttonLabel}</p>
                                             </div>
                                          </div>
                                       </div>)
                                 )
                              }
                           </div>
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

export default IndustryInsights
