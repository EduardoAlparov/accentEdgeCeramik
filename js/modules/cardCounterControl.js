export default () => {
  const additions = document.querySelectorAll('.addition');
  const cards = document.querySelectorAll('.collection--card:not(.collection--active)');

  const isHoverableDevice = window.matchMedia(
    '(hover: hover) and (pointer: fine)'
  )

  if(cards.length) {
    Array.from(cards).forEach(card => {
      if(isHoverableDevice) {
        
        card.addEventListener('mouseover', () => {
          card.classList.add('is-active'); 
        })
  
        card.addEventListener('mouseout', () => {
          card.classList.remove('is-active'); 
        })

      } else {
        
        card.addEventListener('click', () => {
          card.classList.add('is-active'); 
        })


      }
    })
  }

  if(additions.length) {
    Array.from(additions).forEach( addition => {
      addition.addEventListener('click', (e) => {
        let input = addition.querySelector('input[type="number"]');
        let inputWrapper = input.parentElement;

        if(e.target.closest('.addition__count--minus')) {
          if(input.value > 1) {
            input.value = Number(input.value) - 1;
            inputWrapper.classList.add('addition__input--changed');

            if(input.value <= 1) {
              inputWrapper.classList.remove('addition__input--changed');
            }
          }
        }

        if(e.target.closest('.addition__count--plus')) {
          if(input.value < 201) {
            input.value = Number(input.value) + 1;
            inputWrapper.classList.add('addition__input--changed');
          }
        }

        if(e.target.closest('.addition__buy-btn')) {
          addition.classList.add('addition--added-to-cart');
        }
      })
    })
  }
}