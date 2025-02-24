<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array</title>
</head>
<body>
    <h2>Array</h2>
    <h3>Creación de arrays</h3>

    <pre>
        <?php
            // Forma 1
            $miArray = ["HTML", "CSS"];
            // Forma 2
            $miArray2 = array("HTML", "CSS");
            // Mostramos
            var_dump($miArray2);
        ?>
    </pre>

    <hr>

    <h4> Extraemos "HTML" del array dependiendo de la posición:
        <?php 
        echo $miArray[0];
        ?>
    </h4>

    <h4>Añadimos elemento al final de un array:
        <?php 
        var_dump($miArray);
        // Push
        array_push($miArray,"Javascript");
        var_dump($miArray);
        ?>
    </h4>

    <h4>Añadimos elemento al principio de un array:
        <?php 
        var_dump($miArray);
        // Unshift
        array_unshift($miArray,"Javascript");
        var_dump($miArray);
        ?>
    </h4>

    <!-- ARRAY ASOCIATIVO -->
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
    
    <h2>Función array_colum() y array_search()</h2>
        
    <pre><?php 
        $menu = [
            ['nombre' => 'inicio', 'href' => 'index.php'],
            ['nombre' => 'tienda', 'href' => 'tienda.php'],
            ['nombre' => 'contacto', 'href' => 'contacto.php'],
            ['nombre' => 'iniciar sesioón', 'href' => 'login.php'],
            
        ];

        var_dump($menu);
    ?></pre>

    <pre>array_column() crea un array con una propiedad del array padre<?php 
        
        $nombres = array_column($menu, 'nombre');
        
        var_dump($nombres);
    ?></pre>

    <pre>array_searh() busca en un array <?php 
        
        $indice = array_search('contacto', $nombres);
        $indice = array_search('contacto', $menu[$indice]);
        
        var_dump($indice);
    ?></pre>

    <pre>array_filter() Te genera un array con todas las coincidencias <?php 
        
        // $buscar = "cer";
        $buscar = 18;
        $productos = [
            ['nombre' => 'Manzana',
                'Categoria' => 'frutas',
                'precio' => 20],
            ['nombre' => 'Cerezas',
                'Categoria' => 'frutas',
                'precio' => 12],
            ['nombre' => 'Agua',
                'Categoria' => 'bebidas',
                'precio' => 12],
            ['nombre' => 'Cerveza',
                'Categoria' => 'bebidas',
                'precio' => 52]
        ];
        
        echo($buscar);

    ?></pre>

    <!-- FORMA 1 -->
    <pre><?php 
        $filtro = strtolower($buscar);
        $resultado = array_filter($productos, function($producto) use ($filtro){
            return (strpos(strtolower($producto['nombre']), $filtro) !== false) || (strpos(strtolower($producto['Categoria']), $filtro) !== false); //str
        });

        var_dump($resultado);
    ?></pre>

    <!-- FORMA 2 -->
    <h3>array_filter() usando una función externa</h3>
    <pre><?php 
        function funcionFiltro($producto){
            global $buscar;
            return $producto['precio'] > $buscar;

        }

        $resultado = array_filter($productos, "funcionFiltro");
        var_dump($resultado);
    ?></pre>

    <h2>Sort</h2>

    <pre>SORT<?php 
        echo("<br>");
        $precios = [20,12,82,6];
        var_dump($precios);
        sort($precios);
        var_dump($precios);
    ?></pre>

    <pre>RSORT<?php 
        echo("<br>");
        $precios = [20,12,82,6];
        var_dump($precios);
        rsort($precios);
        var_dump($precios);
    ?></pre>

    <pre>SORT ORDENA EL ARRAY $MIARRAY POR ORDEN ALFABÉTICO<?php 
        echo("<br>");
        // Ordena por orden alfabético a través de su COD ASCII
        // $precios = [20,12,82,6];
        var_dump($miArray);
        sort($miArray);
        var_dump($miArray);
    ?></pre>

    <pre>RSORT ORDENA EL ARRAY $MIARRAY POR ORDEN ALFABÉTICO INVERSO<?php 
        echo("<br>");
        // Ordena por orden alfabético a través de su COD ASCII
        // $precios = [20,12,82,6];
        var_dump($miArray);
        rsort($miArray);
        var_dump($miArray);
    ?></pre>

    <pre>ASORT ORDENA EL ARRAY ASOCIATIVO $MIARRAY POR ORDEN ALFABÉTICO (precio)<?php 
        echo("<br>");
        $precios = [
            'manzanas' => 12,
            'cerezas' => 20,
            'Plátanos' => 15
        ];

        var_dump($precios);
        asort($precios);
        var_dump($precios);
    ?></pre>

    <pre>ARSORT ORDENA EL ARRAY ASOCIATIVO $MIARRAY POR ORDEN ALFABÉTICO INVERSO(precio)<?php 
        echo("<br>");
        // $precios = [
        //     'manzanas' => 12,
        //     'cerezas' => 20,
        //     'Plátanos' => 15
        // ];

        var_dump($precios);
        arsort($precios);
        var_dump($precios);
    ?></pre>

        <!-- AK SORT -->
    <pre>KSORT ORDENA EL ARRAY ASOCIATIVO $MIARRAY POR KEY (precio)<?php 
        echo("<br>");
        // $precios = [
        //     'manzanas' => 12,
        //     'cerezas' => 20,
        //     'Plátanos' => 15
        // ];

        var_dump($precios);
        ksort($precios);
        var_dump($precios);
    ?></pre>

    <pre>KRSORT ORDENA EL ARRAY ASOCIATIVO $MIARRAY POR KEY INVERSO(precio)<?php 
        echo("<br>");
        // $precios = [
        //     'manzanas' => 12,
        //     'cerezas' => 20,
        //     'Plátanos' => 15
        // ];

        var_dump($precios);
        krsort($precios);
        var_dump($precios);
    ?></pre>
</body>
</html>