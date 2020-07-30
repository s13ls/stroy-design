$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('.header__hello, .header__title, .header__subtitle').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $("#menu").on("click","a", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
            top = $(id).offset().top; //определим высоту от начала страницы до якоря
    $('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
    });
    $('a').click(function(event) {
        $('.header__menu.active').removeClass('active');
        $('.header__burger.active, .header__hello, .header__title, .header__subtitle').removeClass('active');
    });

    $('.header__katalog, .login').click(function(event) {
        $('.popup').addClass('active');
        $('body').addClass('lock');
    });

    $('.popup__close').click(function(event) {
        $('.popup').removeClass('active');
        $('body').removeClass('lock');
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 200);
        return false;
    });

    

    
    
});