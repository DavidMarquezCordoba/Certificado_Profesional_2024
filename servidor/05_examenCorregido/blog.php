<?php 
$pagina = 'blog.php';
include 'templates/head.php';
?>
    <link rel="preload" href="css/blog.css" as="style">
    <link rel="stylesheet" href="css/blog.css"> 
<?php 
include 'templates/header.php';
include 'templates/menu.php';
?>

    <div class="miblog">
        <main class="cursos-comenzados sombra">
            <?php 
            /////////////////// Blog ////////////////////////////////////////
            $archivoBlog = "./json/blog.json";
            $blog_json = "";
            $blog = [];
            if(file_exists($archivoBlog)){
                $blog_json = file_get_contents($archivoBlog);
            } else {
                echo 'no se encuentra el blog';
            }

            if(json_validate($blog_json)){
                $blog = json_decode($blog_json, true); // true es para que use array asociativo cuando sea posible
            }
            foreach($blog as $articulo) {
            ?>
            <article>
                <h2><?php echo $articulo['titulo']; ?></h2>
                <img src="img/<?php echo $articulo['foto']; ?>.jpeg" alt="foto <?php echo $articulo['titulo']; ?>">
                <h3><?php echo $articulo['texto']; ?></h3>
                <ul>
                    <?php 
                    /////////////////// Temario ////////////////////////////////////////
                    foreach($articulo['temario'] as $tema) {
                    ?>                    
                    <li><?php echo $tema; ?></li>
                    <?php } ?>
                </ul>
            </article>
            <?php } ?>
        </main>
    
        <aside class="objetivo sombra">
            <h2>Objetivo</h2>
            <div class="des-objetivo">
            <?php 
            /////////////////// Objetivos ////////////////////////////////////////
            $archivoObjetivos = "./json/objetivos.json";
            $objetivos_json = "";
            $objetivos = [];
            if(file_exists($archivoObjetivos)){
                $objetivos_json = file_get_contents($archivoObjetivos);
            } else {
                echo 'no se encuentra el blog';
            }

            if(json_validate($objetivos_json)){
                $objetivos = json_decode($objetivos_json, true); // true es para que use array asociativo cuando sea posible
            }
            foreach($objetivos as $objetivo) {
            ?>
                <img src="img/<?php echo $objetivo['imagen']; ?>" alt="logo <?php echo $objetivo['imagen']; ?>">
                <p><?php echo $objetivo['texto']; ?></p>
            <?php } ?>
            </div>
        </aside>

        <aside class="experiencias sombra">
            <h2>Experiencias</h2>
            <div class="arti-experiencias">
            <?php 
            /////////////////// Experiencias ////////////////////////////////////////
            $archivoExperiencias = "./json/experiencias.json";
            $experiencias_json = "";
            $experiencias = [];
            if(file_exists($archivoExperiencias)){
                $experiencias_json = file_get_contents($archivoExperiencias);
            } else {
                echo 'no se encuentra el blog';
            }

            if(json_validate($experiencias_json)){
                $experiencias = json_decode($experiencias_json, true); // true es para que use array asociativo cuando sea posible
            }
            foreach($experiencias as $experiencia) {
            ?>
                <article>
                    <h3><?php echo $experiencia['nombre']; ?></h3>
                    <p><?php echo $experiencia['texto']; ?></p>
                </article>
            <?php } ?>
            </div>
        </aside>
    </div>
    <?php include 'templates/footer.php'; ?>
