export default () => {
  const dropdownWidgets = document.querySelectorAll('.dropdown-widget');

  if(dropdownWidgets.length) {
    Array.from(dropdownWidgets).forEach( widget => {
      widget.addEventListener('click', (e) => {
        if(e.target.closest('.dropdown-widget__button') && !e.target.closest('.dropdown-widget__selects')) {
          widget.classList.toggle('is-open');
        }
      })
    })
  }
}