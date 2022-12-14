// Init Wow Animation Effects
wow = new WOW({
  animateClass: "animated",
  offset: 100,
});
wow.init();

// Not sure what the below code does, need to check and remove if not needed

// feather.replace();

// Arabic and RTL langiage Support Logic

let langCheck = false;
let mainPage = document.getElementById("gov-industry-page");
let mainHtml = document.getElementById("mainHtml");

const langChange = () => {
  if (mainPage.classList.contains("rtl")) {
    mainPage.classList.remove("rtl");
    mainHtml.setAttribute("lang", "eng");
    mainHtml.setAttribute("dir", "ltr");
    mainHtml.find("language-change").text("English");
  } else {
    mainPage.classList.add("rtl");
    mainHtml.setAttribute("lang", "ar");
    mainHtml.setAttribute("dir", "rtl");
    mainHtml.find("language-change").text("عـربـي");
  }
};

//FOR MEGA MENU

var count = 0;

function hideDefaultTab(tab) {
  console.log(tab);
  if (count == 0) {
    $("#" + tab).removeClass("show");
    count = count + 1;
  }
}


$('.mega-menu-nav-tabs a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
  var target = $(e.target).attr("href"); // activated tab

  $(target).find(".detail-card").addClass("wow fadeInUp animated");
  $(target)
    .find(".detail-card")
    .attr("style", "visibility: visible; animation-name: fadeInUp;");
  $(target).find(".mega-menu-image").addClass("wow fadeInDown animated");
  $(target)
    .find(".mega-menu-image")
    .attr("style", "visibility: visible; animation-name: fadeInDown;");
});

$(document).on('click', function (e) {
  e.stopPropagation();
  $(".dropdown-menu.show").removeClass("show");
});

$(document).on('hover', 'li.dropdown a.navbarDropdown', function (e) {

  $("li.dropdown")
    .mouseenter(function (e) {
      e.stopPropagation();
      $(".dropdown-menu.show").removeClass("show");
      $(this).addClass("show");
      $(this).find(".dropdown-menu").addClass("show");
    })
    .mouseleave(function (e) {
      e.stopPropagation();
      $(".dropdown-menu.show").removeClass("show");
      $(this).removeClass("show");
      $(this).find(".dropdown-menu").removeClass("show");
    });

});

$(document).ready(function () {

  // Select and loop the container element of the elements you want to equalise
  $('.equalRow').each(function () {

    // Cache the highest
    var highestBox = 0;

    // Select and loop the elements you want to equalise
    $('.equalColumns', this).each(function () {

      // If this box is higher than the cached highest then store it
      if ($(this).height() > highestBox) {
        highestBox = $(this).height();
      }

    });

    // Set the height of all those children to whichever was highest 
    $('.equalColumns', this).height(highestBox);

  });

});


$(document).ready(function () {
  // Video 1

  $("#brainTeaserModal").on("hidden.bs.modal", function (event) {
    $("#brain_teaser_vid")[0].pause();
  });

  $("#choosingTechnologyModal").on("hidden.bs.modal", function (event) {
    $("#choosing_technology_vid")[0].pause();
  });

  $("#portfolioModal").on("hidden.bs.modal", function (event) {
    $("#portfolio_expertise_vid")[0].pause();
  });
});


$(document).ready(function () {

$(".numCount").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate({
      Counter: $(this).text(),
    }, {
      duration: 3000,
      easing: "swing",
      step: function (now) {
        $(this).text(Math.ceil(now));
      },
    });
});

// All Swiper Carousel Related Code Below

var mySwiperGov = new Swiper(".mySwiperGov", {
  loop: true,
  spaceBetween: 50,
  autoplay: 10,
  autoplayDisableOnInteraction: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  onSlideChangeEnd: function (s) {
    var currentSlide = $(s.slides[s.activeIndex]);
    //do something
    currentSlide.find(".projects-stories-container").fadeIn();
  },
});

var testimonialsSwiper = new Swiper(".testimonials-swiper", {
  spaceBetween: 20,
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
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var topClientsSwiper = new Swiper(".top-clients-swiper", {
  spaceBetween: 10,
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
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

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

var swiperDummy = new Swiper(".dummy-carousel-swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
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
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

// var video = $('#portfolio_expertise_vid-aboutus')[0];
var video = $('video')[0];
// $('#portfolio_expertise_vid-aboutus').trigger('click');
// document.trigger('click');

function isElementInViewport (el) {

  // Special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  );
}

function onVisibilityChange(el, callback) {
  console.log(el);
  var old_visible;
  return function () {
      var visible = isElementInViewport(el);
      // video.click();
      console.log(visible);
      if (visible != old_visible) {
          old_visible = visible;
          if(visible){
            console.log('PLAY');
            video.play();
            // $('#portfolio_expertise_vid-aboutus').trigger('click');
            // video.muted = false;
          }else{
            console.log('PAUSED');
            video.pause();
            video.muted = true;
          }
      }
  }
}

var handler_aboutus = onVisibilityChange($('#portfolio_expertise_vid-aboutus'), function() {
  /* Your code go here */
  // $(document).click();
});

var handler_home = onVisibilityChange($('#portfolio_expertise_vid_home'), function() {
  /* Your code go here */
  // $(document).click();
});

// jQuery
$(window).on('DOMContentLoaded load resize scroll', handler_aboutus);
$(window).on('DOMContentLoaded load resize scroll', handler_home);

});