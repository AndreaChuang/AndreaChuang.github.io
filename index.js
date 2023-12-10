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
          // return colors[Math.floor(Math.random() * colors.length)];
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

showLandingLogo();

document.getElementById("animation").style.display = "none";


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
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // variableWidth: false, //可變寬度
          // adaptiveHeight: false, //自適應高度
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: true
          // variableWidth: true, //可變寬度
          // adaptiveHeight: true, //自適應高度

        }
      }
    ]
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


// 顧客回饋輪播
$('.single_item').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false, //可變寬度
  adaptiveHeight: false,
});


