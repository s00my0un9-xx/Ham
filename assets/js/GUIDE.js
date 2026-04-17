// best
$(function(){
    // best tab
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

//best slide
// classic
let classicSwiper = null;

// Swiper 생성 함수
function initClassicSwiper(){
    if (classicSwiper) return;

    const container = document.querySelector('.best-classic-swiper');
    
    classicSwiper = new Swiper('.best-classic-swiper', {
        slidesPerView : 1,
        spaceBetween : 16,
        navigation: {
            nextEl: '.best-classic-next',
            prevEl: '.best-classic-prev',
        },
        observer: true,
        observeParents: true,
    });
}

// swiper 제거
function destroyClassicSwiper(){
    if (classicSwiper) {
        classicSwiper.destroy(true, true);
        classicSwiper = null;
    }
}

// premium
let premiumSwiper = null;

// Swiper 생성 함수
function initPremiumSwiper(){
    if (premiumSwiper) return;
    
    premiumSwiper = new Swiper('.best-premium-swiper', {
        slidesPerView : 1,
        spaceBetween : 16,
        navigation: {
            nextEl: '.best-premium-next',
            prevEl: '.best-premium-prev',
        },
        observer: true,
        observeParents: true,
    });
}

// swiper 제거
function destroyPremiumSwiper(){
    if (premiumSwiper) {
        premiumSwiper.destroy(true, true);
        premiumSwiper = null;
    }
}

// 반응형
function handleBestSwiper(){
    if (window.innerWidth <= 1024) {
        initClassicSwiper();
        initPremiumSwiper();
    } else {
        destroyClassicSwiper();
        destroyPremiumSwiper();
    }
}

// Swiper 업데이트
function updateSwiper(){
    if (classicSwiper) classicSwiper.update();
    if (premiumSwiper) premiumSwiper.update();
}

// 최초 실행
handleBestSwiper();
// 리사이즈 대응
window.addEventListener('resize', handleBestSwiper);



// pairing section

// pairing tab
$(function(){
    $('.pairing-tab li').on('click', function(){
        $('.pairing-tab li').removeClass('pairing-on');
        $(this).addClass('pairing-on');

        let idx = $(this).index();

        $('.pairing-list > div').hide();
        $('.pairing-list > div').eq(idx).show();

        // 보인 직후 업데이트
        setTimeout(() => {
            if (foodSwiper) {
                foodSwiper.update();
                foodSwiper.navigation.update();
            }
            if (drinkSwiper) {
                drinkSwiper.update();
                drinkSwiper.navigation.update();
            }
        }, 0);
    })
})

// pairing slide

// food
let foodSwiper = null;

function initFoodSwiper() {
  if (foodSwiper) return;

  const container = document.querySelector('.food-card-swiper');

  foodSwiper = new Swiper('.food-card-swiper', {
    spaceBetween: 16,
    slidesPerView: 1,
    navigation: {
      nextEl: ".pairing-food-next",
      prevEl: ".pairing-food-prev",
    },
    observer: true,
    observeParents: true,

    breakpoints: {
    1025: {
      slidesPerView: 3,
      grid: { rows: 2 },
    },
    542: {
      slidesPerView: 2,
      grid: { rows: 1 },
    },
    0: {
      slidesPerView: 1,
      grid: { rows: 1 },
    },
  },
})
}

function destroyFoodSwiper() {
  if (foodSwiper) {
    foodSwiper.destroy(true, true);
    foodSwiper = null;
  }
}



// drink
let drinkSwiper = null;

function initDrinkSwiper() {
    if (drinkSwiper) return;

    drinkSwiper = new Swiper('.drink-card-swiper', {
        spaceBetween: 16,
        slidesPerView: 2,
        navigation : {
            nextEl: ".pairing-drink-next",
            prevEl: ".pairing-drink-prev",
        },
        observer: true,
        observeParents: true,

        breakpoints: {
            1025: {
                slidesPerView: 2,
                grid: { rows: 3 },
            },
            542: {
                slidesPerView: 2,
                grid: { rows: 1 },
            },
            0: {
                slidesPerView: 1,
                grid: { rows: 1 },
            },
        }
    })
}

function destroyDrinkSwiper() {
    if(drinkSwiper) {
        drinkSwiper.destroy(true, true);
        drinkSwiper = null;
    }
}


function handlePairingSwiper() {
  if (window.innerWidth <= 1024) {
    initFoodSwiper();
    initDrinkSwiper()
  } else {
    destroyFoodSwiper();
    destroyDrinkSwiper()
  }
}

handlePairingSwiper();
window.addEventListener('resize', handlePairingSwiper);
