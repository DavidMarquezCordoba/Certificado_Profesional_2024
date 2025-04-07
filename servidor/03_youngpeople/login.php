<?php 
$pagina = "login.php";
include "templates/head.php";
?>

<link rel="stylesheet" href="css/loginRegistro.css">
<script defer src="js/loginRegistro.js"></script> 

<?php
include "templates/header.php";
?>

<main>
    <section id="registrarse" class="login-contenedor oculto">
        <h2>Registro</h2>
        <form action="servicios/apiRegistro.php" method="POST"> 
            <!-- action: el sitio a donde va a ir cuando le hagamos submit -->
            <input type="email" name="username" placeholder="E-mail" id="luser" required autocomplete="username">
            <div class="div-pass">
                <label id="l-lpass1" for="lpass1">&#129763;</label>
                <input type="password" name="password" placeholder="Contraseña" id="lpass1" required autocomplete="new-password">
            </div>
            <div class="div-pass">
                <label id="l-lpass2" for="lpass2">&#129763;</label>
                <input type="password" name="password2" placeholder="Repite tu contraseña" id="lpass2" required autocomplete="new-password">
            </div>
            <!-- como los name no pueden ser repetidos, le ponemos password2  -->
            <input type="hidden" name="k" id="k1" value="<?php echo $_SESSION['key']; ?>">
            <input type="submit" class="boton" value="Enviar" id="boton-registra">
        </form>
        <p>¿Tienes ya cuenta? <a href="#">Inicia Sesión</a></p>

    </section>

    <section id="loguearse" class="login-contenedor">
        <h2>Inicio de Sesión</h2>
        <form action="servicios/apiLogin.php" method="POST">
            <input type="email" name="username" placeholder="E-mail" id="ruser" required autocomplete="username">
            <div class="div-pass">
                <label id="l-rpass" for="rpass">&#129763;</label>
                <input type="password" name="password" placeholder="Contraseña" id="rpass" required autocomplete="new-password">
            </div>
            <input type="hidden" name="k" id="k2" value="<?php echo $_SESSION['key']; ?>">
            <input type="submit" class="boton" value="Enviar" id="boton-loguea">
        </form>
        <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>

    </section>

</main>



<?php 
include "templates/footer.php";
?>