$(window).on("scroll touchmove", function()
{
    if ($(document).scrollTop() >= $("#landingPage").position().top && $(document).scrollTop() < $("#tentang").position().top  )
    {
        $('body').css('background-color', 'black')
    };
    if ($(document).scrollTop() >= $("#tentang").position().top && $(document).scrollTop() < $("#keunggulanProduk").position().top)
    {
        $('body').css('background-color', 'black')
    };
   if ($(document).scrollTop() >= $("#keunggulanProduk").position().top && $(document).scrollTop() < $("#keuntunganMemiliki").position().top )
   {
        $('body').css('background-color', 'red')
    };
   if ($(document).scrollTop() >= $("#keuntunganMemiliki").position().top && $(document).scrollTop() < $("#faq").position().top )
   {
        $('body').css('background-color', 'red')
    };
   if ($(document).scrollTop() >= $("#faq").position().top && $(document).scrollTop() < $("#testimonial").position().top )
   {
        $('body').css('background-color', 'red')
   if ($(document).scrollTop() >= $("#testimonial").position().top)
   {
        $('body').css('background-color', 'white')
   };

});
