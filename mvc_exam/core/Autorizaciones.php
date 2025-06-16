<?php 

namespace MVC;

class Autorizaciones {
    static $rutas = 'vacio';
    public static function iniciarSesionPHP() {

        if(session_status() === PHP_SESSION_NONE) { // si no está abierta la sesion PHP, la abrimos
            session_start();

            // Evitamos que nos copien el id de sesión porque se cambia cada hora
            if(isset($_SESSION['time']) && (time()-$_SESSION['time'] > 3600)){
                session_regenerate_id();
                $_SESSION['time'] = time();
            }

            $ruta = $_SERVER['REQUEST_URI'] ?? '';

            $archivoSalida = __DIR__ . "/rutas.txt";
            $contenido = file_get_contents($archivoSalida);
            if((!str_starts_with($ruta, '/api'))&&(!str_contains($ruta,'.'))){
                $_SESSION['key'] = bin2hex(random_bytes(32)); // generar una key aleatoria de 64 caracteres
                // if (($gestorSalida = fopen($archivoSalida, "w")) !== FALSE) {
                //     fputs($gestorSalida, $contenido . ' - ' . $ruta);
                //     fclose($gestorSalida);
                // }
            }

        }

    }

    public static function getToken(){
        self::iniciarSesionPHP();
        return $_SESSION['key'];
    }

    public static function checkLogeado() {
        self::iniciarSesionPHP();

        if(!isset($_SESSION['usuario'])) {
            return false;
        }
        return $_SESSION['usuario'];
    }

    public static function checkToken() {
        self::iniciarSesionPHP();

        $headers = getallheaders();
        $token = $headers['token'] ?? null;

        if(!isset($_SESSION['key']) || $_SESSION['key'] != $token){
            http_response_code(403);
            header('Content-Type: application/json');
            echo json_encode(['ok' => false, 'error' => 'Sin Permiso']);
            // echo json_encode(['ok' => false, 'error' => self::$rutas]);
            // echo $_SESSION['key'];
            // echo $token;
            
            exit;
        }
    }

}


?>