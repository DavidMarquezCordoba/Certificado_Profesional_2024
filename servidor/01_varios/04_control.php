<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estructuras de control</title>
</head>
<body>
    <h1>Estructuras de control</h1>

    <pre>IF
        <?php 
        $miArray = ["HTML", "CSS", "Javascript"];  // Dos formas de crear un array
        $miArray2 = array("Javascript", "HTML");
        
        if ($miArray === $miArray2) {
            echo 'Son iguales';
        } else {
            echo 'NO son iguales';
        }
        ?>
    </pre>

    <h3>If ANIDADO: 
        <?php 
        // echo '<br>';
        $tamano = sizeof($miArray);
        if($tamano > 2) {
            echo '$tamano es mayor a 2';
        } else {
            if ($tamano == 2) {
                echo 'Es igual a 2';
            } else {
                echo '$tamano es menor a 2';
            }
        }
        ?>
    </h3>

    <h3>Operador Ternario: 
        <?php 
            echo ($tamano==2)?"Si son iguales":"No, no son iguales";
        ?>
    </h3>

    <h3>SWITCH: 
        <?php 
            switch ($miArray[0]) {
                case 'HTML':
                    echo 'El primer valor es HTML';
                    break;
                case 'CSS':
                    echo 'El segundo valor es CSS';
                    break;
                case 'HTML':
                    echo 'El primer valor es HTML';
                    break;
                
                default:
                    echo 'El primer valor no lo reconozco';
                    break;
            }
        ?>
    </h3>

    <h3>WHILE: 
        <?php 
            $veces = 0;

            while ($veces <= 10) {
                echo $veces++ . (($veces <= 10)?' - ':'');
            }
        ?>
    </h3>

    <h3>DO WHILE: 
        <?php 
            $veces = 0;

            do{
                echo $veces++ . (($veces <= 10)?' - ':'');
            } while ($veces <= 10)
        ?>
    </h3>

    <h3>FOR: 
        <?php 
            for ($veces=0; $veces <= 10; $veces++) { 
                echo $veces . (($veces < 10)?' - ':'');
            }
        ?>
    </h3>

    <h3>FOR sin llave: 
        <?php 
            for ($veces=0; $veces <= 10; $veces++): 
                echo $veces . (($veces < 10)?' - ':'');
            endfor;
        ?>
    </h3>

    <h3>FOREACH 1: 
        <?php 
            foreach ($miArray as $key => $value) {
                echo "<h3>La key $key tiene como valor $value</h3>";
            }
        ?>
    </h3>

    <h3>FOREACH 2: 
        <?php foreach ($miArray as $key => $value) { ?>
            <h3><?php echo "La key $key tiene como valor $value";?></h3><?php }?>
    </h3>
</body>
</html>