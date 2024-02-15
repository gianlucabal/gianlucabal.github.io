<?php
$data = json_decode(file_get_contents("php://input"));

$file = "saved_data.json";

// Apre il file in modalità append e scrive i dati
file_put_contents($file, json_encode($data) . PHP_EOL, FILE_APPEND | LOCK_EX);

echo "Dati salvati con successo!";
?>
