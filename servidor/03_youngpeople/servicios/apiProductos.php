<?php 
    session_start();

    // Protegemos la API
    if ((isset($_GET['k'])) && (($_GET['k'] == $_SESSION['key']))) {
        header('Content-Type: application/json');   // Esto es la cabecera que nos envia el servidor y nos avisa que lo que vamos a recibir es un JSON
        $productosJSON = file_get_contents("../json/productos.json"); // cargamos el archivo JSON
        $productos = [];    // Creamos un array vacío para los productos
        if(json_validate($productosJSON)){  // Si el archivo leido es un JSON válido lo decodificamos y lo mentemos en nuestra variable
            $productos = json_decode($productosJSON, true); // El true era para tener en cuenta los array asociativos
        }
        $filtro = isset($_GET['buscar']) ? strtolower($_GET['buscar']) : ''; // $filtro será el valor de $_GET['buscar'] si existe, sino será un strin vacío ''
        $resultado = array_filter($productos, function($producto) use ($filtro) { // Aquí filtramos de nuestro array de $productos usando la varible $filtro - use ($filtro) - es para incorporar la variable global $filtro dentro de la función
            return empty($filtro)   || (strpos(strtolower($producto['nombre']), $filtro) !== false)
                                    || (strpos(strtolower($producto['categoria']), $filtro) !== false)
                                    || (strpos(strtolower($producto['genero']), $filtro) !== false)
                                    || (strpos(strtolower($producto['descripcion']), $filtro) !== false);
            // la función se ejecuta una vez por cada elemento del array $productos, si devuelve true, ese producto se incorpora al array $resultado, sino no.
        }); // Recordad que la función array_filter devuelve un array asociativo donde la key es el indice que tenía en el array $productos el valor introducido en $resultado 
        // echo json_encode($resultado); // Aquí se convierte el array a string y se envia con un echo
        echo json_encode(array_values($resultado)); // Aquí array_values extrae solamente los valores del array asociativo $resultado, por lo que lo convierte en un array enumerativo ( el normal )    
    }
?>