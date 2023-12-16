$(function () {
    // console.log(products)
    // $('.bread li:nth-child()').onclick(function 
    // })

    //從URL取得productCategoryID
    let productCategoryID = getURLProductCategoryID() || 0;
    //從URL取得guideID
    let guideCategoryID = getURLGuideCategoryID() || 0;
    console.log('guideCategoryID', guideCategoryID)

    bindSortingClickEvent();
    $('.bread-crumbs .bread').append(`<li>首頁</li>`);

    if(productCategoryID!= 0){
        // categoryGroup id = 1, Products
        renderBread(1, productCategoryID);
    } else if(guideCategoryID!= 0){
        // categoryGroup id = 2, Guides
        renderBread(2, guideCategoryID);
    } else {
        // 預設進到產品分類第一個分類 顯示全部商品 
        renderBread(1, productCategoryID);
    }

    renderProducts();
    // renderGuides();
})

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

// render商品
const renderProducts = () => {
    let productCategoryID = getURLProductCategoryID() || 0;
    let guideCategoryID = getURLGuideCategoryID() || 0;

    // productCategoryID 與 guideCategoryID同時間只會有一種
    console.log(productCategoryID, productCategoryID);
    console.log(guideCategoryID, guideCategoryID);

    // https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
    // asc 遞增(由小到大) desc 遞減(由大到小)
    let sortedProduct;
    if ($(location).prop('hash') === '#asc') {
        sortedProduct = products.sort(function (a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
        });
    } else if ($(location).prop('hash') === '#desc') {
        sortedProduct = products.sort(function (a, b) {
            return parseFloat(b.price) - parseFloat(a.price);
        });
    }

    let product = sortedProduct || products;

    console.log(product)

    $('.product-items .row').empty();
    for (let i = 0; i < product.length; i++) {
        //無分類
        if (productCategoryID == 0 && guideCategoryID ==0) {
            $('.product-items .row').append(`<div class="col-6 col-md-4 col-xl-3 ">
            <div class="card">
                <img src="img/product-item/${product[i].imgFileName}" alt="" onclick="javascript:location.href='product-item.html?product=${product[i].id}'">
            </div>
        </div>`)
            // 商品分類
        } else if (guideCategoryID == 0 && product[i].categoryID == productCategoryID) {
            $('.product-items .row').append(`<div class="col-6 col-md-4 col-xl-3 ">
            <div class="card">
                <img src="img/product-item/${product[i].imgFileName}" alt="" onclick="javascript:location.href='product-item.html?productCategory=${product[i].categoryID}&product=${product[i].id}'">
            </div>
        </div>`)
            // 指南分類
        } else if (productCategoryID == 0 && product[i].guideID.includes(guideCategoryID)) {
            console.log(product[i].guideID);
            $('.product-items .row').append(`<div class="col-6 col-md-4 col-xl-3 ">
            <div class="card">
                <img src="img/product-item/${product[i].imgFileName}" alt="" onclick="javascript:location.href='product-item.html?guideCategory=${guideCategoryID}&product=${product[i].id}'">
            </div>
        </div>`)
        }

    }
}


// render guide分類
// const renderGuides = () => {
//     let guideCategoryID = getURLGuideCategoryID() || 0;

//     // https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
//     // asc 遞增(由小到大) desc 遞減(由大到小)
//     let sortedguide;
//     if ($(location).prop('hash') === '#asc') {
//         sortedguide = products.sort(function (a, b) {
//             return parseFloat(a.price) - parseFloat(b.price);
//         });
//     } else if ($(location).prop('hash') === '#desc') {
//         sortedProduct = products.sort(function (a, b) {
//             return parseFloat(b.price) - parseFloat(a.price);
//         });
//     }

//     let guide = sortedguide || products;

//     $('.product-items .row').empty();
//     for (let i = 0; i < guide.length; i++) {
//         if (guideCategoryID == 0 || guide[i].categoryID == guideCategoryID) {
//             $('.product-items .row').append(`<div class="col-6 col-md-4 col-xl-3 ">
//             <div class="card">
//                 <img src="img/product-item/${guide[i].imgFileName}" alt="" onclick="javascript:location.href='product-item.html?guideCategory=${guide[i].categoryID}&product=${guide[i].id}'">
//             </div>
//         </div>`)
//         }
//     }
// }


// sorting排序
const hashToggle = function () {
    // 更新遞增或遞減，紀錄變數在hashtag，並更新顯示文字
    // 資料排序Order By
    // asc 遞增(由小到大) desc 遞減(由大到小)
    // https://www.w3schools.com/jquery/html_prop.asp
    if ($(location).prop('hash') === '#asc') {
        $(location).prop('hash', '#desc');
        $('#wrapper > div.topbar > div.sorting > span:nth-child(2)').html('價格:由高至低')
    } else {
        $(location).prop('hash', '#asc');
        $('#wrapper > div.topbar > div.sorting > span:nth-child(2)').html('價格:由低至高')
    }
}


let bindSortingClickEvent = function () {
    $('.sorting span').on('click', function () {
        // console.log(this);
        hashToggle();
        renderProducts();
    })
}






