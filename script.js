$(document).ready(function () {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
});

gsap.registerPlugin(ScrollTrigger);

$(window).on("load", function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 120,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: "auto",
    speed: 550,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var $track = $(".marquee-track");
  var $items = $track.children();
  $items.clone().appendTo($track);
  var marqueeTween = gsap.to($track, {
    xPercent: -50,
    duration: 10,
    ease: "none",
    repeat: -1,
  });
  $track.hover(
    function () {
      marqueeTween.pause();
    },
    function () {
      marqueeTween.play();
    }
  );

  const fashionZoomTween = gsap.to(".fashion-img img", {
    scale: 1,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".fashion-img",
    animation: fashionZoomTween,
    start: "top top",
    end: "+=60%",
    pin: true,
    scrub: true,
  });

  const elementsToAnimate = gsap.utils.toArray(
    ".title-box > .title, .title-box > .sub, .img-box"
  );

  ScrollTrigger.batch(elementsToAnimate, {
    start: "top 80%",
    once: true,
    anticipatePin: 1,
    onEnter: (batch) => {
      batch.forEach((el) => {
        const $el = $(el);
        $el.addClass("is-visible");

        if ($el.hasClass("img-box")) {
          setTimeout(function () {
            $el.addClass("is-hoverable");
          }, 1000);
        }
      });
    },
  });

  ScrollTrigger.refresh();
});
