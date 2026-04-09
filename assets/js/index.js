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
});

// layer gsap
gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger : ".layer",
            start: "top 9%",
            end : "center center",
            // markers: true,
            scrub : 1,
            pin : ".layer__inner",
        }
    })

    tl.to(".layer__clear", {
        y : 200,
        opacity: 1,
        duration : 0.9,
    })
    .to(".layer__clear", {
        opacity: 0,
    })
    .to(".layer__cloudy", {
        y: 715,
        opacity: 1,
        duration : 0.8,
    })
})

mm.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger : ".layer",
            start: "top top",
            end : "center center",
            scrub : 1,
            pin : ".layer__inner",
        }
    })

    tl.to(".layer__clear", {
        y : 200,
        opacity: 1,
        duration : 0.9,
    })
    .to(".layer__clear", {
        opacity: 0,
    })
    .to(".layer__cloudy", {
        y: 715,
        opacity: 1,
        duration : 0.8,
    })
})

// type slide
document.querySelectorAll(".type .swiper").forEach((element) => {
    new Swiper(element, {
        slidesPerView: 2,
        spaceBetween: 16,
        centeredSlides: false,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 12,
            },
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
