// 點小圖show大圖
function showLarge(e) {
    let small = e.target; //e.target記錄觸發此事件的物件

    document.getElementById("large").src = small.src;

}

function init() {
    let smalls = document.getElementsByClassName("small");

    for (let i = 0; i < smalls.length; i++) {
        smalls[i].onclick = showLarge;
    }
}

window.addEventListener("load", init, false);


// 產品輪播
const slickRun = function () {
    $(".st-carousel").slick({
        dots: true, //顯示點點
        infinite: true, //無限循環
        // edgeFriction: 0.15,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        // swipeToSlide: true,
        // centerMode: true,
        // variableWidth: true, //可變寬度
        // adaptiveHeight: true, //自適應高度
        responsive: [
            {
                breakpoint: 1680,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    // variableWidth: true, //可變寬度
                    adaptiveHeight: true, //自適應高度
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // variableWidth: false, //可變寬度
                    // adaptiveHeight: false, //自適應高度
                },
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true,
                    // variableWidth: true, //可變寬度
                    // adaptiveHeight: true, //自適應高度
                },
            },
        ],
    });

    var ringFiltered = "";

    $(".carousel-filter.all").on("click", function () {
        if (ringFiltered != "all") {
            $(".st-carousel").slick("slickUnfilter");
            ringFiltered = "all";
        }
    });
    $(".carousel-filter.new").on("click", function () {
        if (ringFiltered != "new") {
            $(".st-carousel").slick("slickUnfilter");
            $(".st-carousel").slick("slickFilter", ".new");
            ringFiltered = "new";
        }
    });
    $(".carousel-filter.sale").on("click", function () {
        if (ringFiltered != "sale") {
            $(".st-carousel").slick("slickUnfilter");
            $(".st-carousel").slick("slickFilter", ".sale");
            ringFiltered = "sale";
        }
    });
    $(".carousel-filter.topRated").on("click", function () {
        if (ringFiltered != "topRated") {
            $(".st-carousel").slick("slickUnfilter");
            $(".st-carousel").slick("slickFilter", ".topRated");
            ringFiltered = "topRated";
        }
    });
    $(".carousel-filter.featured").on("click", function () {
        if (ringFiltered != "featured") {
            $(".st-carousel").slick("slickUnfilter");
            $(".st-carousel").slick("slickFilter", ".featured");
            ringFiltered = "featured";
        }
    });

    $(".st-carousel").on("mouseenter", function () {
        $(this).on("wheel", function (e) {
            e.preventDefault();
            console.log(e.originalEvent.deltaY);
            if (e.originalEvent.deltaY < 0) {
                $(this).slick("slickNext");
            } else {
                $(this).slick("slickPrev");
            }
        });
    });

    $(".st-carousel").on("mouseleave", function () {
        $(this).off("wheel");
    });
};

slickRun();

