<?php 
namespace Controllers;

use Models\Menu;
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
        $router->render('tienda', [
            'sesionkey' => Autorizaciones::getToken(),
            'pagina' => '/tienda',
            'navegacion' => Menu::generar(),
            'busqueda' => '<div class="div-busqueda"><label for="busqueda" id="buscar">&#x1F50D</label><input type="search" name="busqueda" id="busqueda" class="busqueda" placeholder="Buscar..."></div>',
            'scripts' => '<script defer src="js/scripts.php?s=tienda"></script>'
        ]);
    }


    public static function contacto() {
        // echo 'contacto';
        $cuerpo = "<h2>Prueba superada</h2><p>Correo de prueba enviado<p>";
        $asunto = "Correo de prueba";
        $destinatario = "competenciasdigitales55@gmail.com";

        $correo = new CorreoService();
        $enviado = $correo->enviarCorreo($destinatario, $asunto, $cuerpo);

        if($enviado){
            echo "Correo enviado correctamente por David";
            exit;
        } else {
            echo "Correo no enviado por David";
            exit;
        }
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

        $datosUsuarios = Autorizaciones::checkLogeado();
        if ($datosUsuarios === false) {
            header('Location: /');
            exit;
        }
        //echo 'perfil';
        $router->render('perfil', [
            'sesionkey' => Autorizaciones::getToken(),
            'pagina' => '/perfil',
            'navegacion' => Menu::generar(),
            'busqueda' => '',
            'scripts' => '<script defer src="js/scripts.php?s=perfil"></script>',
            'usuario' => $_SESSION['usuario']
        ]);
    }



}

?>