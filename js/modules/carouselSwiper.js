import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

export default () => {
  const carouselSwipers = document.querySelectorAll('.js-carousel-swiper');
  const carouselSwipers2 = document.querySelectorAll('.js-carousel2-swiper');
  const solutionsSwipers = document.querySelectorAll('.js-solutions-swiper');

  Array.from(carouselSwipers).forEach( item => {
    const carouselSwiper = new Swiper(item, {
      slidesPerView: 1,

      navigation: {
        nextEl: ".carousel-swiper-button-next",
        prevEl: ".carousel-swiper-button-prev",
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 15
        },

        1400: {
          slidesPerView: 4,
          spaceBetween: 15
        },

        1680: {
          slidesPerView: 5,
          spaceBetween: 15
        }
      }
    })
  })

  Array.from(carouselSwipers2).forEach( item => {
    const carouselSwiperTwo = new Swiper(item, {
      slidesPerView: 1,

      navigation: {
        nextEl: ".carousel-two-swiper-button-next",
        prevEl: ".carousel-two-swiper-button-prev",
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 15
        },

        1400: {
          slidesPerView: 4,
          spaceBetween: 15
        },

        1680: {
          slidesPerView: 5,
          spaceBetween: 15
        }
      }
    })
  })

  Array.from(solutionsSwipers).forEach( item => {
    const solutionSwiper = new Swiper(item, {
      slidesPerView: 1,
      spaceBetween: 15,

      navigation: {
        nextEl: ".solutions-swiper-button-next",
        prevEl: ".solutions-swiper-button-prev",
      },

      breakpoints: {
        1120: {
          slidesPerView: 2,
        },


        1670: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }
    })
  })
}