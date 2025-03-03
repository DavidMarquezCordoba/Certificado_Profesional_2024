
<?php 
// Dicha variable es global y afecta a todos los include
$pagina = "index";
// Vamos llamando poco a poco cada una de las "partes" de la web
include "templates/head.php"; //1º
include "templates/header.php"; //2º
include "templates/inicio.php"; //3º
include "templates/footer.php"; //4º
?>
