<?php
// test_submit_contact.php

// URL of the submit_contact.php file
$url = 'http://localhost/netmattersportfolio/submit_contact.php'; 

// Data to send in the POST request
$data = [
    'firstName' => 'Test',
    'lastName' => 'User',
    'email' => 'test.user@example.com',
    'subject' => 'Test Subject',
    'message' => 'This is a test message.'
];

// Use cURL to send a POST request
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the request
$response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    echo 'cURL Error: ' . curl_error($ch);
} else {
    // Output the response from submit_contact.php
    echo "Response from server: \n";
    echo $response;
}

// Close the cURL session
curl_close($ch);
