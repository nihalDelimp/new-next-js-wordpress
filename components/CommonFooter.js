import React from 'react'

function CommonFooter({footerSection}) {
  return (
    <>
         <section id="landing-page-footer-top-section" style={{ backgroundColor: 'rgb(2,0,36)' }} className="section bg-gradient fp-section fp-table active fp-completely" data-fp-styles="null" >
                <div id="landing-page-footer-top-container" className="container-lg pb-4 pt-4 pb-lg-9 pt-lg-6">
                    <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                        <div className="row equalRow">
                            {footerSection && footerSection.length > 0 && footerSection.map(ele =>
                                ele.footerSection && ele.footerSection.length > 0 &&
                                ele.footerSection.map((item, index) =>
                                (<div key={index + 1} className="col-lg-6 p-3 col-12">
                                    <div className="row h-100">
                                        <div className="col-lg-7 col-md-12">
                                            <h1 className="font-weight-bold text-white bottom-buffer-2point5rem" style={{ fontSize: '42px' }}>{item.title}</h1>
                                            <p className="text-white bottom-buffer-2point5rem">{item.description}</p>
                                            <div className="align-bottom-content-lg "><a href="/contactus.html" className="btn btn-primary">{item.buttonLabel}</a></div>
                                        </div>
                                        <div className="col-lg-5 align-self-center text-lg-right text-center d-none d-lg-block">
                                            <img className="w-100 mt-5 mb-5" src={item?.image?.sourceUrl} />
                                        </div>
                                    </div>
                                </div>))
                            )}
                        </div>
                    </div>
                </div>
            </section>
      
    </>
  )
}

export default CommonFooter
