
/*source : https://codepen.io/nickcil/pen/sfutl*/

$(window).scroll(function(){
    $(".mainBanner").css("opacity", 1 - $(window).scrollTop() / 500);
  });

  $(window).scroll(function(){
      $(".scrollArrow").css("opacity", 1 - $(window).scrollTop() / 500);
    });

/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".top").css("opacity", scrollRatio);
*/
