const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navToggleClose = document.querySelector('.nav__close-toggle');
const form = document.querySelector('.modal__form');
const modal = document.querySelector('.modal');
const modalBtnClose = document.querySelector('.modal__close-btn')
const modalBtnOpen = document.querySelector('.hero__button--order')

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


// modal
modalBtnOpen.addEventListener('click', function () {
  modal.style.display = 'block';
});

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  modal.style.display = 'none';
});

window.addEventListener('click', function(evt) {
  if (evt.target == modal) {
    modal.style.display = 'none';
  }
});

modalBtnClose.addEventListener('click', function () {
  modal.style.display = 'none';
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
