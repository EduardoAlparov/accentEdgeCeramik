export default function inputMasks() {
  const nameInputs = document.querySelectorAll('input[name="name"]');
  const phoneInputs = document.querySelectorAll('input[name="phone"]');
  const emailInputs = document.querySelectorAll('input[name="email"]');

  if(phoneInputs.length) {
    const imaskScript = document.createElement('script');
    imaskScript.src =
      "https://unpkg.com/imask";
    document.body.appendChild(imaskScript);

    imaskScript.addEventListener('load', () => {

      phoneInputs.forEach(phoneInput => {
        const phoneMask = IMask(phoneInput, {
          mask: '+{7}(000)000-00-00'
        });
      })

      nameInputs.forEach(nameInput => {
        const nameMask = IMask(nameInput, {
          mask: /^[А-Яа-яЁёA-Za-z ]+$/,
        });
      })
  
      emailInputs.forEach(emailInput => {
        const emailMask = IMask(emailInput, {
          mask: /^\S*@?\S*$/,
        });
      })
      
    });
  } 

}