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

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav : true,
        items : 1,
        navText : ['<i class="fa fa-arrow-circle-left fa-slider" id="fa-left"></i>', '<i class="fa fa-arrow-circle-right fa-slider" id="fa-right"></i>'],
        dots : false,

    })
});
