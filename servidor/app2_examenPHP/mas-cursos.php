
<?php 

    // Activamos sesiones
    session_start();
    $pagina = "mas-cursos.php";

    // Generamos clave aleatoria
    $_SESSION['k'] = bin2hex(random_bytes(32));

    include "templates/head.php";
    include "templates/header.php";
?>


<?php 
    include "templates/nav.php";
    include "templates/mas-cursos.php";

    include "templates/footer.php";
?>


