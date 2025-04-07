<?php 

    if(!isset($_SESSION)) {
        session_start();
    }

    $lang = $_SESSION['lang'];

    require_once '../clases/Productos.php';

    header('Content-Type: application/json');

    $archivoProducto = '../json/productos.json';

    $listaProductos = new Productos($archivoProductos);

    $resultado = [];

    if (isset($_GET['Buscar'])) {
        $resultado = $listaProductos -> buscarPorNombre(htmlentities($_GET['Buscar']), $lang);
    } else if (isset($_GET['detalles'])){
        $resultado = $listaProductos -> buscarPorCodigoBarras(htmlentities($_GET['detalles']), $lang);
    } else {
        $resultado = $listaProductos -> obtenerProductos($lang);
    }

    echo $resultado;

?>