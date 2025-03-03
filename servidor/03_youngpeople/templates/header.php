<?php 
    $textoMenu = file_get_contents("json/menu.json");
    $menu = json_decode($textoMenu, true);
?>

</head>
<body>
    <header>
        <nav>
            <ul>
                <?php foreach($menu as $enlace) {?>
                <li><a class="<?php echo ($pagina == $enlace['nombre'])?'seleccionado':''; ?>" href="<?php echo $enlace['href']; ?>"><?php echo $enlace['nombre']; ?></a></li>
                <!-- <li></li>
                <li></li>
                <li></li>
                <li></li> -->
                <?php } ?>
            </ul>
        </nav>

    </header>