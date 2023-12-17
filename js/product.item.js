// 點小圖show大圖
// function showLarge(e) {
//     let small = e.target; //e.target記錄觸發此事件的物件

//     document.getElementById("large").src = small.src;

// }

// function init() {
//     let smalls = document.getElementsByClassName("small");

//     for (let i = 0; i < smalls.length; i++) {
//         smalls[i].onclick = showLarge;
//     }
// }

// window.addEventListener("load", init, false);


// 單一產品輪播

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,//隱藏箭頭icon
    fade: true,//使用淡入淡出效果
    asNavFor: '.slider-nav'//與slider-nav同步
});

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true, //顯示小點
    centerMode: true,
    focusOnSelect: true
});

// 你可能也會喜歡輪播
$('.like .autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});


