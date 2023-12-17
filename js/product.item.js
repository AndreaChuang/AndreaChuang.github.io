// 顯示產品資訊function
const renderProductItemText = function () {
    let product = getProductItem();
    console.log(product);
    $('.product-img').append(` <div class="bigimg slider-for">
<img src="img/product-item/${product.imgFileName}" alt="">
<img src="img/product-item/${product.imgFileName}" alt="">
<img src="img/product-item/${product.imgFileName}" alt="">
<img src="img/product-item/${product.imgFileName}" alt="">
<img src="img/product-item/${product.imgFileName}" alt="">
</div>
<div class="smallimg slider-nav">
<img src="img/product-item/${product.imgFileName}" alt="">
<img src="img/product-item/${product.imgFileName}" alt="">
<img src="img/product-item/${product.imgFileName}" alt="">
<img src="img/product-item/${product.imgFileName}" alt="">
<img src="img/product-item/${product.imgFileName}" alt="">
</div>`

    )
    $('.product-text .top').append(
        `<span class="product-name">${product.name}</span>
<br>
<span>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    (255 reviews)
</span>
<br>
<div class="price">
    <span>${product.currency} ${product.price}</span>
    <br>
    <span>$${Math.round(product.price * 0.35)}</span>
    <br>
    <span>35%off</span>
</div>
<span>硬度 : ${product.hardness}</span>
<br>
<span>脈輪 : ${product.chakra}</span>
<br>
<span>星座 : ${product.constellation}</span>`)
}

// 從URL抓取產品ID的function
const getURLProductID = function () {
    const queryString = window.location.search;
    // console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    let product = urlParams.get('product');
    console.log(product)
    return product;
}


// 抓取產品資訊function
const getProductItem = function () {
    let productID = getURLProductID();
    let product = products.find(function (p) {
        return p.id == productID
    })
    // console.log(product);
    return product;
}



//render product page
$(function () {

    // render 產品資訊
    renderProductItemText();

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

    // 「你可能也會喜歡」輪播
    $('.like .autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
})

