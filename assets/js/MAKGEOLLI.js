// aboutmak scroll
ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".aboutmak",
                start: "top top",
                end: "bottom bottom",
                pin: true,
                scrub: false,
            }
        })
            .to(".aboutmak__img-area", { width: "57%", duration: .7, ease: "power2.inOut" })
            .to(".aboutmak__text-area", { opacity: 1, duration: .1, ease: "power2.inOut" });
    }
});

$(function () {
    $(".faqmak__question").click(function () {
        var $item = $(this).closest(".faqmak__item");

        $(".faqmak__item").not($item).removeClass("active").find(".faqmak__answer").slideUp();

        $item.toggleClass("active");
        $item.find(".faqmak__answer").stop().slideToggle(300);
    });
});
