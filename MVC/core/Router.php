<?php 

namespace MVC;

class Router {

    public array $getRoutes = [];
    public array $postRoutes = [];
    public static $urlActual = '';

    public function get($url, $fn) {
        $this->getRoutes[$url] = $fn;
    }

    public function post($url, $fn) {
        $this->postRoutes[$url] = $fn;
    }

    public function comprobarRutas() {
        self::$urlActual = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);  // elimina de la ruta cualquier posible valor enviado por GET
        $metodo = $_SERVER['REQUEST_METHOD'];   // detectamos si nos envían algo por POST o no

        if($metodo === 'GET') {
            $fn = $this->getRoutes[self::$urlActual] ?? null;
        } else {
            $fn = $this->postRoutes[self::$urlActual] ?? null;
        }

        if($fn) {
            call_user_func($fn, $this);
        } else {
            // echo 'página no encontrada';
            call_user_func($this->getRoutes['/'], $this); // Nos redirige a la página principal
        }
    }

    public function render($view, $datos = []) {

        // Leer los datos que nos envian
        foreach ($datos as $key => $value) {
            $$key = $value;
        }
        ob_start();
        include_once __DIR__ . "/../views/$view.php";

        $contenido = ob_get_clean();
        include_once __DIR__ . '/../views/layout.php';
    }



}

?>