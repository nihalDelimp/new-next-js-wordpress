let contactusheader = 'https://alfanar-digital-solution.azurewebsites.net/public/final-images/contactus-header-img.png';
let careersheader = 'https://alfanar-digital-solution.azurewebsites.net/public/final-images/careers-header-img.png'
import CommonFooter from '../CommonFooter';

const Banner = ({ banner, video, references, footerSection, singleImageData }) => {
    return (
        <>
            <div id="canvas"><img src={singleImageData[0].singleImage.sourceUrl} ></img></div>
            {
                banner.map((item) => (
                    item.bannerItems && item.bannerItems.length > 0 && item.bannerItems.map((item2, index2) => {
                        return (
                            <div key={index2 + 1} className="wp-block-uagb-container slide-div uagb-block-a3f2e44f alignfull uagb-is-root-container" style={{ backgroundImage: `url(${item2.bannerImage.sourceUrl})` }} id="sec2">
                                <div className="uagb-container-inner-blocks-wrap">
                                    <h1 className="text-center text-white pt-2 pb-2 bottom-buffer-0point5rem">{item2.bannerTitle} </h1>
                                    <p className="text-white pt-2 mb-2 mt-2">{item2.bannerDescription}</p>
                                    <div className="is-layout-flex wp-block-buttons justify-content-center">
                                        <div className="wp-block-button button_main is-style-fill mt-4 mb-2"><a className="wp-block-button__link wp-element-button" href={item2.bannerUrl} rel="">{item2.bannerButtonLabel}</a></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                ))
            }
            < section id="index-section_10" style={{ backgroundColor: 'rgb(2,0,36)' }} className="section bg-gradient bg-size-cover bg-no-repeat bg-center" >
                <div id="index-container" className="container-lg">
                    <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                        <div className="row pt-2 pb-2">
                            <div className="align-self-center text-center text-lg-left col-sm-12">
                                <video id="portfolio_expertise_vid_home" className="d-block" width="95%" height="90%" controls="controls" muted poster={''}>
                                    <source src={video[0].video} type="video/mp4" />
                                    Your browser does not support HTML video.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section id="landing-page-references-section" className="section bg-white fp-section fp-table active fp-completely" data-fp-styles="null" >
                <div id="landing-page-references-container" className="container-lg pb-4 pt-4 pb-lg-6 pt-lg-6">
                    <div className="row pt-2 pb-2">
                        {references && references.length > 0 && references.map((ele, index) =>
                            ele.referencesSectionItems && ele.referencesSectionItems.length > 0 &&
                            ele.referencesSectionItems.map((item, index2) =>
                            (<div key={index2 + 1} className="col-md-6 col-sm-12">
                                <div className="row text-center justify-content-center p-3">
                                    <h1 className="font-weight-bold text-primary bottom-buffer-2point5rem text-center">{item.title}</h1>
                                    <p className="text-primary bottom-buffer-2point5rem small font-weight-bold col-lg-9">{item.description}</p>
                                </div>
                                <div className="row pb-4 pt-4 d-lg-none d-md-block">
                                    <div className="col-lg-12 animate__animated animate__fadeInDown">
                                        <div className="swiper-alfanar">
                                            <div className="swiper-container top-clients-swiper-index">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide text-center">
                                                        <img className="w-100" src='' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-navigation">
                                                <div className="swiper-button-next"></div>
                                                <div className="swiper-button-prev"></div>
                                            </div>
                                            <div className="swiper-pagination"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>))
                        )}
                    </div>
                    <div className="d-lg-block d-none">
                        <div className="row pt-2 pb-2">
                            {references && references.length > 0 && references.map(ele =>
                                ele.referencesSectionItems && ele.referencesSectionItems.length > 0 &&
                                ele.referencesSectionItems.map((item, index) =>
                                (<div key={index + 1} className="col-6">
                                    <div className="swiper-alfanar">
                                        <div className="swiper-container top-clients-swiper-index">
                                            <div className="swiper-wrapper">
                                                {item.images && item.images.length > 0 &&
                                                    item.images.map(image => {
                                                        return (
                                                            <div className="swiper-slide text-center">
                                                                <img className="w-100" src={image.sourceUrl} />
                                                            </div>)
                                                    })}
                                            </div>
                                        </div>
                                        <div className="swiper-navigation">
                                            <div className="swiper-button-next"></div>
                                            <div className="swiper-button-prev"></div>
                                        </div>
                                    </div>
                                </div>))
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <CommonFooter footerSection = {footerSection} />

            {/* <section id="landing-page-footer-top-section" style={{ backgroundColor: 'rgb(2,0,36)' }} className="section bg-gradient fp-section fp-table active fp-completely" data-fp-styles="null" >
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
            </section> */}
        </>
    );
};

export default Banner;
