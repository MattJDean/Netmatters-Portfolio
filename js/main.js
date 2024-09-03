// JS Test

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('test');
// });

// const formSubmit = document.querySelector('.form__submit--md');
// formSubmit.addEventListener('click', (event) => {
//     event.preventDefault();
//     alert('Button Clicked');
// });


//Hero Text Typing Effect
const typedText = [document.querySelector('#typedText'), document.querySelector('#typedTextMd')]; // Array of both versions of the text (xs and md)
const text = "I'm a web developer."; 


function typedTextEffect(version) {
    let index = 0; // Character index
    function type() {
        if (index < text.length) { //Loops through each character in the text
            version.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150); // Typing speed (in ms)
        }
    }
    type();
}
  

// Triggers the typing effect
document.addEventListener('DOMContentLoaded', () => { 
    typedText.forEach((version) => {
    if (window.getComputedStyle(version).display !== 'none') { //Applies effect only to visible instance of h2 text.
        typedTextEffect(version);
    }
    });
});
    

