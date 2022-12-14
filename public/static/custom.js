

  $(document).ready(function(){
    var topClientsSwiper3dHeader = new Swiper(".top-clients-swiper-index", {
        spaceBetween: 0,
        loop: true,
        speed: 5000,
        autoplay: {
          delay: 100,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
        },
      });
  });