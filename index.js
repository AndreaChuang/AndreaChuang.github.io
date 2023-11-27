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

    TweenMax.set(paths, { drawSVG: 0, visibility: 'visible' });
    TweenLite.set(svg, { scale: scaleVal });

    function drawInOut(direction) {
        var inVal, outVal;
        if (direction == 'in') {
            inVal = '0';
            outVal = '100%';
        } else {
            inVal = '100%';
            outVal = '0';
        }

        var tw = TweenMax.staggerFromTo(
            paths, lineDrawTime,
            { drawSVG: inVal },
            {
                drawSVG: outVal,
                stroke: function () {
                    // return colors[Math.floor(Math.random() * colors.length)];
                    return colors[colors.length - 1];
                },
            }, betweenLines);

        if (direction == 'in') {
            tw.onCompleteAll = function () {
                animateLines();
            }

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.9;
            }, "4000");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.85;
            }, "4100");
            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.8;
            }, "4200");
            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.75;
            }, "4300");
            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.7;
            }, "4400");
            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.65;
            }, "4500");
            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.6;
            }, "4600");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.55;
            }, "4700");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.5;
            }, "4800");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.45;
            }, "4900");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.4;
            }, "5000");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.35;
            }, "5100");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.3;
            }, "5200");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.25;
            }, "5300");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.2;
            }, "5400");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.15;
            }, "5500");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.1;
            }, "5600");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.07;
            }, "5700");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.05;
            }, "5800");

            setTimeout(() => {
                document.getElementById("animation").style.opacity = 0.03;
            }, "5900");

            setTimeout(() => {
                document.getElementById("animation").style.display = "none";
            }, "6000");
            return tw;
        }
    }

    function animateLines() {
        console.log('animateLines')
        var mainTL = new TimelineMax();
        for (let path of paths) {
            var length = path.getTotalLength();
            var offset = length / total;

            TweenLite.set(path, { strokeDasharray: `${offset + space},${length - offset - space}`, strokeWidth: strokeWidth, strokeLinejoin: "round" });

            var tl = colors.reduce((tl, stroke, i) => {

                var clone = path.cloneNode(true);
                svg.appendChild(clone);
                TweenLite.set(clone, { stroke, strokeDashoffset: -i * offset });
                return tl.to(clone, 2, { strokeDashoffset: `+=${length}` }, 0);
            }, new TimelineMax({ repeat: numRepeats }));
        }
        tl.onComplete = function () {
            drawInOut('out');
        }
        // return tl;
    }

    var dur = 0;
    masterT.add(drawInOut('in'));
    masterT.play();
}


showLandingLogo();


// document.getElementById("animation").style.display = "none";
