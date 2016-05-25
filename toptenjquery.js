/* Fade in scripts */
$(document).ready(function(){
$("#objective").fadeIn(1000)
$("#missionstatement").fadeIn(3000);
$("#firststatement").fadeIn(5000);
$("#secondstatement").fadeIn(5000);
$(".jumbobutton, #jumbobutton").fadeIn(5100).css("display","inline-block");
});

/* Window Scroll */
$(document).ready(function () {
    $("#jumbobutton").click(function() {
        $('html, body').animate({
        scrollTop: $(".colrow").offset().top}, 2000);
    });
});

/* Popup Scripts */ 
