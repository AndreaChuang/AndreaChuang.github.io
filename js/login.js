
$(document).ready(function () {
    // 先隱藏註冊畫面
    $('.register_container').hide();
    // 點擊註冊按鈕到註冊頁面
    $('#register_btn').on('click', function () {
        registerAndLogin();
    });
    // 點擊註冊按鈕到註冊頁面
    $('#register').on('click', function () {
        registerAndLogin();
    });
    // 點擊立即登入回到登入頁面
    $('.register_title span').on('click', function () {
        registerAndLogin();
    });
});

const registerAndLogin = () => {
    $('.register_container').toggle();
    $('.login_container').toggle();
}
