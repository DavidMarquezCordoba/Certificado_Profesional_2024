<?php 
$pagina = 'nosotros.php';
include 'templates/head.php';
?>
    <link rel="preload" href="css/nosotros.css" as="style">
    <link rel="stylesheet" href="css/nosotros.css">
<?php 
include 'templates/header.php';
include 'templates/menu.php';
?> 
    <main class="contenedor">
        <h2>Nosotros</h2>
        <section class="pag-nosotros">
        <?php 
        /////////////////// Nosotros ////////////////////////////////////////
        $archivoNosotros = "./json/nosotros.json";
        $nosotros_json = "";
        $nosotros = [];
        if(file_exists($archivoNosotros)){
            $nosotros_json = file_get_contents($archivoNosotros);
        } else {
            echo 'no se encuentra nosotros';
        }

        if(json_validate($nosotros_json)){
            $nosotros = json_decode($nosotros_json, true); // true es para que use array asociativo cuando sea posible
        }
        foreach($nosotros as $departamento) { 
        ?>
            <article class="personal">
                <h3><?php echo $departamento['departamento']; ?></h3>
                <img src="img/<?php echo $departamento['foto']; ?>.jpg" alt="foto <?php echo $departamento['nombre']; ?>">
                <div class="datos">
                    <h4><?php echo $departamento['nombre']; ?></h4>
                    <p><?php echo $departamento['puesto']; ?></p>
                </div>
                <div class="micontacto">
                    <a href="tel:+34<?php echo $departamento['telefono']; ?>"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z"></path> <path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11"></path> <path d="M12 8h-6v3h6z"></path> <path d="M12 14v.01"></path> <path d="M9 14v.01"></path> <path d="M6 14v.01"></path> <path d="M12 17v.01"></path> <path d="M9 17v.01"></path> <path d="M6 17v.01"></path> </svg><?php echo $departamento['telefono']; ?></a>
                    <a href="mailto:<?php echo $departamento['email']; ?>"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path> </svg><?php echo $departamento['email']; ?></a>
                </div>
            </article>
        <?php } ?>
        </section>
    </main>

<?php include 'templates/footer.php'; ?>
