// 點小圖show大圖
function showLarge(e) {
    let small = e.target; //e.target記錄觸發此事件的物件

    document.getElementById("large").src = small.src;

}

function init() {
    let smalls = document.getElementsByClassName("small");

    for (let i = 0; i < smalls.length; i++) {
        smalls[i].onclick = showLarge;
    }
}

window.addEventListener("load", init, false);

