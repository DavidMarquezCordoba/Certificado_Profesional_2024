

<?php 
$pagina = "index.php"; //Variable local que afecta a todos los include

// Vamos llamando poco a poco a cada una de las "partes" de la web

include "templates/head.php";   //1º
?>

<!-- Llamamos al CSS inicio.css aquí para no cargarlo en todas las páginas -->
<link rel="stylesheet" href="./css/inicio.css">

<?php
include "templates/header.php"; //2º
include "templates/inicio.php"; //3º
include "templates/footer.php"; //4º
?>
