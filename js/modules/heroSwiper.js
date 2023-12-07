import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

export default () => {
  const heroSwiperBoxes = document.querySelectorAll('.js-hero-swiper');

  Array.from(heroSwiperBoxes).forEach(item => {
    const heroSwiper = new Swiper(item, {
      effect: 'fade',
      crossFade: true,
      
      pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        formatFractionCurrent: function (number) {
          return ('0' + number).slice(-2);
        },

        formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
        },

        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                '&nbsp;/&nbsp;' +
                '<span class="' + totalClass + '"></span>';
        }
      },
      
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },

      navigation: {
        nextEl: ".hero__swiper-button-next",
        prevEl: ".hero__swiper-button-prev",
      },
    })
  })
}