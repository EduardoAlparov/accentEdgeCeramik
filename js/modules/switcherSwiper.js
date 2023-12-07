import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

export default () => {
  const switcherSwipers = document.querySelectorAll('.js-switcher-swiper');
  const tabsSwipers = document.querySelectorAll('.js-tabs-swiper');
  const cTabs = document.querySelectorAll('.c-tabs');

  if(switcherSwipers.length || cTabs.length || tabsSwipers.length) {
    Array.from(switcherSwipers).forEach( item => {
      const switcherSwiper = new Swiper(item, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        
        freeMode: {
          enabled: true
        },
      })
    })
  
    Array.from(cTabs).forEach( item => {
      const tabsSwiper = new Swiper(item, {
        slidesPerView: 'auto',
        spaceBetween: 60,
        
        freeMode: {
          enabled: true
        },
      })
    })
  
    Array.from(tabsSwipers).forEach( item => {
      const tabsSwiper = new Swiper(item, {
        slidesPerView: 'auto',
        spaceBetween: 8,
        
        freeMode: {
          enabled: true
        },
      })
    })
  }
}