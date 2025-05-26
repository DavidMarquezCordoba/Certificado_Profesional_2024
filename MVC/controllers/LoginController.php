<?php 
namespace Controllers;

use Models\Usuario;
use MVC\Autorizaciones;
use Services\CorreoService;

require_once __DIR__ . '/../core/helpers.php';

class LoginController {

    public static function registro() {
        //mensajeOK('esto es una prueba de registro');
        Autorizaciones::checkToken();

        $usuario = filter_var(trim($_POST['username'] ?? ''), FILTER_SANITIZE_EMAIL);
        $password = trim($_POST['password'] ?? '');
        $password2 = trim($_POST['password2'] ?? '');

        header('Content-Type: application/json');

        if(empty($usuario) || empty($password) || empty($password2)) {
            mensajeError('Faltan campos obligatorios');
        }
        
        if(!filter_var($usuario, FILTER_VALIDATE_EMAIL)) {
            mensajeError('No has introducido un Email válido');
        }

        if((strlen($password) < 8) || (strlen($password2) < 8)) {
            mensajeError('Las contraseñas tienen que tener como mínimo 8 carácteres');
        }

        if($password !== $password2) {
            mensajeError('Las contraseñas no coinciden');
        }

        $miUsuario = new Usuario($usuario);
        
        if($miUsuario->existe() !== false) {
            mensajeError('El usuario existe, no puedes registrarlo otra vez');
        }

        $usuarioCreado = $miUsuario->crear($usuario, $password);

        if(!$usuarioCreado){
            mensajeError('No se ha podido crear el usuario');
        }

        // Enviar un correo de bienvenida
        $correo = new CorreoService();
        $enviado = $correo->enviarCorreo(
            $usuario,
            'Bienvenido a YoungPeople',
            '<h1>Gracias por registrarse en YoungPeople</h1><p>Tu cuenta ya fue creada correctamente y ya puedes comprar en nuestra tienda.</p>'
        );

        if($enviado) {
            mensajeOK('Usuario creado correctamente');
        } else {
            mensajeOK('Error al enviar el correo');
        }

    }

    public static function login() {
        Autorizaciones::checkToken();

        $usuario = filter_var(trim($_POST['username'] ?? ''), FILTER_SANITIZE_EMAIL);
        $password = trim($_POST['password'] ?? '');
        
        header('Content-Type: application/json');

        if(empty($usuario) || empty($password)) {
            mensajeError('Falta el usuario o la contraseña');
        }
        
        if(!filter_var($usuario, FILTER_VALIDATE_EMAIL)) {
            mensajeError('No has introducido un Email válido');
        }
        
        if(strlen($password) < 8) {
            mensajeError('Tu contraseña tiene que tener como mínimo 8 carácteres');
        }
        
        $miUsuario = new Usuario($usuario);
        
        if($miUsuario->existe() === false) {
            mensajeError('El usuario no existe, introduce el usuario correcto');
        }
        
        $logeado = $miUsuario->verificaPassword($password);
        
        if(!$logeado) {
            mensajeError('Contraseña no correcta');
        }
        
        mensajeOK('Usuario Logeado correctamente');
        
    }

    public static function logout() {

        Autorizaciones::checkToken();

        session_destroy();  // destruimos la sesión PHP
        $_SESSION = [];     // Limpiamos nuestro array de variables de sesión

        // Borramos la cookie de id de sesión en nuestro navegador
        $parametrosCookie = session_get_cookie_params();
        setcookie(session_name(), '',time() - 5000,
            $parametrosCookie['path'], $parametrosCookie['domain'],
            $parametrosCookie['secure'], $parametrosCookie['httponly']
        );

        mensajeOK('sesión cerrada correctamente');
    }




}
?>