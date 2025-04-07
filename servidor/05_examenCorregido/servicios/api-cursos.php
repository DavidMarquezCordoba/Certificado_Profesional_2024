<?php 
    session_start();

    if((isset($_GET['key'])) && (($_GET['key'] == $_SESSION['k']))){
        header('Content-Type: application/json'); // Esto es la cabecera que nos envia el servidor y nos avisa que lo que vamos a recibir es un JSON
        $cursosJSON = file_get_contents("../json/cursos.json"); // cargamos el archivo JSON
        $cursos = [];    // Creamos un array vacío para los productos
        if(json_validate($cursosJSON)){  // Si el archivo leido es un JSON válido lo decodificamos y lo mentemos en nuestra variable
            $cursos = json_decode($cursosJSON, true); // El true era para tener en cuenta los array asociativos
        }
        echo json_encode($cursos); // Aquí array_values extrae solamente los valores del array asociativo $resultado, por lo que lo convierte en un array enumerativo ( el normal )
    }
?>