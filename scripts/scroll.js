$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
	
  //Top bar
	if (scroll > 250)
		$("nav").addClass("scrolled");
	else if (scroll < 700)
		$("nav").removeClass("scrolled");
  //PAS FINI
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
