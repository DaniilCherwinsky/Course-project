$(document).ready(function () {
    var $btnTop = $(".btn-top");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 20) {
            $('.btn-top').fadeIn();
        } else {
            $(".btn-top").fadeOut();
        }
    });
    $(".btn-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 900);
    });
});