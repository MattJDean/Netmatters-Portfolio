
//Hero Text Typing Effect
const typedText = [document.querySelector('#typedText'), document.querySelector('#typedTextMd')]; // Array of both versions of the text (xs and md)
const text = "I'm a web developer."; 


// function typedTextEffect(version) {
//     let index = 0; // Character index
//     function type() {
//         if (index < text.length) { //Loops through each character in the text
//             version.textContent += text.charAt(index);
//             index++;
//             setTimeout(type, 150); // Typing speed (in ms)
//         }
//     }
//     type();
// }
  

// // Triggers the typing effect
// document.addEventListener('DOMContentLoaded', () => { 
//     typedText.forEach((version) => {
//     if (window.getComputedStyle(version).display !== 'none') { //Applies effect only to visible instance of h2 text.
//         typedTextEffect(version);
//     }
//     });
// });



// Burger Menu
$(window).on("load", function() {
    $(".burger__btn").on("click", function() {
      $(".burger__hidden").toggleClass("showNav hideNav").removeClass("hidden"); // Toggle navigation visibility
      $(this).toggleClass("animated"); // Toggle animation for button
    });
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

        // Compress and slide out on click
        anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior
  
            // Start compression animation
            this.classList.add('compressing');
    
            // Wait for the compression animation to end before sliding out
            setTimeout(() => {
            this.classList.remove('compressing');
            this.classList.add('sliding-out');
    
                requestAnimationFrame(() => {
                setTimeout(() => {
                    this.classList.remove('sliding-out'); // Reset the animation classes

                        // Check if the link is valid and different from the current URL
                        if (this.href && this.href !== window.location.href) {
                            window.location.href = this.href;
                        }
                    }, 1000); // Time for slide-out animation 
                });
            }, 700); // Time for compression animation 
        });
  });
});
  
  
    

