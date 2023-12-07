export default function validationForm() {
  const forms = document.querySelectorAll(' form.js-validate-form ');

  if(forms) {
    Array.from(forms).forEach( form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      })

      form.querySelector('button[type="submit"]')?.addEventListener('click', (e) => {
        let validateBool = true;
        
        Array.from(form.querySelectorAll("[required]")).forEach( input => {
          if(!input.value) {
            validateBool = false;
          } else {
            validateBool = true;
          }
        })

        if(validateBool) {
          // setTimeout(() => {
          //   form.submit();
          // }, 1000);
        }
      })

    })
  }
}