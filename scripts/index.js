document.addEventListener('DOMContentLoaded', () => {
   
      const headerBurger = document.querySelector('.header-bottom__burger');
      const headerBurgerMenu = document.querySelector('.header-bottom__burger-menu');
      const buttons = document.querySelectorAll('.main-button');
      headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('open');
        headerBurgerMenu.classList.toggle('open')
      });

      buttons.forEach(button =>{
        button.addEventListener('click',()=>{
        
        })
      })
  
})


