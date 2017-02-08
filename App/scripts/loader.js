$(document).ready(function() {
 	
 	console.log(
		"Salut jeune padawan, si tu veux en savoir plus, " +
		"ce site a été développé avec\n\n" +
		"HTML, CSS(Sass, Bootstrap, FontAwesome, Animate.css), Javascript(JQuery)\n\n" +
		"Ciao ;)"
	);
    
    setTimeout(function(){
        $('.cs-loader').fadeOut();
        $('#wrapper').show();       
    }, 3100);

});