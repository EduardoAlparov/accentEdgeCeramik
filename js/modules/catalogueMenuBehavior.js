export default () => {
  const panel = document.querySelector('.panel');
  const panelBtn = document.querySelector('.js-panel-btn');
  const activeHover = document.querySelector('.p-hover');
  const activeCatBtn = document.querySelector('.p-sidebar__button--active');
  const CatBtns = document.querySelectorAll('.p-sidebar__button');
  const catalogueItems = document.querySelectorAll('.panel__catalogue-item');

  if(!panel) return;

  panelBtn.addEventListener('click', () => {
    panelBtn.classList.toggle('panel-button--active')
    panel.classList.toggle('is-open');
  })

  if(CatBtns.length && catalogueItems.length) {
    activeHover.style.top = activeCatBtn.offsetTop + 'px';


    Array.from(CatBtns).forEach( btn => {
      btn.addEventListener('click', () => {
        let index = btn.dataset.link;
        let catalogue = document.getElementById(index);

        Array.from(catalogueItems).forEach( item => {
          item.classList.remove('panel__catalogue-item--visible');
        })

        catalogue.classList.add('panel__catalogue-item--visible')

        Array.from(CatBtns).forEach( b => {
          b.classList.remove('p-sidebar__button--active');
        })

        btn.classList.add('p-sidebar__button--active');
        activeHover.style.top = btn.offsetTop + 'px';
      })
    })
  }
 
}