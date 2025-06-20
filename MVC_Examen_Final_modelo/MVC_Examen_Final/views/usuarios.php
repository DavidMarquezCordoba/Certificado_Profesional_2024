<div id="usuarios-fondo">
    <div id="usuarios-contenido">
        <h2>Lista de Usuarios</h2>
        <ul id="usuarios-lista">
        </ul>
    </div>
</div>

<div popover id="edita-usuario">
<div popover class="contenedor">
    <!-- <h1>Gestión de Perfil</h1> -->

    <!-- Foto de Perfil -->
    <div class="foto-perfil">
        <img id="imagen-perfil" src="" alt="Foto de perfil" title="Toca la foto para cambiarla">
        <input type="file" id="imagen-input" name="image" accept="image/*" onchange="previsualizaImagen()">
    </div>
    
    <!-- Información del Usuario -->
    <form id="formulario-perfil" action="/api/update" enctype="multipart/form-data"  method="POST" title="Para modificar el perfil hay que escribir la contraseña actual">
        <div class="formulario-grupo">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="name" value="" required>
        </div>
        <div class="formulario-grupo">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email"  name="email" value="" required autocomplete="email">
        </div>            
        <div class="formulario-grupo">
            <label for="pass-administra">Contraseña Administrador:</label>
            <div class="div-pass">
                <label id="lpass-a" for="pass-administra">&#129763;</label>
                <input type="password" id="pass-administra" name="password" required autocomplete="password" required>
            </div>
        </div>
        <div class="formulario-grupo">
            <label for="role">Tipo de acceso:</label>
            <div class="div-pass">
                <select name="role" id="role">
                    <option value="9">Administrador</option>
                    <option value="1">Usuario</option>
                    <option value="2">Almacén</option>
                    <option value="3">Recursos Humanos</option>
                    <option value="4">Atención al público</option>
                </select>
            </div>
        </div>

        <h2>Cambiar Contraseña</h2>

        <div class="formulario-grupo">
            <label for="pass-nueva">Nueva Contraseña:</label>
            <div class="div-pass">
                <label id="lpass-n" for="pass-nueva">&#129763;</label>
                <input type="password" id="pass-nueva" name="password1" required autocomplete="new-password">
            </div>
        </div>
        <div class="formulario-grupo">
            <label for="pass-confirma">Confirmar Nueva Contraseña:</label>
            <div class="div-pass">
                <label id="lpass-c" for="pass-confirma">&#129763;</label>
                <input type="password" id="pass-confirma" name="password2" required autocomplete="new-password">
            </div>
        </div>
    </form>

    <!-- <button class="boton" id="crear-pass">Crear contraseña</button>
    <button class="boton" id="bloquear-usuario">Bloquear usuario</button> -->
    <button class="boton rojo" id="eliminar-usuario">Eliminar usuario</button>
    <button class="boton" id="actualiza-perfil">Actualizar Perfil</button>
</div>
</div>