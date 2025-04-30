<?php 

namespace Controllers;

use MVC\Autorizaciones;
use Models\Productos;

class ProductosController {
    public static function productos(){

        // Autorizaciones::checkToken();

        $lang = 'es';
        
        header('Content-Type: application/json'); //estamos avisando que al que reciba nuestra respuesta es un json

        $archivoProductos = '../json/productos.json';

        $listaProductos = new Productos(); //creo una variable como instancia de la clase productos, y le mandamos el archivo
        
        $resultado = [];

        if(isset($_GET['buscar'])){
            $resultado = $listaProductos->buscarPorNombre(htmlentities($_GET['buscar']), $lang); //llamamos a un metodo (buscarPorNombre)...
        } else if(isset($_GET['detalles'])){
            $resultado = $listaProductos->buscarPorCodigoBarras(htmlentities($_GET['detalles']), $lang);
        } else {
            $resultado = $listaProductos->obtenerProductos($lang);
        }
        echo $resultado;
    }
}

?>