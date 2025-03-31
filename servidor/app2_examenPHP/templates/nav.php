

<!-- <div class="nav-fondo">
        <nav class="nav-cabecera contenedor">
            <a class="inicio" href="index.php">inicio</a>
            <a class="mas-cursos" href="mas-cursos.php">más cursos</a>
            <a class="instalaciones" href="instalaciones.php">instalaciones</a>
            <a class="nosotros" href="nosotros.php">nosotros</a>
            <a class="blog" href="blog.php">blog</a>
            <a class="contacto" href="#formulario">contacto</a>
        </nav>
    </div> -->


<?php
    // Cargar el archivo JSON del menú y convertimos en array y lo guardamos en la variable
    $menu = json_decode(file_get_contents("json/menu.json"), true);
?>

<div class="nav-fondo">
    <nav class="nav-cabecera contenedor">
        <?php
            foreach ($menu as $enlace) {
                // Si es distinto a la página en la que estamos NO se añade en el menú (punto 3)
                if ($enlace["href"] !== $pagina) {
                    ?>
                        <a class="<?= $enlace["clase"] ?>" href="<?= $enlace["href"] ?>"><?= $enlace["texto"] ?></a>
                    <?php
                }
            }
        ?>
    </nav>
</div>
