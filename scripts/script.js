import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".first-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  // If we need pagination
  effect: "coverflow",
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
const swiperA = new Swiper(".second-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  // If we need pagination
  effect: "coverflow",
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-right",
    prevEl: ".swiper-left",
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // And if we need scrollbar
});
