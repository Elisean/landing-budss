document.addEventListener('DOMContentLoaded', () => {
   
  const headerBurger = document.querySelector('.header-bottom__burger');
  const headerBurgerMenu = document.querySelector('.header-bottom__burger-menu');
  headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('open');
    headerBurgerMenu.classList.toggle('open');
  });
  
  const body = document.body;
  const buttons = document.querySelectorAll('.main-button');
  const formWrapper = document.querySelector('.section-form');
  const buttonClosed = document.querySelector('.section-form__closed');
  const form = document.querySelector('.section-form__form');
  const requiredElements = document.querySelectorAll('.input-requaired');
  const mainError = document.querySelector('.main-error');


  buttons.forEach(button => {
    button.addEventListener('click', () => {
      formWrapper.classList.add('open');
      hasPopUp = true
      body.classList.add('overflow')
    });
  });
  
  buttonClosed.addEventListener('click', () => {
    formWrapper.classList.remove('open');
    body.classList.remove('overflow')
  });
  

 
  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    requiredElements.forEach((element)=>{

      if(element.value === ''){
        element.parentElement.childNodes[5].style.display = 'block'
        mainError.style.display = 'block'
      }
   
    })
  })

  const input = document.querySelector("#phone");
  window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.11/build/js/utils.js",
  });



  setTimeout(()=>{
  
    const cookiesBanner = `
      <div class="cookies-banner">
      <button class="cookies-banner__closed banner-button" type="button">
            <img src="./icons/close-black.svg" alt="close-black" >
      </button>
        <p class="cookies-banner__text">
          This website uses cookies to ensure you get the best experience on our website. They also </br> allow us to analyze user behavior in order to constantly improve the website for you.
        </p>
        <div class="cookies-banner__buttons">
          <button class="cookies-banner__button main-button banner-button">Accept</button>
          <button class="cookies-banner__button banner-button">Decline</button>
        </div>
      </div>
    `
    body.insertAdjacentHTML('afterbegin', cookiesBanner)

    const buttonsCookie = document.querySelectorAll('.banner-button')
    buttonsCookie.forEach((button)=>{
      button.addEventListener('click', ()=>{
        const cookiesBannerElement = document.querySelector('.cookies-banner')
        cookiesBannerElement.classList.add('closed')
      })
   })
  }, 3000)
 

})


