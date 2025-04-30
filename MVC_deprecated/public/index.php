<?php 

require_once __DIR__ . '/../core/bootstrap.php';

// Diferencia entre URL y URI
// URL : Ruta completa
// URI : Ruta después del dominio, desde el propio archivo por ej. /tienda.php
$ruta = $_SERVER['REQUEST_URI'];

// echo $ruta;

if(str_starts_with($ruta, '/api')){
    require_once __DIR__ . '/../routes/api.php';
} else {
    require_once __DIR__ . '/../routes/web.php';
}


?>