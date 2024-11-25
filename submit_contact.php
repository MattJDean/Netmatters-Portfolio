<?php
header('Content-Type: application/json');

$host = 'localhost';
$db = 'portfolio_db';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Database connection failed: " . $e->getMessage()]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $messageBody = htmlspecialchars($_POST['message']);

    if (!empty($firstName) && !empty($lastName) && !empty($email) && !empty($subject) && !empty($messageBody)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $sql = "INSERT INTO contacts (first_name, last_name, email, subject, message) 
                    VALUES (:firstName, :lastName, :email, :subject, :message)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':firstName' => $firstName,
                ':lastName' => $lastName,
                ':email' => $email,
                ':subject' => $subject,
                ':message' => $messageBody
            ]);
            echo json_encode(["success" => true, "message" => "Your message has been submitted successfully!"]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid email format."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "All fields are required."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
}
exit;
?>
