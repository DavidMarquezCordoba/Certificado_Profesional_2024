<?php 
namespace Controllers;

use Models\Menu;
use MVC\Autorizaciones;
use MVC\Router;



class VistaController {

    public static function inicio(Router $router) {
        //echo 'inicio';
        $router->render('inicio', [
            'sesionkey' => Autorizaciones::getToken(),
            'pagina' => '/',
            'navegacion' => Menu::generar(),
            'busqueda' => '',
            'scripts' => ''
        ]);
    }
    public static function tienda(Router $router) {
        //echo 'tienda';
        $router->render('tienda', [
            'sesionkey' => Autorizaciones::getToken(),
            'pagina' => '/tienda',
            'navegacion' => Menu::generar(),
            'busqueda' => '<div class="div-busqueda"><label for="busqueda" id="buscar">&#x1F50D</label><input type="search" name="busqueda" id="busqueda" class="busqueda" placeholder="Buscar..."></div>',
            'scripts' => '<script defer src="js/scripts.php?s=tienda"></script>'
        ]);
    }


    public static function contacto() {
        echo 'contacto';
    }


    public static function login(Router $router) {
        // echo 'login';
        $router->render('login', [
            'sesionkey' => Autorizaciones::getToken(),
            'pagina' => '/login',
            'navegacion' => Menu::generar(),
            'busqueda' => '',
            'scripts' => '<script defer src="js/scripts.php?s=loginRegistro"></script>'
        ]);
    }



}

?>