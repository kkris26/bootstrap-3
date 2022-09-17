$(document).ready(() => {
  $(document).scroll(() => {
    $(".navbar").toggleClass(
      "active",
      $(this).scrollTop() > $(".navbar").height()
    );
  });
});

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 40,
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

AOS.init();
