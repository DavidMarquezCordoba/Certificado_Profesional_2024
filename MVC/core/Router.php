<?php 

// Clase que creará las vistas


namespace MVC;

class Router {

    public array $getRoutes = [];
    public array $postRoutes = [];

    public function get($url, $fn) {
        $this-> getRoutes[$url] = $fn;
    }

    public function post($url, $fn) {
        $this-> postRoutes[$url] = $fn;
    }

    public function comprobarRutas(){
        $urlActual = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $metodo = $_SERVER['REQUEST_METHOD'];

        if($metodo === 'GET') {
            $fn = $this->getRoutes[$urlActual] ?? null;
        } else {
            $fn = $this->postRoutes[$urlActual] ?? null;
        }

        if ($fn) {
            call_user_func($fn, $this);
        } else {
            call_user_func('inicio', $this);
            // echo 'página no encontrada';
        }
    }

    public function render($view, $datos = []){

    }
}


?>