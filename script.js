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

// fade up
$(".title").each(function () {
  var commonParent = $(this).closest(".con");

  var currentTitle = $(this)[0];
  var currentSubs = commonParent.find(".sub").toArray();
  var currentImgBoxes = commonParent.find(".img-box").toArray();

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: currentTitle,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tl.fromTo(
    currentTitle,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power1.inout" }
  );

  if (currentSubs.length > 0) {
    tl.fromTo(
      currentSubs,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power1.inout", stagger: 0.1 }
    );
  }

  if (currentImgBoxes.length > 0) {
    tl.fromTo(
      currentImgBoxes,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power1.inout", stagger: 0.1 }
    );
  }
});
