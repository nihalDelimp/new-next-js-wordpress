$(function () {

    function fullPageIntroInit() {
        // alert("Full page Inrtor")

        new fullpage('#fullpage', {
            //options here
            // autoScrolling: true,
            licenseKey: 'G4K1J-NS516-K5W16-MJ63I-NYLVP',
            responsiveWidth: 1024,
            // responsiveHeight: 1600,
            // afterResponsive: function(isResponsive){
            // },
            // scrollHorizontally: true,
            // scrollBar: true,
            animateAnchor: true,
            // menu: '#menu',
            lockAnchors: false,
            // anchors: ['firstPage', 'secondPage'],
            navigation: true,
            navigationPosition: 'left',
            // navigationTooltips: ['firstSlide', 'secondSlide'],
            // showActiveTooltip: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            // afterLoad: function (origin, destination, direction, trigger) {
            //     var video = $('video')[0];
            //     console.log(destination,"destinationdestinationdestinationdestination")

            //     if (destination.index == 8) {
            //         console.log('PLAYING');
            //         console.log(video,"videovideovideo")
            //         video.play();
            //         video.muted = false;
            //     }
            // },
            // onLeave: function (origin, destination, direction, trigger) {
            //     var video = $('video')[0];
            //     if (origin.index == 8) {
            //         console.log('PAUSED');
            //         video.pause();
            //         video.muted = true;
            //     }
            // }
        });
    };

    var attached = false;//track it's current state
    manageFullPage();

    $(window).resize(function () {
        manageFullPage();
    })

    function manageFullPage() {
        if ($(this).width() > 1024) {
            // alert(":dajsgdsab")
            if (!attached) {
                fullPageIntroInit();
                // alert("fucuucucuc")
                attached = true;//note it's been attached
            }
        } else {//we don't want fullpage. destroy it if it's attached
            if (attached) {
                attached = false;//mark destroyed
                $.fn.fullpage.destroy('all');
            }
        }
    }
});