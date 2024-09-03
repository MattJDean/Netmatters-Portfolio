// JS Test

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('test');
// });

// const formSubmit = document.querySelector('.form__submit--md');
// formSubmit.addEventListener('click', (event) => {
//     event.preventDefault();
//     alert('Button Clicked');
// });

//Hero Text Typing
const typedText = document.querySelector('#typedText');
const text = "I'm a web developer."; 
let index = 0;

function typedTextEffect() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typedTextEffect, 150); // Typing speed (in ms)
  }
}

// Trigger the typing effect
document.addEventListener('DOMContentLoaded', typedTextEffect);