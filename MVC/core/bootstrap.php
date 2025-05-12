<?php 
// inicializacion de nuestro proyecto

// cargamos autoload.php para que gestione el uso de nuestras clases
require_once __DIR__ . '/../vendor/autoload.php';

//para cargar las variables de entorno
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../'); // le digo donde esta el .env, entonces tenemos que salir de core // createImmutable: va a crear un objeto
$dotenv->load(); // este metodo (load) ya no es estatico, con esto me convierte todo mi .env y convertirlo en variable de entorno

?>