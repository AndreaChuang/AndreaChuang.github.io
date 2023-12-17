$(function () {
  showLandingLogo();
  // document.getElementById("animation").style.display = "none";
  slickRun();


  // 靠按鈕切換
  document.getElementById("CarouselPrev").addEventListener("click", function () {
    showSlide(carouselIndex - 1);
  });
  document.getElementById("CarouselNext").addEventListener("click", function () {
    showSlide(carouselIndex + 1);
  });

  // 滑鼠滑動事件
  let carouselStartX;
  document.getElementById("carousel").addEventListener("mousedown", function (e) {
    carouselStartX = e.clientX;
  });

  document.getElementById("carousel").addEventListener("mouseup", function (e) {
    // console.log("e.clientX", e.clientX);
    // console.log("carouselStartX", carouselStartX);
    if (e.clientX > carouselStartX) {
      showSlide(carouselIndex - 1); // 向右滑動，顯示上一張
    } else if (e.clientX < carouselStartX) {
      showSlide(carouselIndex + 1); // 向左滑動，顯示下一張
    }
  });

  navJSCarousel();

  // 下雪花
  $.snowfall.start({
    size: {
      min: 10,
      max: 20
    },
    color: '#fff',
    content: '&#10052;'
  });

});

// 動畫
const showLandingLogo = function () {
  gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);

  TweenLite.defaultEase = Linear.easeNone;

  var masterT = new TimelineMax({ paused: true }),
    colors = ["white"],
    svg = document.querySelector("svg"),
    paths = document.querySelectorAll("path"),
    space = 1,
    total = colors.length,
    numRepeats = 2,
    scaleVal = 2,
    lineDrawTime = 25, //速度
    betweenLines = 1,
    strokeWidth = 4;

  TweenMax.set(paths, { drawSVG: 0, visibility: "visible" });
  TweenLite.set(svg, { scale: scaleVal });

  function drawInOut(direction) {
    var inVal, outVal;
    if (direction == "in") {
      inVal = "0";
      outVal = "100%";
    } else {
      inVal = "100%";
      outVal = "0";
    }

    var tw = TweenMax.staggerFromTo(
      paths,
      lineDrawTime,
      { drawSVG: inVal },
      {
        drawSVG: outVal,
        stroke: function () {
          return colors[Math.floor(Math.random() * colors.length)];
          return colors[colors.length - 1];
        },
      },
      betweenLines
    );

    if (direction == "in") {
      tw.onCompleteAll = function () {
        animateLines();
      };

      // logo淡出效果
      gsap.to("#animation", {
        opacity: 0,
        duration: 3,
        delay: 5,
        display: "none",
      });

      return tw;
    }
  }

  function animateLines() {
    var mainTL = new TimelineMax();
    for (let path of paths) {
      var length = path.getTotalLength();
      var offset = length / total;

      TweenLite.set(path, {
        strokeDasharray: `${offset + space},${length - offset - space}`,
        strokeWidth: strokeWidth,
        strokeLinejoin: "round",
      });

      var tl = colors.reduce((tl, stroke, i) => {
        var clone = path.cloneNode(true);
        svg.appendChild(clone);
        TweenLite.set(clone, { stroke, strokeDashoffset: -i * offset });
        return tl.to(clone, 2, { strokeDashoffset: `+=${length}` }, 0);
      }, new TimelineMax({ repeat: numRepeats }));
    }
    tl.onComplete = function () {
      drawInOut("out");
    };
    // return tl;
  }

  var dur = 0;
  masterT.add(drawInOut("in"));
  masterT.play();
};

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

// 顧客回饋輪播
// $(".single_item").slick({
//   dots: true,
//   infinite: false,
//   slidesToShow: 2,
//   slidesToScroll: 2,
//   variableWidth: false, //可變寬度
//   adaptiveHeight: false,
//   centerMode: true,
//   rtl: true
// });

// 原生Carouse輪播
// 暫存Index, 紀錄目前第幾塊Slide
let carouselIndex = 0;
// 抓取全部的Slide
let carouselItems = document.getElementsByClassName("carousel-item");
// 紀錄total數量
let totalItems = carouselItems.length;

// 輪播開始，除了第一張以外其他全部隱藏
const navJSCarousel = function () {
  for (var i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.display = "none";
  }
  carouselIndex++;
  if (carouselIndex > carouselItems.length) {
    carouselIndex = 1;
  }
  carouselItems[carouselIndex - 1].style.display = "flex";

  setTimeout(navJSCarousel, 2000); // 自動撥放，每2秒換一張圖片
};

const showSlide = function (i) {
  carouselIndex = i;
  if (carouselIndex >= totalItems) {
    carouselIndex = 0;
  }
  if (carouselIndex < 0) {
    carouselIndex = totalItems - 1;
  }

  for (var j = 0; j < totalItems; j++) {
    carouselItems[j].style.display = "none";
  }
  carouselItems[carouselIndex].style.display = "flex";
};