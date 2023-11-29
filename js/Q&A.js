$(function () {
    $(".question").click(function (e) {
        console.log('click', e)
        e.preventDefault();

        $(this).toggleClass("active");

        $(this).find("p").slideToggle();

        $(this).siblings().find("p").slideUp();

        $(this).siblings().removeClass("active");
    });
});
