$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: true,

    });

});
$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    $('.loader').delay(100).fadeOut('fast');
})