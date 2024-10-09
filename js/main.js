
//Hero Text Typing Effect

// Selects both xs and md versions of the h2 text elements into an array
const typedText = [document.querySelector('#typedText'), document.querySelector('#typedTextMd')]; 
const text = "Web Developer."; // The text to be typed out


// Function to apply the typing effect to the selected version of the text (xs or md)
function typedTextEffect(version) {
    let index = 0; // Start at the first character of the string
    version.textContent = ''; // Clear any existing text content

    // Function to type one character at a time
    function type() {
        if (index < text.length) { // Check if there are characters left to type
            version.textContent += text.charAt(index); // Append the next character to the content
            index++; // Move to the next character
            setTimeout(type, 150); // Call the function again after a delay (150 ms for typing speed)
        }
    }
    type(); 
}
  

// Trigger the typing effect once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => { 
    typedText.forEach((version) => {
     // Check if the version exists and is visible (only apply effect if it's visible)  
    if (version && window.getComputedStyle(version).display !== 'none') {
      console.log(`Applying typing effect to: ${version.id}`); // Debug message to indicate where it's being applied
        typedTextEffect(version);
    } else {
        console.log('Element not found or not visible'); // Debug message if the element isn't found or visible
    }
    });
});



// Burger Menu

$(window).on("load", function() {
  console.log('jQuery loaded'); // Log a message when jQuery is fully loaded
  const btn = $(".burger__btn"); // Select the burger button element

  // When the burger button is clicked
  $(".burger__btn").on("click", function() {
    // Toggle the 'showNav' and 'hideNav' classes for the hidden burger menu
    // Also remove the 'hidden' class to ensure visibility
    $(".burger__hidden").toggleClass("showNav hideNav").removeClass("hidden"); 
    // Toggle the 'animated' class to add or remove the animation for the button
    $(this).toggleClass("animated"); 
  });


});

 

// Hover Effect for Burger Menu Links
document.addEventListener('DOMContentLoaded', function () {
  // Select all anchor elements inside the '.burger__links' container
  const anchors = document.querySelectorAll('.burger__links--anchor');

  // Loop over each 
  anchors.forEach(anchor => {

    // When mouse enters the link (hover)
    anchor.addEventListener('mouseenter', function () {
      // Set the origin for transforming the bottom line to the left
      this.style.setProperty('--after-transform-origin', 'left'); 
      // Set the origin for transforming the top line to the right
      this.style.setProperty('--before-transform-origin', 'right'); 

      // Grow the bottom line to full width
      this.style.setProperty('--after-transform', 'scaleX(1)'); 
      // Grow the top line to full width
      this.style.setProperty('--before-transform', 'scaleX(1)'); 
    });

    // When mouse leaves the link
    anchor.addEventListener('mouseleave', function () {
      // Set the origin for shrinking the bottom line to the right
      this.style.setProperty('--after-transform-origin', 'right');
      // Set the origin for shrinking the top line to the left 
      this.style.setProperty('--before-transform-origin', 'left');
      
      // Shrink the bottom line back to zero width
      this.style.setProperty('--after-transform', 'scaleX(0)'); 
      // Shrink the top line back to zero width
      this.style.setProperty('--before-transform', 'scaleX(0)'); 
    });

    // When the link is clicked
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default link behavior (page navigation)

      // Add the 'compressing' class to trigger a compression animation
      this.classList.add('compressing');

      // After 500ms (compression animation duration)
      setTimeout(() => {
        // Remove the 'compressing' class after the animation completes
        this.classList.remove('compressing');

        // If the link has a valid href and it's not the current URL, navigate to it
        if (this.href && this.href !== window.location.href) {
          window.location.href = this.href;
        }
      }, 500); // 500ms delay for the compression animation
    });
  });
});
  

// Examples Gallery Image Expander

document.querySelectorAll('.expandable-image').forEach(image => {
  const overlay = document.querySelector('.fullscreen-overlay');
  const fullscreenImg = document.querySelector('.fullscreen-image');
  const closeBtn = document.querySelector('.close-btn');

  // Open image in full screen
  image.addEventListener('click', function() {
      overlay.style.display = 'flex';
      fullscreenImg.src = this.src;
  });

  // Mouse wheel scrolls the image up/down
  fullscreenImg.parentElement.addEventListener('wheel', function(e) {
      e.preventDefault(); // Prevent default scroll behavior
      this.scrollTop += e.deltaY; // Scroll vertically
  });

  // Close image when clicking outside the image or on the close button
  overlay.addEventListener('click', function(e) {
      if (e.target === overlay || e.target === closeBtn) {
          overlay.style.display = 'none';
      }
  });
});

