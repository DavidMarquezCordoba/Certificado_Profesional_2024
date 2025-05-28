<?php 

// cuando me llega cualquier peticion, llega a los controladores ?
// a traves de index, nos vamos a api o web y de ahi creamos las rutas disponibles y comprobamos las rutas
// router es el que se encarga de llamar al controlador y ejecutar la funcion

namespace Controllers;

use Models\Menu;
use Models\Producto;
use Models\Productos;
use MVC\Autorizaciones;
use MVC\Router;
use Services\CorreoService;

class VistaController {

    public static function inicio(Router $router) {
        //echo 'inicio';
        $router->render('inicio', [ // todo lo que ponga como propiedades en el render, son variables en las vistas
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
        $scripts = ((isset($datosUsuario['role']))&&($datosUsuario['role'] == 2))?'<script defer src="js/scripts.php?s=tienda_edicion"></script>':'<script defer src="js/scripts.php?s=tienda_detalle"></script>';
        $scripts .= '<script defer src="js/scripts.php?s=tienda"></script>';
        
        $categorias = Productos::buscaCategoria();
        $generos = Productos::buscaGenero();

        $botonCarrito = (!$datosUsuario)?'Inicia Sesión primero':'Añadir al carrito';
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

        // $correo = new CorreoService(); // coge las variables de entorno y las mete en la variable llamada $config
        // $enviado = $correo->enviarCorreo($destinatario, $asunto, $cuerpo);
        // if($enviado) {
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
            'scripts' => '<script defer src="js/scripts.php?s=formulario"></script>',
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
        $datosUsuario = Autorizaciones::checkLogeado(); // usamos el checklogeado para coger los datos del usuario
        if($datosUsuario === false) { // me saca de la pagina de perfil si no estoy logeado
            header('Location: /');
            exit;
        }

        if (!file_exists(__DIR__ . '/../public/img/avatares/' . $datosUsuario['foto'])) {
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