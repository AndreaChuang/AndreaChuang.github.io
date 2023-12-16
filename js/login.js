
$(document).ready(function () {
    $('.new-register').hide();
    $('#register button').on('click', function () {
        $('.new-register').toggle();
    });
});
