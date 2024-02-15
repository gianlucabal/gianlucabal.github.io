<?php
$file = "saved_data.json";

// Legge i dati dal file
$data = json_decode(file_get_contents($file));

// Ritorna i dati come JSON
echo json_encode($data);
?>
