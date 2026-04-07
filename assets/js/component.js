$(function(){
    // menu
    let menuScroll = 750;
    $(window).scroll(function(){
        let num = $(window).scrollTop();

        if(num > menuScroll){
            $('.header').css("background-color", "#131313")
        } else {
            $('.header').css("background-color", "")
        }
    })


    // mo
    $('.mo-menu-btn').on('click', function(){
        $('.header__mo-nav').addClass('is-open')
    });
    $('.mo-close-btn').on('click', function(){
        $('.header__mo-nav').removeClass('is-open')
    });
})