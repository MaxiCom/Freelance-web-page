$(document).ready(function() {
 	
 	console.log(
		"Salut, jeûne padawan, si tu veux en savoir plus," +
		" ce site est développé avec\n\n" +
		"HTML, CSS, JAVASCRIPT,	Bootstrap, fontawesome, animate.css, Jquery\n\n" +
		"Ciao ;)"
	);
    
    setTimeout(function(){
    	
        $('#wrapper').css("display", "block");
        $('.cs-loader').addClass('loaded');
        
        setTimeout(function (){
        	$('.cs-loader').css("display", "none");
        }, 200);
        
    }, 3100);

});