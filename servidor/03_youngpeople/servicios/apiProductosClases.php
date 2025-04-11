<?php 
if(!isset($_SESSION)) session_start(); //si no existe, abre la sesion (evito que de error si cargue la sesion 2 veces)
$lang = 'es'; // $_SESSION['lang'];

require_once '../clases/Productos.php'; //tiene que ser .php porque sino el interprete de php ni lo mira

header('Content-Type: application/json'); //estamos avisando que al que reciba nuestra respuesta es un json
$archivoProductos = '../json/productos.json';
$listaProductos = new Productos(); //creo una variable como instancia de la clase productos, y no le mandamos nada
$resultado = [];

if(isset($_GET['buscar'])){
    $resultado = $listaProductos->buscarPorNombre(htmlentities($_GET['buscar']), $lang); //llamamos a un metodo (buscarPorNombre)...
} else if(isset($_GET['detalles'])){
    $resultado = $listaProductos->buscarPorCodigoBarras(htmlentities($_GET['detalles']), $lang);
} else {
    $resultado = $listaProductos->obtenerProductos($lang);
}
echo $resultado;
?>