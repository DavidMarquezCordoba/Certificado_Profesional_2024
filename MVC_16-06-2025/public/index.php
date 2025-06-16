<?php 

require_once __DIR__ . '/../core/bootstrap.php';

$ruta = $_SERVER['REQUEST_URI'];

// echo $ruta;

if(str_starts_with($ruta, '/api')) {
    require_once __DIR__ . '/../routes/api.php';
} else {
    require_once __DIR__ . '/../routes/web.php';
}

?>