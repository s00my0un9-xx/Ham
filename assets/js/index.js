$(document).ready(function () {
    // mo menu
    $(".header__mo-menu a").on('click', function () {
        $(".header__mo-menu a").removeClass("active");
        $(this).addClass("active");
    })

    // pagination
    $('.workshop__pagination').on('click', '.pagination__page', function () {
        $('.workshop__pagination .pagination__page').removeClass('is-active');
        $(this).addClass('is-active');
    });

    // info
    let i = 0
    setInterval(function () {
        if (i < 3) {
            i++
        } else {
            i = 0
        }

        $('.fade-img').fadeOut(300);
        $('.fade-img').eq(i).fadeIn(300);
    }, 2800)

    // tab
    $('.tab.type-tab li').on('click', function (e) {
        e.preventDefault();

        $('.tab.type-tab li').removeClass('type-on');
        $(this).addClass('type-on');

        var index = $(this).index();

        if (index === 0) {
            $('.type-classic').show();
            $('.type-premium').hide();
        } else {
            $('.type-classic').hide();
            $('.type-premium').show();
        }

        return false;
    });

    $('.type-premium').hide();

});

// type slide
document.querySelectorAll(".type .swiper").forEach((element) => {
    new Swiper(element, {
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: false,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
        breakpoints: {
            403: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            769: {
                slidesPerView: 'auto',
                spaceBetween: 16,
            },
        },
    });
});


// gsap
// layer scroll
gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add({
  desktop: "(min-width: 1025px)",
  tablet: "(min-width: 769px) and (max-width: 1024px)",
  mobile: "(max-width: 768px)"
}, (context) => {

  let yClear, yCloudy, end;

  if (context.conditions.desktop) {
    yClear = window.innerHeight * 0.3;
    yCloudy = window.innerHeight * 0.8;
    end = "+=1800";
  }

  if (context.conditions.tablet) {
    yClear = window.innerHeight * 0.2;
    yCloudy = window.innerHeight * 0.75;
    end = "+=1500";
  }

  if (context.conditions.mobile) {
    yClear = window.innerHeight * 0.25;
    yCloudy = window.innerHeight * 0.75;
    end = "+=1200";
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".layer",
      start: "top top",
      end: end,
      scrub: 1,
      pin: true,
    }
  });

  tl.to(".layer__clear", {
    y: yClear,
    opacity: 1,
  })
  .to({}, { duration: 1 })
  .to(".layer__clear", {
    opacity: 0,
  })
  .to(".layer__cloudy", {
    y: yCloudy,
    opacity: 1,
  })
  .to({}, { duration: 1 })
  .to(".layer__cloudy", {
    opacity: 0,
  });

});