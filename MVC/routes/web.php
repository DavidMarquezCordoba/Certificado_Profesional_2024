<?php 

use Controllers\VistaController;
use MVC\Router;

$router = new Router();

$router->get('/', [VistaController::class, 'inicio']);
$router->get('/index.php', [VistaController::class, 'inicio']);
$router->get('/tienda', [VistaController::class, 'tienda']);
$router->get('/contacto', [VistaController::class, 'contacto']);
$router->get('/login', [VistaController::class, 'login']);

$router->comprobarRutas();

?>