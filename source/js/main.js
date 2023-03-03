import {iosVhFix} from './utils/ios-vh-fix';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();

  // Modules
  // ---------------------------------

  // Form
  const telephones = document.querySelectorAll('input[type="tel"]');

  const prefixNumber = (str) => {
    if (str === '7') {
      return '7 (';
    }
    if (str === '8') {
      return '7 (';
    }
    if (str === '9') {
      return '7 (';
    }
    return '7 (';
  };

  // ---------------
  for (let i = 0; i < telephones.length; i++) {
    telephones[i].addEventListener('input', () => {
      const value = telephones[i].value.replace(/\D+/g, '');
      const numberLength = 11;

      let result;
      if (telephones[i].value.includes('+8') || telephones[i].value[0] === '8') {
        result = '';
      } else {
        result = '+';
      }

      //
      for (let j = 0; j < value.length && j < numberLength; j++) {
        switch (j) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[j];
      }
      //
      telephones[i].value = result;
    });
  }

  const form = document.querySelector('.form');
  const formErrorTel = form.querySelector('.form__error--tel');
  const inputName = form.querySelector('#name');
  const inputNameError = form.querySelector('.form__error--name');

  form.addEventListener('submit', (evt) => {
    if (telephones[0].value.length < 18) {
      evt.preventDefault();
      telephones[0].style.outline = '1px solid #ff5733';
      telephones[0].style.boxShadow = 'inset 0 0 0 28px #ffe6e0';
      formErrorTel.style.display = 'block';
    }

    if (inputName.value.length <= 1) {
      evt.preventDefault();
      inputName.style.outline = '1px solid #ff5733';
      inputName.style.boxShadow = 'inset 0 0 0 28px #ffe6e0';
      inputNameError.style.display = 'block';
    }

  });
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});
