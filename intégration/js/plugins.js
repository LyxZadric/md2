$(document).ready(function(){
  $('.carousel').slick({
    dots : true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows : true,
    //autoplay : true,
    //autoplaySpeed : 2000,
    fade : true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '40px',
  });
});



$(function(){
    $('#responsive-menu-button').sidr({
        name: 'sidr-main',
        source: '#navigation',
        displace : false,
    });
    $('body').click(function(){
        $.sidr('close', 'sidr-main');
    })
});
