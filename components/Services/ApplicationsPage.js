import React from 'react'
import Footer from '../Footer/Footer'

function ApplicationsPage({ section1, section2, section3, section4 }) {
   console.log("section2ApplicationsPage" , section2 )
   return (
      <div id="fullpage" style={{ backgroundColor: 'rgb(2,0,36)' }}>
         <section id="applications-section_1" className="section bg-gradient bg-size-cover bg-no-repeat bg-center fp-section fp-table active fp-completely" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
            <div id="applications-container" className="container-lg pt-4 pt-lg-8 pb-4">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <section id="breadcrum-section">
                     <div id="breadcrum-container" className="pt-1 pb-1">
                        <div className="row pt-7 pb-0 pt-lg-2 pb-lg-2">
                           <div className="col-lg-12">
                              <ul className="alfanar-breadcrumb font-bold mb-2 mb-md-0 p-1">
                                 <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                                 <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">Services & Consulting : Applications</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </section>
                  <div className="row mt-lg-2 text-center text-lg-left">
                     <div className="col-md-12 align-self-center">
                        <h1 className="text-white font-bold bottom-buffer-1point5rem">Application Delivery Management</h1>
                     </div>
                     <div className="col-lg-12 col-md-12 align-self-center">
                        <h3 className="text-white font-bold mb-2">Accelerate Your Application Delivery and deliver at high speed with low risk</h3>
                        <p className="text-white big mb-2 mt-2">alfanar Digital Solutions takes your business value software development to the next level.</p>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <section id="applications-section_2" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table  fp-overflow" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
            <div id="applications-container" className="container-lg">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h3 className="text-white font-bold mb-2">Application Life Cycle</h3>
                        <p className="text-white big mb-2 mt-2">has many capabilities, including integrated planning, continuous integration, release and test management, Agile teams and DevOps toolchains produce exceptional software with insights, analytics-focused end-to-end visibility, traceability, and endless quality.</p>
                     </div>
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h3 className="text-white font-bold mb-2">Application Load Testing</h3>
                        <p className="text-white big mb-2 mt-2">simplifies performance load testing for collocated teams. With project-based capabilities, your teams can quickly identify abnormal application behavior.</p>
                     </div>
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h3 className="text-white font-bold mb-2">Project and Portfolio Management</h3>
                        <p className="text-white big mb-2 mt-2">combines workflows and data to align investments with strategy. Top-down and bottom-up analytics power this strategic portfolio and project management tool.</p>
                     </div>
                     <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                        <h3 className="text-white font-bold mb-2">Application Quality Center</h3>
                        <p className="text-white big mb-2 mt-2">serves as the single pane of glass for software quality management. It helps you govern application lifecycle management activities and implement rigorous, auditable lifecycle processes.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="applications-section_3" className="section ">
            <section id="" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table  fp-overflow" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="applications-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h1 className="text-white font-bold bottom-buffer-2point5rem">Low code/No code Platform</h1>
                           <h3 className="text-white font-bold mb-2">Revolutionize How You Build Your Digital Transformation Journey with alfanar Digital Solutions</h3>
                           <p className="text-white big mb-2 mt-2">The all-in-one, low-code application development platform accelerates every step of the enterprise application development lifecycle.</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">How can Low-Code Development Help Your Business?</h3>
                           <p className="text-white big mb-2 mt-2">Turn your big ideas into powerful functioning apps. With alfanar Digital Solutions and the Low-Code Platform, you can abstract and automate every step of the application lifecycle to streamline the deployment of a variety of solutions. Ultimately, helping your organization in Developing solutions that meet the business needs.</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Application Development</h3>
                           <p className="text-white big mb-2 mt-2">Meet business needs quickly and efficiently by empowering co-creation across a varied developer spectrum with a common visual language and a dedicated IDE. Cloud: Deploy anywhere in one click, deliver, and build portable, scalable, and robust applications without specialized expertise.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table  fp-overflow" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="applications-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Multi Experience</h3>
                           <p className="text-white big mb-2 mt-2">Easily design context-aware applications that offer excellent user experiences across a range of modalities and touchpoints Artificial Intelligence: Elevate your solution and seamlessly connect them with AI and cognitive services</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Intelligent Automation</h3>
                           <p className="text-white big mb-2 mt-2">Boost efficiency and engagement with the end-to-end process automation that unites data, people, and systems. Data Integration: Platforms, models, and applications are open and extensible at every level. Integrate your data and logic from any system, data source, or service.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </section>

         <section id="applications-section_4" className="section ">
            <section id="" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table  fp-overflow" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="applications-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left">
                           <h1 className="text-white font-bold bottom-buffer-2point5rem">Virtual Reality VR and Augmented Reality AR</h1>
                           <h3 className="text-white font-bold mb-2">Investigate real-world benefits of developing technology with alfanar Digital Solutions’ state-of-the-art platforms</h3>
                           <p className="text-white big mb-2 mt-2">We collaborate with you to understand your issues, identify the problem, brainstorm solutions, create storyboards, and conduct testing along with your AR and VR journey</p>
                           <p className="text-white big mb-2 mt-2">alfanar Digital Solutions offers Virtual and Augmented Reality technologies to help organizations better understand their people’s needs and equip them with the proper knowledge to excel in their roles and solve problems effectively. With the assistance of AR and VR, we simulate every possible process in an environment for educational and training or other purposes.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table  fp-overflow" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="applications-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Virtual Experiences</h3>
                           <p className="text-white big mb-2 mt-2">Increasing efficiency, safety, and productivity, saving time, and reducing error-rate—these are some of the main benefits that implementing Virtual Reality and Augmented Reality (VR and AR) technologies afforded large industrial enterprises.</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Knowledge Transfer</h3>
                           <p className="text-white big mb-2 mt-2">Leveraging AR solutions to solve organizational training and upskilling challenges benefits industries and workers at all levels. AR and VR scale to meet industries where they are, whether they need to train at the individual, factory, or enterprise level.</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">People Understanding</h3>
                           <p className="text-white big mb-2 mt-2">The value of understanding your people and their needs is tremendous. And this can be measured with AR and VR methodologies that provide a real-time view of an organization's workforce's engagement, needs, and challenges</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </section>

         <section id="applications-section_5" className="section ">
            <section id="" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table  fp-overflow" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="applications-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left">
                           <h1 className="text-white font-bold bottom-buffer-2point5rem">Robotics Process Automation RPA and Chatbots</h1>
                           <h3 className="text-white font-bold mb-2">alfanar Digital Solutions, pioneers in RPA</h3>
                           <p className="text-white big mb-2 mt-2">We make software robots, so humans don’t have to be robots.</p>
                           <p className="text-white big mb-2 mt-2">Over the last few years, organizations are investing in process automation creation services to help them harness the technology's inherent value. It's no surprise that firms in a variety of industries, including retail, e-commerce, finance, banking, IT, and even healthcare, are using process automation to increase business efficiency and productivity.</p>
                        </div>
                     </div>
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left">
                           <h1 className="text-white font-bold mb-3 mt-2">Why Do You Need RPA in your business?</h1>
                        </div>
                        <div className="row">
                           <div className="col-lg-6">
                              <ul className="text-white text-left mt-3 mb-3">
                                 <li className="big"> Boost Productivity Across the Board </li>
                                 <li className="big">Improve Business Data Security</li>
                                 <li className="big">create a Better Customer Service Experience</li>
                                 <li className="big">Hit Accuracy Goals with Reliable Consistenc</li>
                              </ul>
                           </div>
                           <div className="col-lg-6">
                              <ul className="text-white text-left mt-3 mb-3">
                                 <li className="big"> Improve Efficiency to Generate Savings </li>
                                 <li className="big">Seize Opportunities for Scale</li>
                                 <li className="big">Automate in Non-Disruptive Ways</li>
                                 <li className="big">Produce Data for Important Analytics</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table  fp-overflow" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="applications-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row">
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Healthcare</h3>
                           <p className="text-white big mb-2 mt-2">When software robots take on the thousands of detailed, repetitive tasks and processes, it increases trustworthiness in all healthcare processes.</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Banking and Financial Services</h3>
                           <p className="text-white big mb-2 mt-2">Let the software robot take on repetitive, high-volume, cross-system processes where speed, capacity, and accuracy matter most in lending services, account servicing, post-trade processing, and more.</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Manufacturing</h3>
                           <p className="text-white big mb-2 mt-2">Physical robots have already transformed the plant floor. And now software robots are transforming everything else in manufacturing. The automation process extends and speeds up innovation R&D operations and works more smoothly and rapidly to integrate products and services for customers.</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Public Sector</h3>
                           <p className="text-white big mb-2 mt-2">In governments, process automation is hard at work, increasing capacity, speed, accuracy, and resilience, providing contact center modernization, Tax and claims processing, document processing and fraud, waste, and abuse.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </section>

         <section id="applications-section_6" className="section ">
            <section id="" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table  fp-overflow" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="applications-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h1 className="text-white font-bold bottom-buffer-2point5rem">alfanar Project Quality Management Information System PQMIS</h1>
                           <h3 className="text-white font-bold mb-2">An indigenous product for Paperless Reporting and Realtime Monitoring</h3>
                           <p className="text-white big mb-2 mt-2">Delivering an innovative Quality Management System with effective cross-functional team collaboration</p>
                           <p className="text-white big mb-2 mt-2">alfanar’ Digital Solutions’ PQMIS keeps everyone aligned throughout the project, offering bank of information, seamless coordination with different projects sites, automated reminders, notifications, reports and dashboards, ccustomizable workflows and templates, all accommodated with a highly responsive design.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table  fp-overflow" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="applications-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row">
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Quality Assurance</h3>
                           <p className="text-white big mb-2 mt-2">Risk Management, Surveys, Audits, Complaints Management and Calibration</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Quality Control</h3>
                           <p className="text-white big mb-2 mt-2">Request for Inspection and Material Inspection Request, Pro-Actives Notifications, Nonconformance Reports, Project Quality Index and Method of Statements and Visual Method of Statements.</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Knowledge Management</h3>
                           <p className="text-white big mb-2 mt-2">Lessons Learning, Method of Statements Library, Visual Method of Statements, Standards Library and Document Management System</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Human Resource</h3>
                           <p className="text-white big mb-2 mt-2">Human Resource Management and Human Resource Development</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Corporate Services</h3>
                           <p className="text-white big mb-2 mt-2">Meetings Management, Business Cards Management and Task Management</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Customized services</h3>
                           <p className="text-white big mb-2 mt-2">add-on modules and customizations based on customer needs.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </section>

         <section id="applications-section_7" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table  fp-overflow" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
            <div id="applications-container" className="container-lg">
               <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left">
                        <h1 className="text-white font-bold bottom-buffer-2point5rem">ERP systems</h1>
                        <h3 className="text-white font-bold mb-2">Leverage a powerful ERP system with alfanar Digital Solutions</h3>
                        <p className="text-white big mb-2 mt-2">Grow faster, enter new markets, and improve resiliency</p>
                     </div>
                  </div>
                  <div className="row pt-2 pb-2">
                     <div className="col-lg-12 text-center text-lg-left">
                        <h3 className="text-white font-bold mb-2">Organizations worldwide use the SAP ERP System to integrate the core processes needed to run a company in a single system.</h3>
                        <p className="text-white big mb-2 mt-2">Enterprise Resource Planning helps run core processes in a single system for departments such as finance, manufacturing, HR, supply chain, services, procurement, and others. Our ERP solution uses intelligent technologies to help you transform your mission-critical processes and rapidly adapt to change – no matter the size of your business. Stay on the cutting edge with continuous updates, scale easily, cut costs, and gain new efficiencies.</p>
                        <ul className="text-white text-left mb-4 mt-4">
                           <li className="big">Built-in machine learning, digital assistants, and advanced analytics </li>
                           <li className="big">Continuous innovation and updates delivered via the cloud</li>
                           <li className="big">Flexible, scalable, and maintenance-free platform</li>
                           <li className="big">Fast deployment and ease of use on any device</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="applications-section_8" className="section ">
            <section id="" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table  fp-overflow" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="applications-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row pt-2 pb-2">
                        <div className="col-lg-12 text-center text-lg-left">
                           <h1 className="text-white font-bold bottom-buffer-2point5rem">System integration</h1>
                           <h3 className="text-white font-bold mb-2">Your organization’s operations are enhanced and connected using our unique System Integration Solutions</h3>
                           <p className="text-white big mb-2 mt-2">System integration is the essential service that guarantees your IT infrastructure is flexible enough to accept bespoke applications and technologies. alfanar's user-centered approach will help you identify the best business model for your organization. We specialize in unique solutions that improve the operation of your existing IT assets while keeping an eye on future technologies.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="" className="slide bg-gradient bg-size-cover bg-no-repeat bg-center fp-slide fp-table" style={{ backgroundImage: `url(${section2?.backgroundImage?.sourceUrl}) !important` }}>
               <div id="applications-container" className="container-lg">
                  <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                     <div className="row">
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Increased productivity</h3>
                           <p className="text-white big mb-2 mt-2">Integrated systems enable for centralized control of everyday procedures, which improves overall workflow efficiency</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">accurate and trustworthy data</h3>
                           <p className="text-white big mb-2 mt-2">Data is updated in real time throughout all system components, ensuring that all departments are on the same page</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Faster decision-making</h3>
                           <p className="text-white big mb-2 mt-2">You may extract relevant business insights and make better decisions faster if you have a comprehensive picture of all data</p>
                        </div>
                        <div className="col-lg-12 text-center text-lg-left mt-2 mb-2">
                           <h3 className="text-white font-bold mb-2">Cost-effectiveness</h3>
                           <p className="text-white big mb-2 mt-2">System integration is less expensive than replacing all disconnected components with a single new system.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
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
                           <img className="w-100 mt-5 mb-5" src="/images/final-images/contactus-header-img.png" />
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
                           <img className="w-100" src="/images/final-images/careers-header-img.png"/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <Footer /> */}
      </div>
   )
}

export default ApplicationsPage
