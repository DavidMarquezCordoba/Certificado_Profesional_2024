<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operadores</title>
</head>
<body>
    <h1>Operadores</h1>
    <hr>
    <h2>Suma 1 + 3 :
        <?php 
            $num1 = 1;
            $num2 = 3;
            
            echo ("<br>");
            echo ($num1 +$num2);
            echo ("<br>");

        ?>
    </h2>

    <h2>Resta 10 - 2 :
        <?php 
            $num1 = 10;
            $num2 = 2;
            
            echo ("<br>");
            echo ($num1 -$num2);
            echo ("<br>");
        ?>
    </h2>

    <h2>Potencia 2^3 :
        <?php 
            $num1 = 2;
            $num2 = 3;
            
            echo ("<br>");
            echo ($num1 ** $num2);
            echo ("<br>");
        ?>
    </h2>

    <h2>Producto 2*3 :
        <?php 
            $num1 = 2;
            $num2 = 3;
            
            echo ("<br>");
            echo ($num1 * $num2);
            echo ("<br>");
        ?>
    </h2>

    <h2>División 2/3 :
        <?php 
            $num1 = 2;
            $num2 = 3;
            
            echo ("<br>");
            echo ($num1 / $num2);
            echo ("<br>");
        ?>
    </h2>

    <hr>
    <h2>Comparadores < :
        <?php 
            $num1 = 2;
            $num2 = 3;
            
            echo ("<br>");
            var_dump($num1 < $num2);
            echo ("<br>");
        ?>
    </h2>

    <hr>
    <h2>Comparadores >:
        <?php 
            $num1 = 2;
            $num2 = 3;
            
            echo ("<br>");
            var_dump($num1 > $num2);
            echo ("<br>");
        ?>
    </h2>

    <hr>
    <h2>Comparadores >=:
        <?php 
            $num1 = 2;
            $num2 = 3;
            
            echo ("<br>");
            var_dump($num1 >= $num2);
            echo ("<br>");
        ?>
    </h2>

    <hr>
    <h2>Comparadores <=>:
        <?php 
            $num1 = 2;
            $num2 = 3;
            
            echo ("<br>");
            var_dump($num1 <=> $num2);
            echo ("<br>");
        ?>
    </h2>

    <hr>
    <h1>Incrementos y decrementos</h1>
    <h2>Incrementos:
        <?php 
            $num1 = 1;
            
            echo ("<br>");
            var_dump($num1);
            var_dump(++$num1);
            var_dump($num1);
            echo ("<br>");
        ?>
    </h2>

    <hr>

    <h1>Textos</h1>
    <h2>Longitud de texto:
        <?php 
            $miTexto = "Aplicaciones WEB";
            
            echo ("<br>");
            echo "$miTexto -> 'Tiene' " . strlen($miTexto) . " letras";
            echo ("<br>");
        ?>
    </h2>
    
    <pre>Eliminar espacios en blanco delante y detrás de un texto:
        <?php 
            $miTexto = "     Aplicaciones WEB              ";
            
            
            echo ("<br>");
            echo "$miTexto -> " . trim($miTexto);
            echo ("<br>");
            
            ?>
    </pre>

    <h3>Texto a mayúsculas:
        <?php 
            $miTexto = "Aplicaciones WEB";
            
            echo ("<br>");
            echo "$miTexto -> " . strtoupper($miTexto);
            echo ("<br>");
        ?>
    </h3>

    <h3>Reemplazar texto:
        <?php 
            $miTexto = "Aplicaciones WEB";
            
            echo ("<br>");
            echo "$miTexto -> " . str_replace("WEB","de cocina",$miTexto);
            echo ("<br>");
        ?>
    </h3>

    <h3>Posición de un texto en otro:
        <?php 
            $miTexto = "Aplicaciones WEB";
            
            echo ("<br>");
            var_dump(strpos($miTexto, "WEB"));
            echo ("<br>");
        ?>
    </h3>
</body>
</html>