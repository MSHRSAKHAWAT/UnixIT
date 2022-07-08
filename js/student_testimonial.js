$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1300, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        itemsMobile: [600, 1],
        pagination: true,
        navigation: false,
        navigationText: ["", ""],
        slideSpeed: 1000,
        autoPlay: true,
        // loop: true,
    });
});