import React from 'react';
import Footer from '../Footer/Footer';

function WhitePaper({tabContainer , tabMenuItems , headerData }) {
   
  return (
    <div >
       <section id="white-paper-section_1" className="wow fadeInUp  sectionsection bg-gradient bg-size-cover bg-no-repeat bg-center fp-section fp-table  fp-completely">
         <div id="white-paper-container" className="container-lg pt-4 pb-4">
            <div className="row pt-8 pb-4 pt-lg-1 pb-lg-1">
               <div className="col-lg-12 text-left">
                  <ul className="alfanar-breadcrumb font-bold no-margin-bottom">
                     <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                     <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">Insights & Newsroom : White Paper</a></li>
                  </ul>
               </div>
            </div>
            <div className="row">
               <div className="pt-2 pb-2 col-lg-6 align-self-center wow">
                  <h1 className="text-white font-bold bottom-buffer-2point5rem">{headerData[0]?.heading}</h1>
                  <p className="text-white font-medium extra-large">{headerData[0]?.description}</p>
               </div>
               <div className="pt-2 pb-2 col-lg-6 align-self-center text-lg-right text-center wow">
                  <img className="w-100" src= {headerData[0].image?.sourceUrl}/>
               </div>
            </div>
         </div>
      </section>

      <section id="white-paper-section_2" className="wow section">
         <div id="white-paper-container" className="container-lg pt-4 pb-4 pt-lg-8 pb-lg-8">
            <div className="row pt-4 pb-4">
               <div className="col-lg-12 text-justify  my-auto animate__animated animate__fadeInLeft">
                  <h2 className="text-dark-grey pb-lg-3 pb-2" style={{borderBottom: "2px solid #A2A2A2"}}>
                    {tabMenuItems[0]?.tabName}
                  </h2>
               </div>
            </div>
            <div className="row">
               {tabContainer && tabContainer[0] &&  tabContainer[0].tabData && tabContainer[0].tabData.length > 0
               && tabContainer[0].tabData.map((item , index) => 
               <div key = {index} className="col-lg-4 col-sm-12 pt-4 pb-4">
                  <div className="service-block-container">
                     <div className="service-block-image bg-primary">
                        <img src= {item?.image?.sourceUrl} />
                     </div>
                     <div className="service-block-content text-justify bg-section-grey-1 p-3 m-4 pr-lg-6">
                        <h2 className="pb-3 text-dark-grey pt-3">{item.title}</h2>
                        <p className="pt-2 pb-2 text-dark-grey">{item.description}</p>
                        <p className="pt-2 pb-2"><button className="btn btn-primary btn-sm p-1 rounded-0">Download</button></p>
                     </div>
                  </div>
               </div>)}
            </div>
         </div>
      </section>
      {/* <Footer /> */}
    </div>
  )
}

export default WhitePaper
