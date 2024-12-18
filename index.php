<!DOCTYPE html>
<html lang="en" dir="ltr">
   <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <title>Matt Dean | Web Developer</title>
       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap" rel="stylesheet">
       <link rel="preconnect" href="https://rsms.me/">
       <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
       <script src="https://kit.fontawesome.com/ee55ddb165.js" crossorigin="anonymous"></script>
       <link rel="stylesheet" href="css/style.css">
       <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
       
   </head>
    
   <body>
  

    <!--------------------------------------------------------------------------------------------------------------------------------------->
    <!----------------------------------------------------xs-Container-Start----------------------------------------------------------------->
    <!--------------------------------------------------------------------------------------------------------------------------------------->


    <!-------------------------------Grid Container--xs-->
    <div class="grid__container--xs">

        <!--------------------------------------------------------------Burger Menu-->
        <div class="burger__menu">
            <div class="nav">
                <button class="burger__btn" type="button">
                    <span class="burger__btn--line top"></span>
                    <span class="burger__btn--line middle"></span>
                    <span class="burger__btn--line bottom"></span>  
                </button>
            </div>
            <div class="burger__hidden hideNav hidden">
                <ul class="burger__links">
                    <li class="burger__links item"><a href="about-me.html" class="burger__links--anchor"><span>About Me</span></a></li>
                    <li class="burger__links item"><a href="index.html#projects" class="burger__links--anchor"><span>My Portfolio</span></a></li>
                    <li class="burger__links item"><a href="coding-examples.html" class="burger__links--anchor"><span>Coding Examples</span></a></li>
                    <li class="burger__links item"><a href="scs-scheme.html" class="burger__links--anchor"><span>SCS Scheme</span></a></li>
                    <li class="burger__links item"><a href="index.html#contact" class="burger__links--anchor"><span>Contact Me</span></a></li>
                </ul>

                <ul class="burger__socials">
                    <li class="burger__socials item"><a href="https://www.linkedin.com/in/matt-dean-29263055/" class="burger__socials--anchor"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li class="burger__socials item"><a href="https://github.com/MattJDean" class="burger__socials--anchor"><i class="fa-brands fa-github"></i></a></li>
                    <li class="burger__socials item"><a href="https://mattdean.tech/" class="burger__socials--anchor"><i class="fa-solid fa-globe"></i></a></li>
                </ul>
            </div>
        </div>

        <!----------------------------------------------------------------Hero Section--xs-->
        <div id="hero" class="hero__container--xs hero">
            
            <div class="hero__background--xs"></div>
            
            <div class="hero__text--h1">
                <h1 id="heroTextTop">Matt Dean.</h1>
            </div>
              
            <div class="hero__text--h2"><h2 id="typedText"></h2></div>
            <!----------------------------------------------------------------Scroll Snap Top--xs-->
            <div class="hero__scroll">
                <span><a href="#projects-xs">Scroll Down</a></span><br>
               <a href="#projects-xs"><i class="fa-solid fa-angles-down"></i></a>
            </div>
        </div>

        <!------------------------------------------------Projects Section-->
        <div id="projects-xs" class="project__container--xs">
            <h3><span>My Projects</h3></span> 
            
            <a href="https://matthew-dean.netmatters-scs.co.uk/Netmatters-Homepage/" class="project__card--1" target="_blank" rel="noopener noreferrer" aria-label="Navigate to project"><span>Netmatters Homepage</span></a>
            <a href="https://js-array.matthew-dean.netmatters-scs.co.uk/" class="project__card--2" target="_blank" rel="noopener noreferrer" aria-label="Navigate to project"><span>ImageVault</span></a>
            <div class="project__card--3"><span>Coming Soon</span></div>
            <div class="project__card--4"><span>Coming Soon</span></div>
            <div class="project__card--5"><span>Coming Soon</span></div>
            <div class="project__card--6"><span>Coming Soon</span></div>
          
        
              <!-------------------------------------------Scroll Snap Mid--xs-->
              <div class="project__scroll">
                <a href="#contact-xs">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 7 4 4 4-4m-8 6 4 4 4-4"/>
                      </svg>
                      </a>
             </div>
        </div>
             

        <!-----------------------------------------------------------------------------------------------------------------------------------Contact Section-->
        <div id="contact-xs" class="contact__container--xs">

            <!--Heading-->
            <div class="contact__heading--xs"><h2><span>Lets Connect...</span></h2></div>
            <!--Phone Icon Link-->
            <a class="contact__phone--xs" href="tel:+447368938360"><span><i class="fa-solid fa-mobile-retro"></i>  &nbsp;+44(0)7368 938360</span></a>
            <!--Email Icon Link-->
            <span class="contact__email--xs"><a  href="mailto:matt@mattdean.tech"><i class="fa-solid fa-envelope"></i></a>  matt@mattdean.tech</span>
            
            <!--Contact Form-->
            <div class="contact__form--xs">
                <form class="form" id="contactFormXs" action="submit_contact.php" method="post">
                <p><?php echo $message; ?></p>

                    <!--First Name-->
                    <input class="form__firstname--xs" type="text" id="firstNameXs" name="first_name" placeholder="First Name" required>
                    <span class="error" id="XsfirstNameError"></span>
                    <!--Last Name-->
                    <input class="form__lastname--xs" type="text" id="lastNameXs" name="last_name" placeholder="Last Name" required>
                    <span class="error" id="XslastNameError"></span>
                    <!--Email-->
                    <input class="form__email--xs" type="email" id="emailXs" name="email" placeholder="Email" required>
                    <span class="error" id="XsemailError"></span>
                    <!--Subject-->
                    <input class="form__subject--xs" type="text" id="subjectXs" name="subject" placeholder="Subject" required>
                    <span class="error" id="XssubjectError"></span>
                    <!--Message-->
                    <textarea class="form__message--xs" id="messageXs" name="message" rows="5" placeholder="Message..." required></textarea>
                    <span class="error" id="XsmessageError"></span>
                    <!--Submit Button-->
                    <button class="form__submit--xs" type="submit">Submit</button>
                </form>

                    <div id="successModal" class="modal" style="display: none;">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <p id="modalMessage"></p>
                        </div>
                    </div>
                <!---------------------------------------------------------------Scroll Snap Bottom--xs-->
                <div class="contact__scroll">
                    <a href="#hero"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 17-4-4-4 4m8-6-4-4-4 4"/>
                      </svg>
                      </a><br>
                    <span>Back To Top</span>
                </div> 
            </div> 
        </div>
    </div>


<!--------------------------------------------------------------------------------------------------------------------------------------->
<!---------------------------------------------------------------------------------------------------------------------xs-Container-End-->
<!--------------------------------------------------------------------------------------------------------------------------------------->


<!--------------------------------------------------------------------------------------------------------------------------------------->
<!----------------------------------------------------md-Container-Start----------------------------------------------------------------->
<!--------------------------------------------------------------------------------------------------------------------------------------->

    

    <!---------------------------Grid Container--md-->
    <div class="grid__container--md">
        
        <!---------------------------Side Menu-->
        <div class="menu__container">

            <!-----------------------------------------------Side Menu Logo-->
            <div class="menu__logo">
                <a href="/index.html"><span>MD</span></a>
            </div>

           
        
             <!------------------------------------------------------------Side Menu Links-->
            <ul class="menu__links">
                <li><a href="about-me.html"><span>About Me</span></a></li>
                <li><a href="index.html#projects"><span>My Portfolio</span></a></li>
                <li><a href="coding-examples.html"><span>Coding Examples</span></a></li>
                <li><a href="scs-scheme.html"><span>SCS Scheme</span></a></li>
                <li><a href="index.html#contact"><span>Contact Me</span></a></li>
            </ul>

            <!-----------------------------------------------------------------------------------------------------Side Menu Socials-->
            <div class="menu__socials">
                <a href="https://www.linkedin.com/in/matt-dean-29263055/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/MattJDean"><i class="fa-brands fa-github"></i></a>
                <a href="https://mattdean.tech/"><i class="fa-solid fa-globe"></i></a>
            </div>
        </div>


        <!----------------------------------------------------------------Hero Section-->
        <div id="heroSectionLarge" class="hero__container--md hero">
            <div class="hero__background--md"></div>
            <div class="hero__text-wrapper--md">
                <div class="hero__text--h1"><h1 id="heroTextTop">Matt Dean.</h1></div>
                <div class="hero__text--h2"><h2 id="typedTextMd"></h2></div>
            </div>
            
        </div>

        <!--------------------------------------Projects Section-->
        <div id="projects" class="project__container--md">
            <div class="project__background--md"></div>
            <h3><span>My Projects</span></h3> 

            <a href="https://matthew-dean.netmatters-scs.co.uk/Netmatters-Homepage" class="project__card--1" target="_blank" rel="noopener noreferrer" aria-label="Navigate to project"><span>Netmatters Homepage</span></a>
            <a href="https://js-array.matthew-dean.netmatters-scs.co.uk/" class="project__card--2" target="_blank" rel="noopener noreferrer" aria-label="Navigate to project"><span>ImageVault</span></a>
            <div class="project__card--3"><span>Coming Soon</span></div>
            <div class="project__card--4"><span>Coming Soon</span></div>
            <div class="project__card--5"><span>Coming Soon</span></div>
            <div class="project__card--6"><span>Coming Soon</span></div>
            <div class="project__card--7"><span>Coming Soon</span></div>
            <div class="project__card--8"><span>Coming Soon</span></div>
            <div class="project__card--9"><span>Coming Soon</span></div>
           
            
        </div>
        <!-----------------------------------------------------------------------------------------------------------------------------------Contact Section-->
        <div id="contact" class="contact__container--md">

            

            <div class="contact__header--md"><h2><span>Lets Connect...</span></h2></div>

            <span class="contact__phone--md"><a href="tel:+447368938360"><i class="fa-solid fa-mobile-retro"></i></a>  +44(0)7368 938360</span>

            <span class="contact__email--md"><a  href="mailto:matt@mattdean.tech"><i class="fa-solid fa-envelope"></i></a>  matt@mattdean.tech</span>
            
            <div class="contact__form--md">
                <form class="form" id="contactFormMd" action="submit_contact.php" method="post">
                    <p><?php echo $message; ?></p>
                    
                    <input class="form__firstname--md" type="text" id="first_name" name="firstName" placeholder="First Name" required>
                    <span class="error" id="mdfirstNameError"></span>
                    
                    <input class="form__lastname--md" type="text" id="last_name" name="lastName" placeholder="Last Name" required>
                    <span class="error" id="mdlastNameError"></span>
                    
                    <input class="form__email--md" type="email" id="email" name="email" placeholder="Email" required>
                    <span class="error" id="mdemailError"></span>
                    
                    <input class="form__subject--md" type="text" id="subject" name="subject" placeholder="Subject" required>
                    <span class="error" id="mdsubjectError"></span>
                    
                    <textarea class="form__message--md" id="message" name="message" rows="5" placeholder="Message..." required></textarea>
                    <span class="error" id="mdmessageError"></span>

                    <button class="form__submit--md" type="submit">Submit</button>
                </form>
            </div>    
                    <div id="successModal" class="modal" style="display: none;">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <p id="modalMessage"></p>
                        </div>
                    </div>

        </div>
    </div> 

<!-------------------------------------------------------------------------------------------------------------------------------------------------------------->
<!--------------------------------------------------------------------------------------------------------------------------------------------md-Container-End-->
<!-------------------------------------------------------------------------------------------------------------------------------------------------------------->

    <!--------------------------------------------------------Footer Licence-->     
    <footer>
        &copy; 2024 Matt Dean.
    </footer> 
   

    <script src="js/main.js"></script>
    <script src="js/formValidation.js"></script>

  </body>
    
</html>
