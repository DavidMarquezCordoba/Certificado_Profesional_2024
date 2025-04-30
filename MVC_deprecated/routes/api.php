<?php 
use Controllers\ProductosController;
use MVC\Router;

$router = new Router();

$router->get('/api/productos', [ProductosController::class, 'productos']);


$router->comprobarRutas();
?>