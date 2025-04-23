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
            call_user_func($this->getRoutes['/'], $this); //Nos redirige a la página principal
            // echo 'página no encontrada';
        }
    }

    public function render($view, $datos = []){

        // Leer los datos que nos envían
        foreach ($datos as $key => $value) {
            // doble dollar, 
            $$key = $value;
        }

        // ob_ se guarda en memoria, no se ejecutaría
        ob_start();
        include_once __DIR__ . "/../views/$view.php";

        $contenido = ob_get_clean();


        include_once __DIR__ . '/../views/layaout.php';
    }
}


?>