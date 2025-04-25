<?php 

namespace Controllers;

use MVC\Router;

class VistaController{

    
    public static function inicio(Router $router) {
        // echo 'inicio';
        $router->render('inicio', [
            'sesionkey' => $_SESSION['key'],
            'pagina' => '/',
            'navegacion' => '',
            'busqueda' => '',
            'scripts' => ''
        ]);
    }

    public static function tienda() {
        echo 'tienda';
    }

    public static function contacto() {
        echo 'contacto';
    }

    public static function login() {
        echo 'login';
    }

}

?>