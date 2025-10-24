gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

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
$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  $(".title-box > .title, .title-box > .sub, .img-box").each(function () {
    var currentElement = this;
    var $el = $(currentElement);

    ScrollTrigger.create({
      trigger: currentElement,
      start: "top 80%",
      once: true,
      onEnter: function () {
        $el.addClass("is-visible");

        if ($el.hasClass("img-box")) {
          setTimeout(function () {
            $el.addClass("is-hoverable");
          }, 1000);
        }
      },
    });
  });
});

// marquee
$(document).ready(function () {
  var $track = $(".marquee-track");
  var $items = $track.children();
  var itemWidth = 0;

  $items.each(function () {
    itemWidth += $(this).outerWidth(true);
  });

  $items.clone().appendTo($track);

  function scrollMarquee() {
    $track.animate(
      {
        marginLeft: -itemWidth,
      },
      45000,
      "linear",
      function () {
        $(this).css({ marginLeft: 0 });
        scrollMarquee();
      }
    );
  }

  scrollMarquee();

  $track.hover(
    function () {
      $(this).stop();
    },
    function () {
      scrollMarquee();
    }
  );
});
