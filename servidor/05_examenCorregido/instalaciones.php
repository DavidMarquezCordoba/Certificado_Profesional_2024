<?php 
$pagina = 'instalaciones.php';
include 'templates/head.php';
?>
    <link rel="preload" href="css/instalaciones.css" as="style">
    <link rel="stylesheet" href="css/instalaciones.css"> 
<?php 
include 'templates/header.php';
include 'templates/menu.php';
?> 

    <main class="contenedor">
        <h2>Nuestras Instalaciones</h2>
        <div class="nuestras-instalaciones">
        <?php 
        /////////////////// Instalaciones ////////////////////////////////////////
        $archivoInstalaciones = "./json/instalaciones.json";
        $instalaciones_json = "";
        $instalaciones = [];
        if(file_exists($archivoInstalaciones)){
            $instalaciones_json = file_get_contents($archivoInstalaciones);
        } else {
            echo 'no se encuentra las instalaciones';
        }

        if(json_validate($instalaciones_json)){
            $instalaciones = json_decode($instalaciones_json, true); // true es para que use array asociativo cuando sea posible
        }
        foreach($instalaciones as $instalacion) {
        ?>
            <section class="sombra">
                <h3><?php echo $instalacion['titulo']; ?></h3>
                <img src="img/<?php echo $instalacion['foto']; ?>.jpg" alt="foto <?php $instalacion['foto']; ?>">
                <p><?php echo $instalacion['texto1']; ?></p>
                <p><?php echo $instalacion['texto2']; ?></p>
                <div class="contacto">
                    <a href="<?php echo $instalacion['texto2']; ?>"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path> </svg> <?php echo $instalacion['direccion']; ?></a>
                    <a href="tel:+34<?php echo $instalacion['telefono']; ?>"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z"></path> <path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11"></path> <path d="M12 8h-6v3h6z"></path> <path d="M12 14v.01"></path> <path d="M9 14v.01"></path> <path d="M6 14v.01"></path> <path d="M12 17v.01"></path> <path d="M9 17v.01"></path> <path d="M6 17v.01"></path> </svg> <?php echo $instalacion['telefono']; ?></a>
                    <a href="mailto:<?php echo $instalacion['email']; ?>"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path> </svg><?php echo $instalacion['email']; ?></a>
                    <a target="_blank" href="<?php echo $instalacion['web']; ?>"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path> <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path> <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path> <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path> <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path> <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path> <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path> </svg> <?php echo $instalacion['web']; ?></a>
                </div>
            </section>
        <?php } ?>
        </div>
    </main>
    <?php include 'templates/footer.php'; ?>
