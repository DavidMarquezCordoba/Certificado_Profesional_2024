<div>
    <div id="registrarse" class="login-contenedor oculto">
        <h2>Registro</h2>
        <form action="/api/registro" method="POST">
            <input type="email" name="username" placeholder="E-mail" id="luser" required autocomplete="username">
            <div class="div-pass">
                <label id="l-lpass1" for="lpass1">&#129763;</label>
                <input type="password" name="password" placeholder="Contraseña" id="lpass1" required autocomplete="new-password">
            </div>
            <div class="div-pass">
                <label id="l-lpass2" for="lpass2">&#129763;</label>
                <input type="password" name="password2" placeholder="Repite tu contraseña" id="lpass2" required autocomplete="new-password">
            </div>
            <input type="submit" class="boton" value="Enviar" id="boton-registra">
        </form>
        <p>¿Tienes ya cuenta? <a href="#">Inicia Sesión</a></p>
    </div>

    <div id="loguearse" class="login-contenedor">
        <h2>Inicio de Sesión</h2>
        <form action="/api/login" method="POST">
            <input type="email" name="username" placeholder="E-mail" id="ruser" required autocomplete="username">
            <div class="div-pass">
                <label id="l-rpass1" for="rpass1">&#129763;</label>
                <input type="password" name="password" placeholder="Contraseña" id="rpass1" required autocomplete="new-password">
            </div>
            <input type="submit" class="boton" value="Enviar" id="boton-loguea">
        </form>
        <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
    </div>
</div>