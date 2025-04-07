<?php 
    if(isset($_GET['bus'])){
        header('Content-Type: application/json'); // Esto es la cabecera que nos envia el servidor y nos avisa que lo que vamos a recibir es un JSON
        $cursosJSON = file_get_contents("../json/cursos.json"); // cargamos el archivo JSON
        $cursos = [];    // Creamos un array vacío para los productos
        if(json_validate($cursosJSON)){  // Si el archivo leido es un JSON válido lo decodificamos y lo mentemos en nuestra variable
            $cursos = json_decode($cursosJSON, true); // El true era para tener en cuenta los array asociativos
        }

        $filtro = strtolower(htmlentities($_GET['bus'])); // $filtro será el valor de $_GET['buscar'] si existe, sino será un strin vacío ''
        
        if($filtro != ''){
            $resultado = array_filter($cursos, function($curso) use ($filtro) { // Aquí filtramos de nuestro array de $productos usando la varible $filtro - use ($filtro) - es para incorporar la variable global $filtro dentro de la función
                return (strpos(strtolower($curso['nombre']), $filtro) !== false);
            });
            if(sizeof($resultado) > 0) {
                echo json_encode(array_values($resultado)); // Aquí array_values extrae solamente los valores del array asociativo $resultado, por lo que lo convierte en un array enumerativo ( el normal )
            } else {
                echo "no hay cursos con su búsqueda";
            }
        } else {
            echo "no hay cursos con su búsqueda";
        }

    }
?>