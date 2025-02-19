<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    <?php
        echo "hola mundo";

        echo "<br>";

        echo("hola mundo");

        echo "<br>";

        print "hola mundo";

        echo "<br>";
        
        print("hola mundo");

        echo "<br>";
        
        print_r("hola mundo");

        echo "<br>";
        
        var_dump("hola mundo");
        echo "<br>";
        
        var_dump(22);
        ?>
    
    <hr>
    <h2>1. Variables</h2>
    <!-- CON H1,2,3,4 SIEMPRE dejará un espacio -->
    <h3>
        <?php 
        $variable = 'Hola mundo';
        $numero = 22;
        
        echo "Saludo \"$variable\", $numero";
        ?>
    </h3>

    <!-- PRE te marca las tabulaciones incluso dentro de code y te respetará todos los espacios que la variable tenga-->
    <pre>
        <?php 
        $variable = 'Hola           mundo';
        $numero = 22;
        
        echo "Saludo \"$variable\", $numero";
        ?>
    </pre>
<hr>

<h2>2. Constantes</h2>
<h3>
    <?php 
            // Forma 1
            const CONSTANTE = "Esto es una constante";
            
            echo CONSTANTE;
            
            echo "<br>";
            
            // Forma 2
            define('OTRA_CONSTANTE', 'esto es otra constante');
            
            echo OTRA_CONSTANTE;
            ?>
    </h3>
<hr>
<h2>3. Tipos de datos</h2>
    <h3>Boleano =>
        <br>
        <?php 
            $bolean = true;
            var_dump($bolean);
            echo "<br>";
        ?>

        <?php 
            $numero = 22;
            var_dump($numero);
            echo "<br>";
        ?>

        <?php 
            $decimal = 13.5;
            var_dump($decimal);
            echo "<br>";
        ?>

        <?php 
            $texto = "esto es un texto";
            var_dump($texto);
            echo "<br>";
        ?>

        <?php 
            $caracter = 'a';
            var_dump($caracter);
            echo "<br>";
        ?>

        <pre>
            <?php 
                $miArray = ["texto", 1, 12.4, true];
                var_dump($miArray);
                echo "<br>";
            ?>
        </pre>

        <pre>
            <?php 
                $miArrayAsociativo = [
                    "nombre" => "pepe",
                    "edad" => 15
                ];
                var_dump($miArrayAsociativo);
                echo "<br>";
            ?>
        </pre>
    </h3>
</body>
</html>

<!-- <script>console.log("hola mundo");</script> -->

