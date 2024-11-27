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
  
    <!-- Grid Container--xs -->
    <div class="grid__container--xs">

        <!-- Burger Menu -->
        <?php include 'includes/burger-menu.php';?>

        <!-- Hero Section--xs -->
        <?php include 'includes/hero-xs.php';?>

        <!-- Projects Section -->
        <?php include 'includes/projects-xs.php';?>
             
        <!-- Contact Section -->
        <?php include 'includes/contact.php';?>

    </div>


    <!-- Grid Container--md -->
    <div class="grid__container--md">
        
        <!-- Side Menu -->
        <?php include 'includes/side-menu.php';?>

        <!-- Hero Section -->
        <?php include 'includes/hero-md.php';?>

        <!-- Projects Section -->
        <?php include 'includes/projects-md.php';?>

        <!-- Contact Section -->
        <?php include 'includes/contact.php';?>

    </div> 

    <!-- Footer -->     
    <?php include 'includes/footer.php';?>
   
    <script src="js/main.js"></script>
    
    <script src="js/formValidation.js" defer></script>

  </body>
    
</html>
