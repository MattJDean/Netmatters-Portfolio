<div id="contact" class="contact__container">

    <div class="contact__header"><h2><span>Lets Connect...</span></h2></div>

        <span class="contact__phone"><a href="tel:+447368938360"><i class="fa-solid fa-mobile-retro"></i></a>  +44(0)7368 938360</span>

        <span class="contact__email"><a  href="mailto:matt@mattdean.tech"><i class="fa-solid fa-envelope"></i></a>  matt@mattdean.tech</span>
            
            <div class="contact__form">
                <form class="form" id="contactForm" method="POST">
        
                    <input class="form__firstname" type="text" id="first_name" name="firstName" placeholder="First Name" required>
                    <span class="error" id="firstNameError"></span>
                    
                    <input class="form__lastname" type="text" id="last_name" name="lastName" placeholder="Last Name" required>
                    <span class="error" id="lastNameError"></span>
                    
                    <input class="form__email" type="email" id="emailField" name="email" placeholder="Email" required>
                    <span class="error" id="emailError"></span>
                    
                    <input class="form__subject" type="text" id="subjectField" name="subject" placeholder="Subject" required>
                    <span class="error" id="subjectError"></span>
                    
                    <textarea class="form__message" id="messageField" name="message" rows="5" placeholder="Message..." required></textarea>
                    <span class="error" id="messageError"></span>

                    <button id="submitButton" class="form__submit" type="submit">Submit</button>
                </form>

                <div id="successModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <p id="modalMessage"></p>
                    </div>
                </div>
            </div>       
</div>

<script src="js/formValidation.js" defer></script>