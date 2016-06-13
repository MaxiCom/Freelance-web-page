$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
	
  //Top bar
	if (scroll > 250)
		$("nav").addClass("scrolled");
	else if (scroll < 250)
		$("nav").removeClass("scrolled");
  
  //About btn
  if (scroll > 500)
    $("#About-btn").addClass("animated fadeInUp opacity");

  //Services boxes
  if (scroll > 900){
    $(".service-box-left").addClass("animated fadeInLeft opacity");
    $(".service-box-right").addClass("animated fadeInRight opacity");
  }

  //Contact boxes
  if (scroll > 1500){
    $(".contact-item-left").addClass("animated fadeInLeft opacity");
    $(".contact-item-middle").addClass("animated fadeInUp opacity");
    $(".contact-item-right").addClass("animated fadeInRight opacity");
  }
});

// --------------- //
//     Credits     //
// Geoffrey Crofte //
// --------------- //
$('a[href^="#"]').click(function(){
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop:$(the_id).offset().top
  }, 1000);
  return false;
});
