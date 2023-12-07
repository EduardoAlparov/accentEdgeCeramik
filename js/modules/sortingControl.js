export default () => {
  // sorting:
  const sortingBars = document.querySelectorAll('.sorting');

  if(sortingBars.length) {
    Array.from(sortingBars).forEach( s => {
      s.addEventListener('click', (e) => {
        if(e.target.closest(".sorting__button")) {
          s.classList.toggle('is-open');
        }

        if(e.target.closest(".sorting__option")) {
          s.querySelector('.sorting__input').value = 
            e.target.closest(".sorting__option").dataset.sort;
          
          s.querySelector('.sorting__text').textContent = 
            e.target.closest(".sorting__option").textContent;
          
          
          s.classList.remove('is-open');
        }
      })
    })
  }

  // filters:
  const mobFilterBtn = document.querySelectorAll('.c-list__filter-btn');
  const filtersPopup = document.querySelector('.c-filters');

  if(mobFilterBtn.length) {
    mobFilterBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        filtersPopup.classList.add('is-open');

        filtersPopup.addEventListener('click', (e) => {
          if(e.target.closest('.c-filters__submit') || e.target.closest('.c-filters__close-btn')) {
            filtersPopup.classList.remove('is-open');
          }
        })
      })
    })
  }
}