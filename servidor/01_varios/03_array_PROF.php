<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array</title>
</head>
<body>
    <h1>Array Indexado</h1>
    <pre>crear un Array => <?php 
        $miArray = ["Javascript", "HTML"];  // Dos formas de crear un array
        $miArray2 = array("Javascript", "HTML");
        var_dump($miArray);
        var_dump($miArray2);
    ?></pre>
    <h3>elemento 1 de miArray => <?php
        echo $miArray[1];  
    ?></h3>
    <pre>añadimos un elemento más al Array en la posición 2=> <?php 
        $miArray[2] = "CSS";
        var_dump($miArray);
    ?></pre>
    <pre>añadimos un elemento al final del Array => <?php 
        array_push($miArray, "PHP");
        var_dump($miArray);
    ?></pre>
    <pre>añadimos un elemento al inicio del Array => <?php 
        array_unshift($miArray, "WEB");
        var_dump($miArray);
    ?></pre>
    <hr>

    <h2>Array Asociativo</h2>
    <pre>crear un Array => <?php 
        $miArrayAsociativo = [
            'curso' => 'Aplicaciones WEB',
            'horas' => 540,
            'temas' => ['HTML', 'CSS', 'Javascript'],
            'horasPorTema' => [
                'HTML' => 60,
                'CSS' => 30,
                'Javascript' => 90
            ]
        ]; // Podemos añadir cualquier tipo de variable en cada elemento del Array
        var_dump($miArrayAsociativo);
    ?></pre>
    <h3>valor del elemento curso de miArrayAsociativo => <?php
        echo $miArrayAsociativo['curso'];  
    ?></h3>
    <h3>valor del elemento horasPorTema de HTML de miArrayAsociativo => <?php
        echo $miArrayAsociativo['horasPorTema']['HTML'];  
    ?></h3>
    <pre>Añadimos un elemento a miArrayAsociativo, si la propiedad no existe, se crea, si existe, se modifica => <?php
        $miArrayAsociativo['comenzado'] = true;
        var_dump($miArrayAsociativo);  
    ?></pre>
    <hr>

    <h2>función empty(), si un array está vacío</h2>
    <h3>preguntamos si el array miArrayNuevo = []; está vacío => <?php
        $miArrayNuevo = [];
        var_dump(empty($miArrayNuevo));  
    ?></h3>
    <h3>preguntamos si el array miArrayAsociativo está vacío => <?php
        var_dump(empty($miArrayAsociativo));  
    ?></h3>
    <hr>

    <h2>función isset() mirar si una array existe o una propiedad está definida</h2>
    <h3>preguntamos si el array miArraySincrear; existe => <?php
        var_dump(isset($miArraySincrear));  
    ?></h3>
    <h3>preguntamos si el array miArrayAsociativo existe => <?php
        var_dump(isset($miArrayAsociativo));  
    ?></h3>
    <h3>preguntamos si la propiedad "profesor" del array miArrayAsociativo existe => <?php
        var_dump(isset($miArrayAsociativo['profesor']));  
    ?></h3>
    <hr>

    <!-- Clase viernes 21  -->
    <h2>función in_array() buscar elementos en un array</h2>
    <h3>buscamos el valor "CSS" en miArray y nos contesta si está => <?php
        var_dump(in_array('CSS', $miArray));  
    ?></h3>
    <hr>

    <h2>función array_column() y array_search() buscar un valor en un array de arrays semanticos (de objetos)</h2>
    <pre>
    <?php      
        $menu = [ 
            ['nombre' => 'Inicio', 'href' => 'index.php'], 
            ['nombre' => 'Tienda', 'href' => 'tienda.php'], 
            ['nombre' => 'Contacto', 'href' => 'contacto.php'],
            ['nombre' => 'Iniciar Sesión', 'href' => 'login.php'] 
        ];
        var_dump($menu);    // Este es nuestro array de arrays semanticos
    ?>
    </pre>
    <h3>creamos un array solamente con la propiedad que vamos a analizar => </h3>
    <pre>
    <?php      
        $columnaNombre = array_column($menu, 'nombre'); // Creamos un array solo con los nombres
        var_dump($columnaNombre);    
    ?>
    </pre>
    <h3>buscamos la posición del array que sea igual a "Tienda" e imprimimos esa posición del array $menu> </h3>
    <pre>
    <?php
        $indice = array_search('Tienda', $columnaNombre); // Buscamos la posición en el array que está la palabra "Tienda"
        var_dump($menu[$indice]);  // Presentamos el objeto encontrado
    ?></pre>
    <hr>

    <h2>función sort() ordenar elementos en un array</h2>
    <pre>sort Ordenar el array de menor a mayor => <?php
        $precios = [20, 12, 82, 6];
        var_dump($precios);
        sort($precios);  // Igual que en Javascript ordena el mismo array, no hay que igualar a nada
        var_dump($precios);
    ?></pre>
    <pre>rsort Ordenar el array de mayor a menor => <?php
        var_dump($precios);
        rsort($precios);  // Igual que en Javascript ordena el mismo array, no hay que igualar a nada
        var_dump($precios);
    ?></pre>
    <pre>sort Ordenar el array $miArray por orden alfabético => <?php
        var_dump($miArray);
        sort($miArray);  // Igual que en Javascript ordena el mismo array, no hay que igualar a nada
        var_dump($miArray);
    ?></pre>
    <pre>rsort Ordenar el array $miArray a la inversa => <?php
        var_dump($miArray);
        rsort($miArray);  // Igual que en Javascript ordena el mismo array, no hay que igualar a nada
        var_dump($miArray);
    ?></pre>
    <pre>asort Ordenar el array asociativo $miArrayAsociativo['horasPorTema'] por valores no por llaves => <?php
        var_dump($miArrayAsociativo['horasPorTema']);
        asort($miArrayAsociativo['horasPorTema']);  // Igual que en Javascript ordena el mismo array, no hay que igualar a nada
        var_dump($miArrayAsociativo['horasPorTema']);
    ?></pre>
    <pre>arsort Ordenar el array asociativo $miArrayAsociativo['horasPorTema'] por valores no por llaves pero de z...a => <?php
        var_dump($miArrayAsociativo['horasPorTema']);
        arsort($miArrayAsociativo['horasPorTema']);  // Igual que en Javascript ordena el mismo array, no hay que igualar a nada
        var_dump($miArrayAsociativo['horasPorTema']);
    ?></pre>
    <pre>ksort Ordenar el array asociativo $miArrayAsociativo['horasPorTema'] por llaves no por valores => <?php
        var_dump($miArrayAsociativo['horasPorTema']);
        ksort($miArrayAsociativo['horasPorTema']);  // Igual que en Javascript ordena el mismo array, no hay que igualar a nada
        var_dump($miArrayAsociativo['horasPorTema']);
    ?></pre>
    <pre>krsort Ordenar el array asociativo $miArrayAsociativo['horasPorTema'] por llaves no por valores pero de z...a => <?php
        var_dump($miArrayAsociativo['horasPorTema']);
        krsort($miArrayAsociativo['horasPorTema']);  // Igual que en Javascript ordena el mismo array, no hay que igualar a nada
        var_dump($miArrayAsociativo['horasPorTema']);
    ?></pre>
</body>
</html>