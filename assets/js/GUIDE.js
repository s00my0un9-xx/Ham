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

// mo best slide
let swiper = null;
const container = document.querySelector('.best-list .swiper-wrapper');


// Swiper 생성 함수
function initSwiper(){
    if (swiper) return;
    
    swiper = new Swiper('.best-list', {
        slidesPerView : 1,
        spaceBetween : 20,
        navigation: {
            nextEl: '.best-next',
            prevEl: '.best-prev',
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
            updatePairingSwipers();}, 0);
        
    })
})

// pairing slide
let foodSwiper = null;

function initFoodSwiper() {
  if (foodSwiper) return;

   if (foodSwiper) return;
  const container = document.querySelector('.pairing-food');
  if (!container) return;
  const nextBtn = container.querySelector('.pairing-next');
  const prevBtn = container.querySelector('.pairing-prev');

  foodSwiper = new Swiper('.pairing-food', {
    spaceBetween: 16,
    slidesPerView: 1,
    navigation: {
      nextEl: ".pairing-next",
      prevEl: ".pairing-prev",
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

function handleFoodSwiper() {
  if (window.innerWidth <= 1024) {
    initFoodSwiper();
  } else {
    destroyFoodSwiper();
  }
}

handleFoodSwiper();
window.addEventListener('resize', handleFoodSwiper);

// drink
let drinkSwiper = null;

function initDrinkSwiper() {
    if (drinkSwiper) return;

    drinkSwiper = new Swiper('.pairing-drink', {
        spaceBetween: 16,
        slidesPerView: 2,
        navigation : {
            nextEl: ".pairing-next",
            prevEl: ".pairing-prev",
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

function handleDrinkSwiper() {
    if (window.innerWidth <= 1024) {
        initDrinkSwiper();
    } else {
        destroyDrinkSwiper();
    }
}

handleDrinkSwiper();
window.addEventListener('resize', handleDrinkSwiper);