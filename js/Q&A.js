$(function () {
    // 收合
    $(".question").click(function (e) {
        console.log('click', e);
        e.preventDefault();

        $(this).toggleClass("active");

        $(this).find("p").slideToggle();

        $(this).siblings().find("p").slideUp();

        $(this).siblings().removeClass("active");
    });

    // 按鈕旋轉
    $(".question").on('click', function () {
        $(this).find(".fa-chevron-circle-down").toggleClass('rotate-icon');
    });
});


