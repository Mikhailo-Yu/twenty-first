let buttonNext = document.querySelector('.right');
let buttonPrev = document.querySelector('.left');
let sliderItem = document.querySelector('.slider-item');
let img = document.querySelector('img');

buttonNext.addEventListener('click', () => {
    const activeSlide = document.querySelector('.slider-item.active')
   
        if(activeSlide) {
            activeSlide.classList.remove('active');
            activeSlide.nextElementSibling.classList.add('active');
           if(buttonPrev.classList.value.includes('active') === false) {
            buttonPrev.classList.add('active');
           }
            if(activeSlide.nextElementSibling.nextElementSibling === null) {
                buttonNext.classList.remove('active');    
           } 
        }      
})
buttonPrev.addEventListener('click', () => {
    const activeSlide = document.querySelector('.slider-item.active')
   
        if(activeSlide) {
            activeSlide.classList.remove('active');
            activeSlide.previousElementSibling.classList.add('active');
           
            if(buttonNext.classList.value.includes('active') === false) {
                buttonNext.classList.add('active');
               }
            if(activeSlide.previousElementSibling.previousElementSibling === null) {
                buttonPrev.classList.remove('active');
            } 
        }      
})