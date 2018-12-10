;
(function ($) {
    "use strict";
    $(function () {
        $('.ba-team-slider').slick({
            infinity: false,
            slidesToScroll: 1,
            slidesToShow: 1,
            dots: true,
            // slide: 'ba-team-slider__item',
            adaptiveHeight: true,
            // prevArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fas fa-angle-double-right' aria-hidden='true'></i></button>",
            // nextArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fas fa-angle-double-left' aria-hidden='true'></i></button>"
        })
    });
})(jQuery);