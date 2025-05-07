<?php 

// añadir columna a tabla clientes
// foto    | varchar(255) | NO   |     | youngpeople.png
// ALTER TABLE clientes ADD foto VARCHAR(255) NOT NULL DEFAULT 'yoiungpeople.png';

namespace Controllers;

use Models\Usuario;
use MVC\Autorizaciones;

require_once __DIR__ . '/../core/helpers.php';

class LoginController {

    public static function registro() {
        mensajeOk('esto es una prueba de registro');
    }

    public static function login() {
        // Autorizaciones::checkToken(); // si el token no existe, o no coincide con mi sesion key, aqui se terminaria porque en checkToken tengo un "exit"
        
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

        mensajeOk('Usuario logeado correctamente');
        
    }

    public static function logout(){

        Autorizaciones::checkToken();

        session_destroy(); //Destruimos la sesión PHP
        $_SESSION = [];    //Dejarlas vacías, limpiando nuestro array de variables de sesión

        //Borramos la cookie de id de nuestro navegador
        $parametrosCookie = session_get_cookie_params();
        setcookie(session_name(), '', time() - 5000, 
            $parametrosCookie['path'], $parametrosCookie['domain'],
            $parametrosCookie['secure'], $parametrosCookie['httponly']
        );

        mensajeOk('Sesión cerrada correctamente');
    }




}


?>