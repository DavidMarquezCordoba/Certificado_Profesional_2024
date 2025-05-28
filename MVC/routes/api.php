<?php 

use Controllers\ProductosController;
use Controllers\LoginController;
use Controllers\FormularioController;
use Controllers\PedidoController;
use Controllers\UserController;
use MVC\Router;

$router = new Router();

$router->crearRutaGET('/api/productos', [ProductosController::class, 'productos']);
$router->crearRutaGET('/api/pedido', [PedidoController::class, 'agregarProducto']);
$router->crearRutaGET('/api/productos/categorias', [ProductosController::class, 'todasCategorias']);
$router->crearRutaGET('/api/productos/generos', [ProductosController::class, 'todosGeneros']);

$router->crearRutaPOST('/api/productos/editar', [ProductosController::class, 'editar']);
$router->crearRutaPOST('/api/login', [LoginController::class, 'login']);
$router->crearRutaPOST('/api/registro', [LoginController::class, 'registro']);
$router->crearRutaPOST('/api/logout', [LoginController::class, 'logout']);
$router->crearRutaPOST('/api/info', [FormularioController::class, 'info']);
$router->crearRutaPOST('/api/update', [UserController::class, 'update']);


$router->comprobarRutas();

?>