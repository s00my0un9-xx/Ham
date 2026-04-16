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
            .to(".aboutmak__img-area", { width: "57%", duration: .8, ease: "power2.inOut" })
            .to(".aboutmak__text-area", { opacity: 1, duration: .8, ease: "power2.inOut" });
    }
});

$(function () {
    $(".faqmak__question").click(function () {
        var $item = $(this).closest(".faqmak__item");

        // 다른 항목 닫기 (필요하다면)
        $(".faqmak__item").not($item).removeClass("active").find(".faqmak__answer").slideUp();

        // 현재 항목 토글
        $item.toggleClass("active");
        $item.find(".faqmak__answer").stop().slideToggle(300);
    });
});
