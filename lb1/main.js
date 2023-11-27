// забезпечує виклик функції після завантаження 
$(document).ready(function() {
    $('.header').height($(window).height());

    // відслідковуємо зміни розміру вікна
    $(window).resize(function() {
        $('.header').height($(window).height());
    });
});
