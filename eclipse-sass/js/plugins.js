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
        navText : ['Suivant', 'Précédent'],
        dots : false,

    })
});
