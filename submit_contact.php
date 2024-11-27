<?php
// submit_contact.php

// Database credentials
$host = 'localhost';
$db   = 'portfolio_db';
$user = 'root';
$pass = '';

// Set content type to JSON
header('Content-Type: application/json');

// Initialize an array to hold errors
$errors = [];

// Function to sanitize input data
function sanitize_input($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Get and sanitize POST data
$firstName = isset($_POST['firstName']) ? sanitize_input($_POST['firstName']) : '';
$lastName  = isset($_POST['lastName'])  ? sanitize_input($_POST['lastName'])  : '';
$email     = isset($_POST['email'])     ? sanitize_input($_POST['email'])     : '';
$subject   = isset($_POST['subject'])   ? sanitize_input($_POST['subject'])   : '';
$message   = isset($_POST['message'])   ? sanitize_input($_POST['message'])   : '';

// Server-side validation

// Validate first name
if (empty($firstName)) {
    $errors['firstName'] = 'First name is required.';
}

// Validate last name
if (empty($lastName)) {
    $errors['lastName'] = 'Last name is required.';
}

// Validate email
if (empty($email)) {
    $errors['email'] = 'Email is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address.';
}

// Validate subject
if (empty($subject)) {
    $errors['subject'] = 'Subject is required.';
}

// Validate message
if (empty($message)) {
    $errors['message'] = 'Message is required.';
}

// Check if there are validation errors
if (!empty($errors)) {
    // Return errors as JSON
    echo json_encode([
        'success' => false,
        'errors' => $errors
    ]);
    exit;
}

// Try to connect to the database
try {
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
    $pdo = new PDO($dsn, $user, $pass);

    // Set PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare SQL statement
    $stmt = $pdo->prepare("INSERT INTO contacts (first_name, last_name, email, subject, message) VALUES (:first_name, :last_name, :email, :subject, :message)");

    // Bind parameters
    $stmt->bindParam(':first_name', $firstName);
    $stmt->bindParam(':last_name',  $lastName);
    $stmt->bindParam(':email',      $email);
    $stmt->bindParam(':subject',    $subject);
    $stmt->bindParam(':message',    $message);

    // Execute the statement
    $stmt->execute();

    // Return success message as JSON
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully.'
    ]);

} catch (PDOException $e) {
    // Handle database connection errors
    
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred while processing your request. Please try again later.'
    ]);
}
?>
