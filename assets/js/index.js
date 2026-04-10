$(document).ready(function() {
    // info
    let i = 0
    setInterval(function(){
        if(i < 3) {
            i++
        } else {
            i = 0
        }

        $('.fade-img').fadeOut(300);
        $('.fade-img').eq(i).fadeIn(300);
    }, 2800)
    
    // tab
    $('.tab.type-tab li').on('click', function(e) {
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

    // aboutmak slide
    $(window).on("scroll", function () {
        var section = $(".aboutmak");
        var imgArea = $(".aboutmak__img-area");
        var textArea = $(".aboutmak__text-area");

        var triggerPoint = section.offset().top;

        if ($(window).scrollTop() > triggerPoint) {
            imgArea.stop().animate({ width: "57%" }, 1000);

            textArea.delay(1000).stop().animate(
                { opacity: 1 },
                800
            );
        }
    });

});

// layer gsap
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger : ".layer",
        start: "top 9%",
        end : "center center",
        markers: true,
        scrub : 1,
        pin : ".layer__inner",
    }
})

// clear 등장
tl.to(".layer__clear", {
    y : 200,
    opacity: 1,
    duration : 0.9,
})

// clear 사라짐
.to(".layer__clear", {
    opacity: 0,
})

// cloudy 등장
.to(".layer__cloudy", {
    y: 715,
    opacity: 1,
    duration : 0.8,
})

// type slide
var swiper = new Swiper(".swiper", {
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
      },
    });