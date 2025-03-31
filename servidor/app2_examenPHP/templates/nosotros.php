<!-- Preparamos el archivo json -->
<?php
    $equipo = json_decode(file_get_contents("json/nosotros.json"), true);
?>

<main class="contenedor">
        <h2>Nosotros</h2>
        <section class="pag-nosotros">
            <?php 
                foreach($equipo as $persona){?>
                    <article class="personal">
                        <h3><?php echo $persona['departamento']?></h3>
                        <img src="../img/<?php echo  $persona['foto']?>.jpg" alt="foto academia epsilon">
                        <div class="datos">
                            <h4><?php echo $persona['nombre']?></h4>
                            <p><?php echo $persona['puesto']?></p>
                        </div>
                        <div class="micontacto">
                            <a href="tel:+34<?php echo $persona['telefono']?>"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z"></path> <path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11"></path> <path d="M12 8h-6v3h6z"></path> <path d="M12 14v.01"></path> <path d="M9 14v.01"></path> <path d="M6 14v.01"></path> <path d="M12 17v.01"></path> <path d="M9 17v.01"></path> <path d="M6 17v.01"></path> </svg><?php echo $persona['telefono']?></a>
                            <a href="mailto:<?php echo $persona['email']?>"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path> </svg><?php echo $persona['email']?></a>
                        </div>
                    </article>
                <?php }?>
        </section>
    </main>

