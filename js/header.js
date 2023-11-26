
const showNavbarByScroll = function () {
    var bodyClass = document.getElementById("SCheader").classList,
        lastScrollY = 0;
    window.addEventListener('scroll', function () {
        var st = this.scrollY;
        console.log(st)
        // 判斷是向上捲動，而且捲軸超過 200px
        if (st <= lastScrollY) {
            bodyClass.remove('hideUp');
        } else {
            bodyClass.add('hideUp');
        }
        lastScrollY = st;
    });
}

showNavbarByScroll();