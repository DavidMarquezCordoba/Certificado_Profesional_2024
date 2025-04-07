<?php 
session_start();
// protegemos nuestras APIs
$_SESSION['k'] = bin2hex(random_bytes(32)); // generar una key aleatoria de 64 caracteres
// echo $_SESSION['k'];
$pagina = 'mas-cursos.php';
include 'templates/head.php';
?>
    <link rel="preload" href="css/mas-cursos.css" as="style">
    <link rel="preload" href="css/modal-mas-cursos.css" as="style">
    <link rel="stylesheet" href="css/mas-cursos.css"> 
    <link rel="stylesheet" href="css/modal-mas-cursos.css">
    <script defer src="js/mas-cursos.js"></script>
    <script defer src="js/pide-cursos.js"></script>
<?php 
include 'templates/header.php';
include 'templates/menu.php';
?> 
    <main class="contenedor">
        <input type="hidden" value="<?php echo $_SESSION['k']; ?>" id="mikey">
        <h2>Otros cursos</h2>
        <div class="otros-cursos"></div>
    </main>
    <?php include 'templates/footer.php'; ?>
