import React from 'react'
import Footer from '../Footer/Footer'

function OurTeam({headerData}) {
  return (
    <div >
      <section  id="our-team-section_1" className="wow fadeInUp  sectionsection bg-gradient bg-size-cover bg-no-repeat bg-center fp-section fp-table  fp-completely">
         <div id="our-team-container" className="container-lg pt-4 pb-4">
            <div className="row pt-8 pb-4 pt-lg-1 pb-lg-1">
               <div className="col-lg-12 text-left">
                  <ul className="alfanar-breadcrumb font-bold no-margin-bottom">
                     <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/about-us.html">About Us</a></li>
                     <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">About Us : Our Team</a></li>
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
      <section id="our-team-section_2" className="wow section animated">
         <div id="our-team-container" className="container-lg pt-4 pb-4 pt-lg-8 pb-lg-8">
            <div className="row">
               <div className="col-lg-4 col-sm-12 pt-4 pb-4 text-center">
                  <div className="our-team-container">
                     <div className="our-team-image">
                        <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600w-1682415103.jpg" width="200" height="200"/>
                     </div>
                     <div className="our-team-content text-center mt-4 mb-4">
                        <p className="big text-primary mb-1">Name Last name</p>
                        <h4 className="text-dark-grey mt-1 mb-1">Titel Titel</h4>
                        <p className="big pb-2 text-primary">Department</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 pt-4 pb-4 text-center">
                  <div className="our-team-container">
                     <div className="our-team-image">
                        <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600w-1682415103.jpg" width="200" height="200"/>
                     </div>
                     <div className="our-team-content text-center mt-4 mb-4">
                        <p className="big text-primary mb-1">Name Last name</p>
                        <h4 className="text-dark-grey mt-1 mb-1">Titel Titel</h4>
                        <p className="big pb-2 text-primary">Department</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 pt-4 pb-4 text-center">
                  <div className="our-team-container">
                     <div className="our-team-image">
                        <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600w-1682415103.jpg" width="200" height="200"/>
                     </div>
                     <div className="our-team-content text-center mt-4 mb-4">
                        <p className="big text-primary mb-1">Name Last name</p>
                        <h4 className="text-dark-grey mt-1 mb-1">Titel Titel</h4>
                        <p className="big pb-2 text-primary">Department</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-sm-12 pt-4 pb-4 text-center">
                  <div className="our-team-container">
                     <div className="our-team-image">
                        <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600w-1682415103.jpg" width="200" height="200"/>
                     </div>
                     <div className="our-team-content text-center mt-4 mb-4">
                        <p className="big text-primary mb-1">Name Last name</p>
                        <h4 className="text-dark-grey mt-1 mb-1">Titel Titel</h4>
                        <p className="big pb-2 text-primary">Department</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 pt-4 pb-4 text-center">
                  <div className="our-team-container">
                     <div className="our-team-image">
                        <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600w-1682415103.jpg" width="200" height="200"/>
                     </div>
                     <div className="our-team-content text-center mt-4 mb-4">
                        <p className="big text-primary mb-1">Name Last name</p>
                        <h4 className="text-dark-grey mt-1 mb-1">Titel Titel</h4>
                        <p className="big pb-2 text-primary">Department</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 pt-4 pb-4 text-center">
                  <div className="our-team-container">
                     <div className="our-team-image">
                        <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600w-1682415103.jpg" width="200" height="200"/>
                     </div>
                     <div className="our-team-content text-center mt-4 mb-4">
                        <p className="big text-primary mb-1">Name Last name</p>
                        <h4 className="text-dark-grey mt-1 mb-1">Titel Titel</h4>
                        <p className="big pb-2 text-primary">Department</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-sm-12 pt-4 pb-4 text-center">
                  <div className="our-team-container">
                     <div className="our-team-image">
                        <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600w-1682415103.jpg" width="200" height="200"/>
                     </div>
                     <div className="our-team-content text-center mt-4 mb-4">
                        <p className="big text-primary mb-1">Name Last name</p>
                        <h4 className="text-dark-grey mt-1 mb-1">Titel Titel</h4>
                        <p className="big pb-2 text-primary">Department</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 pt-4 pb-4 text-center">
                  <div className="our-team-container">
                     <div className="our-team-image">
                        <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600w-1682415103.jpg" width="200" height="200"/>
                     </div>
                     <div className="our-team-content text-center mt-4 mb-4">
                        <p className="big text-primary mb-1">Name Last name</p>
                        <h4 className="text-dark-grey mt-1 mb-1">Titel Titel</h4>
                        <p className="big pb-2 text-primary">Department</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 pt-4 pb-4 text-center">
                  <div className="our-team-container">
                     <div className="our-team-image">
                        <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600w-1682415103.jpg" width="200" height="200"/>
                     </div>
                     <div className="our-team-content text-center mt-4 mb-4">
                        <p className="big text-primary mb-1">Name Last name</p>
                        <h4 className="text-dark-grey mt-1 mb-1">Titel Titel</h4>
                        <p className="big pb-2 text-primary">Department</p>
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

export default OurTeam
