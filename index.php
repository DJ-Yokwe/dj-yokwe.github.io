<?php

// Database connection parameters
$host = "localhost";
$port = "5432";
$dbname = "webTest";
$user = "postgres";
$password = "pass@word1";

// Connection to PostgreSQL using PDO
try {
    $dsn = "pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password";
    $pdo = new PDO($dsn);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Example query
$sql = "SELECT api_id FROM gpt_api";
$stmt = $pdo->query($sql);

// Fetching results
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    // Process each row
    //echo json_encode(['message' => "ID: " . $row['id'] . ", Name: " . $row['name'] . "<br>"]);
    echo json_encode(['message' => "test"]);
}

// Close the connection
$pdo = null;

?>
