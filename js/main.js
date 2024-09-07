
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



// Burger Menu
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger__btn');
    const burgerMenu = document.querySelector('.burger__menu');
    const burgerHidden = document.querySelector('.burger__hidden');
    const burgerLinks = document.querySelectorAll('.burger__links--anchor');

    console.log('Burger Button:', burgerBtn);
    console.log('Burger Menu:', burgerMenu);
    console.log('Burger Hidden:', burgerHidden);

    if (burgerBtn && burgerMenu && burgerHidden) {
        burgerBtn.addEventListener('click', function() {
            console.log('Burger button clicked');
            burgerBtn.classList.toggle('animated');
            burgerHidden.classList.toggle('showNav');
            burgerHidden.classList.toggle('hideNav');
            burgerHidden.classList.remove('hidden');
        });

        // Add click event listeners to menu links
        burgerLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.add('compressing');
                setTimeout(() => {
                    this.classList.remove('compressing');
                    this.classList.add('sliding-out');
                    // Navigate to the link after animation
                    setTimeout(() => {
                        window.location.href = this.href;
                    }, 1000);
                }, 700);
            });
        });
    } else {
        console.log('One or more elements are missing');
    }
});
 

// Hover Effect for Burger Menu Links
document.addEventListener('DOMContentLoaded', function () {
  // Select all link elements within burger__links
  const anchors = document.querySelectorAll('.burger__links--anchor');

  anchors.forEach(anchor => {
    anchor.addEventListener('mouseenter', function () {
      // On hover, grow lines from their origin
      this.style.setProperty('--after-transform-origin', 'left'); // Bottom line from left
      this.style.setProperty('--before-transform-origin', 'right'); // Top line from right
      this.style.setProperty('--after-transform', 'scaleX(1)'); // Bottom line grows full width
      this.style.setProperty('--before-transform', 'scaleX(1)'); // Top line grows full width
    });

    anchor.addEventListener('mouseleave', function () {
      // On mouse leave, shrink lines back in reverse direction
      this.style.setProperty('--after-transform-origin', 'right'); // Bottom line shrinks from right
      this.style.setProperty('--before-transform-origin', 'left'); // Top line shrinks from left
      this.style.setProperty('--after-transform', 'scaleX(0)'); // Bottom line shrinks to 0 width
      this.style.setProperty('--before-transform', 'scaleX(0)'); // Top line shrinks to 0 width
    });

    // Compress on click
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default link behavior

      // Start compression animation
      this.classList.add('compressing');

      // Wait for the compression animation to end before navigating
      setTimeout(() => {
        this.classList.remove('compressing');
        // Check if the link is valid and different from the current URL
        if (this.href && this.href !== window.location.href) {
          window.location.href = this.href;
        }
      }, 500); // Time for compression animation
    });
  });
});
  
  
    

