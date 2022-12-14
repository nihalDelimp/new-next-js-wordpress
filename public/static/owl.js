$(function () {

	if($(".owl-carousel").length > 0)
	{
		$(".owl-carousel").owlCarousel({
			margin:30,
			nav:true,
			nav: true,
			dots:false,
			responsive: {
				0:{
					items:3,
				},
				600:{
					items:6,
				},
				1000:{
					items:10,
				}
			}
		});
	}
});