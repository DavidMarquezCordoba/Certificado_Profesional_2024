<?php 
    session_start();

    $lang = $_SESSION['lang'];

    if((isset($_GET['k'])) && (($_GET['k'] == $_SESSION['key']))){
        header('Content-Type: application/json'); // Esto es la cabecera que nos envia el servidor y nos avisa que lo que vamos a recibir es un JSON
        $productosJSON = file_get_contents("../json/productos.json"); // cargamos el archivo JSON
        $productos = [];    // Creamos un array vacío para los productos
        if(json_validate($productosJSON)){  // Si el archivo leido es un JSON válido lo decodificamos y lo mentemos en nuestra variable
            $productos = json_decode($productosJSON, true); // El true era para tener en cuenta los array asociativos
        }
        $filtro = isset($_GET['buscar']) ? strtolower($_GET['buscar']) : ''; // $filtro será el valor de $_GET['buscar'] si existe, sino será un strin vacío ''
        $resultado = array_filter($productos, function($producto) use ($filtro, $lang) { // Aquí filtramos de nuestro array de $productos usando la varible $filtro - use ($filtro) - es para incorporar la variable global $filtro dentro de la función
            return empty($filtro)
                || (strpos(strtolower($producto['nombre'][$lang]), $filtro) !== false);
        //        || (strpos(strtolower($producto['categoria']), $filtro) !== false)
        //        || (strpos(strtolower($producto['genero']), $filtro) !== false)
        //        || (strpos(strtolower($producto['descripcion']), $filtro) !== false);
            // la función se ejecuta una vez por cada elemento del array $productos, si devuelve true, ese producto se incorpora al array $resultado, sino no.
        }); // Recordad que la función array_filter devuelve un array asociativo donde la key es el indice que tenía en el array $productos el valor introducido en $resultado 
        // echo json_encode($resultado); // Aquí se convierte el array a string y se envia con un echo

        foreach ($resultado as $indice => $producto) {
            $resultado[$indice]['nombre'] = $producto['nombre'][$lang]; //aqui sustituimos el objeto por el texto
            $resultado[$indice]['categoria'] = $producto['categoria'][$lang];
            $resultado[$indice]['genero'] = $producto['genero'][$lang];
            $resultado[$indice]['descripcion'] = $producto['descripcion'][$lang];
        }
        //tiene que haber alguna instruccion como echo para poder verlo en el navegador, sino haria las cosas pero no verias nada
        echo json_encode(array_values($resultado)); // Aquí array_values extrae solamente los valores del array asociativo $resultado, por lo que lo convierte en un array enumerativo ( el normal )
    } else { //esta parte a partir de aqui no es necesaria, es solo para encontrar fallos
        header('Content-Type: application/json'); // Esto es la cabecera que nos envia el servidor y nos avisa que lo que vamos a recibir es un JSON
        $error = [
            'key_recibida' => $_GET['k']?:'no recibido nada',
            'key_session' => $_SESSION['key']?:'no hay key de session',
            'keys_iguales' => ($_GET['k'] == $_SESSION['key']),
            'busqueda' => $_GET['buscar']?:'no recibido nada nada para buscar'
        ];
        echo json_encode($error, JSON_PRETTY_PRINT);
    }
?>