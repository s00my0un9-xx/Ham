$(function(){
    // tab
    $('.best-tab li').on('click', function (e) {
        e.preventDefault();

        $('.best-tab li').removeClass('type-on');
        $(this).addClass('type-on');

        var index = $(this).index();

        if (index === 0) {
            $('.best-classic').show();
            $('.best-premium').hide();
        } else {
            $('.best-classic').hide();
            $('.best-premium').show();
        }

        return false;

    });

    $('.best-premium').hide();
});

// mo slide
let swiper = null;
const container = document.querySelector('.best-list .swiper-wrapper');


// Swiper 생성 함수
function initSwiper(){
    if (swiper) return;
    
    swiper = new Swiper('.best-list', {
        slidesPerView : 1,
        spaceBetween : 20,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        }
    });
}

// swiper 제거
function destroySwiper(){
    if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
    }
}

// 반응형
function handleSwiper(){
    if (window.innerWidth <= 1024) {
        initSwiper();
    } else {
        destroySwiper();
    }
}

// Swiper 업데이트
function updateSwiper(){
    if (classicSwiper) classicSwiper.update();
    if (premiumSwiper) premiumSwiper.update();
}

// 최초 실행
handleSwiper();

// 리사이즈 대응
window.addEventListener('resize', handleSwiper);