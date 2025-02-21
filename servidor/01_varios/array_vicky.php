<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array</title>
</head>
<body>
    <h2>Array</h2>
    <h3>Creacion de array</h3>
    <pre><?php 
        $miArray = ["HTML", "CSS"];
        $miArray2 = array("HTML", "CSS", $miArray);
        var_dump($miArray2);
    ?></pre>
    <pre><?php 
        $miArray = ["HTML", "CSS"];
        $miArray2 = array("HTML", "CSS");
        var_dump($miArray === $miArray2);
    ?></pre>

    <h2><?php 
        echo $miArray[0];
    ?></h2>

    <pre>Añadir elemento al final de un array => <?php 
        var_dump($miArray);
        array_push($miArray, "PHP");
        var_dump($miArray);
    ?></pre>

    <pre>Añadir elemento al principio de un array => <?php 
        var_dump($miArray);
        array_unshift($miArray, "Javascript");
        var_dump($miArray);
    ?></pre>

    <h2>Array Asociativo (Objetos en Javascript)</h2>
    <pre><?php 
        $miarrayAsociativo = [
            'nombre' => 'pepe',
            'edad' => 15,
            'direccion' => [
                'calle' => 'avda andalucia',
                'numero' => 8,
                'ciudad' => 'mijas'
            ]
        ];
        var_dump($miarrayAsociativo['nombre']);
        var_dump($miarrayAsociativo['direccion']);
        var_dump($miarrayAsociativo['direccion']['ciudad']);
        $miarrayAsociativo['apellido'] = 'Moreno';
        $miarrayAsociativo['direccion']['codpostal'] = '29650';
        var_dump($miarrayAsociativo);
    ?></pre>

    <pre><?php 
        var_dump(empty($miarrayAsociativo)); //si un array esta vacio
        var_dump(isset($miarrayAsociativo['apellido']));
        var_dump(isset($miarrayAsociativo['codpostal']));
        var_dump(isset($miarrayAsociativo['direccion']['codpostal'])); //te responde true o false dependiendo si existe o no la propiedad codpostal dentro de direccion en mi arrayasociativo
    ?></pre>

    <h2>funcion in_array() buscar elementos en un array</h2>
    <h3>¿esta pepe?<?php 
        var_dump(in_array("pepe", $miarrayAsociativo))
    ?></h3>
    <h3>¿esta mijas?<?php 
        var_dump(in_array("mijas", $miarrayAsociativo));
        var_dump(in_array("mijas", $miarrayAsociativo['direccion']));
    ?></h3>

    <hr>
    

</body>
</html>