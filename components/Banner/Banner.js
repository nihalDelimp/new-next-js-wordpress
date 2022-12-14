
import Footer from '../Footer/Footer';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = ({ banner, video, references, footerSection, singleImageData }) => {
    return (
        <>

            <div id="fullpage" className='fullpage-wrapper'>
                {/* <div id="canvas"><img src={singleImageData[0].singleImage.sourceUrl} ></img></div> */}
                <section
                    id="index-section_2"
                    className="section bg-size-cover bg-no-repeat bg-center fp-section fp-table fp-overflow active fp-completely"
                    style={{ height: "100%" }}
                >
                    <img src={singleImageData[0].singleImage.sourceUrl} />
                </section>
                {
                    banner.map((item) => (
                        item.bannerItems && item.bannerItems.length > 0 && item.bannerItems.map((item2, index2) => {
                            return (
                                <section
                                    id="index-section_2"
                                    className="section bg-gradient bg-size-cover bg-no-repeat bg-center fp-section fp-table fp-overflow active fp-completely"
                                    style={{ backgroundImage: `url(${item2.bannerImage.sourceUrl}) !important` }}
                                >
                                    <div id="index-container" className="container-lg pt-6">
                                        <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                                            <div className="row pt-2 pb-2">
                                                <div className="align-self-center text-center col-sm-12">
                                                    <h1 className="text-white font-bold bottom-buffer-0point5rem">
                                                        {item2.bannerTitle}
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="row pt-2 pb-2">
                                                <div className="align-self-center col-md-12 text-center text-lg-left">
                                                    <p className="text-white big mb-2 mt-2">
                                                        {item2.bannerDescription}
                                                    </p>
                                                </div>
                                                <div className="col-sm-12 mt-4 mb-2 text-center">
                                                    <a
                                                        href={item2.bannerUrl}
                                                        className="btn btn-primary border border-1 rounded-0 px-6 py-3 bg-transparent text-white"
                                                    >
                                                        {item2.bannerButtonLabel}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
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
                                                <div className="swiper-container top-clients-swiper-index-1">
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
                                                    <Swiper
                                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                                        spaceBetween={50}
                                                        slidesPerView={3}
                                                        navigation
                                                        pagination={{ clickable: true }}
                                                        scrollbar={{ draggable: true }}
                                                        onSwiper={(swiper) => console.log(swiper)}
                                                        onSlideChange={() => console.log('slide change')}
                                                    >
                                                        {item.images && item.images.length > 0 &&
                                                            item.images.map((item, index) =>
                                                                <SwiperSlide key={index+1} ><div className="swiper-slide text-center">
                                                                    <img className="w-100" src={item.sourceUrl} />
                                                                </div>
                                                                </SwiperSlide>
                                                                )}
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </section>

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

                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" defer></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" defer></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" defer></script> */}
                {/* <script src='/static/owl.js' defer></script> */}
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js" defer></script>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.9/fullpage.min.js' defer ></script>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.9/fullpage.extensions.min.js' defer ></script>
                <script src='/static/wow.min.js' defer></script> */}

                {/* <script src='/static/landing-page.js' defer></script> */}
                {/* <script src='/static/custom-fullpage-vertical.js' defer></script> */}
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default Banner;
