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

            // logo淡出效果
            gsap.to('#animation', {
                opacity: 0,
                duration: 3,
                delay: 5,
                display: "none"
            });

            return tw;
        }
    }

    function animateLines() {
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




