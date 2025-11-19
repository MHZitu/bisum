var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });

var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".customPagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});