$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 200 && scroll_pos < 1980) {
            $("#contactSideBarID").css('color', 'white');
        }
        else {
            $("#contactSideBarID").css('color', '#161f3c');
        }
    });
});

$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 680 && scroll_pos < 2280) {
            $(".navigation n").css('color', 'white');
        }
        else {
            $(".navigation n").css('color', '#161f3c');
        }
    });
});

$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 680 && scroll_pos < 2280) {
            $("#fasID").css('color', 'white');
        }
        else {
            $("#fasID").css('color', '#dc0024');
        }
    });
});

var initialSrc = "assets/bangakun-logo-white.png";
var scrollSrc = "assets/bangakun-logo.png";

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 680 && value < 2280)
      $("#bangakunLogoID").attr("src", initialSrc);
   else
      $("#bangakunLogoID").attr("src", scrollSrc);
});
