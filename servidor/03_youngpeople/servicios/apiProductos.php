<?php 
    header('Content-Type: application/json');
    $productosJSON = file_get_contents("../json/productos.json");
    $productos = [];

    if (json_validate($productosJSON)) { //json_validate -> comprueba si se puede descodificar
        $productos = json_decode($productosJSON, true); //Si es descodificable, lo introduce en el array
    }

    //isset: si existe..
    //Si existe, convierte la búsqueda en minúscula de lo contrario, lo deja vacío
    $filtro = isset($_GET['buscar']) ? strtolower($_GET['buscar']) : '';

    $resultado = array_filter($productos, function($producto) use ($filtro){
        return empty($filtro) || (strpos(strtolower($producto['nombre']), $filtro) !== false);
    });
?>