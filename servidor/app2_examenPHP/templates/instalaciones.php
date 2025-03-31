<!-- Preparamos el archivo json -->
<?php
    $instalaciones = json_decode(file_get_contents("json/instalaciones.json"), true);
?>

<main class="contenedor">
        <h2>Nuestras Instalaciones</h2>
        <div class="nuestras-instalaciones">
            <?php foreach ($instalaciones as $local) {?>
                <section class="sombra">
                    <h3><?php echo $local['titulo']?></h3>
                    <img src="img/<?php echo $local['foto']?>.jpg" alt="foto <?php echo $local['foto']?>">
                    <p><?php echo $local['texto1']?></p>
                    <p><?php echo $local['texto2']?></p>
                    <div class="contacto">
                        <a href="https://maps.app.goo.gl/371ErS1JA7z5XXf88"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path> </svg> <?php echo $local['direccion']?></a>
                        <a href="tel:+34672280553"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z"></path> <path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11"></path> <path d="M12 8h-6v3h6z"></path> <path d="M12 14v.01"></path> <path d="M9 14v.01"></path> <path d="M6 14v.01"></path> <path d="M12 17v.01"></path> <path d="M9 17v.01"></path> <path d="M6 17v.01"></path> </svg> <?php echo $local['telefono']?></a>
                        <a href="mailto:info@academiaepsilon.es"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path> </svg><?php echo $local['email']?></a>
                        <a target="_blank" href="https://academiaepsilon.es"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path> <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path> <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path> <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path> <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path> <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path> <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path> </svg><?php echo $local['web']?></a>
                    </div>
                </section>
                <?php }
            ?>
        </div>
    </main>