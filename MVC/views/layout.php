<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Young People</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Pacifico&family=Quicksand:wght@300..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.php">
    <script defer src="js/scripts.php?s=index"></script>
    <script defer src="js/scripts.php?s=header"></script>
    <script defer src="js/scripts.php?s=popover"></script>
    <?php echo $scripts; ?>
    </head>
<body>
    <header class="<?php echo ($pagina == '/')?'':'fondo'; ?>">
        <a class="logo" href="index.php"></a>
        <?php echo $busqueda; ?>
        <input id="key" type="hidden" value="<?php echo $sesionkey; ?>">
        <nav>
            <div class="boton-menu">&#9776;</div>
            <ul class="enlaces-menu">
                <!-- menu -->
                <?php echo $navegacion; ?>

            </ul>
        </nav>

    </header>

<?php echo $contenido; ?>

<div popover id="alerta">
    <h2>Atención!!!</h2>
    <h3 id="alerta-texto">Esto es un mensaje de alerta</h3>
</div>

<div id="mensaje">
    <h2 id="mensaje-texto">Esto es un texto de mensaje</h2>
</div>

<footer>
    <p>&copy; 2025 young <span>pe</span>o<span>ple</span>. Todos los derechos reservados</p>
    <ul class="footer-enlaces">
        <li><a href="#">Politica y privacidad</a></li>
        <li><a href="#">Términos y condiciones</a></li>
        <li><a href="/contacto">Contacto</a></li>
    </ul>
</footer>
</body>
</html>