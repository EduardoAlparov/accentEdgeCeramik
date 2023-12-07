export default () => {
  const ranges = document.querySelectorAll('.range');

  if(ranges.length) {
    Array.from(ranges).forEach( r => {
      let coefficient = r.dataset.coefficient ? r.dataset.coefficient : 1;
      r.querySelector('.range-price-input-min').value = parseInt(r.querySelector('.range-price-input-min').value) * coefficient;
      r.querySelector('.range-price-input-max').value = parseInt(r.querySelector('.range-price-input-max').value) * coefficient;

      let rangeMin = 1;
      const range = r.querySelector(".range-selected");
      const rangeInput = r.querySelectorAll(".range-input input");
      const rangePrice = r.querySelectorAll(".range-price input");
    
      rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
          let minRange = parseInt(rangeInput[0].value);
          let maxRange = parseInt(rangeInput[1].value);
          if (maxRange - minRange < rangeMin) {
            if (e.target.className === "min") {
              rangeInput[0].value = maxRange - rangeMin;
            } else {
              rangeInput[1].value = minRange + rangeMin;
            }
          } else {
            rangePrice[0].value = minRange * coefficient;
            rangePrice[1].value = maxRange * coefficient;
            range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
          }
        });
      });
    
    })
  }
}