<?php 

namespace Controllers;

use Models\Usuario;
use MVC\Autorizaciones;

class LoginController {


    public static function registro(){
        echo json_encode(['ok' => true, 'mensaje' => 'esto es una prueba de registro']);
    }


    public static function login(){

        // Autorizaciones::checkToken();

        $usuario = filter_var(trim($_POST['username'] ?? ''), FILTER_SANITIZE_EMAIL);
        $password = trim($_POST['password'] ?? '');

        header('Content-Type: application/json');

        if (empty($usuario) || empty($password)) {
            echo json_encode(['ok' => false, 'error' => 'Falta el usuario o contraseña']);
            return;
        }
        
        if (!filter_var($usuario, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(['ok' => false, 'error' => 'No es un correo válido']);
            return;
        }
        
        if(strlen($password < 8)){
            echo json_encode(['ok' => false, 'error' => 'Tu contraseña debe tener como mínimo 8 carácteres']);
            return;
        }
        
        $miUsuario = new Usuario($usuario);
        
        if ($miUsuario->existe() === false) {
            echo json_encode(['ok' => false, 'error' => 'Introduce un usuario correcto']);
            return;
        }
        
        $logueado = $miUsuario->verificaPassword($password);
        
        if(!$logueado){
            echo json_encode(['ok' => false, 'error' => 'Usuario no logueado']);
            return;
            
        }
        
        echo json_encode(['ok' => true, 'mensaje' => 'Usuario logueado correctamente']);

    }



}

?>