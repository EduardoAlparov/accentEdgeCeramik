export default () => {
  const burgerBtns = document.querySelectorAll('.burger-button');
  const catalogueBtn = document.querySelector('.js-catalogue-open-btn');
  const catalogue = document.getElementById('mobile-menu-category');
  const products = document.getElementById('mobile-menu-products');
  const types = document.getElementById('mobile-menu-types');

  const categoryLinks = document.querySelectorAll('.mobile-menu__categories-link');

  for (let index = 0; index < burgerBtns.length; index++) {
    burgerBtns[index].addEventListener('click', () => {
      burgerBtns[index].classList.toggle('burger-button--active');
      document.body.classList.toggle('menu-open');
    })
  }

  if(catalogueBtn) {
    catalogueBtn.addEventListener('click', () => {
      catalogue.classList.add('is-open');

      catalogue.onclick = (e) => {
        if(e.target.closest('.js-back-btn')) {
          catalogue.classList.remove('is-open');
        }
      }
    })
  }

  if(categoryLinks.length) {
    Array.from(categoryLinks).forEach( link => {
      link.onclick = (e) => {
        e.preventDefault();

        if(link.dataset.product) {
          products.classList.add('is-open');

          products.onclick = (e) => {
            if(e.target.closest('.js-back-btn')) {
              products.classList.remove('is-open');
            }
          }
        } else if(link.dataset.type) {
          types.classList.add('is-open');

          types.onclick = (e) => {
            if(e.target.closest('.js-back-btn')) {
              types.classList.remove('is-open');
            }
          }
        }
      }
    })
  }
}