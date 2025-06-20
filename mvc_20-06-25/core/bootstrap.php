<?php 

// cargamos autoload.php para que gestione el uso de nuestras clases

require_once __DIR__ . '/../vendor/autoload.php';

// cargar las variables de entorno
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

?>