//存取product的ID
// 寫入數據到localStorage
// localStorage.setItem('currentProduct', {});
//存取product的ID的詳細資料
// localStorage.setItem('productInCart', []);


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
    <span>$${Math.round(product.price * 0.35)}</span>
    <br>
    <span>${product.currency} ${product.price}</span>
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
    // console.log(product)
    return product;
}


// 抓取產品資訊function
const getProductItem = function (pID) {
    let productID = pID || getURLProductID();
    let product = products.find(function (p) {
        return p.id == productID
    })
    window.currentProduct = product;
    // console.log(product);
    return product;
}

// 點擊「加入購物車」按鈕事件
const attToCart = function () {
    $('.product-button button').on('click', function () {
        let productID = currentProduct.id;
        // console.log(productID);
        // 添加新資料
        let product = getProductItem(productID);
        setProductItemInLocalStorage(product);
        // console.log('getProductItemInLocalStorage', getProductItemInLocalStorage());
    })
}

// 產生麵包屑
let renderBread = (categoryID, subCategoryID) => {
    let rootCategory = categoryGroup.find(function (category) {
        return category.id == categoryID
    });
    let subCategorItem = rootCategory && rootCategory.categoryItem.find(item => item.id == subCategoryID)

    // console.log(rootCategory)
    // console.log(subCategorItem)

    if (rootCategory && rootCategory.name) {
        $('.bread-crumbs .bread').append(`<li>${rootCategory.name}</li>`)
    }
    if (subCategorItem && subCategorItem.name) {
        $('.bread-crumbs .bread').append(`<li>${subCategorItem.name}</li>`)
    }
}

// 抓取Product URL的值
let getURLProductCategoryID = function () {
    // https://www.sitepoint.com/get-url-parameters-with-javascript/
    const queryString = window.location.search;
    // console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    let productCategory = urlParams.get('productCategory');
    console.log(productCategory)
    return productCategory;
}

// 抓取Guide URL的值
let getURLGuideCategoryID = function () {
    // https://www.sitepoint.com/get-url-parameters-with-javascript/
    const queryString = window.location.search;
    // console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    let guideCategory = urlParams.get('guideCategory');
    // console.log(guideCategory)
    return guideCategory;
}


//render product page
$(function () {

    // 麵包屑功能
    //從URL取得productCategoryID
    let productCategoryID = getURLProductCategoryID() || 0;
    //從URL取得guideID
    let guideCategoryID = getURLGuideCategoryID() || 0;
    console.log('guideCategoryID', guideCategoryID)

    $('.bread-crumbs .bread').append(`<li>首頁</li>`);

    if (productCategoryID != 0) {
        // categoryGroup id = 1, Products
        renderBread(1, productCategoryID);
    } else if (guideCategoryID != 0) {
        // categoryGroup id = 2, Guides
        renderBread(2, guideCategoryID);
    } else {
        // 預設進到產品分類第一個分類 顯示全部商品 
        renderBread(1, productCategoryID);
    }

    // TODO 麵包屑第四階層(商品名稱)

    // render 產品資訊
    renderProductItemText();
    attToCart();

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

