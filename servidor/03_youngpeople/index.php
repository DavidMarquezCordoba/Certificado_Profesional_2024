

<?php 
$pagina = "index.php"; //Variable local que afecta a todos los include

// Vamos llamando poco a poco a cada una de las "partes" de la web

include "templates/head.php";   //1º
include "templates/header.php"; //2º
include "templates/inicio.php"; //3º
include "templates/footer.php"; //4º
?>
