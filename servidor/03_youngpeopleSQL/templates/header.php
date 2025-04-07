<?php 
    session_start();
    
    // Evitamos que nos copien el id de sesión porque se cambia si hace más de 30 segundos que refrescamos
    if(isset($_SESSION['time']) && (time()-$_SESSION['time'] > 30)){
        session_regenerate_id();
    }
    $_SESSION['time'] = time();

    // protegemos nuestras APIs
    $_SESSION['key'] = bin2hex(random_bytes(32)); // generar una key aleatoria de 64 caracteres

    /////////////////////////////////////7
    $archivoMenu = 'json/menu.json';
    $textoMenu = "";
    $menu = [];


    $idiomaPorDefecto = 'es';
    $idiomasDisponibles = ['es','en','ar','br'];
    $lang = $idiomaPorDefecto;
    if(isset($_GET['lang'])){
        $lang = $_GET['lang'];
    } else {
        $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    }
    $lang = (in_array($lang, $idiomasDisponibles))? $lang : $idiomaPorDefecto;
    $_SESSION['lang'] = $lang;



    if(file_exists($archivoMenu)){
        $textoMenu = file_get_contents($archivoMenu);
    } else {
        echo "no existe el archivo";
    }
    if(json_validate($textoMenu)){
        $menu = json_decode($textoMenu, true);
    }

    ///////////////////////cargo idioma de textos
    $archivoIdioma = 'json/idiomas/idioma_' . $lang . '.json';
    $textoIdiomas = "";
    $textos = [];
    if(file_exists($archivoIdioma)){
        $textoIdiomas = file_get_contents($archivoIdioma);
    } else {
        echo "no existe el archivo idomas";
    }
    if(json_validate($textoIdiomas)){
        $textos = json_decode($textoIdiomas, true);
    }    
?>

</head>
<body>
    <header class="<?php echo ($pagina == 'index.php')?'':'fondo'; ?>">
        <a class="logo" href="index.php"></a>
        <?php if($pagina == 'tienda.php') { ?>
        <div class="div-busqueda">
            <label for="busqueda" id="buscar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2">
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                </svg>
            </label>
            <input type="search" name="busqueda" id="busqueda" class="busqueda" placeholder="Buscar...">
        </div>
        <?php } ?>
        <input id="key" type="hidden" value="<?php echo $_SESSION['key']; ?>">
        <nav>
            <div class="boton-menu">&#9776;</div>
            <ul class="enlaces-menu">
                <!-- menu -->
                <?php foreach($menu as $enlace) {
                    if(($enlace['href'] != 'carrito.php')||($pagina == 'tienda.php')) {    
                ?>
                <li><a class="<?php echo ($pagina == $enlace['href'])?'seleccionado':''; ?>" href="<?php echo $enlace['href']; ?>"><?php echo $enlace['nombre'][$lang]; ?></a></li>
                <?php }} ?>

                <!-- Banderas -->
                <?php foreach ($idiomasDisponibles as $idioma) { 
                    if($idioma != $lang) {?>
                    <li><a href="?lang=<?php echo $idioma; ?>"><img src="../img/banderas/<?php echo $idioma; ?>.png" alt="bandera de <?php echo $idioma; ?>"></a></li>
                <?php }} ?>

            </ul>
        </nav>

    </header>


    