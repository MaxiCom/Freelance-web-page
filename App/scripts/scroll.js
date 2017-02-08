$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
	
  // TOP BAR //
	if (scroll > $(document).height() * 0.08) {
		$("nav").addClass("transform");
  }	else if (scroll < $(document).height() * 0.8) {
    $("nav").removeClass("transform");
  }
  
  // ABOUT BUTTON //
  if (scroll > $(document).height() * 0.12) {
    $("#About-btn").addClass("animated fadeInUp visible");
  }

  // SERVICES BOXES // 
  if (scroll > $(document).height() * 0.27) {
    $(".service-box-left").addClass("animated fadeInLeft visible");
    $(".service-box-right").addClass("animated fadeInRight visible");
  }

  // CONTACT BOXES //
  if (scroll > $(document).height() * 0.6) {
    $(".contact-item-left").addClass("animated fadeInLeft visible");
    $(".contact-item-middle").addClass("animated fadeInUp visible");
    $(".contact-item-right").addClass("animated fadeInRight visible");
  }
});

$('a[href^="#"]').click(function() {
  $('html, body').animate({
    scrollTop:$($(this).attr("href")).offset().top
  }, 1000);
  return false;
});
