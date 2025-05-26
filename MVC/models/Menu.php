<?php 
namespace Models;

use MVC\Router;
use MVC\Autorizaciones;

class Menu {

    static $menu = [
        ["nombre" => "Inicio", "href" => "/", "id" => ""],
        ["nombre" => "Tienda", "href" => "/tienda", "id" => ""],
        ["nombre" => "Contacto", "href" => "/contacto", "id" => ""]
    ];

    static $login = ["nombre" => "Iniciar Sesión", "href" => "/login", "id" => ""];
    static $perfil = ["nombre" => "Mi Cuenta", "href" => "/perfil", "id" => ""];
    static $carrito = ["nombre" => "Carrito", "href" => "#", "id" => "ver-carrito"];

    private static function menuTexto($datos, $pagina) {
        // $boton = '<li><a id="' . $datos["id"] . '" ';
        // $boton = $boton . 'class="' . (($pagina == $datos["href"])?"seleccionado":"" . '" ';
        // $boton = $boton . 'href="' . $datos["href"] . '">';
        // $boton = $boton . $datos["nombre"];
        // $boton = $boton . '</a></li>';

        return '<li><a id="' . $datos["id"] . '" class="' . (($pagina == $datos["href"])?"seleccionado":"") . '" href="' . $datos["href"] . '">' . $datos["nombre"] . '</a></li>';
    }

    private static function menuFoto($datos, $pagina) {
        return '<li><a id="' . $datos["id"] . '" class="' . (($pagina == $datos["href"])?"seleccionado":"") . '" href="' . $datos["href"] . '"><img src="img/avatares/' . $datos["nombre"] . '"></a></li>';
    }

    public static function generar($usuario = null) {
        $pagina = Router::$urlActual;
        $navegacion = '';

        foreach(self::$menu as $datos) {
            $navegacion = $navegacion . self::menuTexto($datos, $pagina);
        }

        $logeado = Autorizaciones::checkLogeado();
        if($logeado) {

            if($logeado['foto'] != 'youngpeople.png'){
                self::$perfil['nombre'] = $logeado['foto'];
                $navegacion .= self::menuFoto(self::$perfil, $pagina);
            } else {
                if($logeado['nombre'] != ''){
                    self::$perfil['nombre'] = $logeado['nombre'];
                }
                $navegacion .= self::menuTexto(self::$perfil, $pagina);
            }
            
            if(($pagina == '/tienda')&&($logeado['role']==1)) {
                $navegacion .= self::menuTexto(self::$carrito, $pagina);
            }
        } else {
            $navegacion .= self::menuTexto(self::$login, $pagina);
        }
        

        return $navegacion;
    }



















}


?>