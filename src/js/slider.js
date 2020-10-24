import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

function getSlider(obj){
  this.init(obj);
}

getSlider.prototype = {
  swiper: undefined,
  documentElement: document.documentElement,

  init: function(obj){
    if(this.documentElement.clientWidth < 768){
      this.swiper = new Swiper(obj.container, obj.options);
    }
  }

  
};

const mySlider = new getSlider({
  container: '.swiper-container',
  options: {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.slider-pagination',
      clickable: true
    },
    slideClass: '.swiper-slide',
  }
});
