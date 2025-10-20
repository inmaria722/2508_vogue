gsap.registerPlugin(ScrollTrigger);

// swiper
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

$(".title").each(function () {
  var currentBox = $(this)[0];

  gsap.fromTo(
    currentBox,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power1.inout",

      // 3. ScrollTrigger 설정
      scrollTrigger: {
        trigger: currentBox,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});
