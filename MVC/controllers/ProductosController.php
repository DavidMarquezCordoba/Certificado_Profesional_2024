<?php 
namespace Controllers;

use MVC\Autorizaciones;
use Models\Productos;

class ProductosController {

    public static function productos() {

        Autorizaciones::checkToken();
        
        $lang = 'es';

        header('Content-Type: application/json');

        $listaProductos = new Productos();
        $resultado = [];

        if(isset($_GET['buscar'])){
            $resultado = $listaProductos->buscarPorNombre(htmlentities($_GET['buscar']), $lang);
        } else if(isset($_GET['detalles'])){
            $resultado = $listaProductos->buscarPorCodigoBarras(htmlentities($_GET['detalles']), $lang);
        } else {
            $resultado = $listaProductos->obtenerProductos($lang);
        }
        echo $resultado;


    }


}

?>