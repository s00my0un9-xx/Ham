$(function(){
    // menu
    let menuScroll = 750;
    $(window).scroll(function(){
        let num = $(window).scrollTop();

        if(num > menuScroll){
            $('.header').css("opacity", 1)
            $('.header').css("background-color", "#131313")
        } else {
            $('.header').css("opacity", 0)
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