// by chatGPT
// 計算總價格的功能
const calculateTotalPrice = function (jsonArray) {
    // 使用 reduce 遍歷陣列，計算總價格
    const totalPrice = jsonArray.reduce((accumulator, currentItem) => {
        // 將 price 和 count 轉換為數字，然後相乘
        const itemTotalPrice = Number(currentItem.price) * Number(currentItem.count);
        // 將當前物品的價格加到累加器上
        return accumulator + itemTotalPrice;
    }, 0); // 初始值設為 0
    return totalPrice;
}

// 抓取暫存在locol Storage的資料的功能
const renderProduct = function () {
    let productList = getProductItemInLocalStorage();
    productList.forEach(product => {
        // 顯示商品資料
        $('.order-list').append(
            `<div class="order-items">
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
            </div>
            </div>
            </div>`
        )
    });
}

const renderPrice = function () {
    // 帶入參數資料
    let productList = getProductItemInLocalStorage();
    let totalPrice = calculateTotalPrice(productList);
    $('.order-fee').append(`<div class="order-text">
        訂單內容
        <br>
    金額 : $${totalPrice}
    <br>
    運費 : $80
    <br>
</div>
<div class="order-text">
    總金額 : ${totalPrice + 80}
</div>
<div class="order-button">
    <a href="cart-1.2.html">結帳</a>
</div>
</div>`)
}


$(function () {
    renderProduct();
})