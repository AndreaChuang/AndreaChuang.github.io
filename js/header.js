// by ChatGPT
// 合併相同商品
const mergeArray = function (originalArray) {
    // 使用reduce進行合併和計數
    const mergedArray = originalArray.reduce((acc, currentItem) => {
        // 檢查是否已經存在於合併後的陣列中
        const existingItem = acc.find(item => (
            item.categoryID === currentItem.categoryID &&
            item.guideID === currentItem.guideID &&
            item.id === currentItem.id &&
            item.color === currentItem.color &&
            item.size === currentItem.size
        ));

        if (existingItem) {
            // 如果存在，將count增加1
            existingItem.count = (existingItem.count || 1) + 1;
        } else {
            // 如果不存在，將當前項目添加到合併後的陣列中
            acc.push({ ...currentItem, count: 1 });
        }
        return acc;
    }, []);

    return mergedArray;
}

// 把資料暫存到locol Storage的功能
const setProductItemInLocalStorage = function (product) {
    // 讀取既有的product資料
    let productInCart = getProductItemInLocalStorage();
    // 把舊和新資料合併(物件), 並且計算當前數量
    const mergedAry = mergeArray(productInCart.concat(product || {}));
    // 把資料存到localStorage，把合併後的資料物件轉成字串
    localStorage.setItem('productInCart', JSON.stringify(mergedAry));
}

// 抓取暫存在locol Storage的資料的功能
const getProductItemInLocalStorage = function () {
    // 把資料字串轉回物件
    let productInCart = JSON.parse(localStorage.getItem('productInCart') || '[]');
    return productInCart;
}

// 查看購物車功能
const renderCart = function () {

    let $cartHtml = $(`
    <div class="cartFly hide">
        <div class="order-list">
            <div class="checkout"><a href="cart-1.1.html">Checkout</a></div>
        </div>
    </div>`);

    $("#SCheader").after($cartHtml);

    // $(".cartFly .order-list").prepend($cartItemHtml);
    $('#SCheader .fa-shopping-bag').on('click', function () {
        syncCartItem();
        $cartHtml.toggleClass('hide');
    });
}

// 每次點擊同步local storage的資料
const syncCartItem = function () {
    let productList = mergeArray(getProductItemInLocalStorage());

    if (productList.length == 0) {
        $(".cartFly .order-list").html('<span class="noProductInCart">購物車內沒有商品</span>');
        return 0;
    }
    $(".cartFly .order-list").html('<div class="checkout"><a href="cart-1.1.html">Checkout</a></div>');

    // 把暫存在local storage的資料物件用foreach append出來
    productList.forEach(function (product) {
        let productItemHTML = $(`
        <div class="order-items">
          <div class="order-img">
            <img src="img/product-item/${product.imgFileName}" alt="購物車圖">
          </div>
          <div class="order-text">
            <div class="order-description">
                <div>
                    ${product.name}
                    <br>
                    顏色: 白色
                    <br>
                    商品數量: ${product.count || 1}
                    <br>
                    價格: $${Math.round(product.price * 0.35 * (product.count || 1))}
                </div>
                <div class="order-icon">
                    <i class="fa fa-minus" aria-hidden="true"></i>
                    <span>${product.count || 1}</span>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
          </div>
        </div>`)
        $(".cartFly .order-list").prepend(productItemHTML);
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

// 用JS render header
const renderHeader = function () {
    $('body').append(` <header id="SCheader">
    <div class="nav-logo">
        <a href="index.html">
            <img src="img/LOGO.png" alt="LOGO">
        </a>
    </div>
    <div id="menu">
        <ul class="nav-list">
            <li class="menu-about"><a href="about.html">ABOUT</a></li>
            <li class="menu-products"><span>PRODUCTS</span></li>
            <li class="menu-guides"><span>GUIDES</span></li>
            <li><a href="Q&A.html">Q&A</a></li>
            <li class="only_mobile"><a href="cart-1.1.html">CART</a></li>
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


// 點擊按鈕到登入頁面事件
const goToLogin = function () {
    $('.fa-user').on('click', function () {
        location.href = '/login.html'
    })
}




// render to header
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
            // menu.classList.toggle("show");
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        };

    }, false);

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