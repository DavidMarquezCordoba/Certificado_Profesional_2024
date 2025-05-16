<?php 

// añadir columna a tabla clientes
// foto    | varchar(255) | NO   |     | youngpeople.png
// ALTER TABLE clientes ADD foto VARCHAR(255) NOT NULL DEFAULT 'yoiungpeople.png';

namespace Controllers;

use Models\Usuario;
use MVC\Autorizaciones;
use Services\CorreoService;

require_once __DIR__ . '/../core/helpers.php';

class LoginController {

    public static function registro() {
        // mensajeOK('esto es una prueba de registro');
        Autorizaciones::checkToken();

        $usuario = filter_var(trim($_POST['username'] ?? ''), FILTER_SANITIZE_EMAIL); // username: me fijo como se llama en el formulario // cualquier cosa que no puede contener un correo electronico lo elimina
        $password = trim($_POST['password'] ?? ''); // password: me fijo como se llama en el formulario
        $password2 = trim($_POST['password2'] ?? ''); // password: me fijo como se llama en el formulario
        
        header('Content-Type: application/json'); // lo que te llega es un json   

        if(empty($usuario) || empty($password) || EMPTY($password2)) {
            mensajeError('Faltan campos obligatorios');
        }

        if(!filter_var($usuario, FILTER_VALIDATE_EMAIL)) {
            mensajeError('No has introducido un email valido');
        }

        if((strlen($password) < 8) || (strlen($password2)) < 8) {
            mensajeError('Tu contraseña tiene que tener como minimo 8 caracteres');
        }
        
        if($password !== $password2){
            mensajeError("Las contraseñas no coinciden");
        }

        $miUsuario = new Usuario($usuario);

        if($miUsuario->existe() !== false) {
            mensajeError('El usuario existe, no puedes registrarlo otra vez');
        }

        $usuarioCreado = $miUsuario->crear($usuario, $password);

        if(!$usuarioCreado){
            mensajeError('No se ha podido crear el usuario');
        }

        // Enviar un correo de bienvenida al usuario
        $correo = new CorreoService();
        $enviado = $correo->enviarCorreo(
            $usuario,
            'Bienvenido a Young People',
            '<h1>Gracias por registrarse en Young People</h1><p>Tu cuenta fue creada correctamente y ya puedes comprar en nuestra tienda</p>'
        );

        if($enviado){
            mensajeOK('Usuario creado correctamente');
        } else {
            mensajeOK('Mensaje al enviar el correo');
        }
    }

    public static function login() {
        Autorizaciones::checkToken(); // si el token no existe, o no coincide con mi sesion key, aqui se terminaria porque en checkToken tengo un "exit"
        
        $usuario = filter_var(trim($_POST['username'] ?? ''), FILTER_SANITIZE_EMAIL); // username: me fijo como se llama en el formulario // cualquier cosa que no puede contener un correo electronico lo elimina
        $password = trim($_POST['password'] ?? ''); // password: me fijo como se llama en el formulario
        
        header('Content-Type: application/json'); // lo que te llega es un json        
        
        if(empty($usuario) || empty($password)) {
            mensajeError('Falta el usuario o la contraseña');
        }
        
        if(!filter_var($usuario, FILTER_VALIDATE_EMAIL)) {
            mensajeError('No has introducido un email valido');
        }

        if(strlen($password) < 8) {
            mensajeError('Tu contraseña tiene que tener como minimo 8 caracteres');
        }
        
        $miUsuario = new Usuario($usuario);

        if($miUsuario->existe() === false) {
            mensajeError('El usuario no existe, introduce el usuario correcto');
        }

        $logeado = $miUsuario->verificaPassword($password);

        if(!$logeado) {
            mensajeError('Contraseña no correcta');
        }

        mensajeOK('Usuario logeado correctamente');
        
    }

    public static function logout() {

        Autorizaciones::checkToken(); // si en mi fetch estoy enviando mikey...

        session_destroy(); // destruimos la sesion PHP 
        $_SESSION = []; // limpiamos nuestro array de variables de sesion

        // borramos las cookies:
        $parametrosCookie = session_get_cookie_params();
        setcookie(session_name(), '', time() - 5000, 
            $parametrosCookie['path'], $parametrosCookie['domain'],
            $parametrosCookie['secure'], $parametrosCookie['httponly'],
        );

        mensajeOK('Sesion cerrada correctamente');


    }





}
?>