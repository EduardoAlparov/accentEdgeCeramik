export default () => {
  const seoButtons =document.querySelectorAll('.seo__button');

  if(seoButtons.length) {
    Array.from(seoButtons).forEach( btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('_active');
        btn.closest('.seo__dropdown').classList.toggle('seo__dropdown--closed');
      })
    })
  }
}