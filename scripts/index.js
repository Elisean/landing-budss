document.addEventListener('DOMContentLoaded', () => {
   
  const headerBurger = document.querySelector('.header-bottom__burger');
  const headerBurgerMenu = document.querySelector('.header-bottom__burger-menu');
  headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('open');
    headerBurgerMenu.classList.toggle('open');
  });
  

  const buttons = document.querySelectorAll('.main-button');
  const form = document.querySelector('.section-form');
  const buttonClosed = document.querySelector('.section-form__closed');
 
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      form.classList.add('open');
    });
  });
  
  buttonClosed.addEventListener('click', () => {
    form.classList.remove('open');
  });
  
  document.addEventListener('click', (event) => {
    if (!form.contains(event.target) && event.target !== form && event.target.textContent !== 'Contact sales') {
      form.classList.remove('open');
    }
  });

})


