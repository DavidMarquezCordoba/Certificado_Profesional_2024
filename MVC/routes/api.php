<?php 

use Controllers\ProductosController;
use Controllers\LoginController;
use MVC\Router;

$router = new Router();

$router->get('/api/productos', [ProductosController::class, 'productos']);

$router->post('/api/login', [LoginController::class, 'login']);

$router->post('/api/registro', [LoginController::class, 'registro']);

$router->post('/api/logout', [LoginController::class, 'logout']);


$router->comprobarRutas();

?>