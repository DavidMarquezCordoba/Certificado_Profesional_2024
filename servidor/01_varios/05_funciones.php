<?php declare(strict_types=1)?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones</title>
</head>
<body>
    <h1>Funciones</h1>
    <h3>Función sumar</h3>

    <!-- Función SUMAR -->
    <?php 
        function sumar($valor1, $valor2){
            echo $valor1 + $valor2;
        }
        echo ("Función sumar1: ");
        sumar(4,5);
        echo ("<br>");
    ?>

    <!-- Función SUMAR con valores por defecto-->
    <?php 
        function sumar2($valor1, $valor2=5){
            echo $valor1 + $valor2;
        }
        echo ("Función sumar2 con valores por defecto: ");
        sumar2(5);
        echo ("<br>");
    ?>

    <!-- Función SUMAR con valores por defecto con especificidad del valor-->
    <?php 
        function sumar3(int $valor1, int $valor2=5){
            echo $valor1 + $valor2;
        }
        echo ("Función sumar3 con valores por defecto especificando el tipo de variable: ");
        sumar3(5);
        echo ("<br>");
    ?>

    <!-- Función SUMAR devolviendo un tipo de dato específico-->
    <?php 
        //si poner :int debes poner un RETURN que devuelva un entero
        function sumar4(int $valor1, int $valor2=15) :string | int{
            // echo $valor1 + $valor2;
            $miResultado = $valor1 + $valor2;
            if ($miResultado > 10) {
                return "Te has pasado de 10";
            } else {
                echo "El resultado es " . $miResultado;
                return $miResultado;
            }
            return $valor1 + $valor2;
        }
        echo ("Función sumar4: ");
        echo sumar4(1,1);
        echo ("<br>");
        ?>
    
    <h3>Función restar</h3>
    
        <!-- Función RESTAR con parámetros nombrados (etiquetas)-->
        <?php 
            function restarNombrados(int $valor1, int $valor2=5){
                echo $valor1 - $valor2;
            }
            echo ("Función restar con parámetros nombrados (etiquetas): ");
            restarNombrados(valor2:5, valor1:1);
            echo ("<br>");
        ?>

    <h3>Variables locales y globales</h3> 
        <!-- Variables en funciones-->
        <h4>Variable global</h4>

        <?php $variable = "Soy una variable *global";?>

        <?php 
            echo $variable;
            echo ("<br>");
        ?>
        <h4>Variable Local</h4>
        <?php 
            function miFuncion(){
                $variable = "Soy una variable local";
                echo $variable;
            }
            miFuncion();
            echo ("<br>");
        ?>
        <h4>Metemos variable global en una función</h4>
        <?php 
            function miFuncion2(){
                // Metemos la variable global si añadimos la etiqueta "global" antes 
                global $variable;
                echo $variable;
            }
            miFuncion2();
            echo ("<br>");
        ?>
        <h4>Variables en funciones (local y global)</h4>
        <?php 
            function miFuncion3(){
                // Usando $GLOBALS puedes "rescatar la variable local" 
                $variable = "Soy una variable local";
                echo $variable . ' - ' . $GLOBALS['variable'];

                $GLOBALS['variable'] = "Soy una variable GLOBAL modificada";
            }
            miFuncion3();
            echo ("<br>");
        ?>
        <h4>Modificación de una variable global</h4>
        <?php 
            echo $variable;
        ?>
</body>
</html>