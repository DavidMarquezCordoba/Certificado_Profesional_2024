<?php 

use Controllers\VistaController;
use MVC\Router;

$router = new Router();

$router->crearRutaGET('/', [VistaController::class, 'inicio']);
$router->crearRutaGET('/index.php', [VistaController::class, 'inicio']);
$router->crearRutaGET('/tienda', [VistaController::class, 'tienda']);
$router->crearRutaGET('/contacto', [VistaController::class, 'contacto']);
$router->crearRutaGET('/login', [VistaController::class, 'login']);
$router->crearRutaGET('/perfil', [VistaController::class, 'perfil']);

$router->comprobarRutas();

?>
