// 查看購物車
const renderCart = function () {
    let $cartHtml = $(`
    <div class="cartFly hide">
    <div class="order-list">
<div class="order-items">
    <div class="order-img">
        <img src="img/Rectangle 71.png" alt="購物車圖">
    </div>
    <div class="order-text">
        <div class="order-description">
            <div> Ring
                <br>
                顏色
                <br>
                商品數量:2
                <br>
                商品編號:21K3110
            </div>
            <div class="order-icon">
                <i class="fa fa-minus" aria-hidden="true"></i>
                <span>1</span>
                <i class="fa fa-plus" aria-hidden="true"></i>
                <i class="fa fa-trash" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</div>
<div class="order-items">
    <div class="order-img">
        <img src="img/Rectangle 73.png" alt="購物車圖">
    </div>
    <div class="order-text">
        <div class="order-description">
            <div> Ring
                <br>
                顏色
                <br>
                商品數量:2
                <br>
                商品編號:21K3110
            </div>
            <div class="order-icon">
                <i class="fa fa-minus" aria-hidden="true"></i>
                <span>1</span>
                <i class="fa fa-plus" aria-hidden="true"></i>
                <i class="fa fa-trash" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</div>
<div class="order-items">
    <div class="order-img">
        <img src="img/Rectangle 71.png" alt="購物車圖">
    </div>
    <div class="order-text">
        <div class="order-description">
            <div> Ring
                <br>
                顏色
                <br>
                商品數量:2
                <br>
                商品編號:21K3110
            </div>
            <div class="order-icon">
                <i class="fa fa-minus" aria-hidden="true"></i>
                <span>1</span>
                <i class="fa fa-plus" aria-hidden="true"></i>
                <i class="fa fa-trash" aria-hidden="true"></i>
            </div>
        </div>
    </div>
    </div>
    <div class="checkout"><a href="cart-1.1.html">Checkout</a></div>
</div>
</div>`);
    $("#SCheader").after($cartHtml);
    $('#SCheader .fa-shopping-bag').on('click', function () {
        $cartHtml.toggleClass('hide');
    });
}



// 卷軸滾動消失
const showNavbarByScroll = function () {
    let bodyClass = document.getElementById("SCheader").classList;
    let lastScrollY = 0;
    window.addEventListener('scroll', function () {
        let st = this.scrollY;
        // console.log('st', st)
        if (st <= lastScrollY) {
            bodyClass.remove('hideUp');
        } else {
            bodyClass.add('hideUp');
            // todo
            $('.cartFly').addClass('hide');
        }
        // 取基準點與下一次滾動比對
        lastScrollY = st;
        // console.log('lastScrollY', lastScrollY)
    });
}

const renderHeader = function () {
    $('body').append(` <header id="SCheader">
    <div class="nav-logo">
        <a href="index.html">
            <img src="img/LOGO.png" alt="LOGO">
        </a>
    </div>
    <div id="menu">
        <ul class="nav-list">
            <li><a href="about.html">ABOUT</a></li>
            <li class="menu-products"><span>PRODUCTS</span></li>
            <li class="menu-guides"><span>GUIDES</span></li>
            <li><a href="Q&A.html">Q&A</a></li>
            <li class="only_mobile"><a href="login.html">LOGIN</a></li>
        </ul>
    </div>
    <ul class="nav-icon">
        <li><i class="fa fa-search" aria-hidden="true"></i></li>
        <li><i class="fa fa-shopping-bag" aria-hidden="true"></i></li>
        <li><i class="fa fa-user" aria-hidden="true"></i></li>
    </ul>
    <div id="btnHam"><img src="img/hamburger.png">
    </div>
</header>`
    )
}




$(function () {
    renderHeader();
    goToLogin();
    renderCart();

    showNavbarByScroll();

    // hamburger
    window.addEventListener("load", function () {
        //------btnHam漢堡按鈕被點按時
        document.getElementById("btnHam").onclick = function () {
            //取得選單的參考
            let menu = document.getElementById("menu");
            // 有就移除，没有就加入
            menu.classList.toggle("hidden");
        };

    }, false);

    // 下拉式選單

    // 點擊新增products的html
    $('.menu-products').append(`<ul class="dropdownList products-dropdown">
    <li productCategory="0">全部商品</li>
    <li productCategory="1">水晶手鍊</li>
    <li productCategory="2">水晶耳環</li>
    <li productCategory="3">水晶項鍊</li>
    <li productCategory="4">水晶戒指</li>
    </ul>`)
    //點擊新增guides的html
    $('.menu-guides').append(`<ul class="dropdownList guides-dropdown">
    <li guideCategory="0">全部商品</li>
    <li guideCategory="1">事業</li>
    <li guideCategory="2">健康</li>
    <li guideCategory="3">桃花</li>
    <li guideCategory="4">除晦</li>
    </ul>`)

    // 建立products下拉式選單功能
    $('.menu-products').click(function (e) {
        e.preventDefault();
        $('.menu-products').toggleClass('active');
        $('.products-dropdown').slideToggle();
    });

    // 建立guides下拉式選單功能
    $('.menu-guides').click(function (e) {
        e.preventDefault();
        $('.menu-guides').toggleClass('active');
        $('.guides-dropdown').slideToggle();
    });

    // 點擊空白處收合下拉式選單
    $(document).click(function (event) {
        // console.log(event.target)
        let guides = $('.menu-guides');
        let guidesSpan = $('.menu-guides span');
        let products = $('.menu-products');
        let productsSpan = $('.menu-products span');
        if (!guides.is(event.target) && !products.is(event.target)) {
            if (!guidesSpan.is(event.target) && !productsSpan.is(event.target)) {

                guides.removeClass('active');
                products.removeClass('active');
                $('.guides-dropdown').slideUp();
                $('.products-dropdown').slideUp();
                // console.log('收!')
            }
        }
        // console.log('click')
    });

    bindRedirectToProductsClickEvent();
    bindRedirectToGuidesClickEvent();
})


// 點擊商品分類各項目顯示商品
let bindRedirectToProductsClickEvent = function () {
    $('.menu-products .products-dropdown li').on("click", function () {
        // console.log(this)
        // https://api.jquery.com/attr/
        let productCategory = $(this).attr('productCategory');
        if (productCategory) {
            window.location.href = `/product.html?productCategory=${productCategory}`;
        } else {
            window.location.href = "/product.html";
        }
    })
}

// 點擊guides各項目顯示商品
let bindRedirectToGuidesClickEvent = function () {
    $('.menu-guides .guides-dropdown li').on("click", function () {
        // console.log(this)
        // https://api.jquery.com/attr/
        let guideCategory = $(this).attr('guideCategory');
        if (guideCategory) {
            window.location.href = `/product.html?guideCategory=${guideCategory}`;
        } else {
            window.location.href = "/product.html";
        }
    })
}


// 點擊按鈕到登入頁面
const goToLogin = function () {
    $('.fa-user').on('click', function () {
        location.href = '/login.html'
    })
}