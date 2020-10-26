
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

let mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  
	loop: true,
	slidesPerView: 3,
	spaceBetween: 15,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})