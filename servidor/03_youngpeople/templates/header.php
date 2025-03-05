<!-- PRECARGAMOS EL JSON -->
<?php 
    $archivoMenu = 'json/menu.json'; //Ruta del JSON
    $textoMenu = '';    //Creamos la variable local para que se pueda reutilizar
    $menu = [];

    if (file_exists($archivoMenu)) {                    //file_exist -> Si existe ese fichero (boolean)
        $textoMenu = file_get_contents($archivoMenu); //Lee el contenido del archivo menu.json SOLO TEXTO
    } else {
        echo "No exite el archivo";
    }
    
    if (json_validate($textoMenu)) {
        $menu = json_decode($textoMenu, true);  //True -> para mantener el array asociativo
                                                //json_decode -> Convierte un string en formato JSON
    }
?>
<!-- *************************** -->

</head>
<body>
    <header class="<?php echo ($pagina == 'index.php')?'':'fondo';?>">
        <a class="logo" href="index.php"></a>

        <!-- Cajón de búsqueda -->
        <?php 
            if ($pagina == 'tienda.php') {?>
                <div class="div-busqueda">
                <label for="busqueda" id="buscar">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        width="24" height="24" 
                        stroke-width="2"> 
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path> 
                        <path d="M21 21l-6 -6"></path> 
                    </svg>
                </label>
    
                <input type="search" name="busqueda" id="busqueda" class="busqueda" placeholder="Buscar...">
            </div>
        <?php } ?>
        <!-- ********************* -->
        
        <nav>
            <!-- Menu hamburguesa -->
            <div class="boton-menu">&#9776;</div>
            <!--  -->

            <!-- Lista de enlaces -->
            <ul class="enlaces-menu">
                <?php foreach($menu as $enlace) {
                    // Si al recorrer el json [href] es distinto de carrito.php
                    if (($enlace['href'] != 'carrito.php') || ($pagina == 'tienda.php')) {?>
                        <li><a class="<?php echo ($pagina == $enlace['href'])?'seleccionado':''; ?>" href="<?php echo $enlace['href']; ?>"><?php echo $enlace['nombre']; ?></a></li>
                    <?php }
                } ?>
            </ul>
        </nav>

    </header>