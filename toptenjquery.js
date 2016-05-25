/* Fade in scripts */
$(document).ready(function(){
$("#mission").fadeIn(1000)
$("#missionstatement").fadeIn(3000);
$("#firststatement").fadeIn(3000);
$("#secondstatement").fadeIn(3000);
$(".jumbobutton, #jumbobutton").fadeIn(4100).css("display","inline-block");
});

/* Window Scroll */
$(document).ready(function () {
    $("#jumbobutton").click(function() {
        $('html, body').animate({
        scrollTop: $("#target").offset().top}, 1000);
    });
});

/* Fades in the nav once you are past the jumbotron */
(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 300) {
                $('#nav').fadeIn(500);
            } else {
                $('#nav').fadeOut(500);
            }
        });
    });
})(jQuery);

/* Sets width and height of whatever element to fill device window */ 
$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.background').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});

/* Popup Scripts */ 
