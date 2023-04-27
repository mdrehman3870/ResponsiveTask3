$(document).ready(function () {
    // HERO SILDER//
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    });
    // Project SILDER//
    $('#project-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        margin: 24,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
            },
            768: {
                items: 2,
            },
            1140: {
                items: 2,
                center: true,
                dots: true,
            },
        }
    })

});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:true,
    items:1,
    smartSpeed:8000,

});