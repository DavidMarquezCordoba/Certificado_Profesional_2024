<?php 

use Controllers\ProductosController;
use Controllers\LoginController;
use Controllers\FormularioController;
use Controllers\UserController;

use MVC\Router;

$router = new Router();

$router->crearRutaGET('/api/productos', [ProductosController::class, 'productos']);

$router->crearRutaPOST('/api/login', [LoginController::class, 'login']);
$router->crearRutaPOST('/api/registro', [LoginController::class, 'registro']);
$router->crearRutaPOST('/api/logout', [LoginController::class, 'logout']);

$router->crearRutaPOST('/api/info', [FormularioController::class, 'info']);
$router->crearRutaPOST('/api/update', [UserController::class, 'update']);

$router->comprobarRutas();

?>