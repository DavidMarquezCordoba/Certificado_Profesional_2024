<?php

use Controllers\LoginController;
use Controllers\ProductosController;
use MVC\Router;

$router = new Router();

$router->get('/api/productos', [ProductosController::class, 'productos']);
$router->post('/api/login', [LoginController::class, 'login']);
$router->post('/api/registro', [LoginController::class, 'registro']);


$router->comprobarRutas();

?>