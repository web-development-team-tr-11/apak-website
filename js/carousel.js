new Swiper(".swiper", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  initialSlide: 0,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});
