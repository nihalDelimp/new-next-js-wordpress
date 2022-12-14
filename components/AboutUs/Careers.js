import React from 'react' ;
import Footer from '../Footer/Footer';

function Careers() {
  return (
    <div>
        <section id="contact_us-section_1" className="wow fadeInUp  section">
         <div id="contact_us-container" className="container-lg pt-4 pb-4">
            <div className="row pt-8 pb-4 pt-lg-1 pb-lg-1">
               <div className="col-lg-12 text-left">
                  <ul className="alfanar-breadcrumb font-bold no-margin-bottom">
                     <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/about-us.html">About Us</a></li>
                     <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">About Us : Careers</a></li>
                  </ul>
               </div>
            </div>
            <div className="row">
               <div className="pt-2 pb-2 col-lg-6 align-self-center wow">
                  <h1 className="text-white font-bold bottom-buffer-2point5rem">Careers</h1>
                  <p className="text-white font-medium extra-large">Explore our opportunities, take your career to the next step</p>
               </div>
               <div className="pt-2 pb-2 col-lg-6 align-self-center text-lg-right text-center wow">
                  <img className="w-100" src="/public/final-images/careers-header-img.png" />
               </div>
            </div>
         </div>
      </section>
      <section id="careers" className="wow section">
         <div id="careers-container" className="container">
            <div style={{height: "100px"}}></div>
            <div className="mx-lg-9 mx-3">
               <div className="row">
                  <div className="col-lg-12 col-12 pl-lg-4 pr-lg-4">
                     <div className="row">
                        <div className="col-lg-6 col-12 mb-3">
                           <div className="card career-card p-3 p-lg-5 text-center text-lg-left h-100">
                              <div className="card-content mt-3 mb-3">
                                 <h2 className="mb-3 font-bold">Experienced Professionals</h2>
                                 <p className="big max-width-300px mt-3 mb-3">Do you want to take your career to the next level?</p>
                              </div>
                              <div className="card-button mb-lg-0 mb-3 mt-3 text-lg-right text-center">
                                 <a href="#" className="btn career-button small p-2">Explore Career Opportunities</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 col-12 mb-3">
                           <div className="card career-card p-3 p-lg-5 text-center text-lg-left h-100">
                              <div className="card-content mt-3 mb-3">
                                 <h2 className="mb-3 font-bold">Fresh Graduates</h2>
                                 <p className="big max-width-300px mt-3 mb-3">Start  here!  we  will  help  you  build  your   personal   and   professional   skills.</p>
                              </div>
                              <div className="card-button mb-lg-0 mb-3 mt-3 text-lg-right text-center">
                                 <a href="/" className="btn career-button small p-2">Explore Career Opportunities</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-lg-6 col-12 mb-3">
                           <div className="card career-card p-3 p-lg-5 text-center text-lg-left h-100">
                              <div className="card-content mt-3 mb-3">
                                 <h2 className="mb-3 font-bold">Non-degree Holders</h2>
                                 <p className="big max-width-300px mt-3 mb-3">Lorem  ipsum  dolor  sit  amet,  consectetuer   adipiscing   elit,   sed diam nonummy nibh</p>
                              </div>
                              <div className="card-button mb-lg-0 mb-3 mt-3 text-lg-right text-center">
                                 <a href="/" className="btn career-button small p-2">Employment Application Form</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 col-12 mb-3">
                           <div className="card career-card p-3 p-lg-5 text-center text-lg-left h-100">
                              <div className="card-content mt-3 mb-3">
                                 <h2 className="mb-3 font-bold">Cooperative Training</h2>
                                 <p className="big max-width-300px mt-3 mb-3">Broaden  your  knowledge  by  applying  acquired  academic  knowledge  to  real  work experience.</p>
                              </div>
                              <div className="card-button mb-lg-0 mb-3 mt-3 text-lg-right text-center">
                                 <a href="/" className="btn career-button small p-2">Training Application Form</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div style={{height: "100px"}}></div>
         </div>
      </section>
      <Footer  />
    </div>
  )
}

export default Careers
