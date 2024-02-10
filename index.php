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

echo json_encode(['message' => $stmt]);
// Fetching results
//while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    // Process each row
    //echo "ID: " . $row['id'] . ", Name: " . $row['name'] . "<br>";
//}

// Close the connection
$pdo = null;

?>
