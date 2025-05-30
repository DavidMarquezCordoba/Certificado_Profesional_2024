<?php 

namespace Models;

use MVC\Router;
use MVC\Autorizaciones;

class Menu {

    static $menu = [
        ["nombre" => "Inicio", "href" => "/", "id" => ""],
        ["nombre" => "Tienda", "href" => "/tienda", "id" => ""],
        ["nombre" => "Contacto", "href" => "/contacto", "id" => ""],
    ];

    static $login = ["nombre" => "Iniciar Sesión", "href" => "/login", "id" => ""];
    static $perfil = ["nombre" => "Mi cuenta", "href" => "/perfil", "id" => ""];
    static $carrito = ["nombre" => "Carrito", "href" => "#", "id" => "ver-carrito"];


    private static function menuTexto($datos, $pagina) {

        return '<li><a id="' . $datos["id"] . '" class= "' . (($pagina == $datos["href"])? "seleccionado" : "") . '" href = "' . $datos["href"] . '">' . $datos["nombre"] . '</a></li>';
    }


    private static function menuFoto($datos, $pagina) {

        return '<li><a id="' . $datos["id"] . '" class= "' . (($pagina == $datos["href"])? "seleccionado" : "") . '" href = "' . $datos["href"] . '"> <img src="img/avatares/' . $datos["nombre"] . '"> </a></li>';
    }


    public static function generar($usuario = null){
        $pagina = Router::$urlActual;
        $navegacion = '';

        foreach (self::$menu as $datos) {
            $navegacion = $navegacion . self::menuTexto($datos, $pagina);
        }

        $logeado = Autorizaciones::checkLogeado();
        $logeado = true;

        if ($logeado) {
            $navegacion .= self::menuTexto(self::$perfil, $pagina);
        } else {
            $navegacion .= self::menuTexto(self::$perfil, $pagina);
        }
        
        if($pagina == '/tienda'){
            $navegacion .= self::menuTexto(self::$carrito, $pagina);
        }



        return $navegacion;
    }





}



?>