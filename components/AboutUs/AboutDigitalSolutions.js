import React from 'react';
import Footer from '../Footer/Footer';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function AboutDigitalSolutions(props) {
  const {
   aboutUs, 
   headerData,
   downloadIcon, 
   testimonials, 
   video,
   ourTopClients,
   ourPartners
} = props
   
  return (
    <div>
       <section  id="about-us-section_1" className="wow fadeInUp  sectionsection bg-gradient bg-size-cover bg-no-repeat bg-center fp-section fp-table  fp-completely">
         <div id="about-us-container" className="container-lg pt-4 pb-4">
            <div className="row pt-8 pb-4 pt-lg-1 pb-lg-1">
               <div className="col-lg-12 text-left">
                  <ul className="alfanar-breadcrumb font-bold no-margin-bottom">
                     <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                     <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">About Us : alfanar Digital Solutions</a></li>
                  </ul>
               </div>
            </div>
            <div className="row">
               <div className="pt-2 pb-2 col-lg-6 align-self-center wow">
                  <h1 className="text-white font-bold bottom-buffer-2point5rem">Saudi local</h1>
                  <p className="text-white font-medium extra-large">System Integrator</p>
               </div>
               <div className="pt-2 pb-2 col-lg-6 align-self-center text-lg-right text-center wow">
               <img className = 'w-100'  src= {headerData[0].image?.sourceUrl}/>
               </div>
            </div>
         </div>
      </section>

      <section id="about-us-section_2" className="section  bg-size-cover bg-no-repeat bg-center fp-section fp-table  fp-completely">
         <div id="about-us-container" className="container-lg">
               <div className="row pt-4 pb-4 pt-lg-8 pb-lg-8">
                  <div className="col-lg-7 text-justify animate__animated animate__fadeInLeft">
                     <h1 className="text-dark-grey font-bold bottom-buffer-1point5rem">
                           {aboutUs?.heading}
                     </h1>
                     <p className="text-grey">
                       {aboutUs?.description}
                       </p>
                  </div>
                  <div className="col-lg-5 animate__animated animate__fadeInUp text-justify">
                     <div className="row mb-3">
                        {aboutUs.counterItems && aboutUs.counterItems.length > 0 &&
                        aboutUs.counterItems.map((item,index) => 
                           <div key = {index+1} className="col-lg-4 mt-2 mb-2 text-center">
                              <h1 className="text-primary numCount d-inline-block">{item?.number}</h1>
                              <h1 className=" text-primary d-inline-block">{item.icon ? item.icon : '+'}</h1>
                              <h3 className="text-primary">{item?.title}</h3>
                           </div>)}
                     </div>
                  </div>
               </div>
         </div>
      </section>

      <section id="about-us-section_3" className="wow bg-section-grey-1 section">
         <div id="about-us-container" className="container-lg pb-4 pt-4 pb-lg-6 pt-lg-6">
               <div className="row">
                  <div className="col-lg-12 text-center animate__animated animate__fadeInUp pb-4 pt-4">
                     <h1 className="text-dark-grey font-bold bottom-buffer-2point5rem">Global and local IT partners
                           network</h1>
                     <h5 className="text-dark-grey font-light bottom-buffer-2point5rem">
                           Fortune 500 enterprises and established <br />
                           brands trust our software development.
                     </h5>
                  </div>
                  <div className="col-lg-4 text-center animate__animated animate__fadeInDown pb-4 pt-4 pl-lg-5 pr-lg-5">
                     <p><img className="img-fluid finance-icon-image" src="https://alfanar-digital-solution.azurewebsites.net/public/final-images/aboutus-icon-1.png"/></p>
                     <h3 className="text-primary font-bold bottom-buffer-1point5rem">Values</h3>
                     <p className="text-grey ">alfanar values drive our actions
                           and guide us in how we act as
                           employees and as a company to
                           serve our clients in the best
                           possible way which reflects of how
                           our clients value our services.</p>
                  </div>
                  <div className="col-lg-4 text-center animate__animated animate__fadeInDown pb-4 pt-4 pl-lg-5 pr-lg-5">
                     <p><img className="img-fluid finance-icon-image" src="https://alfanar-digital-solution.azurewebsites.net/public/final-images/aboutus-icon-2.png"/></p>
                     <h3 className="text-primary font-bold bottom-buffer-1point5rem">Knowledge</h3>
                     <p className="text-grey ">alfanar practices, policies professional
                           expertise enable quality performance.
                           Our goal-driven and systematic
                           operating policies guarantee an
                           outcome that we can be proud of.</p>
                  </div>

                  <div className="col-lg-4 text-center animate__animated animate__fadeInDown pb-4 pt-4 pl-lg-5 pr-lg-5">
                     <p><img className="img-fluid finance-icon-image" src="https://alfanar-digital-solution.azurewebsites.net/public/final-images/aboutus-icon-3.png"/></p>
                     <h3 className="text-primary font-bold bottom-buffer-1point5rem">Commitment</h3>
                     <p className="text-grey ">Our business is based on grant
                           clients with a competitive edge
                           and added value. Commitment,
                           shared trust and the ability to
                           meet customers’ ever-changing
                           needs ensure successful and
                           long-term co-operation.</p>
                  </div>
               </div>
         </div>
      </section>

      < section id="index-section_10" style={{ backgroundColor: 'rgb(2,0,36)' }} className="section bg-gradient bg-size-cover bg-no-repeat bg-center" >
                <div id="index-container" className="container-lg">
                    <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                        <div className="row pt-2 pb-2">
                            <div className="align-self-center text-center text-lg-left col-sm-12">
                                <video id="portfolio_expertise_vid_home" className="d-block" width="95%" height="90%" controls="controls"  poster={''}>
                                    <source src={video[0]?.video} type="video/mp4" />
                                    Your browser does not support HTML video.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        
      <section id="testimonials" className="wow bg-light-gray section">
        <div id="testimonials-container" className="container-lg">
            <div style={{height: "50px"}}></div>
            <div className="row">
               <div className="col-lg-12 text-center animate__animated animate__fadeInUp bottom-buffer-2point5rem">
                 <h1 className="text-primary text-center bottom-buffer-2point5rem">
                     { testimonials?.sectionHeading}
                    </h1>
                 <p className="text-grey">
                 {testimonials.description}
                    </p>
               </div>
               <div className="col-lg-12 animate__animated animate__fadeInDown">
               <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={2}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                     >
                  
                       {testimonials.carouselItems && testimonials.carouselItems.length > 0 &&
                        testimonials.carouselItems.map((item , index)=>
                        <SwiperSlide key={index + 1} >
                           <div key = {index+1} className="swiper-slide bg-white">
                              <div className="row py-5">
                                 <div className="col-12">
                                    <h5 className="text-primary text-center">{item?.itemTitle}</h5>
                                    <h6 className="text-primary text-center">{item.testimonialBy}</h6>
                                    <p className="text-grey text-center">{item?.author}</p>
                                 </div>
                              </div>
                           </div>
                           </SwiperSlide>
                           )}
                           </Swiper>
               </div>
            </div>
           <div style={{height: "150px"}}></div>
        </div>
     </section>

     <section id="our-partners-section" className="wow section">
        <div id="our-partners-container" className="container-lg pb-4 pt-4 pb-lg-6 pt-lg-6">
            <div className="row pb-4 pt-4">
                <div className="col-12 text-center">
                    <h1 className="font-weight-bold">Our Partners</h1>
                </div>
            </div>
            <div className="row pb-4 pt-4 pb-lg-6 pt-lg-6">
            <div className="col-lg-12 animate__animated animate__fadeInDown">
                     <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={2}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                     >
                        {ourPartners.carouselImages && ourPartners.carouselImages.length > 0 &&
                           ourPartners.carouselImages.map((item, index) =>
                              <SwiperSlide key={index + 1} >
                                  <div className="swiper-slide text-center">
                                 <img className="w-100" src={item.sourceUrl} />
                              </div>
                              </SwiperSlide>
                           )}
                     </Swiper>
                  </div>
            </div>
         </div>
      </section>

      <section style = {{backgroundColor: 'rgb(2,0,36)'}} id="about-us-section_8" className="section ">
         <div id="about-us-container" className="container-lg pb-4 pt-4 pb-lg-6 pt-lg-6">
               <div className="row pb-4 pt-4 pt-lg-6">
                  <div className="col-12 text-center">
                     <h1 className="font-weight-bold text-white">DOWNLOAD</h1>
                     <h1 className="font-weight-bold text-white">alfanar Digital Solution Business Profile</h1>
                  </div>
            </div>
            <div className="row pb-4 mt-2 mb-2 row pb-4 mt-2 mb-2 text-center align-items-center justify-content-center">
               <div className="col-lg-4 col-md-12 col-12">
                     <button className="btn btn-outline-light rounded-0 pl-0 pr-0 p-1" style={{border: "1px solid white"}}>
                        <img className="rounded-circle" style={{maxWidth: "120px"}} src={downloadIcon?.downloadImgIcon?.sourceUrl}/>
                     </button>
               </div>
            </div>
         </div>
      </section>


      <section id="top-clients-section" className="wow section">
         <div id="top-clients-container" className="container-lg pb-4 pt-4">
            <div className="row pb-4 pt-4 wow pulse" data-wow-duration="2s">
               <div className="col-12 text-center">
                  <h1 className="font-weight-bold">Our Top Clients</h1>
               </div>
            </div>
            <div className="row pb-4 pt-4 wow" data-wow-duration="0.3s">
            <div className="col-lg-12 animate__animated animate__fadeInDown">
                     <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={2}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                     >
                        {ourTopClients.carouselImages && ourTopClients.carouselImages.length > 0 &&
                           ourTopClients.carouselImages.map((item, index) =>
                              <SwiperSlide key={index + 1} > <div className="swiper-slide text-center">
                                 <img className="w-100" src={item.sourceUrl} />
                              </div>
                              </SwiperSlide>
                           )}
                     </Swiper>
                  </div>
            </div>
         </div>
      </section>
      <section id="landing-page-footer-top-section" className="section bg-gradient fp-section fp-table active fp-completely">
         <div id="landing-page-footer-top-container" className="container-lg pb-4 pt-4 pb-lg-9 pt-lg-6">
            <div className="row equalRow">
               <div className="col-lg-6 col-12">
                  <div className="row equalColumns h-100">
                     <div className="col-lg-7">
                        <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{fontSize: "42px !important"}}>We’re Here to Help You</h1>
                        <p className="text-white bottom-buffer-2point5rem">At alfanar Digital Solutions we value your comments and feedback! You are welcome to submit any questions about alfanar Digital Solutions or any of its services, we will handle your queries as soon as possible.</p>
                        <div className="align-bottom-content-lg "><a className="btn btn-primary" href="/contactus.html" alt="Get In Touch">Get in Touch</a></div>
                     </div>
                     <div className="col-lg-5 align-self-center text-lg-right text-center wow">
                        <img className="w-100 mt-5 mb-5" src="/images/final-images/contactus-header-img.png" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-12">
                  <div className="row equalColumns h-100">
                     <div className="col-lg-7">
                        <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{fontSize: "42px !important", minHeight: "100px"}}>Careers</h1>
                        <p className="text-white bottom-buffer-2point5rem">Join our professional team and play a role to build what’s next. The future starts here</p>
                        <div className="align-bottom-content-lg "><a className="btn btn-primary" href="https://jobs.alfanar.com/alfanar/go/All-Openings/4442101/" target="_blank" alt="Discover Opportunities">Discover Opportunities</a></div>
                     </div>
                     <div className="col-lg-5 align-self-center text-lg-right text-center wow">
                        <img className="w-100" src="/images/final-images/careers-header-img.png" />
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

export default AboutDigitalSolutions
