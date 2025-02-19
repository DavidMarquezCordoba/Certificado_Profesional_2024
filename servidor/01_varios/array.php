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
            $miArray = ["HTML", "CSS"];
            $miArray2 = array("HTML", "CSS");
            var_dump($miArray2);
        ?>
    </pre>

    <hr>

    <h4> Extraemos "HTML" del array:
        <?php 
        echo $miArray[0];
        ?>
    </h4>

    <h4>Añadimos elemento al final de un array:
        <?php 
        var_dump($miArray);
        array_push($miArray,"Javascript");
        var_dump($miArray);
        ?>
    </h4>

    <h4>Añadimos elemento al principio de un array:
        <?php 
        var_dump($miArray);
        array_unshift($miArray,"Javascript");
        var_dump($miArray);
        ?>
    </h4>
</body>
</html>