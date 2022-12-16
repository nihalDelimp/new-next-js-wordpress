import React from 'react';
import Footer from '../Footer/Footer';

function ContactUs({ headerData }) {
   return (
      <div >
         <section id="contact_us-section_1" className="wow fadeInUp  sectionsection bg-gradient bg-size-cover bg-no-repeat bg-center fp-section fp-table  fp-completely">
            <div id="contact_us-container" className="container-lg pt-4 pb-4">
               <div className="row pt-8 pb-4 pt-lg-1 pb-lg-1">
                  <div className="col-lg-12 text-left">
                     <ul className="alfanar-breadcrumb font-bold uc no-margin-bottomd">
                        <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/about-us.html">About Us</a></li>
                        <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">About Us : Contact Us</a></li>
                     </ul>
                  </div>
               </div>
               <div className="row">
                  <div className="pt-2 pb-2 col-lg-6 align-self-center wow animated">
                     <h1 className="text-white font-bold bottom-buffer-2point5rem">{headerData[0]?.heading}</h1>
                     <p className="text-white font-medium extra-large">{headerData[0]?.description}</p>
                  </div>
                  <div className="pt-2 pb-2 col-lg-6 align-self-center text-lg-right text-center wow animated">
                     <img className="w-100 mt-5 mb-5" src={headerData[0].image?.sourceUrl} />
                  </div>
               </div>
            </div>
         </section>

         <section id="contact-us" className="wow section bg-section-grey-1 animated" >
            <div id="contact-us-container" className="container">
               <div style={{ height: "100px" }}></div>
               <div className="row">
                  <div className="col-lg-6 col-12 pl-lg-4 pr-lg-4">
                     <div style={{ width: "100%" }}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3622.559064395744!2d46.6777955!3d24.776303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f08986b3321bb%3A0xcc48b2946c4723e4!2salfanar%20-%20Head%20Office!5e0!3m2!1sen!2sin!4v1653464824801!5m2!1sen!2sin"></iframe></div>

                  </div>
                  <div className="col-lg-6 col-12 pl-lg-4 pr-lg-4">
                     <h1 className="text-primary font-weight-bold">Get in Touch</h1>
                     <p className="mb-2 mt-1"><a className="alt-primary" href="tel:+966 92000 6111"><i className="fas fa-phone-alt mr-2"></i> +966 92000 6111</a></p>
                     <p className="mb-2 mt-1"><a className="alt-primary" href="mailto:ads-sales@alfanar.com"><i className="fas fa-envelope  mr-2"></i> ads-sales@alfanar.com</a> </p>
                     <p className="mb-5">or fill up the form our team will get back to you within 24 Hours</p>

                     <div className="row">
                        <div className="col-lg-6 col-12 mb-3">
                           <div className="form-group">
                              <label>Name</label>
                              <div className="input-group secondary-input-group">
                                 <input type="text" className="form-control" id="first-name" placeholder="Input your name here" />
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 col-12 mb-3">
                           <div className="form-group">
                              <label>Mobile</label>
                              <div className="input-group secondary-input-group">
                                 <input type="text" className="form-control" id="mobile" placeholder="Input your mobile here" />
                              </div>
                           </div>
                        </div>
                        <div className="col-12 mb-3">
                           <div className="form-group">
                              <label>Email Address</label>
                              <div className="input-group secondary-input-group">
                                 <input type="text" className="form-control" id="email" placeholder="Input your email address here" />
                              </div>
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="form-group">
                              <label>Subject</label>
                           </div>
                        </div>
                        <div className="col-lg col-xl-4 col-12 mb-3 p-lg-0">
                           <input type="radio" id="smart-solution" name="smart-solution" value="smart-solution" />
                           <label className="text-grey font-bold contactUsLabels" for="smart-solution">Smart Solution</label><br />
                           <input type="radio" id="data-centre" name="data-centre" value="Data Center" />
                           <label className="text-grey font-bold contactUsLabels" for="data-centre">Data Center</label><br />
                        </div>
                        <div className="col-lg col-xl-4 col-12 mb-3 p-lg-0">
                           <input type="radio" id="cyber-security" name="cyber-security" value="Cyber Security" />
                           <label className="text-grey font-bold contactUsLabels" for="cyber-security">Cyber Security</label><br />
                           <input type="radio" id="applications" name="applications" value="Applications" />
                           <label className="text-grey font-bold contactUsLabels" for="applications ">Applications</label><br />
                        </div>
                        <div className="col-lg-5 col-xl-4 col-12 mb-3 p-lg-0">

                           <input className="" type="radio" id="software-defending-network" name="software-defending-network" value="Software Defending Network" />
                           <label className="text-grey font-bold contactUsLabels" for="software-defending-network text-wrap text-break ">Software Defending Network</label>

                           <br />
                           <input type="radio" id="others" name="others" value="Others" />
                           <label className="text-grey font-bold contactUsLabels" for="others contactUsLabels">Others</label><br />
                        </div>
                        <div className="col-12 mb-3">
                           <div className="form-group">
                              <label>Messages</label>
                              <textarea className="form-control" rows="4" id="message" placeholder="Write your messages in here"></textarea>
                           </div>
                        </div>
                        <div className="col-12 mt-3 my-3 text-right">
                           <button className="btn btn-primary">Send Messages</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ height: "100px" }}></div>
            </div>
         </section>

         <Footer />
      </div>
   )
}

export default ContactUs


