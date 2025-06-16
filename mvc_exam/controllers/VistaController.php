<?php 
namespace Controllers;

use Models\Menu;
use Models\Productos;
use MVC\Autorizaciones;
use MVC\Router;
use Services\CorreoService;

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
        $datosUsuario = Autorizaciones::checkLogeado();
        $scripts = ((isset($datosUsuario['role']))&&($datosUsuario['role'] == 2))?'<script defer src="js/scripts.php?s=tienda_edicion"></script>'
                                                :'<script defer src="js/scripts.php?s=tienda_detalle"></script>';
        $scripts .= '<script defer src="js/scripts.php?s=tienda"></script>';
        $botonCarrito = (!$datosUsuario)?'Inicia Sesión primero':'Añadir al carrito';
        $categorias = Productos::buscaCategoria();
        $generos = Productos::buscaGenero();
        $router->render('tienda', [
            'sesionkey' => Autorizaciones::getToken(),
            'pagina' => '/tienda',
            'navegacion' => Menu::generar(),
            'busqueda' => '<div class="div-busqueda"><label for="busqueda" id="buscar">&#x1F50D</label><input type="search" name="busqueda" id="busqueda" class="busqueda" placeholder="Buscar..."></div>',
            'scripts' => $scripts,
            'botonCarrito' => $botonCarrito,
            'role' => $datosUsuario['role'],
            'categorias' => $categorias,
            'generos' => $generos
        ]);
    }
    public static function contacto(Router $router) {
        //echo 'contacto';
        // $cuerpo = "<h2>Prueba superada</h2><p>Correo de prueba enviado</p>";
        // $asunto = "Correo de prueba";
        // $destinatario = "competenciasdigitales55@gmail.com";

        // $correo = new CorreoService();
        // $enviado = $correo->enviarCorreo($destinatario, $asunto, $cuerpo);
        // if($enviado){
        //     echo "Correo enviado correctamente";
        //     exit;
        // } else {
        //     echo "Correo NO enviado";
        //     exit;
        // }
        $router->render('formulario', [
            'sesionkey' => Autorizaciones::getToken(),
            'pagina' => '/contacto',
            'navegacion' => Menu::generar(),
            'busqueda' => '',
            'scripts' => '<script defer src="js/scripts.php?s=formulario"></script>'
        ]);        

    }
    public static function login(Router $router) {
        //echo 'login';
        $router->render('login', [
            'sesionkey' => Autorizaciones::getToken(),
            'pagina' => '/login',
            'navegacion' => Menu::generar(),
            'busqueda' => '',
            'scripts' => '<script defer src="js/scripts.php?s=loginRegistro"></script>'
        ]);
    }
    public static function perfil(Router $router) {
        $datosUsuario = Autorizaciones::checkLogeado();
        if($datosUsuario === false) {
            header('Location: /');
            exit;
        }

        if(!file_exists(__DIR__ . '/../public/img/avatares/' . $datosUsuario['foto'])){
            $datosUsuario['foto'] = 'youngpeople.png';
        }

        //echo 'perfil';
        $router->render('perfil', [
            'sesionkey' => Autorizaciones::getToken(),
            'pagina' => '/perfil',
            'navegacion' => Menu::generar(),
            'busqueda' => '',
            'scripts' => '<script defer src="js/scripts.php?s=perfil"></script>',
            'usuario' => $datosUsuario
        ]);
    }




}

?>