<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON PHP</title>
</head>
<body>
    <h1>JSON</h1>
    <?php 
        $miarrayAsociativo = [
            'nombre' => 'pepe',
            'edad' => 15,
            'dirección' => [
                'calle' => 'avda andalucia',
                'numero' => 8,
                'ciudad' => 'mijas'
            ]
        ];
    ?>

    <pre><?php 
        var_dump($miarrayAsociativo);
    ?></pre>

    <script>
        let hola = "hola Variable"
        console.log(<?php echo "hola";?>);
        console.log(<?php echo '"hola echo"';?>);
        console.log(5+<?php echo '6';?>);
        console.log(5+<?php echo "'6'";?>);
    </script>

<!-- Vamos a probar los ENCODE y DECODE JSON -->
    <pre>
        <?php 
            // Decode de texto a array
            // Encode de array a texto

            // JSON_UNESCAPED_UNICODE -> Para que aparezca una tilde
            $str_miarray = json_encode($miarrayAsociativo, JSON_UNESCAPED_UNICODE);
            echo $str_miarray;
        ?>
    </pre>

    <pre>
        <?php 
            // Decode de texto a array
            // Encode de array a texto

            // *********************************************************************************************** //
            // DECODE devolverá NULL si intentamos decodificar algo que no se debe..comprobamos con validate   //
            //                     $str_miarray = "Esto va a dar error" . $str_miarray                         //
            // *********************************************************************************************** //
            
            if (json_validate($str_miarray)) {
                
                $json_array = json_decode($str_miarray, true); //True, lo convierte a array asociativo

                var_dump($json_array);                         // Var_dump imprime los arrays como objetos
            } else {
                echo "Esto no es un JSON";
            }
        ?>
    </pre>

    <!-- CARGA DE DATOS POR ARCHIVO ADJUNTO -->
    <h2>Ahora los datos están en un archivo separado</h2>
    <hr>

    <pre>
        <?php 
        $datos_texto = file_get_contents('productos.json');
        print_r($datos_texto);
        ?>
    </pre>

    <hr>
    <pre><?php
        if (json_validate($datos_texto)) {
            $datos_array = json_decode($datos_texto, true);
            var_dump($datos_array);
        } else {
            echo "Esto no es un JSON";
        }
    ?></pre>

        <!-- Si queremos acceder al nombre -->
    <h3><?php echo "Nombre: " . $datos_array[0]['nombre'];?></h3>
    <h3><?php echo "Talla disponible: " . $datos_array[0]['tallas_disponibles'][1];?></h3>

    <!-- Lista con todos los nombres -->
    <h4>Lista con todos los nombres</h4>
    <ul>
        <?php 
            foreach ($datos_array as $nombres) {?>
                <li><?php 
                    echo $nombres['nombre'] . " ==> Precio: " . $nombres['precio'] . "€";
                ?></li>
            <?php }
        ?>
    </ul>

    <ul>
        <?php 
            foreach ($datos_array as $key => $producto) {?>
                <p><?php 
                    foreach ($producto as $llave => $valor) {?>
                        <p><?php echo "(".$key+1 .") " . $llave . " - "; print_r($valor);?></p>
                        <hr>
                        <?php }
                ?></p>
            <?php }
        ?>
    </ul>
</body>
</html>