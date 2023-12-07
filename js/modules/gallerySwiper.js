import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

export default () => {
  const galleryBoxes = document.querySelectorAll('.gallery');

  Array.from(galleryBoxes).forEach( item => {
    const thumbs = new Swiper('.js-gallery-thumbs-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 5,
      freeMode: true,
      watchSlidesProgress: true,

      breakpoints: {
        
      }
    });

    const gallerySwiper = new Swiper(item.querySelector('.js-gallery-main-swiper'), {
      slidesPerView: 1,
      effect: 'fade',

      thumbs: {
        swiper: thumbs,
      },
    });
  })
}