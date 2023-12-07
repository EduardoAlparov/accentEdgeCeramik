export default () => {
  const picPoints = document.querySelectorAll('.pic-point');

  if(picPoints.length) {
    Array.from(picPoints).forEach( point => {
      let coords = JSON.parse(point.dataset.coords);
      let positions = JSON.parse(point.dataset.position);
      let index = Math.floor(Math.random() * 10000);

      if(!coords && !positions) return;

      // set position for popup from data-attr:
      point.querySelector('.pic-point__popup').classList.add(`pic-point__popup--${positions[0]}`);
      point.querySelector('.pic-point__popup').classList.add(`pic-point__popup--${positions[1]}`);

      // set position for point from data-attr:
      point.style.left = coords[0] + '%';
      point.style.top = coords[1] + '%';

      // set id for input[type="radio"] and this labels:
      point.querySelector('input[type="checkbox"]').id = index;
      point.querySelectorAll('label').forEach(label => {
        label.htmlFor = index;
      })
    })
  }
}