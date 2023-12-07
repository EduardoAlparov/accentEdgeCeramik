import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

export default () => {
  const promotionsSwiperBoxes = document.querySelectorAll('.js-promotions-swiper');
  const partnersSwiperBoxes = document.querySelectorAll('.js-partners-swiper');
  const cardPromoSwipers = document.querySelectorAll('.js-cards-swiper');

  Array.from(promotionsSwiperBoxes).forEach(item => {
    const promotionSwiper = new Swiper(item, {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 600,

      navigation: {
        nextEl: ".promotions__swiper-button-next",
        prevEl: ".promotions__swiper-button-prev",
      },

      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 15
        },

        991: {
          slidesPerView: 3,
          spaceBetween: 15
        },

        1280: {
          slidesPerView: 2,
          spaceBetween: 15
        },

        1600: {
          slidesPerView: 3,
          spaceBetween: 15
        },
      }
    })
  });

  Array.from(partnersSwiperBoxes).forEach(item => {
    const partnerSwiper = new Swiper(item, {
      slidesPerView: 1,
      speed: 600,

      navigation: {
        nextEl: ".partners__swiper-button-next",
        prevEl: ".partners__swiper-button-prev",
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },

        1600: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }
    })
  })

  Array.from(cardPromoSwipers).forEach(item => {
    const cardSwiper = new Swiper(item, {
      spaceBetween: 10,
      width: 200,
      speed: 600,

      navigation: {
        nextEl: ".cards-swiper-button-next",
        prevEl: ".cards-swiper-button-prev",
      },
    })
  })
}