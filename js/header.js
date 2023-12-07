// 查看購物車
// const renderCart = function () {
//     let $cartHtml = $(`
//     <div class="cartFly hide">
//     <div class="order-list">
// <div class="order-items">
//     <div class="order-img">
//         <img src="img/Rectangle 71.png" alt="購物車圖">
//     </div>
//     <div class="order-text">
//         <div class="order-description">
//             <div> Ring
//                 <br>
//                 顏色
//                 <br>
//                 商品數量:2
//                 <br>
//                 商品編號:21K3110
//             </div>
//             <div class="order-icon">
//                 <i class="fa fa-minus" aria-hidden="true"></i>
//                 <span>1</span>
//                 <i class="fa fa-plus" aria-hidden="true"></i>
//                 <i class="fa fa-trash" aria-hidden="true"></i>
//             </div>
//         </div>
//     </div>
// </div>
// <div class="order-items">
//     <div class="order-img">
//         <img src="img/Rectangle 73.png" alt="購物車圖">
//     </div>
//     <div class="order-text">
//         <div class="order-description">
//             <div> Ring
//                 <br>
//                 顏色
//                 <br>
//                 商品數量:2
//                 <br>
//                 商品編號:21K3110
//             </div>
//             <div class="order-icon">
//                 <i class="fa fa-minus" aria-hidden="true"></i>
//                 <span>1</span>
//                 <i class="fa fa-plus" aria-hidden="true"></i>
//                 <i class="fa fa-trash" aria-hidden="true"></i>
//             </div>
//         </div>
//     </div>
// </div>
// <div class="order-items">
//     <div class="order-img">
//         <img src="img/Rectangle 71.png" alt="購物車圖">
//     </div>
//     <div class="order-text">
//         <div class="order-description">
//             <div> Ring
//                 <br>
//                 顏色
//                 <br>
//                 商品數量:2
//                 <br>
//                 商品編號:21K3110
//             </div>
//             <div class="order-icon">
//                 <i class="fa fa-minus" aria-hidden="true"></i>
//                 <span>1</span>
//                 <i class="fa fa-plus" aria-hidden="true"></i>
//                 <i class="fa fa-trash" aria-hidden="true"></i>
//             </div>
//         </div>
//     </div>
//     </div>
//     <div class="checkout"><a href="cart-1.1.html">Checkout</a></div>
// </div>
// </div>`);
//     $("#SCheader").after($cartHtml);
//     $('#SCheader .fa-shopping-bag').on('click', function () {
//         $cartHtml.toggleClass('hide');
//     });
// }

// renderCart();


// 卷軸滾動消失
const showNavbarByScroll = function () {
    var bodyClass = document.getElementById("SCheader").classList,
        lastScrollY = 0;
    window.addEventListener('scroll', function () {
        var st = this.scrollY;
        // console.log('st', st)
        if (st <= lastScrollY) {
            bodyClass.remove('hideUp');
        } else {
            bodyClass.add('hideUp');
            // todo
            // $('.cartFly').addClass('hide');
        }
        // 取基準點與下一次滾動比對
        lastScrollY = st;
        // console.log('lastScrollY', lastScrollY)
    });
}

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