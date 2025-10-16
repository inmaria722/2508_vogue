var swiper = new Swiper(".mySwiper", {
  spaceBetween: 120,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: "auto", // ← 각 슬라이드 폭을 CSS에서 정의
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
