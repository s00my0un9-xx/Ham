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

    // aboutmak slide
    $(window).on("scroll", function () {
        if ($(window).width() > 1024) {
            var section = $(".aboutmak");
            var imgArea = $(".aboutmak__img-area");
            var textArea = $(".aboutmak__text-area");

            var triggerPoint = section.offset().top;

            if ($(window).scrollTop() > triggerPoint) {
                imgArea.stop().animate({ width: "57%" }, 800);
                textArea.delay(1000).stop().animate({ opacity: 1 }, 800);
            }
        }
    });

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
gsap.registerPlugin(ScrollTrigger);

// layer gsap
const mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".layer",
            start: "top 9%",
            end: "center center",
            // markers: true,
            scrub: 1,
            pin: ".layer__inner",
        }
    })

    tl.to(".layer__clear", {
        y: 200,
        opacity: 1,
        duration: 0.9,
    })
        .to(".layer__clear", {
            opacity: 0,
        })
        .to(".layer__cloudy", {
            y: 715,
            opacity: 1,
            duration: 0.8,
        })
})

mm.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".layer",
            start: "top top",
            end: "center center",
            scrub: 1,
            pin: ".layer__inner",
        }
    })

    tl.to(".layer__clear", {
        y: 200,
        opacity: 1,
        duration: 0.9,
    })
        .to(".layer__clear", {
            opacity: 0,
        })
        .to(".layer__cloudy", {
            y: 715,
            opacity: 1,
            duration: 0.8,
        })
})

// aboutmak scroll
ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".aboutmak",
                start: "-42px -80px",
                end: "+=80",
                pin: true,
                scrub: 1,
                markers: true,
                toggleActions: "play none none reverse",

                onEnter: () => gsap.to(".header.makgeolli", { autoAlpha: 0, duration: 0.3 }),
                onLeave: () => gsap.to(".header.makgeolli", { autoAlpha: 1, duration: 0.3 }),
                onEnterBack: () => gsap.to(".header.makgeolli", { autoAlpha: 0, duration: 0.3 }),
                onLeaveBack: () => gsap.to(".header.makgeolli", { autoAlpha: 1, duration: 0.3 }),
            }
        })
            .to(".aboutmak__img-area", { width: "57%", duration: 1 })
            .to(".aboutmak__text-area", { opacity: 1, duration: 1 }, "-=0.5");
    }
});