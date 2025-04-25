<?php 

namespace MVC;

class Autorizaciones {

    public static function iniciarSesionPHP(){

        if (session_status() == PHP_SESSION_NONE) { //Si no está abierta la sesión PHP, la abre
            session_start();

            // Evitamos que nos copien el id de sesión porque se cambia si hace más de 1h (3600s) que refrescamos
            if(isset($_SESSION['time']) && (time()-$_SESSION['time'] > 3600)){
                session_regenerate_id();
                $_SESSION['time'] = time();
            }
            
            // La doble interrogación es un "ternario" que cuando la comparación es igual a la pregunta se pone los '' vacios
            $ruta = $_SERVER['REQUEST_URI'] ?? '';
    
            if((!str_starts_with($ruta, '/api')) && ($ruta != '/favicon.ico')){
                $_SESSION['key'] = bin2hex((random_bytes(32))); //Generar una key aleatoria
            }
        }
    }


    public static function getToken(){
        return $_SESSION['key'];
    }

    // Comprueba si el usuario está logueado

    public static function checkLogeado() {
        self::iniciarSesionPHP();

        if(!isset($_SESSION['usuario'])){
            return false;
        }

        return $_SESSION['usuario'];
    }

    // Comprobar el token

    public static function checkToken() {
        self::iniciarSesionPHP();

        $headers = getallheaders();
        $token = $headers['token'] ?? null;

        if(!isset($_SESSION['key']) || $_SESSION['key'] != $token){
            http_response_code(403);
            echo json_encode(['ok' => false, 'error' => 'Sin permiso']);
            exit;
        }
    }















}

?>