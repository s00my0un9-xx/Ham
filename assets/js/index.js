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

const tl = gsap.timeline({
    scrollTrigger: {
        trigger : ".layer",
        start: "top 20%",
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
    duration : 0.3
})

// clear 사라짐
.to(".layer__clear", {
    opacity: 0,
})

// cloudy 등장
.to(".layer__cloudy", {
    y: 715,
    opacity: 1,
    duration : 0.3
})