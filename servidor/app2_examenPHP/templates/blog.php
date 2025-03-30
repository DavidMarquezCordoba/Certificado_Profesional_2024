
<!-- Preparamos el archivo json de los objetivos-->
<?php
    $objetivos = json_decode(file_get_contents("json/objetivos.json"), true);
?>

<!-- Preparamos el archivo json del blog-->
<?php
    $blog = json_decode(file_get_contents("json/blog.json"), true);

?>

<!-- Preparamos el archivo json de las experiencias-->
<?php
    $experiencias = json_decode(file_get_contents("json/experiencias.json"), true);
?>

<div class="miblog">
        <main class="cursos-comenzados sombra">
            <?php foreach ($blog as $entrada) {?>
                <article>
                    <h2><?php echo $entrada['titulo']?></h2>
                    <img src="img/<?php echo $entrada['foto']?>.jpeg" alt="foto curso programación">
                    <h3><?php echo $entrada['texto']?></h3>
                    <ul>
                        <?php foreach ($entrada['temario'] as $aprendizaje) { ?>
                                <li><?php echo $aprendizaje ?></li>
                            <?php }
                            ?>
                    </ul>
                </article>
            <?php }
            ?>
        </main>
    
        <aside class="objetivo sombra">
            <h2>Objetivo</h2>
            <?php foreach ($objetivos as $objetivo) {?>
                    <div class="des-objetivo">
                        <img src="img/<?php echo $objetivo['imagen']?>" alt="logo academia épsilon">
                        <p><?php echo $objetivo['texto']?></p>
                    </div>
                <?php }
                ?>
        </aside>

        <aside class="experiencias sombra">
            <h2>Experiencias</h2>
            <?php foreach ($experiencias as $opinion) {?>
                <div class="arti-experiencias">
                    <article>
                        <h3><?php echo $opinion['nombre']?></h3>
                        <p><?php echo $opinion['texto']?></p>
                    </article>
                </div>
            <?php }
            ?>
        </aside>
    </div>