const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navToggleClose = document.querySelector('.nav__close-toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  }
});

navToggleClose.addEventListener('click', function () {
  if (navMain.classList.contains('nav--opened')) {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});

// swiper
const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
