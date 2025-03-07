<!-- Variables super globales que cea PHP de forma interna en la raíz -->
<?php 
$nombre = "nombre";
$valor = "pepe";
setcookie($nombre,$valor, [
    'expires' => time()+15
] );
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables super globales</title>
</head>
<body>
    <h1>Variables super globales: tienen un ámbito TOTAL</h1>
    <h4><strong>$GLOBALS</strong>: Array asociativo que tiene todas las variables globales de nuestro documento</h4>
    <pre>
        <?php 
        $nombre = "pepe";
        $apellido;
        
        function miFuncion(){
            // global $nombre; //Forma 1 de llamar a nombre 
            $apellido = "perez";
            echo $GLOBALS['nombre'] . " " . $apellido;  //Forma 2 de llamarlo $GLOBALS['nombreVariable']
            // echo $nombre . $apellido;
        }
        
        var_dump($GLOBALS);
        
        miFuncion();
        ?>
    </pre>

    <h4><strong>$_SERVER</strong>: Array asociativo que contiene datos de la cabecera de la petición</h4>
    <pre>
        <?php 
        // var_dump($_SERVER);
        ?>
    </pre>
    <h5>Idioma del navegador: <?php echo $_SERVER['HTTP_ACCEPT_LANGUAGE'];?></h5>
    <h5>Idioma seleccionado: 
        <?php 
        $saludo = [
            'es' => 'Hola',
            'en' => 'Hello',
            'br' => 'Ola'
        ];

        $idiomaDefault = 'es';
        $idiomasDisponibles = ['es', 'en'];
        $lang = $idiomaDefault;
        
        if (isset($_GET['lang'])) {
            $lang = $_GET['lang'];
        } else {
            // substr : Se queda con el trozo que le indiques
            $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2); //Recoge el lang del navegador
        }

        $lang = (in_array($lang, $idiomasDisponibles))? $lang : $idiomaDefault; //Comprueba si el lang
        echo $saludo[$lang];
        ?>
    </h5>

    <h5>Nombre del archivo: 
        <?php echo htmlentities(substr($_SERVER['PHP_SELF'], 1)) //PHP es el nombre del archivo 
                                                                // htmlentities : a modo seguridad cada vez que se use $_SERVER
        ?>
    </h5>
    
    <h5>$_GET es un array con las variables GET recibidas</h5>
    <?php 
        $nombre = "Pepe";
        $edad = "25";
    ?>

    <a href="08_variablesSuperGlobales.php?nombre=<?php echo urlencode($nombre); ?>">Enlace</a>
    <pre><?php var_dump($_GET);?></pre>

    <hr>
    <hr>
    <hr>

    <h2>Formulario GET</h2>
    <form
        
        action="<?php echo htmlentities($_SERVER['PHP_SELF'])   //Action: A dónde van la información, en este caso está mandando el fichero PHP_SELF?>" 
        method="get">                                           <!-- Method: La forma en que se envía la información (GET:menos seguro) (POST:Más seguro, va en el head). TODOS los form te hacen automáticamente el URLENCODE-->
    
        <label for="">Los formularios paran por urlencode los input antes de enviarlos</label>
        <br>
        <input type="text" name="nombre" placeholder="nombre">
        <input type="number" name="edad" placeholder="edad">
        <input type="submit" value="Enviar GET">
    </form>

    <h2>Formulario POST</h2>
    <form
        
        action="<?php echo htmlentities($_SERVER['PHP_SELF'])   //Action: A dónde van la información, en este caso está mandando el fichero PHP_SELF?>" 
        method="post">                                           <!-- Method: La forma en que se envía la información (GET:menos seguro) (POST:Más seguro, va en el head). TODOS los form te hacen automáticamente el URLENCODE-->
        <input type="text" name="nombre" placeholder="nombre">
        <input type="number" name="edad" placeholder="edad">
        <input type="hidden" name="momento" value="Halloweed">
        <input type="submit" value="Enviar POST">
    </form>

    <h2>Formulario POST con array</h2>
    <form
        
        action="<?php echo htmlentities($_SERVER['PHP_SELF'])   //Action: A dónde van la información, en este caso está mandando el fichero PHP_SELF?>" 
        method="post">                                           <!-- Method: La forma en que se envía la información (GET:menos seguro) (POST:Más seguro, va en el head). TODOS los form te hacen automáticamente el URLENCODE-->
        <input type="text" name="cliente[]" placeholder="nombre">
        <input type="number" name="cliente[]" placeholder="edad">
        <input type="hidden" name="cliente[]" value ="valor oculto" >
        <input type="submit" value="Enviar POST">
    </form>

    <pre><?php var_dump($_POST)?></pre>

    <h2>$_COOKIE: Es un array con las variables recibidas como cookies</h2>
    <pre><?php var_dump($_COOKIE)?></pre>
</body>
</html>